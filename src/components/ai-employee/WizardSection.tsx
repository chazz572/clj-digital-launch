import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const industries = ["Real Estate", "Contractors & Trades", "Restaurants & Hospitality", "Gyms & Fitness", "Agencies & Consultants", "E‑commerce", "Healthcare", "Legal", "Other"];

const tasks = [
  "Respond to new leads instantly",
  "Send automated follow-up emails",
  "Schedule appointments",
  "Update CRM records",
  "Create tasks & reminders",
  "Send invoice reminders",
  "Answer customer FAQs",
  "Generate weekly reports",
];

const tools = [
  "Google Calendar", "Outlook", "HubSpot", "Salesforce", "Mailchimp",
  "Twilio SMS", "WhatsApp", "Slack", "Stripe", "Zapier",
];

export default function WizardSection() {
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState("");
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const toggleItem = (item: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(item) ? list.filter((t) => t !== item) : [...list, item]);
  };

  const next = async () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    // Final step — save and send email
    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      await (supabase as any).from('wizard_submissions').insert({
        id,
        industry,
        tasks: selectedTasks,
        tools: selectedTools,
      });

      await supabase.functions.invoke('send-transactional-email', {
        body: {
          templateName: 'wizard-config-notification',
          recipientEmail: 'chase.simpson@cjlwebsites.com',
          idempotencyKey: `wizard-config-${id}`,
          templateData: {
            industry,
            tasks: selectedTasks,
            tools: selectedTools,
          },
        },
      });

      setComplete(true);
    } catch (err) {
      console.error('Wizard submission error:', err);
      toast({
        title: "Something went wrong",
        description: "Your configuration was saved but we couldn't send the notification. We'll follow up soon!",
        variant: "destructive",
      });
      setComplete(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="wizard" className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            Configure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Build Your AI Employee</h2>
          <p className="text-muted-foreground">Three simple steps to configure your perfect digital worker.</p>
        </motion.div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {["Industry", "Tasks", "Tools"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i <= step ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                {complete || i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
              </div>
              <span className="text-xs font-medium hidden sm:inline">{label}</span>
              {i < 2 && <div className={`w-8 h-px ${i < step ? "bg-accent" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--card-shadow)] min-h-[320px]">
          <AnimatePresence mode="wait">
            {complete ? (
              <motion.div key="done" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Your AI Employee is Configured!</h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                  Based on your selections, we recommend <strong>{selectedTasks.length} automations</strong> across <strong>{selectedTools.length} tools</strong> for the <strong>{industry || "your"}</strong> industry. We'll be in touch soon!
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left max-w-lg mx-auto">
                  <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-xs text-muted-foreground">Availability</div>
                  </div>
                  <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
                    <div className="text-2xl font-bold text-accent">~$500</div>
                    <div className="text-xs text-muted-foreground">Est. monthly</div>
                  </div>
                  <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
                    <div className="text-2xl font-bold text-accent">10×</div>
                    <div className="text-xs text-muted-foreground">ROI potential</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="hero" className="glow-button" asChild><a href="/#contact">Book a Demo Call</a></Button>
                  <Button variant="outline" onClick={() => { setComplete(false); setStep(0); setIndustry(""); setSelectedTasks([]); setSelectedTools([]); }}>Start Over</Button>
                </div>
              </motion.div>
            ) : step === 0 ? (
              <motion.div key="s0" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <h3 className="font-semibold mb-4">Step 1: Choose Your Industry</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {industries.map((ind) => (
                    <button key={ind} onClick={() => setIndustry(ind)} className={`px-3 py-2.5 rounded-xl text-sm border transition-colors ${industry === ind ? "border-accent bg-accent/10 text-foreground" : "border-border hover:border-accent/30"}`}>
                      {ind}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : step === 1 ? (
              <motion.div key="s1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <h3 className="font-semibold mb-4">Step 2: Choose Tasks to Automate</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {tasks.map((t) => (
                    <button key={t} onClick={() => toggleItem(t, selectedTasks, setSelectedTasks)} className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm border text-left transition-colors ${selectedTasks.includes(t) ? "border-accent bg-accent/10" : "border-border hover:border-accent/30"}`}>
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${selectedTasks.includes(t) ? "text-accent" : "text-muted-foreground/30"}`} />
                      {t}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="s2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <h3 className="font-semibold mb-4">Step 3: Choose Your Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {tools.map((t) => (
                    <button key={t} onClick={() => toggleItem(t, selectedTools, setSelectedTools)} className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm border transition-colors ${selectedTools.includes(t) ? "border-accent bg-accent/10" : "border-border hover:border-accent/30"}`}>
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${selectedTools.includes(t) ? "text-accent" : "text-muted-foreground/30"}`} />
                      {t}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!complete && (
            <div className="flex justify-between mt-6 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              <Button variant="hero" size="sm" onClick={next} disabled={submitting}>
                {submitting ? (
                  <><Loader2 className="w-4 h-4 mr-1 animate-spin" /> Submitting...</>
                ) : step === 2 ? (
                  <>Generate Config <ArrowRight className="w-4 h-4 ml-1" /></>
                ) : (
                  <>Next <ArrowRight className="w-4 h-4 ml-1" /></>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
