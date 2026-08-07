"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Camera, Sparkles } from "lucide-react";

// SVG Tech Stack Icons for bottom row
const DockerIcon = () => (
  <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm0 2.716h2.118a.185.185 0 00.186-.186V6.29a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm-2.956 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.073a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm0 2.714h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H8.073a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.955 0h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186H5.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm5.91 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-8.866 0h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H2.163a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H2.163a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm21.677 3.524c-.328-.21-.926-.334-1.631-.334-.413 0-.853.056-1.28.167-.282-.705-.838-1.238-1.558-1.516l-.28-.108-.182.241c-.495.658-.802 1.488-.86 2.378-.04.606.05 1.22.26 1.8.082.23.187.45.31.66.19.32.42.61.68.86.64.62 1.54.98 2.5 1.01.21.01.42.01.63 0 1.95-.08 3.52-1.3 3.99-3.08.06-.23.09-.47.1-.71.01-.58-.17-1.12-.49-1.57z"/>
  </svg>
);

const KubernetesIcon = () => (
  <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L3.5 6.9v9.8L12 22l8.5-5.3V6.9L12 2zm0 2.3l6.2 3.6-2.5 4.3H8.3L5.8 7.9 12 4.3zm-6.5 5.5l2.5 4.3v5L5.5 15V9.8zm13 0V15l-2.5 4.1v-5l2.5-4.3z"/>
  </svg>
);

const FlutterIcon = () => (
  <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zM6 15.7L2.3 12l6.85-6.85L12.85 8.85 6 15.7zM14.314 24l-3.7-3.7 6.85-6.85 3.7 3.7L14.314 24z"/>
  </svg>
);

const ReactIcon = () => (
  <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/>
  </svg>
);

const AwsIcon = () => (
  <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
);

const PythonIcon = () => (
  <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.753h5.797v.826H3.844S0 5.768 0 11.914c0 6.14 3.344 5.922 3.344 5.922h1.996v-2.82c0-3.23 2.72-3.13 2.72-3.13h5.706s2.584.05 2.584-2.528V3.82S16.89 0 11.914 0zm-3.08 1.832a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm12.01 10.254s-1.996 0-1.996 2.822c0 3.228-2.72 3.13-2.72 3.13h-5.706s-2.584-.05-2.584 2.528v5.526s-.542 3.82 4.436 3.82c6.094 0 5.714-2.656 5.714-2.656l-.006-2.753h-5.797v-.826h8.156S24 18.232 24 12.086c0-6.14-3.344-5.922-3.344-5.922zm-3.766 10.082a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"/>
  </svg>
);

