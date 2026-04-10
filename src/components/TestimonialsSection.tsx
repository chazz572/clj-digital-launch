import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Owner, Bright Clean Co.",
    quote: "CJL built us a website that actually brings in leads. Within the first week we had three new bookings from the site alone. Couldn't be happier.",
  },
  {
    name: "David R.",
    role: "Founder, Summit HVAC",
    quote: "Fast, professional, and the AI tools they set up have saved us hours every week. Our follow-up rate went from 30% to over 80%.",
  },
];

const TestimonialsSection = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
    </div>
    <div className="container relative z-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          What Clients <span className="text-gradient">Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="p-8 rounded-2xl glass-card gradient-border transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.12)]"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div>
              <p className="text-sm font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
