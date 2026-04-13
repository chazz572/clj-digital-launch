import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, CheckCircle2, Bell } from "lucide-react";

type ChatMsg = { role: "lead" | "ai" | "system"; text: string; delay: number };

const conversation: ChatMsg[] = [
  { role: "lead", text: "Hi, I'm interested in your services. Can someone get back to me?", delay: 0 },
  { role: "ai", text: "Hi there! Thanks for reaching out. I'd love to help. Could you tell me a bit about what you're looking for?", delay: 1200 },
  { role: "lead", text: "I need a website for my plumbing business with online booking.", delay: 2800 },
  { role: "ai", text: "Great — I've captured your details and created a lead profile. Let me schedule a discovery call for you.", delay: 4200 },
  { role: "system", text: "✅ Lead scored: High Intent · Task created: \"Follow up with plumbing lead\" · Calendar invite sent", delay: 5800 },
  { role: "ai", text: "Done! You're booked for Thursday at 2pm. I'll send a reminder 1 hour before. Anything else I can help with?", delay: 7200 },
];

export default function LiveDemoChat() {
  const [visible, setVisible] = useState<number>(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    if (visible >= conversation.length) return;
    const timer = setTimeout(() => setVisible((v) => v + 1), conversation[visible].delay || 1000);
    return () => clearTimeout(timer);
  }, [visible, started]);

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">See It In Action</h3>
        <p className="text-sm text-muted-foreground">Watch a scripted conversation between a lead and your AI Employee.</p>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--card-shadow)]">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-muted/30">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
            <Bot className="w-4 h-4 text-accent" />
          </div>
          <div>
            <div className="text-sm font-semibold">AI Employee</div>
            <div className="text-[10px] text-accent">Online · Responding instantly</div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-5 space-y-4 min-h-[280px]">
          {!started ? (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => { setStarted(true); setVisible(1); }}
              className="w-full py-8 text-center rounded-xl border border-dashed border-accent/30 hover:border-accent/60 hover:bg-accent/5 transition-colors"
            >
              <Bot className="w-8 h-8 mx-auto mb-2 text-accent" />
              <span className="text-sm font-medium text-foreground">Click to start the demo conversation</span>
            </motion.button>
          ) : (
            <AnimatePresence>
              {conversation.slice(0, visible).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`flex gap-3 ${msg.role === "lead" ? "flex-row-reverse" : ""}`}
                >
                  {msg.role !== "system" && (
                    <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === "ai" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>
                      {msg.role === "ai" ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                    </div>
                  )}
                  <div className={`max-w-[75%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "lead"
                      ? "bg-accent text-accent-foreground rounded-br-sm"
                      : msg.role === "system"
                      ? "bg-accent/5 border border-accent/20 text-foreground w-full max-w-full flex items-start gap-2 text-xs"
                      : "bg-muted/50 border border-border text-foreground rounded-bl-sm"
                  }`}>
                    {msg.role === "system" && <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />}
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
