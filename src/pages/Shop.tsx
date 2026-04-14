import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";

const products = [
  {
    name: "Tailored V-Neck Blazer — Brown",
    price: "₦45,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/0b36c45ec_paigeclothing-20260413-0001.jpg",
    badge: "NEW",
    category: "Blazers",
  },
  {
    name: "Tailored V-Neck Blazer — Red",
    price: "₦45,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/dff01c40c_paigeclothing-20260413-0006.jpg",
    category: "Blazers",
  },
  {
    name: "Tailored V-Neck Blazer — Magenta",
    price: "₦38,000",
    originalPrice: "₦45,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/d9df91216_paigeclothing-20260413-0002.jpg",
    badge: "SALE",
    category: "Blazers",
  },
  {
    name: "Draped Satin Cowl Blouse — Purple",
    price: "₦28,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/86b453987_paigeclothing-20260413-0007.jpg",
    badge: "NEW",
    category: "Blouses",
  },
  {
    name: "Draped Satin Cowl Blouse — Collection",
    price: "₦28,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/43c93d376_paigeclothing-20260413-0008.jpg",
    category: "Blouses",
  },
  {
    name: "Floral Organza Maxi Dress",
    price: "₦55,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/1a1fcfe94_images6.jpeg",
    badge: "NEW",
    category: "Dresses",
  },
  {
    name: "Adire Green Embellished Kaftan",
    price: "₦35,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/f63855a79_images4.jpeg",
    category: "Traditional",
  },
  {
    name: "Traditional Agbada Set — Men's",
    price: "₦65,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/9966d245c_images5.jpeg",
    badge: "NEW",
    category: "Traditional",
  },
];

const categories = ["All", "Blazers", "Blouses", "Dresses", "Traditional"];

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/43c93d376_paigeclothing-20260413-0008.jpg"
            alt="Shop collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-primary-foreground/80 text-xs tracking-[0.3em] font-sans mb-4">CURATED EDIT</p>
          <h1 className="font-serif text-4xl lg:text-6xl text-primary-foreground">The Shop</h1>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-xs tracking-[0.2em] font-sans px-4 py-2 whitespace-nowrap transition-colors ${
                  cat === "All"
                    ? "bg-charcoal text-primary-foreground"
                    : "bg-background border border-border text-foreground hover:bg-charcoal hover:text-primary-foreground"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-10">
            <p className="font-sans text-sm text-muted-foreground">{products.length} pieces</p>
            <select className="bg-transparent border border-border px-4 py-2 text-xs tracking-[0.15em] font-sans text-foreground">
              <option>SORT BY: NEWEST</option>
              <option>PRICE: LOW TO HIGH</option>
              <option>PRICE: HIGH TO LOW</option>
            </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product, i) => (
              <a href="#" key={i} className="group">
                <div className="relative overflow-hidden mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 text-[10px] tracking-[0.15em] font-sans font-medium ${
                        product.badge === "SALE"
                          ? "bg-gold text-primary-foreground"
                          : "bg-charcoal text-primary-foreground"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={18} className="text-primary-foreground" />
                  </button>
                </div>
                <h3 className="font-sans text-xs lg:text-sm text-foreground mb-1 leading-snug">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`font-sans text-xs ${product.originalPrice ? "text-gold font-medium" : "text-muted-foreground"}`}>
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-sans text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
