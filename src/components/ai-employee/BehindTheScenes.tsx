import { motion } from "framer-motion";
import { Brain, Shield, Workflow, RefreshCw, LayoutDashboard } from "lucide-react";

const items = [
  { icon: Brain, title: "AI Models", desc: "Powered by state-of-the-art language models fine-tuned for business communication, lead qualification, and task management." },
  { icon: Shield, title: "Data Security", desc: "All data is encrypted at rest and in transit. We never share your data with third parties. GDPR compliant by design." },
  { icon: Workflow, title: "Automation Engine", desc: "Custom workflow triggers fire based on lead behaviour, time delays, CRM events, and calendar availability." },
  { icon: RefreshCw, title: "Real‑Time Sync", desc: "Your dashboard updates instantly as the AI processes leads, sends messages, and completes tasks." },
  { icon: LayoutDashboard, title: "Dashboard", desc: "A clean, white-labelled control centre gives you full visibility into every action your AI Employee takes." },
];

export default function BehindTheScenes() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Behind the Scenes</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Full transparency into the technology powering your AI Employee.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3 text-accent">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
