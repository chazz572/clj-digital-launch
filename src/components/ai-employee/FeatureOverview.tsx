import { motion } from "framer-motion";
import { Zap, Mail, CheckSquare, Database, Calendar, MessageSquare, Clock, GitBranch } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant Lead Responses", desc: "Respond to new leads within seconds, 24/7. No more missed opportunities." },
  { icon: Mail, title: "Automated Follow‑Ups", desc: "Personalised follow-up sequences sent at the perfect time, every time." },
  { icon: CheckSquare, title: "Task Creation & Reminders", desc: "Automatically create tasks and send reminders based on lead activity." },
  { icon: Database, title: "CRM Updates", desc: "Keep your CRM perfectly updated without lifting a finger." },
  { icon: Calendar, title: "Appointment Scheduling", desc: "Let leads book meetings directly — synced with your calendar." },
  { icon: MessageSquare, title: "Multi‑Channel Messaging", desc: "Engage across email, SMS, chat, and social — all from one place." },
  { icon: Clock, title: "24/7 Availability", desc: "Your AI employee never sleeps, never takes holidays, never calls in sick." },
  { icon: GitBranch, title: "Smart Workflows", desc: "Trigger complex automations based on lead behaviour and signals." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function FeatureOverview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything Your AI Employee Can Do
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Eight core capabilities that work around the clock so you don't have to.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
