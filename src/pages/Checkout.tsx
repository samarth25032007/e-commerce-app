import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const shipping = totalPrice >= 100 ? 0 : 12;

  if (placed) {
    return (
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-primary" />
          </div>
          <h1 className="font-display text-4xl text-foreground mb-3">Thank You!</h1>
          <p className="text-muted-foreground mb-8">Your order has been placed successfully.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium uppercase tracking-wider rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl text-foreground mb-3">Nothing to Checkout</h1>
        <Link to="/products" className="text-primary hover:underline">Browse Products</Link>
      </section>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setPlaced(true);
  };

  return (
    <section className="container mx-auto px-4 lg:px-8 py-12">
      <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft size={14} /> Back to Cart
      </Link>

      <h1 className="font-display text-4xl text-foreground mb-10">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="font-display text-xl text-foreground mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "Email", name: "email", type: "email", full: true },
                { label: "Address", name: "address", full: true },
                { label: "City", name: "city" },
                { label: "ZIP Code", name: "zip" },
                { label: "Country", name: "country", full: true },
              ].map((field) => (
                <div key={field.name} className={field.full ? "sm:col-span-2" : ""}>
                  <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-card border border-border rounded-xl p-6">
            <h2 className="font-display text-xl text-foreground mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
                  </div>
                  <p className="text-sm font-medium">${product.price * quantity}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm border-t border-border pt-4">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span><span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between font-medium text-foreground text-base">
                <span>Total</span><span>${totalPrice + shipping}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-primary text-primary-foreground py-3.5 text-sm font-medium uppercase tracking-wider rounded-md hover:bg-primary/90 transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
