import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  "Fast turnaround",
  "AI‑powered tools included",
  "Modern animated designs",
  "Built for conversions",
  "Mobile‑first",
  "SEO‑ready",
  "Affordable monthly plans",
];

const WhySection = () => (
  <section id="why" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[120px]" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          Why Choose Us
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Built Different.{" "}
          <span className="text-gradient">Built Better.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="flex items-start gap-4 p-5 rounded-xl glass-card gradient-border transition-shadow duration-300 hover:shadow-[0_10px_40px_-10px_hsl(190_90%_50%/0.1)]"
          >
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-sm font-medium text-foreground">{r}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
