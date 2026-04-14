import { Link } from "react-router-dom";
import { products, formatPrice } from "@/data/products";

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
          <Link to="/shop" className="text-foreground text-xs tracking-[0.2em] font-sans border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
            VIEW ALL
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group">
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
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="font-sans text-xs text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 text-center lg:hidden">
          <Link to="/shop" className="text-foreground text-xs tracking-[0.2em] font-sans border-b border-foreground pb-1">
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
