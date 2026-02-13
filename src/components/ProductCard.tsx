import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-lg mb-4 aspect-square bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-3 right-3 p-2.5 bg-background/90 backdrop-blur-sm rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-soft"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
        </button>
      </Link>

      {/* Info */}
      <Link to={`/product/${product.id}`} className="block">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-200">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-medium text-foreground">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-primary text-primary" />
            <span className="text-xs text-muted-foreground">{product.rating}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
