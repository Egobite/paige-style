import { useState, useEffect } from "react";
import { Menu, X, Search, Heart, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const linkClass = (path: string) =>
    `text-xs tracking-[0.2em] font-sans hover:opacity-70 transition-opacity ${
      location.pathname === path ? "font-semibold" : ""
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-dark-bg/95 backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Left nav */}
        <div className="flex items-center gap-6">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-primary-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`text-primary-foreground ${linkClass("/")}`}>HOME</Link>
            <Link to="/shop" className={`text-primary-foreground ${linkClass("/shop")}`}>SHOP</Link>
            <Link to="/lookbook" className={`text-primary-foreground ${linkClass("/lookbook")}`}>LOOKBOOK</Link>
          </div>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/">
            <h1 className="font-serif text-xl lg:text-2xl text-primary-foreground font-normal">
              Paige<em className="not-italic font-light">clothing</em>
            </h1>
          </Link>
        </div>

        {/* Right nav */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/about" className={`text-primary-foreground ${linkClass("/about")}`}>ABOUT</Link>
            <Link to="/contact" className={`text-primary-foreground ${linkClass("/contact")}`}>CONTACT</Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden lg:block text-primary-foreground hover:opacity-70 transition-opacity"><Search size={18} /></button>
            <Link to="/shop" className="hidden lg:block text-primary-foreground hover:opacity-70 transition-opacity"><Heart size={18} /></Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-primary-foreground hover:opacity-70 transition-opacity"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-primary-foreground text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-bg/95 backdrop-blur-sm px-6 py-8 space-y-4">
          <Link to="/" className={`block text-primary-foreground text-sm tracking-[0.2em] font-sans py-2 ${location.pathname === "/" ? "font-semibold" : ""}`}>HOME</Link>
          <Link to="/shop" className={`block text-primary-foreground text-sm tracking-[0.2em] font-sans py-2 ${location.pathname === "/shop" ? "font-semibold" : ""}`}>SHOP</Link>
          <Link to="/lookbook" className={`block text-primary-foreground text-sm tracking-[0.2em] font-sans py-2 ${location.pathname === "/lookbook" ? "font-semibold" : ""}`}>LOOKBOOK</Link>
          <Link to="/about" className={`block text-primary-foreground text-sm tracking-[0.2em] font-sans py-2 ${location.pathname === "/about" ? "font-semibold" : ""}`}>ABOUT</Link>
          <Link to="/contact" className={`block text-primary-foreground text-sm tracking-[0.2em] font-sans py-2 ${location.pathname === "/contact" ? "font-semibold" : ""}`}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
