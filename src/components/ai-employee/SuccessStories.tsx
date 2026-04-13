import { motion } from "framer-motion";
import { Quote, TrendingUp, Clock, Users } from "lucide-react";

const stories = [
  {
    company: "Premier Properties",
    industry: "Real Estate",
    problem: "Losing 60% of web leads due to slow response times. Agents couldn't follow up consistently.",
    solution: "Deployed an AI Employee to instantly respond to all inquiries, qualify leads, and book viewings automatically.",
    results: [
      { icon: TrendingUp, label: "Lead conversion", value: "+180%" },
      { icon: Clock, label: "Response time", value: "<10 sec" },
      { icon: Users, label: "Viewings booked/mo", value: "45+" },
    ],
    quote: "Our AI Employee paid for itself in the first week. We went from missing leads to never losing one.",
    author: "Mark Thompson, Director",
  },
  {
    company: "FitLife Gyms",
    industry: "Fitness",
    problem: "Trial sign-ups weren't converting. Staff too busy to follow up with every prospect.",
    solution: "AI Employee handles all trial inquiries, sends onboarding sequences, and books intro sessions automatically.",
    results: [
      { icon: TrendingUp, label: "Trial-to-member", value: "+95%" },
      { icon: Clock, label: "Hours saved/week", value: "20+" },
      { icon: Users, label: "New members/mo", value: "35+" },
    ],
    quote: "It's like having a dedicated sales assistant who never takes a break. Our conversion rates have nearly doubled.",
    author: "Sarah Chen, Owner",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Success Stories</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Real businesses, real results.</p>
        </motion.div>

        <div className="space-y-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--card-shadow)]"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg font-bold">{story.company}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{story.industry}</span>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6 text-sm">
                  <div><div className="text-xs font-semibold text-muted-foreground uppercase mb-1">Problem</div><p className="text-muted-foreground">{story.problem}</p></div>
                  <div><div className="text-xs font-semibold text-muted-foreground uppercase mb-1">Solution</div><p className="text-muted-foreground">{story.solution}</p></div>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">Results</div>
                    {story.results.map((r) => (
                      <div key={r.label} className="flex items-center gap-2">
                        <r.icon className="w-3.5 h-3.5 text-accent" />
                        <span className="text-xs text-muted-foreground">{r.label}:</span>
                        <span className="text-xs font-bold text-accent">{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4 border-t border-border">
                  <Quote className="w-5 h-5 text-accent/40 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm italic text-muted-foreground mb-1">"{story.quote}"</p>
                    <p className="text-xs font-medium text-accent">{story.author}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
