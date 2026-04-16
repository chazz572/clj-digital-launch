import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, AppWindow, Smartphone, Eye } from "lucide-react";
import { hasPreview, ServicePreviewModal } from "./service-previews/ServicePreviewWrapper";

const items = [
  { icon: Globe, title: "Website Design & Development", desc: "Custom, conversion-focused websites built with modern frameworks and premium design." },
  { icon: AppWindow, title: "Web App Development", desc: "Full-stack web applications with real-time data, user auth, and scalable architecture." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform iOS and Android apps built with Flutter and React Native." },
];

const Card = ({ s, i }: { s: typeof items[0]; i: number }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const interactive = hasPreview(s.title);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: i * 0.08 }}
        whileHover={{ y: -6, scale: interactive ? 1.03 : 1, transition: { duration: 0.3 } }}
        className={`group relative p-8 rounded-2xl glass-card gradient-border transition-shadow duration-500 ${
          interactive ? "cursor-pointer" : ""
        } hover:shadow-[var(--card-shadow-hover)]`}
        onClick={() => interactive && setModalOpen(true)}
      >
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:shadow-[0_0_20px_hsl(199_89%_48%/0.15)] transition-shadow duration-300">
            <s.icon className="w-6 h-6 text-accent" />
          </div>
          {interactive && (
            <div className="w-6 h-6 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Eye className="w-3 h-3 text-accent" />
            </div>
          )}
        </div>
        <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        {interactive && (
          <div className="mt-3 text-[11px] font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to preview →
          </div>
        )}
      </motion.div>

      {interactive && (
        <ServicePreviewModal title={s.title} open={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

const WebsitesAndAppsSection = () => (
  <section id="websites-apps" className="py-32 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
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
          Websites & Apps
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Sites & Apps That <span className="text-gradient">Convert</span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg">
          Custom-built websites, web apps, and mobile apps engineered for performance and growth.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((s, i) => <Card key={s.title} s={s} i={i} />)}
      </div>
    </div>
  </section>
);

export default WebsitesAndAppsSection;
