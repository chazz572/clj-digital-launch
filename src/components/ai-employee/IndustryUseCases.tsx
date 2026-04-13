import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Wrench, UtensilsCrossed, Dumbbell, Briefcase, ShoppingCart, Bot } from "lucide-react";

const industries = [
  {
    icon: Building2, name: "Real Estate",
    tasks: ["Respond to property inquiries instantly", "Schedule viewings automatically", "Send listing updates to buyers"],
    automation: "Auto-qualify leads based on budget, location, and timeline",
    conversation: { lead: "I'm looking for a 3-bed house in Manchester under £350k.", ai: "Great choice! I've found 7 matching properties. I've scheduled viewings for the top 3 this Saturday. Check your email for details!" },
  },
  {
    icon: Wrench, name: "Contractors",
    tasks: ["Capture job requests via form or chat", "Send quote follow-ups", "Remind customers about scheduled work"],
    automation: "Auto-assign jobs to available team members based on skill and location",
    conversation: { lead: "I need my boiler serviced ASAP.", ai: "I've booked an engineer for tomorrow between 9–11am. You'll receive a confirmation text shortly with their details." },
  },
  {
    icon: UtensilsCrossed, name: "Restaurants",
    tasks: ["Handle reservation requests", "Send booking confirmations", "Follow up for reviews after dining"],
    automation: "Auto-manage waitlist and send table-ready notifications",
    conversation: { lead: "Table for 4 this Friday at 7pm?", ai: "You're all booked! Table for 4, Friday 7pm. I'll send a reminder Thursday evening. Any dietary requirements?" },
  },
  {
    icon: Dumbbell, name: "Gyms",
    tasks: ["Respond to membership inquiries", "Send class reminders", "Follow up on trial sign-ups"],
    automation: "Auto-enrol trial members and trigger onboarding sequence",
    conversation: { lead: "Do you offer a free trial?", ai: "Yes! I've activated a 7-day free pass for you. Your welcome pack is in your inbox with class times and trainer info." },
  },
  {
    icon: Briefcase, name: "Agencies",
    tasks: ["Qualify inbound project leads", "Send proposals automatically", "Schedule discovery calls"],
    automation: "Auto-score leads and route high-intent prospects to senior team",
    conversation: { lead: "We need a rebrand for our company.", ai: "I'd love to help! Based on your brief, I've prepared an initial scope. Let me book a 30-min call to discuss — how's Thursday?" },
  },
  {
    icon: ShoppingCart, name: "E‑commerce",
    tasks: ["Handle order status inquiries", "Send abandoned cart reminders", "Process return requests"],
    automation: "Auto-trigger win-back campaigns for inactive customers",
    conversation: { lead: "Where's my order?", ai: "Your order #4821 shipped yesterday via Royal Mail. Expected delivery: Thursday. Here's your tracking link!" },
  },
];

export default function IndustryUseCases() {
  const [active, setActive] = useState(0);
  const ind = industries[active];

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Built for Every Industry</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">See how your AI Employee works across different business types.</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors ${active === i ? "border-accent bg-accent/10 text-foreground" : "border-border hover:border-accent/30 text-muted-foreground"}`}
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid md:grid-cols-2 gap-6">
            {/* Left */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)]">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><ind.icon className="w-4 h-4 text-accent" /> {ind.name}</h3>
              <div className="mb-4">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Tasks Automated</div>
                <ul className="space-y-1.5">
                  {ind.tasks.map((t) => <li key={t} className="text-sm flex items-start gap-2"><span className="text-accent mt-0.5">✦</span> {t}</li>)}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Key Automation</div>
                <p className="text-sm text-muted-foreground">{ind.automation}</p>
              </div>
            </div>

            {/* Right - conversation */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)]">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">Example Conversation</div>
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-accent text-accent-foreground rounded-xl rounded-br-sm px-3 py-2 text-sm max-w-[85%]">{ind.conversation.lead}</div>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-accent" />
                  </div>
                  <div className="bg-muted/50 border border-border rounded-xl rounded-bl-sm px-3 py-2 text-sm max-w-[85%]">{ind.conversation.ai}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
