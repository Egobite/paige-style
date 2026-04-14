const products = [
  {
    name: "Tailored V-Neck Blazer — Brown",
    price: "₦45,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/0b36c45ec_paigeclothing-20260413-0001.jpg",
    badge: "NEW",
  },
  {
    name: "Tailored V-Neck Blazer — Red",
    price: "₦45,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/dff01c40c_paigeclothing-20260413-0006.jpg",
  },
  {
    name: "Tailored V-Neck Blazer — Magenta",
    price: "₦38,000",
    originalPrice: "₦45,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/d9df91216_paigeclothing-20260413-0002.jpg",
    badge: "SALE",
  },
  {
    name: "Draped Satin Cowl Blouse — Purple",
    price: "₦28,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/86b453987_paigeclothing-20260413-0007.jpg",
    badge: "NEW",
  },
  {
    name: "Draped Satin Cowl Blouse — Collection",
    price: "₦28,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/43c93d376_paigeclothing-20260413-0008.jpg",
  },
  {
    name: "Floral Organza Maxi Dress",
    price: "₦55,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/1a1fcfe94_images6.jpeg",
    badge: "NEW",
  },
  {
    name: "Adire Green Embellished Kaftan",
    price: "₦35,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/f63855a79_images4.jpeg",
  },
  {
    name: "Traditional Agbada Set — Men's",
    price: "₦65,000",
    image: "https://media.base44.com/images/public/user_69d5d24c3c3774f77a640c8b/9966d245c_images5.jpeg",
    badge: "NEW",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] font-sans mb-4">CURATED EDIT</p>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground">Featured Pieces</h2>
          </div>
          <a href="#" className="text-foreground text-xs tracking-[0.2em] font-sans border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
            VIEW ALL
          </a>
        </div>

        {/* Products grid */}
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

        {/* Mobile view all */}
        <div className="mt-8 text-center lg:hidden">
          <a href="#" className="text-foreground text-xs tracking-[0.2em] font-sans border-b border-foreground pb-1">
            VIEW ALL
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
