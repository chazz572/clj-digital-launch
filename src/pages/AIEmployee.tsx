import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Mail, Brain, GitBranch, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Users,
    title: "Lead Management",
    desc: "Automatically capture, score, and organise inbound leads from every channel — forms, email, chat, and more.",
  },
  {
    icon: Mail,
    title: "Automated Follow‑Ups",
    desc: "Never miss a lead again. Your AI employee sends timely, personalised follow‑up emails on autopilot.",
  },
  {
    icon: Brain,
    title: "Smart Task Assistant",
    desc: "Delegate repetitive tasks to your AI worker — from CRM updates to report generation and scheduling.",
  },
  {
    icon: GitBranch,
    title: "Pipeline Tracking",
    desc: "Visualise your entire sales pipeline in real time with automatic stage progression and deal forecasting.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat",
    desc: "Chat with your AI employee to get instant summaries, insights, and actions across your business data.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function AIEmployee() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute inset-0 pointer-events-none hidden dark:block">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase border border-accent/30 text-accent bg-accent/5"
          >
            ✦ AI‑Powered Automation ✦
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.02em] mb-5"
          >
            Meet Your{" "}
            <span className="text-gradient">AI Employee</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
          >
            A fully automated digital worker that handles leads, tasks,
            follow‑ups, and pipeline management for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="lg" className="glow-button" asChild>
              <a href="#dashboard-preview">Open Dashboard Sample</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/#contact">Get Started</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything Your AI Employee Can Do
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Five core capabilities that work 24/7 so you don't have to.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-lg hover:border-accent/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dashboard Preview ── */}
      <section id="dashboard-preview" className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See It in Action
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore a live sample of your AI Employee dashboard below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://ai-s-f9d89.web.app"
              style={{ width: "100%", height: "80vh", border: "none" }}
              title="AI Employee Dashboard Preview"
            />
          </motion.div>
        </div>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-accent/20 bg-accent/5 p-10 md:p-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Add an AI Employee to Your Business?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let us build, deploy, and manage your AI worker — tailored to your exact workflows.
            </p>
            <Button variant="hero" size="lg" className="glow-button" asChild>
              <a href="/#contact">Start Your Project</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
