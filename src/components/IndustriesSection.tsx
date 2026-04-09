import { motion } from "framer-motion";
import { Home, Wrench, UtensilsCrossed, Building2, HeartPulse, ShoppingBag, Car, SprayCan } from "lucide-react";

const industries = [
  { icon: Home, label: "Home Services" },
  { icon: Wrench, label: "Trades" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Building2, label: "Real Estate" },
  { icon: HeartPulse, label: "Medical & Wellness" },
  { icon: ShoppingBag, label: "Local Retail" },
  { icon: Car, label: "Automotive" },
  { icon: SprayCan, label: "Cleaning & Maintenance" },
];

const IndustriesSection = () => (
  <section id="industries" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
    </div>
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          Industries
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Industries We{" "}
          <span className="text-gradient">Serve</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl glass-card gradient-border transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.12)]"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:shadow-[0_0_25px_hsl(190_90%_50%/0.2)]">
              <ind.icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-sm font-semibold text-foreground text-center">{ind.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
