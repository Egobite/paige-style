import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById, products, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Heart, Minus, Plus, ArrowLeft, Truck, Store, CreditCard } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold font-sans text-sm hover:underline">
            ← Back to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize, quantity);
  };

  // Get related products (same category, different id)
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product */}
      <section className="bg-cream pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[3/4] object-cover"
              />
              {product.badge && (
                <span
                  className={`absolute top-4 left-4 px-4 py-1.5 text-[10px] tracking-[0.15em] font-sans font-medium ${
                    product.badge === "SALE"
                      ? "bg-gold text-primary-foreground"
                      : "bg-charcoal text-primary-foreground"
                  }`}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Details */}
            <div className="lg:pt-8">
              <p className="text-xs tracking-[0.2em] font-sans text-muted-foreground mb-2">
                {product.category.toUpperCase()}
              </p>
              <h1 className="font-serif text-2xl lg:text-4xl text-foreground mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <span className={`font-sans text-xl ${product.originalPrice ? "text-gold font-medium" : "text-foreground"}`}>
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="font-sans text-base text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size selector */}
              <div className="mb-6">
                <p className="font-sans text-xs tracking-[0.15em] text-foreground mb-3">SIZE</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2.5 text-xs tracking-[0.1em] font-sans border transition-colors ${
                        selectedSize === size
                          ? "bg-charcoal text-primary-foreground border-charcoal"
                          : "border-border text-foreground hover:border-charcoal"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-xs text-muted-foreground font-sans mt-2">Please select a size</p>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-sans text-xs tracking-[0.15em] text-foreground mb-3">QUANTITY</p>
                <div className="flex items-center gap-0 border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 h-10 flex items-center justify-center font-sans text-sm border-x border-border">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`flex-1 py-4 text-xs tracking-[0.2em] font-sans font-medium transition-colors ${
                    selectedSize
                      ? "bg-charcoal text-primary-foreground hover:opacity-90"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  ADD TO BAG
                </button>
                <button className="w-12 h-12 border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <Heart size={18} />
                </button>
              </div>

              {/* WhatsApp order */}
              <a
                href={`https://wa.me/2349099998808?text=Hi!%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20(${selectedSize || "size TBD"})%20-%20${formatPrice(product.price)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold text-primary-foreground text-center py-4 text-xs tracking-[0.2em] font-sans font-medium hover:bg-gold-light transition-colors mb-8"
              >
                ORDER VIA WHATSAPP
              </a>

              {/* Features */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Truck size={16} className="text-gold" />
                  <span className="font-sans text-xs text-muted-foreground">Delivery across Abuja and beyond</span>
                </div>
                <div className="flex items-center gap-3">
                  <Store size={16} className="text-gold" />
                  <span className="font-sans text-xs text-muted-foreground">In-store pickup at Wuye</span>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard size={16} className="text-gold" />
                  <span className="font-sans text-xs text-muted-foreground">Visa, Mastercard, NFC payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <Link to={`/product/${p.id}`} key={p.id} className="group">
                  <div className="relative overflow-hidden mb-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {p.badge && (
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 text-[10px] tracking-[0.15em] font-sans font-medium ${
                          p.badge === "SALE"
                            ? "bg-gold text-primary-foreground"
                            : "bg-charcoal text-primary-foreground"
                        }`}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-sans text-xs lg:text-sm text-foreground mb-1 leading-snug">{p.name}</h3>
                  <span className="font-sans text-xs text-muted-foreground">{formatPrice(p.price)}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
