import { motion } from "framer-motion";

const FounderSection = () => (
  <section id="founder" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
    </div>
    <div className="container relative z-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          About
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          About the <span className="text-gradient">Founder</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-2xl glass-card gradient-border"
      >
        <div className="w-40 h-40 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 shadow-[0_0_30px_hsl(190_90%_50%/0.1)]">
          <span className="text-5xl font-black text-accent">C</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">Chase Simpson</h3>
          <span className="text-sm text-accent font-semibold">Founder, CJL</span>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            I started CJL to help small businesses get access to the same premium digital tools that big companies use — without the big price tag. We build fast, modern, AI-powered websites and apps that actually drive results. No fluff, no filler — just clean design and systems that work.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FounderSection;
