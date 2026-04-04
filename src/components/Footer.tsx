const Footer = () => (
  <footer className="py-12 bg-primary text-primary-foreground">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">CJL</span><span className="text-2xl font-black text-accent animate-pulse">.</span>
          <p className="text-sm text-primary-foreground/60 mt-1">Websites & apps built fast, built right.</p>
        </div>
        <div className="flex gap-6 text-sm text-primary-foreground/60">
          <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
          <a href="#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} CLJ. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
