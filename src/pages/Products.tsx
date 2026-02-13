import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleCategory = (slug: string) => {
    setActiveCategory(slug);
    if (slug === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  return (
    <section className="container mx-auto px-4 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">Our Collection</h1>
        <p className="text-muted-foreground">Every piece, thoughtfully made.</p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => handleCategory("all")}
          className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full border transition-all duration-200 ${
            activeCategory === "all"
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleCategory(cat.slug)}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full border transition-all duration-200 ${
              activeCategory === cat.slug
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
      )}
    </section>
  );
};

export default Products;
