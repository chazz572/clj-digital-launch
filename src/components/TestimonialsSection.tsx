import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "Owner, Bloom Bakery", text: "CLJ built our website in just 10 days. It looks amazing, loads fast, and our online orders went up 40%!" },
  { name: "David Park", role: "Founder, ParkFit", text: "They delivered our fitness app exactly how we envisioned it. Professional, fast, and easy to work with." },
  { name: "Maria Gonzalez", role: "CEO, BrightPath Consulting", text: "Our old site was embarrassing. CLJ gave us a clean, modern presence that actually wins clients." },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider uppercase text-accent">Testimonials</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-6 rounded-xl bg-card border border-border"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="text-sm font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
