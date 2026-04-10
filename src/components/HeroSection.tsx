import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="hero-bg relative overflow-hidden min-h-[100vh] flex items-center">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[100px] float-slow" />
      <div className="absolute bottom-[-100px] -left-20 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[80px] float-medium" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[60px] float-fast" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full border border-accent/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full border border-accent/5"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full border border-accent/8"
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(190 90% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(190 90% 50%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
    </div>

    <div className="container relative z-10 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-5 py-2 mb-8 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm">
            ✦ Web & App Development Studio ✦
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-primary-foreground leading-[1.08] mb-8"
        >
          <span className="block">Websites & Apps</span>
          <span className="block mt-1 sm:mt-2">
            Built{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Fast</span>
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-accent to-accent/40 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
            <span className="text-primary-foreground/40">.</span> Built{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Right</span>
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-accent/40 to-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
            <span className="text-gradient text-5xl sm:text-6xl lg:text-8xl leading-none">.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-primary-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Premium design, powerful systems, and AI‑powered automation for businesses that want to grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="glow-button text-base px-8 py-6 h-auto" asChild>
            <a href="#contact">
              Get Started <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6 h-auto backdrop-blur-sm" asChild>
            <a href="#pricing">
              View Pricing
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-primary-foreground/30 text-xs font-medium tracking-wider uppercase"
        >
          {["Fast Delivery", "Affordable", "Modern Tech"].map((text) => (
            <div key={text} className="flex flex-col items-center gap-1">
              <span className="text-accent text-sm">✦</span>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <ChevronDown className="w-6 h-6 text-primary-foreground/20" />
    </motion.div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
