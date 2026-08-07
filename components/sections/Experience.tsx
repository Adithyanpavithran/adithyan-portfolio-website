"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { EXPERIENCES } from "@/constants/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-[#050505] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 ambient-glow-purple pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          badge="Career Journey"
          title="Work Experience Timeline"
          subtitle="Proven track record in DevOps engineering, Linux system administration, cross-platform mobile development, and technical customer relations."
        />

        <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1 w-6 h-6 rounded-full bg-[#050505] border-2 border-[#4F8CFF] flex items-center justify-center group-hover:scale-125 group-hover:border-[#8B5CF6] transition-all">
                <div className="w-2 h-2 rounded-full bg-[#4F8CFF] group-hover:bg-[#8B5CF6]" />
              </div>

              <GlassCard glowColor="purple" className="p-6 md:p-8">
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#4F8CFF] font-semibold mt-0.5">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/70 font-normal">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A0A0A0]">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-[#4F8CFF]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-2.5 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#4F8CFF] shrink-0 mt-1" />
                      <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
