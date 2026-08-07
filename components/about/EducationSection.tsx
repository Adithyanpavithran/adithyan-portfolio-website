"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Cpu, Globe, CheckCircle2 } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-[90px] max-w-[1600px] mx-auto select-none relative z-10">
      {/* Section Header Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-sans">
          Education <span className="text-white/40 font-light">×</span> Practice
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[66%_34%] gap-10 items-stretch max-w-6xl mx-auto">
        {/* Left Column Card: Minimalist Monochrome Glass Education Bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#14141a]/95 via-[#0e0e12]/95 to-[#08080a]/95 border border-white/15 hover:border-white/30 transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl text-left flex flex-col justify-between group overflow-hidden"
        >
          {/* Ambient Monochromatic Glow Effect inside Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.03] blur-3xl rounded-full pointer-events-none" />

          <div>
            {/* Top Bar: Monochrome Badge & Icon */}
            <div className="flex items-center justify-between mb-8">
              {/* Graduation Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/80 text-xs font-mono font-medium tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>B.TECH · EXPECTED GRADUATION APRIL 2026</span>
              </div>

              {/* Graduation Cap Glass Icon */}
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white/80 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-white/80" />
              </div>
            </div>

            {/* College Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2 font-sans">
              LBS College of Engineering
            </h3>

            {/* Degree & University Credentials */}
            <div className="flex flex-wrap items-center gap-3 text-sm md:text-base font-sans font-medium text-white/80 mb-2">
              <span>B.Tech in Computer Science and Engineering</span>
              <span className="text-xs font-mono bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 text-white/90">
                CGPA: 8.1 / 10
              </span>
            </div>

            <p className="text-xs md:text-sm font-sans text-white/50 mb-8 pb-6 border-b border-white/10 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-white/40" />
              <span>Kasaragod, Kerala, India</span>
            </p>

            {/* Accomplishments & Higher Secondary */}
            <div className="space-y-4">
              {/* Item 1 */}
              <div className="p-4 rounded-2xl bg-[#121216]/80 border border-white/10 hover:border-white/25 transition-all duration-300 flex items-start gap-4 shadow-md">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white/80 shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-white/80" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white font-sans">
                    Higher Secondary Education <span className="text-white/50 font-normal">· Govt Sanskrit HSS</span>
                  </h4>
                  <p className="text-xs text-white/60 font-sans mt-0.5">
                    Kozhikode, Kerala · Completed with <strong>98.01%</strong> Final Grade (2019 – 2021).
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-4 rounded-2xl bg-[#121216]/80 border border-white/10 hover:border-white/25 transition-all duration-300 flex items-start gap-4 shadow-md">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white/80 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white/80" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white font-sans">
                    Certifications & Specializations
                  </h4>
                  <p className="text-xs text-white/60 font-sans mt-0.5">
                    HP LIFE AI for Beginners (2025) · Cybersecurity Analyst Job Simulation by TATA (2025).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Monochrome Glass Bento Stat Tiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 justify-between"
        >
          {/* Stat Tile 1 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#14141a]/90 to-[#0c0c0f]/90 border border-white/12 hover:border-white/30 transition-all duration-300 shadow-xl text-left flex flex-col justify-between h-full group">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-4">
              B.Tech Academic Score
            </span>
            <div>
              <span className="text-5xl md:text-6xl font-bold text-white tracking-tight font-sans block group-hover:scale-105 transition-transform duration-300">
                8.1 <span className="text-xl font-normal text-white/40">/ 10</span>
              </span>
              <span className="text-xs font-sans text-white/70 mt-2 block font-medium">
                CGPA · LBS College of Engineering
              </span>
            </div>
          </div>

          {/* Stat Tile 2 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#14141a]/90 to-[#0c0c0f]/90 border border-white/12 hover:border-white/30 transition-all duration-300 shadow-xl text-left flex flex-col justify-between h-full group">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-4">
              Higher Secondary Grade
            </span>
            <div>
              <span className="text-5xl md:text-6xl font-bold text-white tracking-tight font-sans block group-hover:scale-105 transition-transform duration-300">
                98.01%
              </span>
              <span className="text-xs font-sans text-white/70 mt-2 block font-medium">
                Govt Sanskrit HSS, Kozhikode
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
