import { motion } from "framer-motion";

const FounderSection = () => (
  <section id="founder" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
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
          About
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          About the{" "}
          <span className="text-gradient">Founder</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10 p-8 rounded-2xl glass-card gradient-border"
      >
        <div className="w-40 h-40 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Photo</span>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-foreground mb-1">Founder Name</h3>
          <p className="text-sm text-accent font-semibold mb-4">Founder & Lead Developer</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A short bio about the founder goes here. Share your story, your mission, and why you started CJL. This is your space to connect with potential clients on a personal level.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FounderSection;
