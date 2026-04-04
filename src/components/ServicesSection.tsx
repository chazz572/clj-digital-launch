import { Globe, Smartphone, Cpu, Workflow, BrainCircuit, Code2 } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Design & Development", desc: "Beautiful, responsive websites that convert visitors into customers." },
  { icon: Code2, title: "Web App Development", desc: "Custom web applications with modern frameworks and clean architecture." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform mobile apps that feel native and perform great." },
  { icon: Workflow, title: "Workflow & Automation", desc: "Streamline your operations with smart automation solutions." },
  { icon: BrainCircuit, title: "AI-Powered Tools", desc: "Integrate AI into your business for smarter decisions and efficiency." },
  { icon: Cpu, title: "Custom Integrations", desc: "Connect your tools and platforms for a seamless workflow." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider uppercase text-accent">What We Offer</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
          Everything You Need to Go Digital
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          From websites to full-stack apps, we build solutions that grow with your business.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <s.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
