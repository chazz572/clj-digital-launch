import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIPhoneAgentSection from "@/components/ai-employee/AIPhoneAgentSection";

export default function AIPhoneAgent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AIPhoneAgentSection />
      <Footer />
    </div>
  );
}
