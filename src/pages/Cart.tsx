import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <ShoppingBag size={48} className="mx-auto text-muted-foreground/40 mb-6" strokeWidth={1} />
          <h1 className="font-display text-3xl text-foreground mb-3">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Discover our curated collection of artisan goods.</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium uppercase tracking-wider rounded-md hover:bg-primary/90 transition-colors"
          >
            Start Shopping
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 lg:px-8 py-12">
      <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft size={14} /> Continue Shopping
      </Link>

      <h1 className="font-display text-4xl text-foreground mb-10">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Items */}
        <div className="lg:col-span-2 space-y-1">
          <AnimatePresence>
            {items.map(({ product, quantity }) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="flex gap-5 py-6 border-b border-border"
              >
                <Link to={`/product/${product.id}`} className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <div>
                      <Link to={`/product/${product.id}`} className="font-display text-lg text-foreground hover:text-primary transition-colors">
                        {product.name}
                      </Link>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{product.category}</p>
                    </div>
                    <p className="font-medium text-foreground">${product.price * quantity}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-border rounded-md">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="p-2 hover:bg-muted transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 text-sm font-medium">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="p-2 hover:bg-muted transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-card border border-border rounded-xl p-6">
            <h2 className="font-display text-xl text-foreground mb-6">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>{totalPrice >= 100 ? "Free" : "$12"}</span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between font-medium text-foreground text-base">
                <span>Total</span>
                <span>${totalPrice >= 100 ? totalPrice : totalPrice + 12}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-6 w-full inline-flex items-center justify-center bg-primary text-primary-foreground py-3.5 text-sm font-medium uppercase tracking-wider rounded-md hover:bg-primary/90 transition-colors"
            >
              Proceed to Checkout
            </Link>
            {totalPrice < 100 && (
              <p className="mt-3 text-xs text-center text-muted-foreground">
                Add ${100 - totalPrice} more for free shipping
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
