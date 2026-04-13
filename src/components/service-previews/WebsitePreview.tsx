import { motion } from "framer-motion";

const WebsitePreview = ({ compact = false }: { compact?: boolean }) => (
  <div className={`flex flex-col items-center ${compact ? "scale-90" : ""}`}>
    {/* Browser frame */}
    <div className="w-full max-w-[340px] rounded-xl border border-border bg-background overflow-hidden shadow-[var(--card-shadow)]">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/50 border-b border-border">
        <div className="w-2 h-2 rounded-full bg-destructive/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
        <div className="flex-1 mx-2 h-4 rounded-md bg-muted border border-border flex items-center px-2">
          <span className="text-[8px] text-muted-foreground">yoursite.com</span>
        </div>
      </div>

      {/* Page content */}
      <div className="h-[280px] overflow-y-auto scrollbar-none">
        {/* Hero */}
        <div className="p-5 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="text-[10px] font-bold mb-1">Your Business</div>
            <div className="text-[8px] opacity-80 mb-3 leading-relaxed">
              Building digital experiences that convert visitors into customers.
            </div>
            <div className="inline-block px-2.5 py-1 bg-accent text-accent-foreground rounded-md text-[8px] font-semibold">
              Get Started
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="p-4 space-y-3">
          <div className="text-[9px] font-bold text-foreground text-center">Our Services</div>
          <div className="grid grid-cols-2 gap-2">
            {["Design", "Development", "Marketing", "Support"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                className="p-2 rounded-lg bg-muted/30 border border-border text-center"
              >
                <div className="w-5 h-5 rounded-md bg-accent/10 mx-auto mb-1" />
                <div className="text-[8px] font-medium text-foreground">{item}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="px-4 pb-4">
          <div className="flex justify-around p-3 rounded-lg bg-accent/5 border border-accent/10">
            {[
              { num: "150+", label: "Clients" },
              { num: "98%", label: "Satisfaction" },
              { num: "5★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[10px] font-bold text-accent">{stat.num}</div>
                <div className="text-[7px] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WebsitePreview;
