import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, Zap, ArrowDown } from "lucide-react";

export default function AIEmployeeHero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-accent/8 blur-[140px] hidden dark:block" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent/20 bg-accent/5"
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
      </div>
    </section>
  );
}
