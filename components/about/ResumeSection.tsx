"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight, ArrowUpRight, Download, Eye } from "lucide-react";
import { PERSONAL_INFO } from "@/constants/portfolioData";
import Link from "next/link";

export const ResumeSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-[90px] max-w-[1600px] mx-auto select-none relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column: Fanned Out 3D Paper Resume Sheets */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center h-[420px]"
        >
          {/* Back Paper Sheet (Rotated -12 deg) */}
          <div className="absolute w-[280px] md:w-[320px] h-[380px] md:h-[420px] bg-slate-100 rounded-xl shadow-2xl border border-slate-300 transform -rotate-12 translate-x-[-20px] translate-y-[10px] opacity-80 pointer-events-none" />

          {/* Middle Paper Sheet (Rotated -6 deg) */}
          <div className="absolute w-[280px] md:w-[320px] h-[380px] md:h-[420px] bg-slate-50 rounded-xl shadow-2xl border border-slate-300 transform -rotate-6 translate-x-[-10px] opacity-90 pointer-events-none" />

          {/* Top Main Resume Sheet (Straight) */}
          <Link
            href="/resume"
            className="relative w-[280px] md:w-[320px] h-[380px] md:h-[420px] bg-white rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-slate-200 p-6 flex flex-col justify-between text-slate-900 group hover:-translate-y-2 transition-transform duration-300 cursor-pointer block"
          >
            {/* Header section on paper */}
            <div>
              <div className="flex justify-between items-start border-b border-slate-200 pb-3 mb-3">
                <div>
                  <h4 className="text-xl font-bold font-sans tracking-tight text-slate-900 uppercase">
                    ADITHYAN PAVITHRAN
                  </h4>
                  <p className="text-[11px] font-mono font-medium text-slate-500">
                    Flutter Developer & Software Engineer
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-400">2026</span>
              </div>

              {/* Text content from resume */}
              <div className="space-y-2 text-[10px] text-slate-600 font-sans leading-tight">
                <p className="font-semibold text-slate-800">EDUCATION</p>
                <p className="text-slate-700 font-medium">B.Tech CSE — LBS College of Eng, Kasaragod</p>
                <p className="text-slate-500 font-medium">8.23 CGPA (First Class with Distinction)</p>
                
                <p className="font-semibold text-slate-800 pt-1.5">EXPERIENCE & PROJECTS</p>
                <div className="flex justify-between font-mono text-[9px] text-slate-700">
                  <span>Flutter Dev Intern — MaiTexa Tech</span>
                  <span>2025</span>
                </div>
                <div className="flex justify-between font-mono text-[9px] text-slate-700">
                  <span>Indoor Navigation — ESP32 & BLE</span>
                  <span>2025</span>
                </div>
                <div className="flex justify-between font-mono text-[9px] text-slate-700">
                  <span>Gather UP — Event Platform</span>
                  <span>2024</span>
                </div>

                <p className="font-semibold text-slate-800 pt-1.5">SKILLS & ACHIEVEMENTS</p>
                <p className="text-slate-500">Flutter, Firebase, ESP32, BLE, Python, SQL · F-Zone Cricket Championship Winner</p>
              </div>
            </div>

            {/* Bottom paper signature line */}
            <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>adithyan_pavithran_resume.pdf</span>
              <span className="text-slate-900 font-bold flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                <Eye className="w-3 h-3" /> View Resume ↗
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Right Column: CTA Copy & Action Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left"
        >
          {/* Document Icon */}
          <div className="w-12 h-12 rounded-2xl bg-[#16161a] border border-white/15 flex items-center justify-center mb-6 text-white/80 shadow-lg">
            <FileText className="w-6 h-6" />
          </div>

          {/* Headline */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6 font-sans">
            Grab my resume!
          </h3>

          {/* Description */}
          <p className="text-base md:text-lg text-white/75 leading-relaxed mb-8 max-w-lg font-sans">
            View or download my official resume featuring my B.Tech CSE degree at LBS College of Engineering (8.23 CGPA), MaiTexa Flutter internship, Indoor BLE Navigation project, and cricket championship achievements.
          </p>

          {/* Action Row Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* View Full Web Resume Button */}
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#16161a] border border-white/20 hover:border-white/40 text-white font-sans text-base font-medium shadow-lg hover:-translate-y-0.5 transition-all group"
            >
              <Eye className="w-4 h-4 text-white/70" />
              <span>View Resume</span>
              <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Adithyan_Pavithran_Resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-b from-[#343439] to-[#1c1c1f] border border-white/25 text-white font-sans text-base font-medium shadow-xl hover:-translate-y-0.5 transition-all group"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download PDF</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
