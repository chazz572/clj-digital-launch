import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingCalculator() {
  const [leads, setLeads] = useState(50);
  const [tasks, setTasks] = useState(100);
  const [automations, setAutomations] = useState(5);

  const baseCost = 299;
  const cost = Math.round(baseCost + leads * 2 + tasks * 0.5 + automations * 20);
  const savedHours = Math.round(leads * 0.3 + tasks * 0.1 + automations * 2);
  const roi = Math.round((savedHours * 25) / cost * 100);

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Estimate Your Investment</h2>
          <p className="text-muted-foreground">Adjust the sliders to see your estimated monthly cost and ROI.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--card-shadow)]">
          <div className="space-y-6 mb-8">
            {[
              { label: "Leads per month", value: leads, set: setLeads, min: 10, max: 500 },
              { label: "Tasks per month", value: tasks, set: setTasks, min: 10, max: 500 },
              { label: "Automations", value: automations, set: setAutomations, min: 1, max: 20 },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{s.label}</span>
                  <span className="font-bold text-accent">{s.value}</span>
                </div>
                <input
                  type="range" min={s.min} max={s.max} value={s.value}
                  onChange={(e) => s.set(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                />
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl bg-accent/5 border border-accent/20 p-4 text-center">
              <Calculator className="w-5 h-5 text-accent mx-auto mb-1" />
              <div className="text-2xl font-bold text-foreground">${cost}</div>
              <div className="text-xs text-muted-foreground">Est. monthly cost</div>
            </div>
            <div className="rounded-xl bg-accent/5 border border-accent/20 p-4 text-center">
              <TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" />
              <div className="text-2xl font-bold text-foreground">{savedHours}hrs</div>
              <div className="text-xs text-muted-foreground">Hours saved/month</div>
            </div>
            <div className="rounded-xl bg-accent/5 border border-accent/20 p-4 text-center">
              <TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" />
              <div className="text-2xl font-bold text-foreground">{roi}%</div>
              <div className="text-xs text-muted-foreground">Estimated ROI</div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="hero" className="glow-button" asChild>
              <a href="/#contact">Book a Call to Discuss</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
