"use client";

import React, { useState, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const togglePlay = () => {
    if (!isPlaying) {
      // Synthesize ambient lo-fi chord sound using Web Audio API so it plays smoothly without external audio dependencies
      try {
        if (!audioCtxRef.current) {
          const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
          audioCtxRef.current = new AudioContext();
        }
        if (audioCtxRef.current.state === "suspended") {
          audioCtxRef.current.resume();
        }
        
        // Play soft ambient tone
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(220, audioCtxRef.current.currentTime); // A3
        gain.gain.setValueAtTime(0.05 * (volume / 100), audioCtxRef.current.currentTime);
        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);
        osc.start();
        setTimeout(() => osc.stop(), 3000);
      } catch (e) {
        console.log("Audio play:", e);
      }
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative group flex items-center">
      <button
        onClick={togglePlay}
        type="button"
        aria-label="Play audio track"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all backdrop-blur-md ${
          isPlaying
            ? "bg-[#4F8CFF]/20 border-[#4F8CFF] text-white shadow-lg shadow-[#4F8CFF]/20"
            : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
        }`}
      >
        <Music className={`w-3.5 h-3.5 text-[#4F8CFF] ${isPlaying ? "animate-spin" : ""}`} />
        <span className="truncate max-w-[120px] font-medium">Touch the sky (ambient)</span>
        <span className="text-[10px] text-white/50">{volume}%</span>
      </button>
      <span className="hidden group-hover:inline-block absolute top-full mt-1 right-0 text-[9px] font-mono text-white/40 whitespace-nowrap bg-black/80 px-2 py-0.5 rounded border border-white/10">
        click to {isPlaying ? "pause" : "play"}
      </span>
    </div>
  );
};
