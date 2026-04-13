import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Play, Pause, Volume2, VolumeX } from "lucide-react";

const subtitles = [
  { time: 0, speaker: "AI", text: "Hi, thanks for calling! How can I help you today?" },
  { time: 4, speaker: "Caller", text: "I'd like to schedule a service appointment." },
  { time: 7.5, speaker: "AI", text: "I'd be happy to help. What day works best for you?" },
  { time: 11, speaker: "Caller", text: "How about Thursday morning?" },
  { time: 14, speaker: "AI", text: "Thursday at 9 AM is available. I'll book that for you and send a confirmation." },
  { time: 19, speaker: "Caller", text: "Perfect, thank you!" },
];

const TOTAL_DURATION = 22;

const PhoneAgentPreview = ({ compact = false }: { compact?: boolean }) => {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [muted, setMuted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const spokenRef = useRef<Set<number>>(new Set());
  const synthRef = useRef(typeof window !== "undefined" ? window.speechSynthesis : null);

  const speak = useCallback((text: string, speaker: string) => {
    if (!synthRef.current || muted) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = speaker === "AI" ? 1.1 : 0.9;
    utterance.volume = 0.8;
    // Try to pick different voices for AI vs Caller
    const voices = synthRef.current.getVoices();
    if (voices.length > 1) {
      const femaleVoice = voices.find(v => /female|samantha|zira|karen|victoria/i.test(v.name));
      const maleVoice = voices.find(v => /male|daniel|david|james|alex/i.test(v.name) && !/female/i.test(v.name));
      utterance.voice = speaker === "AI" ? (femaleVoice || voices[0]) : (maleVoice || voices[1] || voices[0]);
    }
    synthRef.current.speak(utterance);
  }, [muted]);

  useEffect(() => {
    // Preload voices
    synthRef.current?.getVoices();
  }, []);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setElapsed((p) => {
          if (p >= TOTAL_DURATION) {
            setPlaying(false);
            spokenRef.current.clear();
            return 0;
          }
          return p + 0.25;
        });
      }, 250);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing]);

  // Trigger speech when a new subtitle becomes active
  useEffect(() => {
    if (!playing) return;
    const currentSub = [...subtitles].reverse().find((s) => elapsed >= s.time);
    if (currentSub && !spokenRef.current.has(currentSub.time)) {
      spokenRef.current.add(currentSub.time);
      speak(currentSub.text, currentSub.speaker);
    }
  }, [elapsed, playing, speak]);

  const currentSub = [...subtitles].reverse().find((s) => elapsed >= s.time);

  const togglePlay = () => {
    if (elapsed >= TOTAL_DURATION) {
      setElapsed(0);
      spokenRef.current.clear();
    }
    if (playing) {
      synthRef.current?.cancel();
    }
    setPlaying((p) => !p);
  };

  const toggleMute = () => {
    if (!muted) {
      synthRef.current?.cancel();
    }
    setMuted((m) => !m);
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
              animate={{ width: `${(elapsed / TOTAL_DURATION) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 p-3 border-t border-border">
          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
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