export const AboutHero: React.FC = () => {
  const [timeString, setTimeString] = useState("");
  const [photoMode, setPhotoMode] = useState<"real" | "vector">("real");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTimeString(now.toLocaleTimeString("en-US", options) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 lg:pt-36 pb-20 px-6 md:px-[90px] max-w-[1600px] mx-auto select-none overflow-visible z-20">
      <div className="grid grid-cols-1 lg:grid-cols-[56%_44%] gap-12 items-center">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          {/* Monochrome Glass Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121216]/90 border border-white/15 text-xs font-sans font-medium text-white/80 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
            <span className="tracking-wide">Namaskaram</span>
          </div>

          {/* Headline + Annotation */}
          <div className="mb-6 flex flex-wrap items-baseline gap-3">
            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold text-white tracking-[-3.5px] leading-[0.92] font-sans">
              I’m Adithyan
            </h1>
            <span 
              className="text-white/70 font-serif italic text-lg md:text-xl font-normal pointer-events-none"
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            >
              ~ or just Adithyan
            </span>
          </div>

          {/* Bio Description Paragraph */}
          <p className="text-base md:text-xl text-white/70 leading-[1.6] max-w-2xl mb-8 font-sans font-normal">
            DevOps Engineer & Flutter App Developer with a computer science background. I turn complex cloud architectures, automated CI/CD pipelines, and multi-tier codebases into clear, thoughtful digital experiences—from early deployment concepts to polished, launch-ready apps.
          </p>

          {/* Dashboard Location & Live Time Widget */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#121216]/80 border border-white/12 shadow-lg text-xs md:text-sm font-mono text-white/70 mb-9 backdrop-blur-md">
            <span className="flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-white/60" />
              Kerala, India
            </span>
            <span className="text-white/30">•</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-white/80 font-medium">{timeString || "12:18 AM IST"}</span>
          </div>

          {/* Contact Button + Handwritten Note */}
          <div className="relative flex items-center gap-4 mb-12">
            <a
              href="mailto:adithyanp2004@gmail.com"
              className="group inline-flex items-center gap-3.5 px-7 py-3.5 rounded-full bg-gradient-to-b from-[#242429] via-[#18181c] to-[#101014] border border-white/20 hover:border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:translate-y-[-2px] text-white font-sans text-sm md:text-base font-medium"
            >
              <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-xs font-semibold tracking-wider border border-white/15">Contact</span>
              <span className="text-white/90 group-hover:text-white transition-colors">adithyanp2004@gmail.com</span>
            </a>

            {/* Handwritten Note Annotation */}
            <div 
              className="text-white/70 font-serif italic text-base md:text-lg flex items-center gap-1.5 opacity-90 pointer-events-none hidden sm:flex"
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            >
              <span>I actually reply</span>
              <span className="text-xl">⤹</span>
            </div>
          </div>

          {/* Tech Stack Icons Row */}
          <div className="flex flex-col items-start gap-3">
            <span className="text-xs font-serif italic text-white/40 font-normal tracking-wide">my stack</span>
            <div className="flex items-center gap-3">
              {[
                { Icon: DockerIcon, name: "Docker" },
                { Icon: KubernetesIcon, name: "Kubernetes" },
                { Icon: AwsIcon, name: "AWS Cloud" },
                { Icon: FlutterIcon, name: "Flutter" },
                { Icon: ReactIcon, name: "React" },
                { Icon: PythonIcon, name: "Python" }
              ].map(({ Icon, name }, idx) => (
                <div 
                  key={idx} 
                  title={name}
                  className="w-11 h-11 rounded-2xl bg-[#121216]/90 border border-white/12 flex items-center justify-center shadow-md hover:border-white/35 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-md text-white/80"
                >
                  <Icon />
                </div>
              ))}
              <span className="text-xs font-mono text-white/40 ml-1.5">+ more</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Ultra-Sleek Glassmorphic Photo Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex flex-col items-center justify-center overflow-visible"
        >
          {/* Subtle Ambient Aura */}
          <div className="absolute w-[360px] h-[400px] bg-white/[0.02] blur-3xl rounded-full pointer-events-none -z-10" />

          {/* Main Photo Card Frame */}
          <div className="relative w-[340px] md:w-[385px] bg-[#121216]/95 p-4 md:p-5 rounded-3xl border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-transform duration-500 hover:rotate-0 group">
            
            {/* Top Metallic Clip Detail */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-sm border border-slate-500/60 shadow-md z-30" />

            {/* Photo Container */}
            <div className="relative w-full h-[340px] md:h-[390px] rounded-2xl overflow-hidden bg-[#0a0a0c] border border-white/10 shadow-inner">
              <AnimatePresence mode="wait">
                {photoMode === "real" ? (
                  <motion.img
                    key="real-photo"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    src="/assets/profile_real.jpg"
                    alt="Adithyan Pavithran"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:scale-102 transition-transform duration-700"
                  />
                ) : (
                  <motion.img
                    key="vector-art"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    src="/assets/profile.jpg"
                    alt="Adithyan Pavithran Vector"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                )}
              </AnimatePresence>

              {/* Bottom Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Sleek Floating Status Tag (Bottom Right) */}
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-xl flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
                <span className="text-[11px] font-mono text-white/90 font-medium tracking-wide">
                  Adithyan P · DevOps Lead
                </span>
              </div>
            </div>

            {/* Bottom Controls & Handwritten Label Row */}
            <div className="pt-4 flex items-center justify-between px-1">
              {/* Handwritten Image Label */}
              <span 
                className="text-white/80 text-xl font-serif tracking-wider font-medium"
                style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
              >
                {photoMode === "real" ? "adithyan_real.jpg" : "adithyan_art.jpg"}
              </span>

              {/* Interactive Image Switcher Pills */}
              <div className="flex items-center gap-1 bg-[#1c1c22] p-1 rounded-full border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setPhotoMode("real")}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-300 ${
                    photoMode === "real"
                      ? "bg-gradient-to-b from-[#38383e] to-[#202024] text-white shadow-md border border-white/20"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  <Camera className="w-3 h-3" />
                  <span>Real</span>
                </button>
                <button
                  onClick={() => setPhotoMode("vector")}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-300 ${
                    photoMode === "vector"
                      ? "bg-gradient-to-b from-[#38383e] to-[#202024] text-white shadow-md border border-white/20"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-white/70" />
                  <span>Art</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Centered Hint */}
      <div className="text-center mt-20">
        <p className="text-2xl md:text-3xl font-bold text-white tracking-tight font-sans">
          Every key reveals a little more about me.
        </p>
      </div>
    </section>
  );
};
