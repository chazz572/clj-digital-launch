import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a typical project take?", a: "Most websites are completed in 1–2 weeks. Web and mobile apps typically take 3–6 weeks depending on complexity." },
  { q: "What's included in the price?", a: "Design, development, revisions, testing, and deployment. We provide everything you need to launch." },
  { q: "Can I request changes after the site is live?", a: "Absolutely! We offer revision rounds during the project and ongoing maintenance plans after launch." },
  { q: "Do you handle hosting and domains?", a: "We can help you set up hosting and domains, or deploy to your preferred platform. We'll guide you through the process." },
  { q: "What technologies do you use?", a: "We work with React, Next.js, React Native, Node.js, and modern cloud infrastructure. We pick the best tools for your project." },
  { q: "Do you offer ongoing maintenance?", a: "Yes! We offer monthly maintenance plans that include updates, bug fixes, and small improvements." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-background">
    <div className="container max-w-3xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider uppercase text-accent">FAQ</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-lg border border-border bg-card px-6"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
