import { Globe, Smartphone, Cpu, Workflow, BrainCircuit, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Globe, title: "Website Design & Development", desc: "Beautiful, responsive websites that convert visitors into customers." },
  { icon: Code2, title: "Web App Development", desc: "Custom web applications with modern frameworks and clean architecture." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform mobile apps that feel native and perform great." },
  { icon: Workflow, title: "Workflow & Automation", desc: "Streamline your operations with smart automation solutions." },
  { icon: BrainCircuit, title: "AI-Powered Tools", desc: "Integrate AI into your business for smarter decisions and efficiency." },
  { icon: Cpu, title: "Custom Integrations", desc: "Connect your tools and platforms for a seamless workflow." },
];

const ServicesSection = () => (
  <section id="services" className="py-32 relative overflow-hidden">
    {/* Background decorations */}
    <div className="absolute inset-0">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />
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
          What We Offer
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Everything You Need to{" "}
          <span className="text-gradient">Go Digital</span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg">
          From websites to full-stack apps, we build solutions that grow with your business.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative p-8 rounded-2xl glass-card gradient-border cursor-default transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.15)]"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:shadow-[0_0_30px_hsl(190_90%_50%/0.2)]">
              <s.icon className="w-7 h-7 text-accent transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
