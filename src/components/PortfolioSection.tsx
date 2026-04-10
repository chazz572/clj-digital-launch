import { motion } from "framer-motion";

const projects = [
  { title: "Curry Express Indian Bistro", desc: "A sleek restaurant website with online menu, location info, and ordering integration.", tag: "Website" },
  { title: "FitTrack Pro", desc: "A cross-platform fitness app with workout tracking, progress charts, and social features.", tag: "Mobile App" },
  { title: "InvoiceFlow", desc: "A web app for freelancers to create, send, and track invoices with automated reminders.", tag: "Web App" },
  { title: "HomeServ AI", desc: "AI-powered lead generation and booking system for a home services company.", tag: "AI Automation" },
  { title: "Wellness Hub", desc: "A mobile-first site with real-time scheduling and client portal for a wellness brand.", tag: "Website" },
  { title: "FleetOps Dashboard", desc: "Internal dashboard for fleet tracking, job assignments, and real-time driver management.", tag: "Dashboard" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[100px]" />
    </div>
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Recent <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group rounded-2xl overflow-hidden glass-card gradient-border transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.12)]"
          >
            <div className="h-48 bg-accent/5 flex items-center justify-center border-b border-border/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 group-hover:from-accent/10 group-hover:to-accent/20 transition-all duration-500" />
              <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase relative z-10">Preview Coming Soon</span>
            </div>
            <div className="p-6">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-accent/10 text-accent mb-3">{p.tag}</span>
              <h3 className="text-base font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
