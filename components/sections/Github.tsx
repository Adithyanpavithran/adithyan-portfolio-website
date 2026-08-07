"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { GITHUB_STATS } from "@/constants/portfolioData";
import { GitCommit, Flame, FolderGit2, Code, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export const GithubSection: React.FC = () => {
  // Generate 52 weeks x 7 days pseudo contribution matrix
  const weeks = 40;
  const daysPerWeek = 7;
  const contributionGrid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: daysPerWeek }, (_, d) => {
      const rand = Math.random();
      if (rand > 0.75) return 4; // dark green / bright blue
      if (rand > 0.5) return 3;
      if (rand > 0.3) return 2;
      if (rand > 0.15) return 1;
      return 0; // empty
    })
  );

  const levelColors = [
    "bg-white/5",
    "bg-[#4F8CFF]/30",
    "bg-[#4F8CFF]/60",
    "bg-[#8B5CF6]/80",
    "bg-[#8B5CF6]",
  ];

  return (
    <section id="github" className="py-24 relative z-10 bg-[#050505] overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-10 w-96 h-96 ambient-glow-purple pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Open Source & Activity"
          title="GitHub Contribution Graph"
          subtitle="Real-time open source contributions, repository metrics, language breakdown, and continuous integration activity."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <GlassCard glowColor="blue" className="p-6 text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#4F8CFF]/10 text-[#4F8CFF] mx-auto mb-3">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <h4 className="text-3xl font-extrabold text-white font-mono">{GITHUB_STATS.totalRepos}</h4>
            <p className="text-xs uppercase tracking-wider text-[#A0A0A0] mt-1 font-semibold">Total Repositories</p>
          </GlassCard>

          <GlassCard glowColor="purple" className="p-6 text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] mx-auto mb-3">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="text-3xl font-extrabold text-white font-mono">{GITHUB_STATS.streakDays} Days</h4>
            <p className="text-xs uppercase tracking-wider text-[#A0A0A0] mt-1 font-semibold">Current Streak</p>
          </GlassCard>

          <GlassCard glowColor="blue" className="p-6 text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#4F8CFF]/10 text-[#4F8CFF] mx-auto mb-3">
              <GitCommit className="w-5 h-5" />
            </div>
            <h4 className="text-3xl font-extrabold text-white font-mono">{GITHUB_STATS.totalCommits}</h4>
            <p className="text-xs uppercase tracking-wider text-[#A0A0A0] mt-1 font-semibold">Total Commits</p>
          </GlassCard>

          <GlassCard glowColor="purple" className="p-6 text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] mx-auto mb-3">
              <FaGithub className="w-5 h-5" />
            </div>
            <h4 className="text-3xl font-extrabold text-white font-mono">{GITHUB_STATS.totalContributions}</h4>
            <p className="text-xs uppercase tracking-wider text-[#A0A0A0] mt-1 font-semibold">Yearly Contributions</p>
          </GlassCard>
        </div>

        {/* Contribution Graph Heatmap Panel */}
        <GlassCard glowColor="blue" className="p-6 md:p-8 mb-12">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <FaGithub className="w-6 h-6 text-white" />
              <div>
                <h3 className="text-lg font-bold text-white">@{GITHUB_STATS.username}</h3>
                <p className="text-xs text-[#A0A0A0]">1,428 contributions in the last year</p>
              </div>
            </div>
            <a
              href={`https://github.com/${GITHUB_STATS.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Matrix Heatmap */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[700px] justify-between">
              {contributionGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <motion.div
                      key={dIdx}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (wIdx * 7 + dIdx) * 0.002 }}
                      className={`w-3.5 h-3.5 rounded-sm ${levelColors[level]} transition-colors hover:scale-125`}
                      title={`${level * 3} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Top Languages Distribution */}
        <GlassCard glowColor="purple" className="p-6 md:p-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-[#8B5CF6]" /> Top Programming Languages
          </h3>

          {/* Multi-segmented Bar */}
          <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex mb-6">
            {GITHUB_STATS.topLanguages.map((lang) => (
              <div
                key={lang.name}
                className="h-full"
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>

          {/* Legend Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {GITHUB_STATS.topLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: lang.color }} />
                <span className="text-xs font-mono text-white/90 font-medium">{lang.name}</span>
                <span className="text-[11px] font-mono text-[#A0A0A0] ml-auto">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
