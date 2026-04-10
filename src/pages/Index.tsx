import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackStrip from "@/components/TechStackStrip";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";

import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TechStackStrip />
    <ServicesSection />
    <PricingSection />
    
    <WhySection />
    <ProcessSection />
    <FounderSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <TeamSection />
    <Footer />
  </div>
);

export default Index;
