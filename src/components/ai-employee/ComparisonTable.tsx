import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Monthly Cost", trad: "$2,500–$4,000+", ai: "From $500/mo" },
  { label: "Working Hours", trad: "9am–5pm", ai: "24/7/365" },
  { label: "Training Time", trad: "2–4 weeks", ai: "48 hours" },
  { label: "Consistency", trad: "Variable", ai: "100% consistent" },
  { label: "Response Speed", trad: "Minutes to hours", ai: "Under 10 seconds" },
  { label: "Sick Days", trad: "Yes", ai: "Never" },
  { label: "Scalability", trad: "Hire more people", ai: "Instant" },
  { label: "Multi-tasking", trad: "Limited", ai: "Unlimited parallel tasks" },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Traditional Employee vs AI Employee</h2>
          <p className="text-muted-foreground">See why businesses are switching to AI-powered workers.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-border overflow-hidden shadow-[var(--card-shadow)]">
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted/30 border-b border-border">
            <div className="px-5 py-3 text-xs font-semibold text-muted-foreground" />
            <div className="px-5 py-3 text-xs font-semibold text-center text-muted-foreground">Traditional</div>
            <div className="px-5 py-3 text-xs font-semibold text-center text-accent">AI Employee</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-border" : ""}`}>
              <div className="px-5 py-3 text-sm font-medium">{row.label}</div>
              <div className="px-5 py-3 text-sm text-center text-muted-foreground">{row.trad}</div>
              <div className="px-5 py-3 text-sm text-center font-medium text-accent">{row.ai}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
