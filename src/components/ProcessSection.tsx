import { MessageSquare, PenTool, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: MessageSquare, step: "01", title: "Tell Us What You Need", desc: "Share your vision and goals. We'll discuss scope, timeline, and budget." },
  { icon: PenTool, step: "02", title: "We Design & Build", desc: "Our team crafts a beautiful, functional product with regular check-ins." },
  { icon: Rocket, step: "03", title: "You Launch with Confidence", desc: "We deploy, test, and hand off everything — ready for the world." },
];

const ProcessSection = () => (
  <section id="process" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[100px]" />
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
          Our Process
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Simple. Transparent.{" "}
          <span className="text-gradient">Effective.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-px bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30"
            style={{ transformOrigin: "left" }}
          />
        </div>

        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8 border border-accent/20 shadow-[0_0_30px_hsl(190_90%_50%/0.1)]"
            >
              <s.icon className="w-10 h-10 text-accent" />
            </motion.div>
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Step {s.step}</span>
            <h3 className="text-xl font-bold text-foreground mt-3 mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
