"use client";

import React from "react";
import { motion as motionFramer } from "framer-motion";
import { PERSONAL_INFO } from "@/constants/portfolioData";
import { LanyardCard } from "@/components/ui/LanyardCard";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center pt-20 lg:pt-24 pb-8 lg:pb-12 overflow-visible bg-transparent z-20"
    >
      {/* Subtle radial gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(79, 140, 255, 0.08) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)"
        }}
      />

      {/* Grid container matching specs */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-[90px] py-2 lg:py-4 grid grid-cols-1 lg:grid-cols-[55%_45%] items-center z-10 relative overflow-visible">
        
        {/* Left Column (55% Width, Text Content) */}
        <motionFramer.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[640px] flex flex-col items-start text-left mt-2 lg:mt-0"
        >
          {/* Badge: DevOps Engineer x Flutter Developer */}
          <div className="flex items-center gap-[10px] text-[15px] font-sans font-medium text-[#c6cde0] mb-[10px]">
            <span className="w-2 h-2 rounded-full bg-[#18c76f] shadow-[0_0_10px_rgba(24,199,111,0.8)] animate-pulse shrink-0" />
            <span>DevOps Engineer × Flutter Developer</span>
          </div>

          {/* Headline (Four lines, scaled to fit fold) */}
          <h1 
            style={{ fontSize: "clamp(44px, 4vw, 68px)", letterSpacing: "-3.5px", lineHeight: 0.92, fontWeight: 500 }}
            className="font-sans text-white w-full text-left mb-[14px] select-none"
          >
            Building <br />
            Scalable <br />
            Cloud Solutions <br />
            & Modern Apps
          </h1>

          {/* Description Paragraph (Max-width 620px) */}
          <p 
            style={{ fontSize: "clamp(14px, 1vw, 16px)", color: "rgba(255, 255, 255, 0.72)", lineHeight: 1.5 }}
            className="max-w-[620px] font-sans font-normal text-left mb-[18px]"
          >
            I started with cloud automation, Linux administration, and mobile engineering. Today, I turn that foundation into production-grade infrastructure, cross-platform apps, and digital experiences built with purpose.
          </p>

          {/* Action Row Gap 24px */}
          <div className="flex items-center gap-[24px]">
            {/* Primary Capsule Button */}
            <a
              href="/resume.pdf"
              download="Adithyan_Pavithran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "radial-gradient(circle at 20% 0, rgba(255, 255, 255, 0.14), transparent 38%), linear-gradient(145deg, rgba(38, 38, 41, 0.94), rgba(6, 6, 7, 0.96))",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 13px 34px rgba(0, 0, 0, 0.32), inset 0 1px rgba(255, 255, 255, 0.24), inset 0 -1px rgba(0, 0, 0, 0.6), 0 0 24px rgba(255, 255, 255, 0.02)",
                letterSpacing: "-0.5px",
                fontSize: "16px",
                height: "56px",
                width: "195px"
              }}
              className="inline-flex items-center justify-between pl-7 pr-2.5 rounded-full text-white font-sans font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[inset_0_1px_rgba(255,255,255,0.34),0_12px_30px_rgba(0,0,0,0.4)] group"
            >
              <span>Download Me</span>
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-white text-base">
                →
              </span>
            </a>

            {/* Secondary Underlined Button */}
            <button
              onClick={() => scrollToSection("#projects")}
              style={{
                letterSpacing: "-0.5px",
                fontSize: "16px",
                padding: "10px 0"
              }}
              className="flex items-center gap-1.5 font-sans font-medium text-[#edf2ff] hover:text-white border-b border-[#d3dcf3]/35 hover:border-white transition-colors duration-300 group"
            >
              <span>Explore projects</span>
              <span className="text-[#edf2ff]/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[14px]">
                ↗
              </span>
            </button>
          </div>
        </motionFramer.div>

        {/* Right Column (45% Width, Floating Lanyard Badge) */}
        <motionFramer.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full flex justify-center items-center relative mt-6 lg:mt-0 overflow-visible"
        >
          <LanyardCard />
        </motionFramer.div>

      </div>
    </section>
  );
};
