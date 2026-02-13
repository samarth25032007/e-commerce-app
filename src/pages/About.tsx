import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">Our Story</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
          Crafted for Those Who
          <br />
          Value Simplicity
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Maison was born from a simple belief: the objects we surround ourselves with should be made with
            care, intention, and respect for the natural world. We partner with independent artisans who share
            our commitment to quality over quantity.
          </p>
          <p>
            Every piece in our collection is selected for its craftsmanship, sustainability, and timeless
            design. From hand-thrown ceramics to naturally dyed textiles, each item carries the story of the
            hands that made it.
          </p>
          <p>
            We believe in transparency. We know our makers personally, visit their workshops, and ensure
            fair compensation for their extraordinary skill. When you choose Maison, you're supporting a
            community of artisans dedicated to preserving traditional techniques.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border text-center">
          {[
            { value: "50+", label: "Artisan Partners" },
            { value: "12", label: "Countries" },
            { value: "100%", label: "Sustainable" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
