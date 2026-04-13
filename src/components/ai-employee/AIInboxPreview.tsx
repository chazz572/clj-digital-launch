import { motion } from "framer-motion";
import { Mail, Bot, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const inboxItems = [
  { from: "Sarah Kim", subject: "Interested in website design", time: "2 min ago", status: "ai-replied", aiAction: "Sent intro email + scheduled follow-up", unread: true },
  { from: "James Wright", subject: "Re: Quote request", time: "1 hr ago", status: "follow-up", aiAction: "Follow-up #2 sent · Meeting booked Thu 2pm", unread: false },
  { from: "Priya Desai", subject: "Need a mobile app", time: "3 hrs ago", status: "task-created", aiAction: "Lead scored: High · Task: Prepare proposal", unread: false },
  { from: "Tom Richards", subject: "Pricing question", time: "5 hrs ago", status: "ai-replied", aiAction: "Sent pricing guide + FAQ link", unread: false },
  { from: "Lisa Chen", subject: "Partnership inquiry", time: "1 day ago", status: "summary", aiAction: "Summary: Wants white-label deal · Flagged for review", unread: false },
];

const statusIcon = (s: string) => {
  if (s === "ai-replied") return <Bot className="w-3.5 h-3.5 text-accent" />;
  if (s === "follow-up") return <Clock className="w-3.5 h-3.5 text-accent" />;
  if (s === "task-created") return <CheckCircle2 className="w-3.5 h-3.5 text-accent" />;
  return <AlertCircle className="w-3.5 h-3.5 text-muted-foreground" />;
};

export default function AIInboxPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            AI Inbox
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Your AI‑Managed Inbox</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Every lead gets a response, a follow-up, and a task — automatically.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--card-shadow)]">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-muted/30">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold">AI Inbox</span>
            <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">5 conversations</span>
          </div>

          {/* Items */}
          <div className="divide-y divide-border">
            {inboxItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 px-5 py-3.5 hover:bg-muted/20 transition-colors"
              >
                <div className="mt-1">{statusIcon(item.status)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-sm ${item.unread ? "font-bold" : "font-medium"}`}>{item.from}</span>
                    <span className="text-[10px] text-muted-foreground">{item.time}</span>
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{item.subject}</div>
                  <div className="text-[11px] text-accent/80 mt-1 flex items-center gap-1">
                    <Bot className="w-3 h-3" /> {item.aiAction}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
