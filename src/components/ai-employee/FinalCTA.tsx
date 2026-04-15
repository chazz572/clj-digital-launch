import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-accent/20 bg-accent/5 p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-accent/10 blur-[80px]" />
          </div>

          <div className="relative z-10">
            <Rocket className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Your AI Employee is Ready to Work
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-base md:text-lg">
              Start today. No code required. Fully managed. Results in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="glow-button text-base px-8 py-6" asChild>
                <a href="/#contact">Build Your AI Employee</a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
                <a href="/#contact">Book a Demo</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
