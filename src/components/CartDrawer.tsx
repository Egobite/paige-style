import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[60]"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <h2 className="font-serif text-lg">Your Bag</h2>
            <span className="text-xs font-sans text-muted-foreground">({totalItems})</span>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="hover:opacity-70 transition-opacity">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-muted-foreground/30 mb-4" />
              <p className="font-serif text-lg text-foreground mb-2">Your bag is empty</p>
              <p className="font-sans text-sm text-muted-foreground mb-6">
                Discover our curated collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="bg-charcoal text-primary-foreground px-8 py-3 text-xs tracking-[0.2em] font-sans hover:opacity-90 transition-opacity"
              >
                SHOP NOW
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4 border-b border-border pb-4">
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={() => setIsCartOpen(false)}
                    className="flex-shrink-0"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-24 object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm text-foreground leading-snug mb-1 truncate">
                      {item.product.name}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground mb-2">Size: {item.size}</p>
                    <p className="font-sans text-sm font-medium text-foreground">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id, item.size)}
                    className="self-start hover:opacity-70"
                  >
                    <X size={16} className="text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-foreground">Subtotal</span>
              <span className="font-sans text-base font-medium text-foreground">{formatPrice(totalPrice)}</span>
            </div>
            <p className="font-sans text-xs text-muted-foreground">Shipping calculated at checkout</p>
            <a
              href="https://wa.me/2349099998808?text=Hi!%20I%27d%20like%20to%20order%20from%20Paigeclothing"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gold text-primary-foreground text-center py-4 text-xs tracking-[0.2em] font-sans font-medium hover:bg-gold-light transition-colors"
            >
              CHECKOUT VIA WHATSAPP
            </a>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full border border-border text-foreground text-center py-3 text-xs tracking-[0.2em] font-sans hover:bg-muted transition-colors"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
