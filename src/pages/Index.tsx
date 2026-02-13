import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Curated artisan goods"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80 mb-4">
              New Collection 2026
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-[1.1] mb-6">
              Living with
              <br />
              Intention
            </h1>
            <p className="text-base text-primary-foreground/80 leading-relaxed mb-8 max-w-md">
              Discover handcrafted goods made by artisans who value quality, sustainability, and timeless design.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium uppercase tracking-wider rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Shop Now
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">Shop by Category</h2>
          <p className="text-muted-foreground">Explore our curated collections</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/products?category=${cat.slug}`}
                className="block p-6 bg-card border border-border rounded-lg text-center hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
              >
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-muted-foreground">{cat.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">Featured Pieces</h2>
              <p className="text-muted-foreground">Handpicked for their exceptional craftsmanship</p>
            </motion.div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-accent/50 to-secondary p-10 md:p-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Free Shipping Over $100
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Enjoy complimentary shipping on all orders above $100. Each piece is carefully wrapped and shipped with love.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-sm font-medium uppercase tracking-wider rounded-md hover:bg-foreground/90 transition-colors"
          >
            Start Shopping <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Index;
