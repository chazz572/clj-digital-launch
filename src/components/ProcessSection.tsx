import { motion } from "framer-motion";
import { Phone, Paintbrush, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  { icon: Phone, num: "01", title: "Discovery Call", desc: "We learn about your business, goals, and vision." },
  { icon: Paintbrush, num: "02", title: "Design & Build", desc: "We design and develop your site with premium quality." },
  { icon: Rocket, num: "03", title: "Launch & Optimize", desc: "We launch your site and fine-tune for performance." },
  { icon: HeadphonesIcon, num: "04", title: "Ongoing Support", desc: "Continuous updates, improvements, and support." },
];

const ProcessSection = () => (
  <section id="process" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
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
          Process
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          How We <span className="text-gradient">Work</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent hidden sm:block" />
        <div className="space-y-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-6 items-start"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 shadow-[0_0_20px_hsl(190_90%_50%/0.1)] relative z-10"
              >
                <s.icon className="w-6 h-6 text-accent" />
              </motion.div>
              <div className="pt-2">
                <span className="text-xs font-bold text-accent tracking-wider">{s.num}</span>
                <h3 className="text-lg font-bold text-foreground mt-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
