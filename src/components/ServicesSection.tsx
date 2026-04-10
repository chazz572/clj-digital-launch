import { motion } from "framer-motion";
import {
  Globe, AppWindow, Smartphone, Bot, Workflow, CalendarCheck,
  Target, LayoutDashboard, Calculator, MailCheck, Package,
  Users, CreditCard, UserCircle,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Website Design & Development", desc: "Custom, conversion-focused websites built with modern frameworks and premium design." },
  { icon: AppWindow, title: "Web App Development", desc: "Full-stack web applications with real-time data, user auth, and scalable architecture." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform iOS and Android apps built with Flutter and React Native." },
  { icon: Bot, title: "AI‑Powered Tools & Automations", desc: "Smart assistants, automated workflows, and AI integrations that save time and boost revenue." },
  { icon: Workflow, title: "Workflow & SOP Optimization", desc: "Turn messy processes into clean, automated systems that scale with your business." },
  { icon: CalendarCheck, title: "CRM & Booking System Integrations", desc: "Connect your site to Stripe, Calendly, Jobber, GoHighLevel, and more." },
  { icon: Target, title: "Lead Capture & Reputation Systems", desc: "Automated review requests, lead funnels, and SMS/email follow-ups." },
  { icon: LayoutDashboard, title: "Custom Dashboards & Internal Tools", desc: "Inventory tracking, job management, employee portals, and customer dashboards." },
  { icon: Calculator, title: "Instant Quote Systems", desc: "Let customers get instant pricing with smart, dynamic quote calculators." },
  { icon: MailCheck, title: "Automated Follow‑Ups", desc: "AI-driven text and email sequences that nurture leads and close deals." },
  { icon: Package, title: "Inventory & Job Tracking Systems", desc: "Real-time tracking for inventory, jobs, and field operations." },
  { icon: Users, title: "Technician/Employee Portals", desc: "Secure portals for team members to manage tasks, schedules, and communications." },
  { icon: CreditCard, title: "Payment & Invoice Automation", desc: "Automated invoicing, payment collection, and financial reporting." },
  { icon: UserCircle, title: "Customer Portals", desc: "Self-service portals where customers can view orders, invoices, and project status." },
];

const ServicesSection = () => (
  <section id="services" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
    </div>
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
          Services
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          What We <span className="text-gradient">Build</span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg">
          End-to-end digital solutions for businesses that want to grow.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group p-6 rounded-2xl glass-card gradient-border transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_hsl(190_90%_50%/0.12)]"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 border border-accent/20 group-hover:shadow-[0_0_20px_hsl(190_90%_50%/0.15)] transition-shadow duration-300">
              <s.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
