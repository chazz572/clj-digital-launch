import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AIGrowthSection from "@/components/AIGrowthSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";

import PricingSection from "@/components/PricingSection";

import FAQSection from "@/components/FAQSection";

import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AIGrowthSection />
    <IndustriesSection />
    <WhySection />
    <ProcessSection />
    
    <PricingSection />
    
    <FAQSection />
    
    <TeamSection />
    <Footer />
  </div>
);

export default Index;
