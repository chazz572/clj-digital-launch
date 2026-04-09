import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter Website",
    price: "Starting at $200",
    timeline: "1–2 days",
    features: ["Up to 5 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "1 round of revisions"],
    popular: false,
  },
  {
    name: "Business Website",
    price: "Starting at $600",
    timeline: "2–3 days",
    features: ["Up to 10 pages", "Custom design", "CMS integration", "Advanced SEO", "3 rounds of revisions", "Analytics setup"],
    popular: true,
  },
  {
    name: "Custom App",
    price: "Let's Talk",
    timeline: "Reach out and let us know what you need",
    features: ["Full-stack development", "Custom UI/UX design", "API integrations", "User authentication", "Ongoing support", "Unlimited revisions"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/3 rounded-full blur-[120px]" />
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
          Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Simple, Transparent{" "}
          <span className="text-gradient">Pricing</span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg">
          No hidden fees. No surprise invoices. Just great work at a fair price.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`relative p-8 rounded-2xl transition-all duration-500 ${
              p.popular
                ? "glass-card border-accent/30 border shadow-[0_0_40px_hsl(190_90%_50%/0.12)] scale-[1.02]"
                : "glass-card gradient-border"
            }`}
          >
            {p.popular && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-accent text-accent-foreground flex items-center gap-1.5 shadow-[0_0_20px_hsl(190_90%_50%/0.3)]"
              >
                <Sparkles className="w-3 h-3" /> Most Popular
              </motion.span>
            )}
            <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
            <div className="mt-6 mb-2">
              <span className="text-3xl font-extrabold text-foreground">{p.price}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-8">Estimated: {p.timeline}</p>

            <ul className="space-y-4 mb-10">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <Button
              className={`w-full ${p.popular ? "glow-button" : ""}`}
              variant={p.popular ? "hero" : "outline"}
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
