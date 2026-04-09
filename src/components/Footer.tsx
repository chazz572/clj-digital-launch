import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(215 70% 10%) 0%, hsl(220 60% 8%) 100%)" }}>
    {/* Subtle glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[60px] bg-accent/5 blur-[40px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div>
          <a href="#" className="group inline-flex items-center gap-0.5">
            <span className="text-3xl font-black tracking-tighter text-gradient">CJL</span>
            <span className="text-3xl font-black text-accent" style={{ animation: "pulse-glow 2s infinite" }}>.</span>
          </a>
          <p className="text-sm text-primary-foreground/40 mt-2">Websites & apps built fast, built right.</p>
        </div>
        <div className="flex gap-8 text-sm">
          {["Services", "Pricing", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent/50 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/5 text-center text-xs text-primary-foreground/25">
        © {new Date().getFullYear()} CJL. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
