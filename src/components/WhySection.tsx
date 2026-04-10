import { motion } from "framer-motion";
import { Zap, Palette, Bot, Target, Smartphone, Search, DollarSign, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Turnaround", desc: "Websites delivered in days, not weeks." },
  { icon: Palette, title: "Modern Animated Designs", desc: "Premium visuals with smooth micro-interactions." },
  { icon: Bot, title: "AI‑Powered Systems", desc: "Smart automation that works 24/7 for your business." },
  { icon: Target, title: "Built for Conversions", desc: "Every element designed to capture leads and drive revenue." },
  { icon: Smartphone, title: "Mobile‑First", desc: "Responsive design that looks flawless on every device." },
  { icon: Search, title: "SEO‑Ready", desc: "Optimized structure and metadata from day one." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees. No surprises. Flat-rate pricing." },
  { icon: HeadphonesIcon, title: "Ongoing Support", desc: "We don't disappear after launch — we're here long-term." },
];

const WhySection = () => (
  <section id="why" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
    </div>
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          Why CJL
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Why Choose <span className="text-gradient">Us</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group p-6 rounded-2xl glass-card gradient-border text-center transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.12)]"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 border border-accent/20 group-hover:shadow-[0_0_20px_hsl(190_90%_50%/0.15)] transition-shadow duration-300">
              <r.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-2">{r.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
