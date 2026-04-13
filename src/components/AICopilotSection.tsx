import { motion } from "framer-motion";
import {
  MessageSquare, FileText, Mail, Search, UserPlus, Repeat, Headphones, Clock,
  FileCheck, ScrollText, ClipboardList, MessageCircle, Package, DollarSign, BookOpen, File,
  Bot, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: MessageSquare, text: "Answers internal questions instantly" },
  { icon: FileText, text: "Summarizes long documents" },
  { icon: Mail, text: "Drafts emails, quotes, and responses" },
  { icon: Search, text: "Searches your entire knowledge base in seconds" },
  { icon: UserPlus, text: "Helps onboard new employees" },
  { icon: Repeat, text: "Automates repetitive tasks" },
  { icon: Headphones, text: "Provides customer support answers" },
  { icon: Clock, text: "Works 24/7 without breaks" },
];

const trainingData = [
  { icon: ScrollText, text: "SOPs and policies" },
  { icon: FileCheck, text: "Contracts and agreements" },
  { icon: ClipboardList, text: "Job notes and service details" },
  { icon: MessageCircle, text: "Customer messages" },
  { icon: Package, text: "Product and service information" },
  { icon: DollarSign, text: "Pricing sheets" },
  { icon: BookOpen, text: "Training documents" },
  { icon: File, text: "PDFs, Word docs, spreadsheets, and more" },
];

const AICopilotSection = () => (
  <section id="ai-copilot" className="py-32 relative overflow-hidden">
    {/* Background accents */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[140px]" />
    </div>

    <div className="container relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          AI‑Powered
        </span>
        <div className="flex items-center justify-center gap-3 mt-4 mb-6">
          <Bot className="w-8 h-8 text-accent hidden sm:block" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            AI Copilot for Your <span className="text-gradient">Business</span>
          </h2>
        </div>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
          A private, secure AI assistant trained on your documents, processes, and data.
        </p>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card rounded-2xl p-8 sm:p-10 mb-12"
      >
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Your business has knowledge scattered across PDFs, emails, job notes, policies, and employee memory. Our AI Copilot organizes all of it into one intelligent assistant that works 24/7. It learns your workflows, your language, and your operations — giving your team instant answers, faster onboarding, and automated support.
        </p>
      </motion.div>

      {/* Features + Training Data Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            What It <span className="text-gradient">Does</span>
          </h3>
          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_16px_hsl(190_90%_50%/0.15)] transition-shadow duration-300">
                  <f.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm sm:text-base text-foreground/90 pt-1.5">{f.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Data */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Trained on <span className="text-gradient">Your</span> Data
          </h3>
          <div className="space-y-4">
            {trainingData.map((t, i) => (
              <motion.div
                key={t.text}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.04 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_16px_hsl(190_90%_50%/0.15)] transition-shadow duration-300">
                  <t.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm sm:text-base text-foreground/90 pt-1.5">{t.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Pricing + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="glass-card gradient-border rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
          AI Copilot <span className="text-gradient">Pricing</span>
        </h3>
        <p className="text-sm text-muted-foreground mb-8">Flexible plans based on your business needs</p>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-5 h-5 text-accent" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">One‑Time Setup</p>
            <p className="text-3xl sm:text-4xl font-extrabold text-foreground leading-none">
              $300<span className="text-lg font-semibold text-muted-foreground">–</span>$1k
            </p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Based on document volume<br />& complexity</p>
          </div>
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
              <Repeat className="w-5 h-5 text-accent" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Monthly Hosting</p>
            <p className="text-3xl sm:text-4xl font-extrabold text-foreground leading-none">
              $50<span className="text-lg font-semibold text-muted-foreground">–</span>$200
              <span className="text-base font-semibold text-muted-foreground">/mo</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Includes hosting, updates<br />& ongoing training</p>
          </div>
        </div>

        <Button
          variant="hero"
          size="lg"
          className="rounded-full px-10 text-base group"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get Your AI Copilot
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default AICopilotSection;
