import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why CJL", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "AI Employee", href: "/ai-employee" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const resolveHref = (href: string) => {
    if (href.startsWith("#") && !isHome) return `/${href}`;
    return href;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-accent/10 shadow-[0_4px_30px_-10px_hsl(190_90%_50%/0.15)]"
          : "backdrop-blur-md border-b border-transparent"
      }`}
      style={{ backgroundColor: scrolled ? "hsla(215, 70%, 14%, 0.85)" : "transparent" }}
    >
      <div className={`container flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14" : "h-18 py-5"}`}>
        <a href="/" className="group flex items-center gap-0.5">
          <span className="text-2xl font-black tracking-tighter text-gradient drop-shadow-sm transition-all duration-300 group-hover:tracking-normal">
            CJL
          </span>
          <span className="text-2xl font-black text-accent" style={{ animation: "pulse-glow 2s infinite" }}>.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                to={l.href}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            )
          )}
          <ThemeToggle />
          <Button variant="hero" size="sm" className="glow-button" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-xl border-b border-accent/10 px-6 pb-6 space-y-4 overflow-hidden"
            style={{ backgroundColor: "hsla(215, 70%, 12%, 0.97)" }}
          >
            {navLinks.map((l, i) =>
              l.href.startsWith("/") ? (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </motion.a>
              )
            )}
            <Button size="sm" variant="hero" className="w-full glow-button" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Get a Quote</a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
