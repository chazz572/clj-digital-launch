import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Search, User, ChevronRight, Star, ShoppingCart } from "lucide-react";

const screens = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    content: (
      <div className="space-y-4 p-4">
        <div className="text-base sm:text-sm font-bold text-foreground">Good morning ☀️</div>
        <div className="rounded-xl bg-accent/10 p-3 border border-accent/20">
          <div className="text-xs font-semibold text-foreground mb-1">Featured</div>
          <div className="h-20 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Premium Collection</span>
          </div>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Star className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-foreground">Item {i}</div>
              <div className="text-[10px] text-muted-foreground">Tap to explore</div>
            </div>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "search",
    label: "Search",
    icon: Search,
    content: (
      <div className="p-4 space-y-3">
        <div className="rounded-lg bg-muted/50 border border-border px-3 py-2 text-xs text-muted-foreground">
          Search products...
        </div>
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Trending</div>
        <div className="flex flex-wrap gap-2">
          {["Design", "Tech", "Apps", "AI Tools"].map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-full bg-accent/10 text-[10px] text-accent border border-accent/20">
              {tag}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg bg-muted/30 border border-border p-3 flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-md bg-accent/10" />
              <div className="text-[10px] text-foreground font-medium">Product {i}</div>
              <div className="text-[9px] text-muted-foreground">$29.99</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    content: (
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
            <User className="w-5 h-5 text-accent" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Alex Johnson</div>
            <div className="text-[10px] text-muted-foreground">Premium Member</div>
          </div>
        </div>
        <div className="space-y-2">
          {["Orders", "Wishlist", "Settings"].map((item) => (
            <div key={item} className="flex items-center justify-between p-2.5 rounded-lg bg-muted/30 border border-border">
              <span className="text-xs text-foreground">{item}</span>
              <ChevronRight className="w-3 h-3 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const MobileAppPreview = ({ compact = false }: { compact?: boolean }) => {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className={`flex flex-col items-center ${compact ? "scale-90" : ""}`}>
      {/* Phone frame */}
      <div className="relative w-[240px] sm:w-[200px] h-[480px] sm:h-[400px] rounded-[28px] border-2 border-accent/30 bg-background overflow-hidden shadow-[0_0_30px_hsl(199_89%_48%/0.1)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/10 rounded-b-xl z-10" />

        {/* Screen content */}
        <div className="h-[calc(100%-56px)] sm:h-[calc(100%-48px)] mt-6 overflow-y-auto scrollbar-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {screens[activeScreen].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tab bar */}
        <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-12 bg-background/90 backdrop-blur-sm border-t border-border flex items-center justify-around px-2">
          {screens.map((screen, i) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreen(i)}
              className={`flex flex-col items-center gap-1 sm:gap-0.5 px-4 sm:px-3 py-1.5 sm:py-1 rounded-lg transition-colors ${
                activeScreen === i ? "text-accent" : "text-muted-foreground"
              }`}
            >
              <screen.icon className="w-5 h-5 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-[8px] font-medium">{screen.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAppPreview;
