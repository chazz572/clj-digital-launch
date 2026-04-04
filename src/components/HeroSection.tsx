import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => (
  <section className="hero-bg relative overflow-hidden min-h-[90vh] flex items-center">
    {/* Abstract shapes */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/10" />
    </div>

    <div className="container relative z-10 py-32">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-accent/15 text-accent">
            Web & App Development Studio
          </span>
        </div>

        <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-foreground leading-[1.1] mb-6">
          Websites & Apps Built{" "}
          <span className="text-gradient">Fast, Built Right.</span>
        </h1>

        <p className="animate-fade-up-delay text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          CLJ helps businesses launch clean, modern digital experiences without the hassle. From simple sites to full-stack apps — we've got you covered.
        </p>

        <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Get a Free Quote <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#portfolio">
              <Play className="w-4 h-4 mr-1" /> View Our Work
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
