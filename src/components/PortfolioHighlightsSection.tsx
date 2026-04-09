import { motion } from "framer-motion";

const projects = [
  { title: "Project One", desc: "A modern website for a local business with booking integration." },
  { title: "Project Two", desc: "An AI‑powered lead generation site for a home services company." },
  { title: "Project Three", desc: "A sleek mobile‑first site with real‑time scheduling for a wellness brand." },
];

const PortfolioHighlightsSection = () => (
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
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          Our Work
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Portfolio{" "}
          <span className="text-gradient">Highlights</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group rounded-2xl overflow-hidden glass-card gradient-border transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.12)]"
          >
            <div className="h-48 bg-accent/5 flex items-center justify-center border-b border-border/30">
              <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Image Placeholder</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioHighlightsSection;
