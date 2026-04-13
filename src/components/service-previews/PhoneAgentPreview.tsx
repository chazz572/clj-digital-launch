import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Play, Pause, Volume2 } from "lucide-react";

const subtitles = [
  { time: 0, speaker: "AI", text: "Hi, thanks for calling! How can I help you today?" },
  { time: 3, speaker: "Caller", text: "I'd like to schedule a service appointment." },
  { time: 6, speaker: "AI", text: "I'd be happy to help. What day works best for you?" },
  { time: 9, speaker: "Caller", text: "How about Thursday morning?" },
  { time: 12, speaker: "AI", text: "Thursday at 9 AM is available. I'll book that for you and send a confirmation." },
  { time: 16, speaker: "Caller", text: "Perfect, thank you!" },
];

const PhoneAgentPreview = ({ compact = false }: { compact?: boolean }) => {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setElapsed((p) => {
          if (p >= 18) {
            setPlaying(false);
            return 0;
          }
          return p + 0.5;
        });
      }, 500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing]);

  const currentSub = [...subtitles].reverse().find((s) => elapsed >= s.time);

  const togglePlay = () => {
    if (elapsed >= 18) setElapsed(0);
    setPlaying((p) => !p);
  };

  return (
    <div className={`flex flex-col items-center ${compact ? "scale-90" : ""}`}>
      <div className="w-full max-w-[260px] rounded-xl border border-border bg-background overflow-hidden shadow-[var(--card-shadow)]">
        {/* Header */}
        <div className="p-4 text-center bg-gradient-to-b from-accent/5 to-transparent border-b border-border">
          <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 mx-auto mb-2 flex items-center justify-center">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          <div className="text-xs font-semibold text-foreground">AI Receptionist</div>
          <div className="text-[9px] text-muted-foreground mt-0.5">
            {playing ? "Call in progress..." : "Sample call demo"}
          </div>
        </div>

        {/* Waveform / subtitle area */}
        <div className="h-[140px] flex flex-col items-center justify-center px-4 gap-3">
          {/* Simple waveform */}
          <div className="flex items-center gap-0.5 h-8">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 rounded-full bg-accent/40"
                animate={{
                  height: playing
                    ? [4, 8 + Math.random() * 16, 4]
                    : 4,
                }}
                transition={{
                  duration: 0.4 + Math.random() * 0.3,
                  repeat: playing ? Infinity : 0,
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>

          {/* Subtitle */}
          <div className="h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentSub && playing && (
                <motion.div
                  key={currentSub.time}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <span className="text-[8px] font-semibold text-accent">{currentSub.speaker}: </span>
                  <span className="text-[9px] text-foreground">{currentSub.text}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Progress */}
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              animate={{ width: `${(elapsed / 18) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 p-3 border-t border-border">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneAgentPreview;
