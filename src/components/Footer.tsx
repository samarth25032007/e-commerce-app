import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Maison</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated artisan goods for intentional living. Every piece tells a story.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {["All Products", "Ceramics", "Candles", "Textiles", "Kitchen"].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">Join our newsletter for new arrivals and exclusive offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-r-md hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Maison. All rights reserved. Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
