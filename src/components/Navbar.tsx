import { useState } from "react";
import { Menu, X, Search, Heart, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Left nav */}
        <div className="flex items-center gap-6">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-primary-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-primary-foreground text-xs tracking-[0.2em] font-sans hover:opacity-70 transition-opacity">HOME</a>
            <a href="#" className="text-primary-foreground text-xs tracking-[0.2em] font-sans font-semibold hover:opacity-70 transition-opacity">SHOP</a>
            <a href="#" className="text-primary-foreground text-xs tracking-[0.2em] font-sans hover:opacity-70 transition-opacity">LOOKBOOK</a>
          </div>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-serif text-xl lg:text-2xl text-primary-foreground font-normal">
            Paige<em className="not-italic font-light">clothing</em>
          </h1>
        </div>

        {/* Right nav */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-primary-foreground text-xs tracking-[0.2em] font-sans hover:opacity-70 transition-opacity">ABOUT</a>
            <a href="#" className="text-primary-foreground text-xs tracking-[0.2em] font-sans hover:opacity-70 transition-opacity">CONTACT</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden lg:block text-primary-foreground hover:opacity-70 transition-opacity"><Search size={18} /></button>
            <button className="hidden lg:block text-primary-foreground hover:opacity-70 transition-opacity"><Heart size={18} /></button>
            <button className="text-primary-foreground hover:opacity-70 transition-opacity"><ShoppingBag size={18} /></button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-bg/95 backdrop-blur-sm px-6 py-8 space-y-4">
          <a href="#" className="block text-primary-foreground text-sm tracking-[0.2em] font-sans py-2">HOME</a>
          <a href="#" className="block text-primary-foreground text-sm tracking-[0.2em] font-sans py-2 font-semibold">SHOP</a>
          <a href="#" className="block text-primary-foreground text-sm tracking-[0.2em] font-sans py-2">LOOKBOOK</a>
          <a href="#" className="block text-primary-foreground text-sm tracking-[0.2em] font-sans py-2">ABOUT</a>
          <a href="#" className="block text-primary-foreground text-sm tracking-[0.2em] font-sans py-2">CONTACT</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
