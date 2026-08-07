"use client";

import React from "react";
import { motion } from "framer-motion";

export const BeyondCodeSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-[90px] max-w-[1600px] mx-auto select-none relative z-10">
      {/* Section Header Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-sans">
          Beyond Code <span className="text-white/40 font-light">×</span> Systems
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left"
        >
          {/* Status Dot */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#18c76f] uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#18c76f] shadow-[0_0_10px_rgba(24,199,111,0.8)] animate-pulse" />
            <span>OFFLINE, STILL OBSERVING</span>
          </div>

          {/* Headline */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.02] mb-6 font-sans">
            Good ideas rarely begin at the desk.
          </h3>

          {/* Body Text */}
          <p className="text-base md:text-lg text-white/75 leading-relaxed mb-6 font-sans">
            Beyond engineering cloud clusters and mobile apps, I recharge by observing real-world systems, nature, photography, patterns, and the quiet human details that make technology feel meaningful.
          </p>

          <p className="text-base md:text-lg text-white/75 leading-relaxed mb-8 font-sans">
            Photography, open-source exploration, community work, and everyday tech conversations keep my problem-solving thinking curious—and give me fresh references to bring back into the engineering.
          </p>

          {/* Interactive Perspective Pill Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-[#141418] border border-white/15 text-xs font-sans text-white/90 hover:border-white/40 transition-all cursor-pointer font-medium">
              🏏 College Cricket Team (4 Years)
            </span>
            <span className="px-4 py-2 rounded-full bg-[#141418] border border-white/15 text-xs font-sans text-white/90 hover:border-white/40 transition-all cursor-pointer font-medium">
              🏆 Winner F-Zone Intercollegiate Cricket Championship
            </span>
            <span className="px-4 py-2 rounded-full bg-[#141418] border border-white/15 text-xs font-sans text-white/80 hover:border-white/40 transition-all cursor-pointer">
              Observe how people interact
            </span>
          </div>
        </motion.div>

        {/* Right Column: Ripped Paper Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center items-center overflow-visible"
        >
          {/* Ripped / Torn Paper Edges Container */}
          <div className="relative w-full max-w-[480px] p-4 rounded-3xl bg-[#141418] border border-white/12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group overflow-hidden">
            {/* Torn Paper Edge Overlay Effect */}
            <div className="relative w-full h-[300px] md:h-[360px] rounded-2xl overflow-hidden">
              <img
                src="/assets/profile_real.jpg"
                alt="Adithyan observing"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-105"
              />
              
              {/* Inner Shadow Frame Overlay */}
              <div 
                className="absolute inset-0 border-[12px] border-[#141418] pointer-events-none rounded-2xl"
                style={{
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.6)"
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
