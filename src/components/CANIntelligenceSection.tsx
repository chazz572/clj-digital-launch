import { motion } from "framer-motion";
import {
  FileText, Wrench, Code2, Car, FileCode2, Activity,
  UserCheck, LineChart, ArrowRight, Upload,
  Cpu, Zap, Truck, GraduationCap, Hammer,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: FileText, title: "Plain-English Summaries", desc: "Vehicle behavior translated into clear, human-readable reports." },
  { icon: Wrench, title: "AI Mechanic Mode", desc: "Fault clues, repair suggestions, and diagnostic shortcuts." },
  { icon: Code2, title: "Reverse-Engineer Mode", desc: "Signal naming, byte decoding, and protocol exploration." },
  { icon: Car, title: "Automatic Vehicle ID", desc: "Detect make, model, and platform from raw bus traffic." },
  { icon: FileCode2, title: "Partial DBC Generation", desc: "Auto-generated DBC files from observed signals." },
  { icon: Activity, title: "Timing & Anomaly Detection", desc: "Catch jitter, dropouts, and abnormal module behavior." },
  { icon: UserCheck, title: "Driver Behavior Clues", desc: "Event timelines that reveal real-world driving patterns." },
  { icon: LineChart, title: "Pro Visualizations", desc: "Multi-signal overlays, replay, and interactive charts." },
];

const audiences = [
  { icon: Hammer, label: "Mechanics & Repair Shops" },
  { icon: Cpu, label: "ECU Tuners & Performance" },
  { icon: Zap, label: "EV Hackers & Hobbyists" },
  { icon: Truck, label: "Fleet & Telematics Teams" },
  { icon: GraduationCap, label: "Engineers & Researchers" },
];

const CANIntelligenceSection = () => (
  <section id="can-intelligence" className="py-32 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] hidden dark:block" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px]" />
    </div>

    <div className="container relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          Flagship Product
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-foreground mt-4">
          CJL <span className="text-gradient">CAN Intelligence</span> Platform
        </h2>
        <p className="text-lg sm:text-xl text-foreground/80 mt-6 font-medium">
          Turn Raw CAN Logs Into Real Diagnostics, Insights & Reverse-Engineering Clues
        </p>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Upload any CAN log and instantly get professional-grade analysis, visualizations, and AI-powered diagnostics.
        </p>
      </motion.div>

      {/* Feature grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-24">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative p-6 rounded-2xl glass-card gradient-border transition-shadow duration-500 hover:shadow-[var(--card-shadow-hover)]"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-4 group-hover:shadow-[0_0_20px_hsl(199_89%_48%/0.15)] transition-shadow duration-300">
              <f.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* What it does */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-24 p-8 sm:p-12 rounded-3xl glass-card gradient-border text-center"
      >
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          What It Does
        </h3>
        <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
          This platform transforms raw CAN bus data into clear, actionable intelligence.
          It reconstructs vehicle behavior, detects abnormal modules, identifies hidden signals,
          and produces reports <span className="text-gradient font-semibold">anyone can understand</span>.
        </p>
      </motion.div>

      {/* Who it's for */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-24"
      >
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-accent text-center mb-8">
          Who It's For
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl glass-card border border-accent/10 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                <a.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xs font-semibold text-foreground leading-tight">{a.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center p-10 sm:p-14 rounded-3xl glass-card gradient-border relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
            Try the <span className="text-gradient">CAN Intelligence Platform</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Drop in a log file. Get diagnostics, signal maps, and AI insights in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" className="glow-button" asChild>
              <a href="#contact">
                <Upload className="w-4 h-4" />
                Analyze a CAN Log
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">
                View Platform Features
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CANIntelligenceSection;
