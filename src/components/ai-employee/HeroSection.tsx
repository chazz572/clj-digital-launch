import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, Zap, ArrowDown } from "lucide-react";

export default function AIEmployeeHero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-accent/8 blur-[160px] hidden dark:block" />
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-accent/4 blur-[80px]" />
      </div>

      {/* Floating geometric rings */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[12%] w-[180px] h-[180px] rounded-full border border-accent/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute top-[25%] right-[8%] w-[280px] h-[280px] rounded-full border border-accent/[0.06]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[8%] w-[200px] h-[200px] rounded-full border border-accent/[0.08]"
        />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[15%] w-2 h-2 rounded-full bg-accent/20"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[20%] w-1.5 h-1.5 rounded-full bg-accent/25"
        />
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] right-[15%] w-2.5 h-2.5 rounded-full bg-accent/15"
        />
        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] left-[20%] w-1.5 h-1.5 rounded-full bg-accent/20"
        />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm"
        >
          <Bot className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold tracking-wide uppercase text-accent">AI-Powered Automation</span>
          <Zap className="w-3.5 h-3.5 text-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
        >
          Meet Your 24/7{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient">AI Employee</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Automate lead follow‑ups, tasks, scheduling, and customer conversations — instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="lg" className="glow-button text-base px-8 py-6" asChild>
            <a href="#live-demo">
              Try Live Demo
              <ArrowDown className="w-4 h-4 ml-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#wizard">Build Your AI Employee</a>
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-14 flex items-center justify-center gap-6 text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">✦ No code required</span>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <span className="flex items-center gap-1.5">✦ Setup in 48 hours</span>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <span className="flex items-center gap-1.5">✦ 24/7 availability</span>
        </motion.div>

        {/* Animated mini-preview cards floating below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 flex items-center justify-center gap-3 md:gap-5"
        >
          {[
            { label: "Leads Today", value: "12", trend: "+34%" },
            { label: "Tasks Done", value: "8", trend: "100%" },
            { label: "Response Time", value: "<10s", trend: "Instant" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="glass-card rounded-xl px-4 py-3 md:px-5 md:py-4 text-center min-w-[100px]"
            >
              <div className="text-lg md:text-xl font-bold text-foreground">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              <div className="text-[9px] font-semibold text-accent mt-0.5">{stat.trend}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
