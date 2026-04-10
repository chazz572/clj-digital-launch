import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "Flutter", "Node.js", "Supabase", "Stripe",
  "AWS", "Vercel", "Zapier", "Make", "OpenAI", "Microsoft Azure",
];

const TechStackStrip = () => (
  <section className="py-12 border-y border-border/30 bg-background/50 backdrop-blur-sm overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4"
      >
        {techs.map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground/50 hover:text-accent transition-colors duration-300 cursor-default"
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechStackStrip;
