import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a website take?", a: "Most websites are completed within 1–3 days. More complex projects like web apps or AI integrations may take up to a week." },
  { q: "What's included in the $300 build?", a: "A modern, mobile-optimized website with SEO-ready structure, conversion-focused layout, integrated forms or booking, basic automations, hosting, and AI-powered enhancements." },
  { q: "What's included in the $75/month plan?", a: "Unlimited updates, hosting & security, speed optimization, monthly backups, AI enhancements, new pages, priority support, ongoing design improvements, and integration maintenance." },
  { q: "Do you build apps?", a: "Yes — we build cross-platform mobile apps (iOS + Android) and full-stack web applications with modern frameworks." },
  { q: "Do you offer AI tools?", a: "Absolutely. We integrate AI assistants, automated follow-ups, instant quote systems, lead qualification, and workflow automation into your business." },
  { q: "What makes your websites different?", a: "We combine premium design with AI-powered systems that generate leads and automate your business. Every site is built for speed, conversions, and growth — not just looks." },
];

const FAQSection = () => (
  <section id="faq" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
    </div>
    <div className="container relative z-10 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl glass-card p-6 sm:p-8"
      >
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border/30">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline hover:text-accent transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
