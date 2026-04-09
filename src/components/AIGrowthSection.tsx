import { motion } from "framer-motion";
import { Bot, CalendarCheck, Mail, Star, FileText, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const systems = [
  { icon: Zap, label: "AI Instant Quote Engine", desc: "Get a price in 30 seconds" },
  { icon: Bot, label: "Smart AI Assistant", desc: "Answers questions & books jobs 24/7" },
  { icon: CalendarCheck, label: "Online Booking", desc: "Real‑time scheduling with reminders" },
  { icon: Mail, label: "AI Follow‑Up Engine", desc: "Automated texts & emails that close leads" },
  { icon: Star, label: "Reputation Booster", desc: "More 5‑star reviews on autopilot" },
  { icon: FileText, label: "Smart Intake Forms", desc: "Photo uploads, conditional logic, higher conversions" },
];

const AIGrowthSection = () => (
  <section id="ai-growth" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[140px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
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
          Automation Suite
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          AI‑Powered{" "}
          <span className="text-gradient">Growth Systems</span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          Your website shouldn't just look good — it should generate leads, close jobs, and automate your business. Our AI‑powered systems work together to capture customers instantly, follow up automatically, and turn every visitor into a paying client.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {systems.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group p-6 rounded-2xl glass-card gradient-border transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.15)]"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all duration-300 group-hover:shadow-[0_0_25px_hsl(190_90%_50%/0.2)]">
              <s.icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1">{s.label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-14"
      >
        <p className="text-lg font-semibold text-foreground mb-8">
          More leads. More booked jobs. More revenue —{" "}
          <span className="text-gradient">automatically.</span>
        </p>
        <Button variant="hero" size="lg" className="glow-button text-base px-8 py-6 h-auto" asChild>
          <a href="#contact">
            See How It Works <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default AIGrowthSection;
