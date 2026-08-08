"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { STATS, PERSONAL_INFO } from "@/constants/portfolioData";
import { Award, Code2, Cpu, Globe, Rocket } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#050505] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 ambient-glow-purple pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="About Me"
          title="Architecting Digital Systems & Cloud Automation"
          subtitle="A passionate DevOps Engineer and Software Developer with a commitment to build high-performance applications and zero-downtime infrastructure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <GlassCard glowColor="blue" className="p-3">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src="/assets/profile.jpg"
                  alt="Adithyan Pavithran"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10">
                  <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-[#4F8CFF]">{PERSONAL_INFO.headline}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column Bio Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Passionate about Cloud Infrastructure, Mobile Engineering & AI Applications.
              </h3>
              <p className="text-base md:text-lg text-[#A0A0A0] leading-relaxed font-normal">
                "{PERSONAL_INFO.aboutBio}"
              </p>
            </div>

            {/* Feature highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-[#4F8CFF] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">DevOps & Cloud</h4>
                  <p className="text-xs text-[#A0A0A0]">Docker, Kubernetes, AWS, Nginx, CI/CD pipelines.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <Code2 className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">Flutter & Web</h4>
                  <p className="text-xs text-[#A0A0A0]">Cross-platform mobile apps, React & Next.js.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <GlassCard glowColor="purple" className="text-center p-6">
                <h4 className="text-3xl md:text-5xl font-black text-white mb-1 font-mono">
                  {stat.value}
                  <span className="text-[#4F8CFF]">{stat.suffix}</span>
                </h4>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#A0A0A0]">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
