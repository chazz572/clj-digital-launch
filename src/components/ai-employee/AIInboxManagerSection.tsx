import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Zap,
  FileText,
  RefreshCw,
  UserCheck,
  CheckSquare,
  Inbox,
  Mic2,
  Paperclip,
  ArrowRight,
  Star,
  Clock,
  Tag,
  Bot,
  Send,
  CalendarPlus,
  AlertCircle,
} from "lucide-react";

const features = [
  { icon: Zap, title: "Instant AI Replies", desc: "Every email gets an intelligent response within seconds — no templates, no delays." },
  { icon: FileText, title: "Smart Summaries", desc: "Long threads distilled into key points, action items, and decisions at a glance." },
  { icon: RefreshCw, title: "Auto Follow-Ups", desc: "Scheduled nudges that go out if the prospect doesn't reply — fully customizable timing." },
  { icon: UserCheck, title: "Lead Qualification", desc: "AI scores every inbound lead and routes hot prospects to the top of your queue." },
  { icon: CheckSquare, title: "Task Creation", desc: "Action items from emails become tasks automatically — synced with your workflow tools." },
  { icon: Inbox, title: "Unified Inbox", desc: "All accounts, all channels, one intelligent inbox. No more tab-switching." },
  { icon: Mic2, title: "Brand Voice Matching", desc: "Responses that sound like you — trained on your tone, vocabulary, and style." },
  { icon: Paperclip, title: "Attachment Handling", desc: "AI reads, summarizes, and files attachments so nothing gets buried." },
];

/* ── Inbox mockup data ── */
const folders = [
  { label: "Inbox", count: 12, active: true },
  { label: "Leads", count: 5 },
  { label: "Follow-Ups", count: 3 },
  { label: "Quotes", count: 2 },
  { label: "Completed", count: 28 },
];

const emails = [
  { from: "Sarah Kim", subject: "Interested in website redesign", time: "2m", tag: "Lead", tagColor: "bg-emerald-500/20 text-emerald-400" },
  { from: "James Wright", subject: "Re: Quote for mobile app", time: "18m", tag: "Quote Request", tagColor: "bg-blue-500/20 text-blue-400" },
  { from: "Priya Desai", subject: "Follow up on our call", time: "1h", tag: "Urgent", tagColor: "bg-red-500/20 text-red-400" },
  { from: "Tom Richards", subject: "Partnership opportunity", time: "3h", tag: "Lead", tagColor: "bg-emerald-500/20 text-emerald-400" },
  { from: "Lisa Chen", subject: "Invoice question #4821", time: "5h", tag: "Quote Request", tagColor: "bg-blue-500/20 text-blue-400" },
];

const suggestedReplies = [
  "Thanks Sarah! I'd love to discuss your redesign goals. Are you free Thursday at 2pm?",
  "Hi Sarah, I've attached our portfolio and pricing guide — happy to walk through it.",
  "Great to hear from you! Let me loop in our design lead for a quick intro.",
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function AIInboxManagerSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.03] to-background pointer-events-none" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── Badge ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            AI Inbox Manager
          </span>
        </motion.div>

        {/* ── Two-column hero ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: text content */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              Your AI That Replies to Every Email —{" "}
              <span className="text-gradient">Instantly, Accurately, 24/7</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Stop missing leads, slow replies, and messy inboxes. Your AI Inbox Manager reads emails, drafts responses,
              follows up automatically, and keeps your business organized — without you lifting a finger.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/5 transition-colors"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: UI mockup */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-[0_8px_40px_-12px_hsl(var(--accent)/0.15)]">
              {/* Mockup top bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="text-[10px] text-muted-foreground ml-2 font-medium">AI Inbox Manager</span>
              </div>

              {/* Three-panel layout */}
              <div className="flex min-h-[420px] sm:min-h-[460px]">
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col w-36 border-r border-border bg-muted/10 py-3 px-2 gap-0.5">
                  {folders.map((f) => (
                    <div
                      key={f.label}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                        f.active ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-muted/30"
                      }`}
                    >
                      <span>{f.label}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${f.active ? "bg-accent/20" : "bg-muted/40"}`}>
                        {f.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Email list */}
                <div className="flex-1 min-w-0 border-r border-border">
                  <div className="px-3 py-2 border-b border-border">
                    <span className="text-[10px] text-muted-foreground font-medium">12 conversations</span>
                  </div>
                  <div className="divide-y divide-border">
                    {emails.map((e, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.07 }}
                        className={`px-3 py-2.5 hover:bg-muted/20 transition-colors cursor-pointer ${i === 0 ? "bg-accent/5 border-l-2 border-l-accent" : ""}`}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className={`text-[11px] ${i === 0 ? "font-bold" : "font-medium"}`}>{e.from}</span>
                          <span className="text-[9px] text-muted-foreground">{e.time}</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground truncate mb-1">{e.subject}</p>
                        <span className={`inline-block text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${e.tagColor}`}>
                          {e.tag}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Detail panel */}
                <div className="hidden md:flex flex-col w-56 lg:w-64 p-3 gap-3">
                  {/* AI Summary */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="rounded-xl border border-accent/20 bg-accent/5 p-3"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <Bot className="w-3.5 h-3.5 text-accent" />
                      <span className="text-[10px] font-semibold text-accent">AI Summary</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">
                      Sarah Kim is interested in a full website redesign for her bakery. Budget: ~$2k. Timeline: 4 weeks. Decision maker. High intent.
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-[9px] font-medium text-yellow-400">Lead Score: 92/100</span>
                    </div>
                  </motion.div>

                  {/* Suggested replies */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="text-[10px] font-semibold text-muted-foreground mb-1.5 block">Suggested Replies</span>
                    <div className="flex flex-col gap-1.5">
                      {suggestedReplies.map((r, i) => (
                        <button
                          key={i}
                          className="text-left text-[9px] px-2.5 py-2 rounded-lg border border-border bg-muted/20 hover:bg-accent/10 hover:border-accent/30 transition-all leading-relaxed"
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Actions row */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col gap-1.5 mt-auto"
                  >
                    <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-border bg-muted/10">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-[9px] text-muted-foreground">Follow-up in</span>
                      <select className="ml-auto text-[9px] bg-transparent border-none text-accent font-medium focus:outline-none cursor-pointer">
                        <option>24 hrs</option>
                        <option>48 hrs</option>
                        <option>3 days</option>
                        <option>1 week</option>
                      </select>
                    </div>
                    <button className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/20 transition-colors">
                      <CalendarPlus className="w-3 h-3 text-accent" />
                      <span className="text-[9px] font-semibold text-accent">Convert to Task</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Never Miss Another Email
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Let AI handle your inbox while you focus on growing your business.
          </p>
          <Button variant="hero" size="lg" className="glow-button group" asChild>
            <a href="/#contact">
              Add AI Inbox Manager
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
