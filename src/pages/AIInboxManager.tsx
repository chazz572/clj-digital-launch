import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIInboxManagerSection from "@/components/ai-employee/AIInboxManagerSection";

export default function AIInboxManager() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20">
        <AIInboxManagerSection />
      </div>
      <Footer />
    </div>
  );
}
