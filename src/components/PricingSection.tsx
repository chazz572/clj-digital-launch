import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
    timeline: "10–14 days",
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
  <section id="pricing" className="py-24 bg-muted/50">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider uppercase text-accent">Pricing</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          No hidden fees. No surprise invoices. Just great work at a fair price.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative p-8 rounded-xl bg-card border transition-all duration-300 ${
              p.popular ? "border-accent shadow-lg scale-[1.02]" : "border-border"
            }`}
            style={{ boxShadow: p.popular ? undefined : "var(--card-shadow)" }}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-accent text-accent-foreground">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
            <div className="mt-4 mb-1">
              <span className="text-3xl font-extrabold text-foreground">{p.price}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Estimated: {p.timeline}</p>

            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Button className="w-full" variant={p.popular ? "default" : "outline"} asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
