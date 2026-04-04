import { MessageSquare, PenTool, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Tell Us What You Need", desc: "Share your vision and goals. We'll discuss scope, timeline, and budget." },
  { icon: PenTool, step: "02", title: "We Design & Build", desc: "Our team crafts a beautiful, functional product with regular check-ins." },
  { icon: Rocket, step: "03", title: "You Launch with Confidence", desc: "We deploy, test, and hand off everything — ready for the world." },
];

const ProcessSection = () => (
  <section id="process" className="py-24 bg-muted/50">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider uppercase text-accent">Our Process</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
          Simple. Transparent. Effective.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.step} className="relative text-center">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
            )}
            <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <s.icon className="w-8 h-8 text-accent" />
            </div>
            <span className="text-xs font-bold tracking-wider text-accent uppercase">Step {s.step}</span>
            <h3 className="text-lg font-bold text-foreground mt-2 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
