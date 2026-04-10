import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const websiteBuild = {
  name: "Website Build",
  price: "$300",
  period: "One‑Time",
  desc: "A simple, affordable entry point for small businesses that need a clean, modern, conversion‑focused website.",
  features: [
    "Modern, mobile‑optimized design",
    "Fast turnaround",
    "SEO‑ready structure",
    "Conversion‑focused layout",
    "Integrated forms, booking, or CRM",
    "Basic automations",
    "Hosting included",
    "AI‑powered enhancements available",
  ],
};

const websiteMgmt = {
  name: "Website Management",
  price: "$75",
  period: "/month",
  desc: "This plan gives businesses a premium website without the stress of maintenance. Instead of charging thousands upfront, the $75/mo model lets clients get continuous improvements, updates, and support — which keeps their site fast, secure, and always up to date.",
  features: [
    "Unlimited updates",
    "Hosting & security",
    "Speed optimization",
    "Monthly backups",
    "AI‑powered enhancements",
    "Add new pages anytime",
    "Priority support",
    "Ongoing design improvements",
    "Integration updates",
    "Form/CRM/automation maintenance",
  ],
};

const customServices = [
  {
    title: "Web App Development",
    desc: "Custom internal tools, dashboards, portals, and business systems.",
  },
  {
    title: "Mobile App Development",
    desc: "iOS + Android apps built with modern frameworks.",
  },
  {
    title: "AI‑Powered Tools & Automations",
    desc: "Instant quote systems, automated follow‑ups, AI chat assistants, job summaries, lead qualification, and workflow automation.",
  },
  {
    title: "Workflow & SOP Optimization",
    desc: "Turn messy processes into clean, automated systems.",
  },
  {
    title: "CRM & Booking System Integrations",
    desc: "Connect websites to Stripe, Square, Calendly, Jobber, Housecall Pro, GoHighLevel, and custom CRMs.",
  },
  {
    title: "Lead Capture & Reputation Systems",
    desc: "Review automation, lead funnels, and SMS/email follow‑ups.",
  },
  {
    title: "Custom Dashboards & Internal Tools",
    desc: "Inventory tracking, job tracking, employee portals, and customer portals.",
  },
];

const PricingCard = ({ plan, popular }: { plan: typeof websiteBuild; popular?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`relative p-8 rounded-2xl transition-all duration-500 ${
      popular
        ? "glass-card border-accent/30 border shadow-[0_0_40px_hsl(190_90%_50%/0.12)] scale-[1.02]"
        : "glass-card gradient-border"
    }`}
  >
    {popular && (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-accent text-accent-foreground flex items-center gap-1.5 shadow-[0_0_20px_hsl(190_90%_50%/0.3)]"
      >
        <Sparkles className="w-3 h-3" /> Most Popular
      </motion.span>
    )}
    <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
    <div className="mt-4 mb-2">
      <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
      <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-8">{plan.desc}</p>
    <ul className="space-y-3 mb-10">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-accent" />
          </div>
          {f}
        </li>
      ))}
    </ul>
    <Button className={`w-full ${popular ? "glow-button" : ""}`} variant={popular ? "hero" : "outline"} asChild>
      <a href="#contact">Get Started</a>
    </Button>
  </motion.div>
);

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
          Simple, Transparent <span className="text-gradient">Pricing</span>
        </h2>
      </motion.div>

      {/* Main pricing cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
        <PricingCard plan={websiteBuild} />
        <PricingCard plan={websiteMgmt} />
      </div>

      {/* Custom Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Custom <span className="text-gradient">Solutions</span>
        </h3>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Need something beyond a website? We build custom tools and systems tailored to your business.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {customServices.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="p-6 rounded-2xl glass-card gradient-border transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.12)]"
          >
            <h4 className="text-sm font-bold text-foreground mb-2">{s.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
            <a href="#contact" className="inline-flex items-center text-xs font-semibold text-accent hover:text-accent/80 transition-colors">
              Get a Quote <ArrowRight className="w-3 h-3 ml-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
