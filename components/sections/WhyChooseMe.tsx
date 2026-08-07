"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { WHY_CHOOSE_ME } from "@/constants/portfolioData";
import { Zap, Target, CheckCircle2, Users, BookOpen, TrendingUp, ShieldCheck } from "lucide-react";

export const WhyChooseMe: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-5 h-5 text-[#4F8CFF]" />,
    Target: <Target className="w-5 h-5 text-[#8B5CF6]" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#4F8CFF]" />,
    Users: <Users className="w-5 h-5 text-[#8B5CF6]" />,
    BookOpen: <BookOpen className="w-5 h-5 text-[#4F8CFF]" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#4F8CFF]" />,
  };

  return (
    <section id="why-me" className="py-24 relative z-10 bg-[#050505] overflow-hidden">
      {/* Glow background */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 ambient-glow-purple pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Core Values"
          title="Why Work With Me?"
          subtitle="Key engineering principles, problem-solving mindset, and dedication to building scalable software that drives real business value."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ME.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <GlassCard glowColor="purple" className="h-full p-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
