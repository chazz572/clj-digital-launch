import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Fast turnaround — most projects in 1–3 weeks",
  "Affordable pricing — no agency markups",
  "Clean, modern designs that impress",
  "Built with scalability in mind",
  "Perfect for businesses with no website or outdated sites",
  "Ongoing support and maintenance available",
];

const WhySection = () => (
  <section id="why" className="py-24 bg-muted/50">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-sm font-semibold tracking-wider uppercase text-accent">Why Choose CLJ</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
          Built Different. Built Better.
        </h2>
        <p className="text-muted-foreground mt-4">
          We're a lean team that delivers enterprise-quality work at startup speed.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {reasons.map((r) => (
          <div key={r} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-sm font-medium text-foreground">{r}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
