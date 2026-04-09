import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AIGrowthSection from "@/components/AIGrowthSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioHighlightsSection from "@/components/PortfolioHighlightsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FounderSection from "@/components/FounderSection";
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
    <PortfolioHighlightsSection />
    <PricingSection />
    <TestimonialsSection />
    <FAQSection />
    <FounderSection />
    <TeamSection />
    <Footer />
  </div>
);

export default Index;
