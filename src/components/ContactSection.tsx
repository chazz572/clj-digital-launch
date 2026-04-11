import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Store submission in database
      const id = crypto.randomUUID();
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({ id, name: form.name, email: form.email, phone: form.phone || null, details: form.details });

      if (dbError) throw dbError;

      // 2. Send email notification to chase.simpson@cjlwebsites.com
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-form-notification",
          recipientEmail: form.email,
          idempotencyKey: `contact-notify-${id}`,
          templateData: {
            name: form.name,
            email: form.email,
            phone: form.phone || "Not provided",
            message: form.details,
          },
        },
      });

      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", phone: "", details: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[100px]" />
      </div>
      <div className="container relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
            Ready to Get <span className="text-gradient">Started</span>?
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Tell us what you need — we'll handle the rest.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4 p-8 rounded-2xl glass-card"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="bg-background/50 border-border/50 focus:border-accent/50"
            />
            <Input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
              className="bg-background/50 border-border/50 focus:border-accent/50"
            />
          </div>
          <Input
            type="tel"
            placeholder="Phone number (optional)"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            maxLength={20}
            className="bg-background/50 border-border/50 focus:border-accent/50"
          />
          <Textarea
            placeholder="Tell us about your project..."
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            required
            maxLength={1000}
            rows={5}
            className="bg-background/50 border-border/50 focus:border-accent/50"
          />
          <Button type="submit" variant="hero" className="w-full glow-button h-12" disabled={isSubmitting}>
            {isSubmitting ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
            ) : (
              <><Send className="w-4 h-4 mr-2" /> Send Message <ArrowRight className="w-4 h-4 ml-1" /></>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
