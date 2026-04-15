import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SampleDashboard from "./SampleDashboard";
import AIEmployeeHero from "@/components/ai-employee/HeroSection";
import FeatureOverview from "@/components/ai-employee/FeatureOverview";
import LiveDemoChat from "@/components/ai-employee/LiveDemoChat";
import WizardSection from "@/components/ai-employee/WizardSection";
import AIInboxPreview from "@/components/ai-employee/AIInboxPreview";
import ClientPortalPreview from "@/components/ai-employee/ClientPortalPreview";
import ComparisonTable from "@/components/ai-employee/ComparisonTable";
import IndustryUseCases from "@/components/ai-employee/IndustryUseCases";
import PricingCalculator from "@/components/ai-employee/PricingCalculator";
import BehindTheScenes from "@/components/ai-employee/BehindTheScenes";
import AIPhoneAgentSection from "@/components/ai-employee/AIPhoneAgentSection";

import FinalCTA from "@/components/ai-employee/FinalCTA";

export default function AIEmployee() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* 1 — Hero */}
      <AIEmployeeHero />

      {/* 2 — Feature Overview */}
      <FeatureOverview />

      {/* 3 — Live Demo (existing dashboard kept in place) */}
      <section id="live-demo" className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
              Live Demo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Explore the Dashboard
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Interact with a fully working AI Employee dashboard loaded with sample data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border overflow-hidden shadow-2xl relative"
            style={{ height: "80vh" }}
          >
            {/* Subtle glow behind dashboard */}
            <div className="absolute -inset-1 rounded-2xl bg-accent/5 blur-xl pointer-events-none hidden dark:block" />
            <div className="relative z-10 h-full">
              <SampleDashboard />
            </div>
          </motion.div>

          {/* Scripted conversation below dashboard */}
          <LiveDemoChat />
        </div>
      </section>

      {/* 4 — Wizard */}
      <WizardSection />

      {/* 5 — AI Inbox Preview */}
      <AIInboxPreview />

      {/* 6 — Client Portal Preview */}
      <ClientPortalPreview />

      {/* 7 — Comparison Table */}
      <ComparisonTable />

      {/* 8 — Industry Use Cases */}
      <IndustryUseCases />

      {/* 9 — Pricing Calculator */}
      <PricingCalculator />

      {/* 10 — Behind the Scenes */}
      <BehindTheScenes />


      {/* 12 — Final CTA */}
      <FinalCTA />

      <Footer />
    </div>
  );
}
