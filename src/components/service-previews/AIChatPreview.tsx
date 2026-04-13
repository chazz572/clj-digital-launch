import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot } from "lucide-react";

const scripted = [
  { q: "What can you automate?", a: "I can handle lead follow-ups, appointment scheduling, invoice reminders, and customer onboarding — all on autopilot." },
  { q: "How fast to set up?", a: "Most automations are live within 48 hours. We map your workflow, build the logic, and test before launch." },
  { q: "What tools do you use?", a: "We integrate with your existing stack — CRMs, email platforms, calendars, and payment systems." },
];

type Message = { role: "user" | "assistant"; text: string };

const AIChatPreview = ({ compact = false }: { compact?: boolean }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [qIndex, setQIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text?: string) => {
    const msg = text || inputVal.trim();
    if (!msg || typing) return;
    setInputVal("");

    const answer = scripted[qIndex % scripted.length].a;
    setQIndex((p) => p + 1);

    setMessages((p) => [...p, { role: "user", text: msg }]);
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((p) => [...p, { role: "assistant", text: answer }]);
    }, 1200);
  };

  return (
    <div className={`flex flex-col items-center ${compact ? "scale-90" : ""}`}>
      <div className="w-full max-w-[300px] rounded-xl border border-border bg-background overflow-hidden shadow-[var(--card-shadow)]">
        {/* Header */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border bg-muted/30">
          <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
            <Bot className="w-3 h-3 text-accent" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-foreground">AI Assistant</div>
            <div className="text-[8px] text-accent">Online</div>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="h-[220px] overflow-y-auto scrollbar-none p-3 space-y-2">
          {messages.length === 0 && (
            <div className="text-center py-6 space-y-3">
              <div className="text-[10px] text-muted-foreground">Try asking a question:</div>
              {scripted.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s.q)}
                  className="block w-full text-left px-2.5 py-1.5 rounded-lg bg-accent/5 border border-accent/10 text-[9px] text-foreground hover:bg-accent/10 transition-colors"
                >
                  {s.q}
                </button>
              ))}
            </div>
          )}

          <AnimatePresence>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-2.5 py-1.5 rounded-xl text-[9px] leading-relaxed ${
                    m.role === "user"
                      ? "bg-accent text-accent-foreground rounded-br-sm"
                      : "bg-muted/50 text-foreground border border-border rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-1 px-3 py-2 w-fit rounded-xl bg-muted/50 border border-border"
            >
              {[0, 1, 2].map((d) => (
                <motion.div
                  key={d}
                  className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-3 py-2 border-t border-border">
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-[10px] text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button
            onClick={() => sendMessage()}
            className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
          >
            <Send className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatPreview;
