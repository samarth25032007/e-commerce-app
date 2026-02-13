import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">We'd Love to Hear From You</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a question about our products or a custom order? Drop us a line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: Mail, title: "Email", text: "hello@maison.co" },
              { icon: MapPin, title: "Studio", text: "123 Artisan Lane\nPortland, OR 97201" },
              { icon: Clock, title: "Hours", text: "Mon–Fri: 9am–6pm\nSat: 10am–4pm" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">Name</label>
                <input className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">Subject</label>
              <input className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
            </div>
            <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium uppercase tracking-wider rounded-md hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
