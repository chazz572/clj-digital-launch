const projects = [
  {
    title: "Curry Express Indian Bistro",
    desc: "A sleek restaurant website with online menu, location info, and ordering integration for a local Indian bistro.",
    tags: ["Website", "Restaurant"],
    color: "from-orange-400/20 to-red-500/20",
  },
  {
    title: "FitTrack Pro",
    desc: "A cross-platform fitness app with workout tracking, progress charts, and social features.",
    tags: ["Mobile App", "Full-Stack"],
    color: "from-blue-400/20 to-indigo-500/20",
  },
  {
    title: "InvoiceFlow",
    desc: "A web app for freelancers to create, send, and track invoices with automated reminders.",
    tags: ["Web App", "Automation"],
    color: "from-amber-400/20 to-orange-500/20",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider uppercase text-accent">Our Work</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
          Recent Projects
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          A selection of projects we've delivered for businesses like yours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-xl overflow-hidden bg-card border border-border hover:border-accent/30 transition-all duration-300"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
              <span className="text-4xl font-extrabold text-foreground/10">{p.title.charAt(0)}</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
