import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CalendarCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", details: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container max-w-2xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-accent">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
            Let's Build Something Great
          </h2>
          <p className="text-muted-foreground mt-4">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
            />
          </div>
          <Input
            type="tel"
            placeholder="Phone number (optional)"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            maxLength={20}
          />
          <Textarea
            placeholder="Tell us about your project..."
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            required
            maxLength={1000}
            rows={5}
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" className="flex-1">
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
            <Button type="button" variant="outline" className="flex-1">
              <CalendarCheck className="w-4 h-4 mr-2" /> Schedule a Call
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
