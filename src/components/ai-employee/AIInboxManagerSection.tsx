import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
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
  Bot,
  CalendarPlus,
  Send,
  ChevronLeft,
} from "lucide-react";

/* ── Feature list ── */
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

/* ── Folder definitions ── */
type FolderKey = "inbox" | "leads" | "follow-ups" | "quotes" | "completed";
const folderDefs: { key: FolderKey; label: string }[] = [
  { key: "inbox", label: "Inbox" },
  { key: "leads", label: "Leads" },
  { key: "follow-ups", label: "Follow-Ups" },
  { key: "quotes", label: "Quotes" },
  { key: "completed", label: "Completed" },
];

/* ── Email data with per-email detail ── */
interface Email {
  id: number;
  from: string;
  subject: string;
  time: string;
  tag: string;
  tagColor: string;
  folder: FolderKey;
  summary: string;
  leadScore: number;
  replies: string[];
}

const allEmails: Email[] = [
  { id: 1, from: "Sarah Kim", subject: "Interested in website redesign", time: "2m", tag: "Lead", tagColor: "bg-accent/20 text-accent", folder: "inbox", summary: "Sarah Kim wants a full website redesign for her bakery. Budget: ~$2k. Timeline: 4 weeks. Decision maker. High intent.", leadScore: 92, replies: ["Thanks Sarah! I'd love to discuss your redesign goals. Are you free Thursday at 2pm?", "Hi Sarah, I've attached our portfolio and pricing guide — happy to walk through it.", "Great to hear from you! Let me loop in our design lead for a quick intro."] },
  { id: 2, from: "James Wright", subject: "Re: Quote for mobile app", time: "18m", tag: "Quote Request", tagColor: "bg-primary/20 text-primary", folder: "quotes", summary: "James is requesting a quote for an iOS/Android app for his fitness studio. Needs booking + payments. Warm lead.", leadScore: 78, replies: ["Hi James, I've prepared a detailed quote based on your requirements — see attached.", "Thanks for the details! We can have a working prototype in 3 weeks. Want to hop on a call?", "Great project! I'll send over case studies of similar apps we've built."] },
  { id: 3, from: "Priya Desai", subject: "Follow up on our call", time: "1h", tag: "Urgent", tagColor: "bg-destructive/20 text-destructive", folder: "follow-ups", summary: "Priya hasn't responded to the proposal sent last Tuesday. Needs a gentle nudge. She was enthusiastic on the call.", leadScore: 65, replies: ["Hi Priya, just checking in on the proposal — happy to adjust anything that needs tweaking!", "Hey Priya, wanted to follow up. Shall we schedule a quick call to go over the next steps?", "Hi Priya, the proposal is valid through Friday. Let me know if you have any questions!"] },
  { id: 4, from: "Tom Richards", subject: "Partnership opportunity", time: "3h", tag: "Lead", tagColor: "bg-accent/20 text-accent", folder: "leads", summary: "Tom runs a marketing agency and wants to white-label our web dev services. Could be a recurring revenue channel.", leadScore: 88, replies: ["Hi Tom, we'd love to explore a partnership! Let me send over our white-label info pack.", "Thanks Tom! We work with several agencies already — happy to share our partnership model.", "Great to connect! I'll set up a call with our partnerships lead this week."] },
  { id: 5, from: "Lisa Chen", subject: "Invoice question #4821", time: "5h", tag: "Quote Request", tagColor: "bg-primary/20 text-primary", folder: "inbox", summary: "Lisa has a question about line items on invoice #4821. Likely a simple clarification — not a dispute.", leadScore: 40, replies: ["Hi Lisa, thanks for reaching out! I've reviewed invoice #4821 and here's a breakdown of each line item.", "Hi Lisa, great question. The hosting fee covers 12 months of managed hosting + SSL. Happy to clarify further!", "Thanks Lisa, I've CC'd our billing team to make sure this gets resolved quickly."] },
  { id: 6, from: "Mike Johnson", subject: "Website launch review", time: "1d", tag: "Lead", tagColor: "bg-accent/20 text-accent", folder: "completed", summary: "Mike's website launched successfully. He's happy with the results and considering a phase 2 for e-commerce.", leadScore: 95, replies: ["Congrats on the launch, Mike! Ready to discuss phase 2 whenever you are.", "Great working with you! I'll send over some e-commerce options for your review.", "Thanks Mike! We'd love to continue the momentum — let's plan phase 2."] },
  { id: 7, from: "Anna Lopez", subject: "Need SEO audit", time: "2d", tag: "Lead", tagColor: "bg-accent/20 text-accent", folder: "leads", summary: "Anna wants an SEO audit for her e-commerce site. She's getting traffic but poor conversions. Potential upsell.", leadScore: 72, replies: ["Hi Anna, we can start with a comprehensive SEO audit — usually takes 3-5 business days.", "Thanks Anna! I'll send over our SEO package options with pricing.", "Hi Anna, based on your site, I see some quick wins we could implement right away."] },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function AIInboxManagerSection() {
  const { toast } = useToast();
  const [activeFolder, setActiveFolder] = useState<FolderKey>("inbox");
  const [selectedEmailId, setSelectedEmailId] = useState<number>(1);
  const [sentReplies, setSentReplies] = useState<Record<number, string>>({});
  const [followUpTimers, setFollowUpTimers] = useState<Record<number, string>>({});
  const [tasks, setTasks] = useState<number[]>([]);
  // mobile detail view
  const [mobileDetail, setMobileDetail] = useState(false);

  const filteredEmails = activeFolder === "inbox" ? allEmails : allEmails.filter((e) => e.folder === activeFolder);
  const folderCounts: Record<FolderKey, number> = {
    inbox: allEmails.length,
    leads: allEmails.filter((e) => e.folder === "leads").length,
    "follow-ups": allEmails.filter((e) => e.folder === "follow-ups").length,
    quotes: allEmails.filter((e) => e.folder === "quotes").length,
    completed: allEmails.filter((e) => e.folder === "completed").length,
  };

  const selectedEmail = allEmails.find((e) => e.id === selectedEmailId) ?? allEmails[0];

  const handleSelectEmail = (id: number) => {
    setSelectedEmailId(id);
    setMobileDetail(true);
  };

  const handleSendReply = (reply: string) => {
    setSentReplies((prev) => ({ ...prev, [selectedEmail.id]: reply }));
    toast({ title: "Reply sent!", description: `AI reply sent to ${selectedEmail.from}` });
  };

  const handleConvertTask = () => {
    if (tasks.includes(selectedEmail.id)) return;
    setTasks((prev) => [...prev, selectedEmail.id]);
    toast({ title: "Task created!", description: `"${selectedEmail.subject}" converted to a task` });
  };

  const handleFollowUp = (val: string) => {
    setFollowUpTimers((prev) => ({ ...prev, [selectedEmail.id]: val }));
    toast({ title: "Follow-up scheduled", description: `Follow-up for ${selectedEmail.from} set to ${val}` });
  };

  /* ── Detail panel (shared between desktop & mobile) ── */
  const DetailPanel = () => (
    <div className="flex flex-col p-3 gap-3 h-full">
      {/* AI Summary */}
      <div className="rounded-xl border border-accent/20 bg-accent/5 p-3">
        <div className="flex items-center gap-1.5 mb-2">
          <Bot className="w-3.5 h-3.5 text-accent" />
          <span className="text-[10px] font-semibold text-accent">AI Summary</span>
        </div>
        <p className="text-[10px] text-muted-foreground leading-relaxed">{selectedEmail.summary}</p>
        <div className="flex items-center gap-1 mt-2">
          <Star className="w-3 h-3 text-accent" />
          <span className="text-[9px] font-medium text-accent">Lead Score: {selectedEmail.leadScore}/100</span>
        </div>
      </div>

      {/* Sent confirmation or Suggested replies */}
      <div>
        <span className="text-[10px] font-semibold text-muted-foreground mb-1.5 block">
          {sentReplies[selectedEmail.id] ? "✓ Reply Sent" : "Suggested Replies"}
        </span>
        {sentReplies[selectedEmail.id] ? (
          <div className="text-[9px] px-2.5 py-2 rounded-lg border border-accent/30 bg-accent/10 leading-relaxed flex items-start gap-1.5">
            <Send className="w-3 h-3 text-accent shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{sentReplies[selectedEmail.id]}</span>
          </div>
        ) : (
          <div className="flex flex-col gap-1.5">
            {selectedEmail.replies.map((r, i) => (
              <button
                key={i}
                onClick={() => handleSendReply(r)}
                className="text-left text-[9px] px-2.5 py-2 rounded-lg border border-border bg-muted/20 hover:bg-accent/10 hover:border-accent/30 transition-all leading-relaxed group"
              >
                <span>{r}</span>
                <Send className="w-2.5 h-2.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity inline ml-1" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-1.5 mt-auto">
        <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-border bg-muted/10">
          <Clock className="w-3 h-3 text-muted-foreground" />
          <span className="text-[9px] text-muted-foreground">Follow-up in</span>
          <select
            value={followUpTimers[selectedEmail.id] ?? ""}
            onChange={(e) => handleFollowUp(e.target.value)}
            className="ml-auto text-[9px] bg-transparent border-none text-accent font-medium focus:outline-none cursor-pointer"
          >
            <option value="" disabled>Select</option>
            <option value="24 hrs">24 hrs</option>
            <option value="48 hrs">48 hrs</option>
            <option value="3 days">3 days</option>
            <option value="1 week">1 week</option>
          </select>
        </div>
        <button
          onClick={handleConvertTask}
          className={`flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border transition-colors ${
            tasks.includes(selectedEmail.id)
              ? "bg-accent/20 border-accent/40 cursor-default"
              : "bg-accent/10 hover:bg-accent/20 border-accent/20"
          }`}
        >
          {tasks.includes(selectedEmail.id) ? (
            <CheckSquare className="w-3 h-3 text-accent" />
          ) : (
            <CalendarPlus className="w-3 h-3 text-accent" />
          )}
          <span className="text-[9px] font-semibold text-accent">
            {tasks.includes(selectedEmail.id) ? "Task Created ✓" : "Convert to Task"}
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.03] to-background pointer-events-none" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            AI Inbox Manager
          </span>
        </motion.div>

        {/* Two-column hero */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: text */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              Your AI That Replies to Every Email —{" "}
              <span className="text-gradient">Instantly, Accurately, 24/7</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Stop missing leads, slow replies, and messy inboxes. Your AI Inbox Manager reads emails, drafts responses,
              follows up automatically, and keeps your business organized — without you lifting a finger.
            </p>
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

          {/* Right: interactive mockup */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-[0_8px_40px_-12px_hsl(var(--accent)/0.15)]">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="text-[10px] text-muted-foreground ml-2 font-medium">AI Inbox Manager</span>
                {mobileDetail && (
                  <button onClick={() => setMobileDetail(false)} className="md:hidden ml-auto flex items-center gap-1 text-[10px] text-accent font-medium">
                    <ChevronLeft className="w-3 h-3" /> Back
                  </button>
                )}
              </div>

              {/* Three-panel layout */}
              <div className="flex min-h-[420px] sm:min-h-[460px]">
                {/* Sidebar - hidden on small */}
                <div className="hidden sm:flex flex-col w-36 border-r border-border bg-muted/10 py-3 px-2 gap-0.5">
                  {folderDefs.map((f) => (
                    <button
                      key={f.key}
                      onClick={() => { setActiveFolder(f.key); setMobileDetail(false); }}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors text-left ${
                        activeFolder === f.key ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-muted/30"
                      }`}
                    >
                      <span>{f.label}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${activeFolder === f.key ? "bg-accent/20" : "bg-muted/40"}`}>
                        {folderCounts[f.key]}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Mobile: show either email list OR detail */}
                <div className="flex-1 min-w-0 md:border-r md:border-border">
                  <AnimatePresence mode="wait">
                    {mobileDetail && (
                      <motion.div key="mobile-detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="md:hidden h-full">
                        <DetailPanel />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className={mobileDetail ? "hidden md:block" : ""}>
                    <div className="px-3 py-2 border-b border-border flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground font-medium">{filteredEmails.length} conversations</span>
                      {/* Mobile folder selector */}
                      <select
                        value={activeFolder}
                        onChange={(e) => setActiveFolder(e.target.value as FolderKey)}
                        className="sm:hidden text-[10px] bg-transparent border border-border rounded px-1.5 py-0.5 text-accent font-medium focus:outline-none"
                      >
                        {folderDefs.map((f) => (
                          <option key={f.key} value={f.key}>{f.label} ({folderCounts[f.key]})</option>
                        ))}
                      </select>
                    </div>
                    <div className="divide-y divide-border">
                      {filteredEmails.map((e) => (
                        <motion.div
                          key={e.id}
                          layout
                          onClick={() => handleSelectEmail(e.id)}
                          className={`px-3 py-2.5 hover:bg-muted/20 transition-colors cursor-pointer ${
                            selectedEmailId === e.id ? "bg-accent/5 border-l-2 border-l-accent" : ""
                          }`}
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className={`text-[11px] ${selectedEmailId === e.id ? "font-bold" : "font-medium"}`}>{e.from}</span>
                            <span className="text-[9px] text-muted-foreground">{e.time}</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground truncate mb-1">{e.subject}</p>
                          <div className="flex items-center gap-1.5">
                            <span className={`inline-block text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${e.tagColor}`}>{e.tag}</span>
                            {sentReplies[e.id] && <span className="text-[8px] text-accent">✓ replied</span>}
                            {tasks.includes(e.id) && <span className="text-[8px] text-accent">📋 task</span>}
                          </div>
                        </motion.div>
                      ))}
                      {filteredEmails.length === 0 && (
                        <div className="px-3 py-8 text-center text-[11px] text-muted-foreground">No conversations in this folder</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop detail panel */}
                <div className="hidden md:flex flex-col w-56 lg:w-64">
                  <DetailPanel />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss Another Email</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Let AI handle your inbox while you focus on growing your business.</p>
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
