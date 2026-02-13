import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingBag, Check } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl text-foreground mb-4">Product Not Found</h1>
        <Link to="/products" className="text-primary hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="container mx-auto px-4 lg:px-8 py-12">
      {/* Back */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-square rounded-xl overflow-hidden bg-muted"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-3">{product.category}</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">{product.name}</h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.round(product.rating) ? "fill-primary text-primary" : "text-border"}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-3xl font-display font-medium text-foreground mb-8">
            ${product.price}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {product.description}
          </p>

          <button
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-sm font-medium uppercase tracking-wider rounded-md transition-all duration-300 ${
              added
                ? "bg-green-600 text-primary-foreground"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {added ? (
              <>
                <Check size={16} /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag size={16} /> Add to Cart
              </>
            )}
          </button>

          {/* Details */}
          <div className="mt-10 pt-8 border-t border-border space-y-3">
            {["Free shipping over $100", "Handcrafted with care", "30-day return policy"].map((text) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check size={14} className="text-primary" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="font-display text-2xl text-foreground mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
