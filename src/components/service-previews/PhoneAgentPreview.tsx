import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Play, Pause, Volume2, VolumeX, Loader2 } from "lucide-react";

// Sarah = AI voice (female), Daniel = Caller voice (male)
const VOICE_AI = "EXAVITQu4vr4xnSDxMaL"; // Sarah
const VOICE_CALLER = "onwK4e9ZLuTAKqWW03F9"; // Daniel

const subtitles = [
  { speaker: "AI", text: "Hi, thanks for calling! How can I help you today?", voiceId: VOICE_AI },
  { speaker: "Caller", text: "I'd like to schedule a service appointment.", voiceId: VOICE_CALLER },
  { speaker: "AI", text: "I'd be happy to help. What day works best for you?", voiceId: VOICE_AI },
  { speaker: "Caller", text: "How about Thursday morning?", voiceId: VOICE_CALLER },
  { speaker: "AI", text: "Thursday at 9 AM is available. I'll book that for you and send a confirmation.", voiceId: VOICE_AI },
  { speaker: "Caller", text: "Perfect, thank you!", voiceId: VOICE_CALLER },
];

const PhoneAgentPreview = ({ compact = false }: { compact?: boolean }) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCacheRef = useRef<Map<number, string>>(new Map());
  const stoppedRef = useRef(false);

  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  const fetchAudio = useCallback(async (index: number): Promise<string | null> => {
    // Return cached URL if available
    if (audioCacheRef.current.has(index)) {
      return audioCacheRef.current.get(index)!;
    }

    const sub = subtitles[index];
    try {
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/elevenlabs-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
          },
          body: JSON.stringify({ text: sub.text, voiceId: sub.voiceId }),
        }
      );

      if (!response.ok) {
        console.error("TTS fetch failed:", response.status);
        return null;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      audioCacheRef.current.set(index, url);
      return url;
    } catch (err) {
      console.error("TTS error:", err);
      return null;
    }
  }, [SUPABASE_URL, SUPABASE_KEY]);

  const playLine = useCallback(async (index: number) => {
    if (stoppedRef.current || index >= subtitles.length) {
      setPlaying(false);
      setCurrentIndex(-1);
      setProgress(100);
      return;
    }

    setCurrentIndex(index);
    setProgress((index / subtitles.length) * 100);

    // Pre-fetch next line while playing current
    if (index + 1 < subtitles.length) {
      fetchAudio(index + 1);
    }

    if (muted) {
      // If muted, just show subtitles with timing
      await new Promise(r => setTimeout(r, 2000));
      if (!stoppedRef.current) playLine(index + 1);
      return;
    }

    const audioUrl = await fetchAudio(index);
    if (!audioUrl || stoppedRef.current) {
      // Fallback: advance after delay if audio fails
      await new Promise(r => setTimeout(r, 2000));
      if (!stoppedRef.current) playLine(index + 1);
      return;
    }

    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    audio.onended = () => {
      if (!stoppedRef.current) {
        // Small pause between lines
        setTimeout(() => playLine(index + 1), 400);
      }
    };

    audio.onerror = () => {
      if (!stoppedRef.current) {
        setTimeout(() => playLine(index + 1), 1000);
      }
    };

    try {
      await audio.play();
    } catch {
      if (!stoppedRef.current) {
        setTimeout(() => playLine(index + 1), 1000);
      }
    }
  }, [muted, fetchAudio]);

  const startPlayback = useCallback(async () => {
    setLoading(true);
    stoppedRef.current = false;
    setProgress(0);

    // Pre-fetch first two lines
    await fetchAudio(0);
    fetchAudio(1);

    setLoading(false);
    setPlaying(true);
    playLine(0);
  }, [fetchAudio, playLine]);

  const stopPlayback = useCallback(() => {
    stoppedRef.current = true;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setPlaying(false);
    setCurrentIndex(-1);
    setProgress(0);
  }, []);

  const togglePlay = () => {
    if (playing) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const toggleMute = () => {
    setMuted(m => !m);
    if (audioRef.current) {
      audioRef.current.muted = !muted;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stoppedRef.current = true;
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioCacheRef.current.forEach(url => URL.revokeObjectURL(url));
    };
  }, []);

  const currentSub = currentIndex >= 0 ? subtitles[currentIndex] : null;

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
            {loading ? "Connecting..." : playing ? "Call in progress..." : "Sample call demo"}
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
                  height: playing && !loading
                    ? [4, 8 + Math.random() * 16, 4]
                    : 4,
                }}
                transition={{
                  duration: 0.4 + Math.random() * 0.3,
                  repeat: playing && !loading ? Infinity : 0,
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>

          {/* Subtitle */}
          <div className="h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentSub && (
                <motion.div
                  key={currentIndex}
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
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
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
            disabled={loading}
            className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : playing ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneAgentPreview;
