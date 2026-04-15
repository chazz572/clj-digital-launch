import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Phone,
  CalendarCheck,
  MessageSquareText,
  FileText,
  PhoneOff,
  Clock,
  Mic,
  User,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

/* ── Feature grid data ── */
const features = [
  {
    icon: Clock,
    title: "24/7 Call Answering",
    desc: "Your AI agent picks up every call instantly — day, night, weekends, and holidays. Zero hold time, zero missed revenue.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    desc: "The agent checks your real-time availability, books appointments, and sends calendar invites — all on the call.",
  },
  {
    icon: MessageSquareText,
    title: "Smart FAQ Handling",
    desc: "Trained on your business knowledge base, it answers pricing, hours, service area, and policy questions accurately.",
  },
  {
    icon: FileText,
    title: "Call Summaries & Transcripts",
    desc: "Every call is transcribed and summarised with customer intent, action items, and sentiment — delivered to your inbox.",
  },
  {
    icon: PhoneOff,
    title: "Missed Call → Text Back",
    desc: "If a call is truly missed, the agent sends an instant branded text so the lead never goes cold.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

/* ── Transcript lines for mockup ── */
const transcriptLines = [
  { speaker: "AI", text: "Hi! Thanks for calling Acme Co. How can I help you today?" },
  { speaker: "Caller", text: "I'd like to book an appointment for Thursday." },
  { speaker: "AI", text: "Sure! I have 10 AM or 2 PM available on Thursday. Which works?" },
  { speaker: "Caller", text: "2 PM please." },
  { speaker: "AI", text: "Done! You're booked for Thursday at 2 PM. I'll send a confirmation." },
];

export default function AIPhoneAgentSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.03] to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-accent/5 blur-[180px] hidden dark:block" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-6">
        {/* ─── 1. Hero Block ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            <Phone className="w-3.5 h-3.5" />
            AI Phone Agent
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight mb-5 max-w-3xl mx-auto">
            Your AI That Answers Every Call —{" "}
            <span className="text-gradient">24/7, With Zero Missed Leads</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop losing business to missed calls. Your AI Phone Agent answers instantly, books
            appointments, handles FAQs, and sends you clean summaries — all with your brand's voice.
          </p>
        </motion.div>

        {/* ─── 2. Feature Grid ─── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 md:mb-28">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ─── 3. UI Mockups ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28"
        >
          <h3 className="text-center text-xl md:text-2xl font-bold mb-10">
            See It In Action
          </h3>

          <div className="grid md:grid-cols-3 gap-5">
            {/* ── Phone UI ── */}
            <div className="glass-card rounded-2xl p-5 flex flex-col items-center gap-4">
              <div className="w-full max-w-[220px] mx-auto">
                <div className="rounded-[24px] border border-border bg-card overflow-hidden shadow-[var(--card-shadow)]">
                  {/* Status bar */}
                  <div className="bg-accent/10 px-4 py-2 text-[10px] text-muted-foreground flex justify-between">
                    <span>9:41 AM</span>
                    <span>AI Active</span>
                  </div>
                  {/* Call screen */}
                  <div className="px-5 py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <User className="w-7 h-7 text-accent" />
                    </div>
                    <p className="text-sm font-semibold">Incoming Call</p>
                    <p className="text-xs text-muted-foreground mb-4">+1 (555) 012-3456</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-xs font-semibold">
                      <Phone className="w-3.5 h-3.5" />
                      AI Answering…
                    </div>
                  </div>
                  {/* Timer */}
                  <div className="bg-accent/5 px-4 py-2 text-center text-[11px] text-muted-foreground">
                    00:00:12 — Connected
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium text-muted-foreground">Incoming Call — AI Answers</p>
            </div>

            {/* ── Live Transcript ── */}
            <div className="glass-card rounded-2xl p-5 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Mic className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold">Live Transcript</span>
                <span className="ml-auto inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>
              <div className="flex-1 space-y-3 overflow-hidden">
                {transcriptLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: line.speaker === "AI" ? -12 : 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                    className={`flex gap-2 ${line.speaker === "Caller" ? "justify-end" : ""}`}
                  >
                    <div
                      className={`rounded-xl px-3 py-2 text-[11px] leading-relaxed max-w-[85%] ${
                        line.speaker === "AI"
                          ? "bg-accent/10 text-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <span className="font-semibold text-accent text-[10px] block mb-0.5">
                        {line.speaker}
                      </span>
                      {line.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Call Summary + Voicemail + Calendar ── */}
            <div className="flex flex-col gap-4">
              {/* Call Summary */}
              <div className="glass-card rounded-2xl p-5 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold">Call Summary</span>
                </div>
                <div className="space-y-2.5 text-[11px]">
                  <div>
                    <span className="text-muted-foreground">Customer Intent</span>
                    <p className="font-medium">Book a Thursday appointment</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Next Steps</span>
                    <p className="font-medium">Send confirmation email</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-accent font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Appointment Booked — Thu 2:00 PM
                  </div>
                </div>
              </div>

              {/* Voicemail-to-Text */}
              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquareText className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold">Voicemail → Text</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  "Hi, I'm calling about your weekend service availability. Please call me back at
                  555-0199."
                </p>
              </div>

              {/* Calendar Preview */}
              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CalendarCheck className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold">Calendar Booking</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <div>
                    <p className="font-medium">Thursday, Apr 17</p>
                    <p className="text-muted-foreground">2:00 PM – 2:30 PM</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold">
                    Confirmed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── 4. CTA Block ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss Another Call</h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-sm md:text-base">
            Let your AI Phone Agent handle every ring so you can focus on running your business.
          </p>
          <Button variant="hero" size="lg" className="glow-button text-base px-8 py-6" asChild>
            <a href="/#contact">
              Add AI Phone Agent to Your Business
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
