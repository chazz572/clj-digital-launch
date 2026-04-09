import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Rajesh Patel", role: "Owner, Indian Restaurant", text: "CJL built our restaurant website in just one day. It looks incredible, customers love the online menu, and our takeout orders have doubled since launch!" },
  { name: "Lyss", role: "Owner, LashedByLyss", text: "CJL built a beautiful website for my lash business. It's clean, easy to navigate, and my clients love being able to book directly from the site!" },
  { name: "Maria Gonzalez", role: "CEO, Consulting Firm", text: "Our old site was embarrassing. CJL gave us a clean, modern presence that actually wins clients." },
];

const TestimonialsSection = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[100px]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />
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
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          What Our Clients{" "}
          <span className="text-gradient">Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative p-8 rounded-2xl glass-card gradient-border transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.12)]"
          >
            {/* Quote mark */}
            <span className="absolute top-4 right-6 text-6xl font-serif text-accent/10 leading-none">"</span>

            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-sm font-bold text-accent">{t.name[0]}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
