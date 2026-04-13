import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "AI Copilot", href: "#ai-copilot" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="relative pt-20 pb-10 overflow-hidden bg-primary text-primary-foreground">
    {/* Top accent line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[80px] bg-accent/5 blur-[60px]" />

    <div className="container relative z-10 max-w-6xl mx-auto">
      {/* Main footer grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-12 mb-16"
      >
        {/* Brand */}
        <div>
          <a href="#" className="group inline-flex items-center gap-0.5 mb-4">
            <span className="text-3xl font-black tracking-tighter text-gradient">CJL</span>
            <span className="text-3xl font-black text-accent" style={{ animation: "pulse-glow 2s infinite" }}>.</span>
          </a>
          <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
            Premium websites & apps built fast, built right. We turn ideas into high-performing digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/30 mb-5">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 w-fit relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-accent/50 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/30 mb-5">Get in Touch</h4>
          <div className="flex flex-col gap-4">
            <a href="mailto:chase.simpson@cjlwebsites.com" className="flex items-center gap-3 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <Mail className="w-3.5 h-3.5 text-accent" />
              </div>
              chase.simpson@cjlwebsites.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <Phone className="w-3.5 h-3.5 text-accent" />
              </div>
              Get in touch
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-primary-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/25">
          © {new Date().getFullYear()} CJL Websites. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors duration-300"
        >
          Back to top
          <div className="w-7 h-7 rounded-full border border-primary-foreground/10 flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
            <ArrowUp className="w-3 h-3" />
          </div>
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
