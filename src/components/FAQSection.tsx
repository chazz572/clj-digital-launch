import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "How long does a typical project take?", a: "Websites usually only take us 1 day. Mobile apps can take up to 1 week depending on complexity." },
  { q: "What's included in the price?", a: "Design, development, revisions, testing, and deployment. We provide everything you need to launch." },
  { q: "Can I request changes after the site is live?", a: "Absolutely! We offer revision rounds during the project and ongoing maintenance plans after launch." },
  { q: "Do you handle hosting and domains?", a: "We can help you set up hosting and domains, or deploy to your preferred platform. We'll guide you through the process." },
  { q: "What technologies do you use?", a: "We work with React, Next.js, React Native, Node.js, and modern cloud infrastructure. We pick the best tools for your project." },
  { q: "Do you offer ongoing maintenance?", a: "Yes! We offer monthly maintenance plans that include updates, bug fixes, and small improvements." },
];

const FAQSection = () => (
  <section id="faq" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
    </div>

    <div className="container max-w-3xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          Frequently Asked{" "}
          <span className="text-gradient">Questions</span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <AccordionItem
              value={`faq-${i}`}
              className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm px-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_4px_20px_-4px_hsl(190_90%_50%/0.08)]"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
