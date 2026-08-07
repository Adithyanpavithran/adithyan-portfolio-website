"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS, Project } from "@/constants/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const CATEGORIES = [
  { name: "All", id: "all", count: "14" },
  { name: "Projects", id: "projects", count: "06" },
  { name: "Mobile Apps", id: "mobile", count: "05" },
  { name: "DevOps & Cloud", id: "devops", count: "03" },
  { name: "AI & Tools", id: "ai", count: "04" },
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on active pill category
  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "projects") return true;
    if (selectedCategory === "mobile") return p.category.toLowerCase().includes("mobile") || p.stack.includes("Flutter");
    if (selectedCategory === "devops") return p.category.toLowerCase().includes("devops") || p.stack.includes("Docker") || p.stack.includes("Kubernetes");
    if (selectedCategory === "ai") return p.category.toLowerCase().includes("ai") || p.stack.includes("Python");
    return true;
  });

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#060606] overflow-hidden select-none">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          badge="Portfolio Showcase"
          title="Featured Projects & Code"
          subtitle="A curated collection of production cloud architectures, cross-platform mobile apps, CI/CD pipelines, and AI platforms."
        />

        {/* Top Category Filter Glass Pill Bar */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#121215]/85 border border-white/20 p-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-sans font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-b from-[#343439] via-[#26262a] to-[#1c1c1f] text-white border border-white/25 shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    isActive ? "bg-black/60 text-white border border-white/20" : "bg-white/10 text-white/60"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Projects Showcase List (Screenshot Glass Card Design) */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            // Soft monochrome/dark gradients for right preview frame
            const bgGradients = [
              "from-[#a7f3d0] via-[#6ee7b7] to-[#34d399]",
              "from-[#93c5fd] via-[#60a5fa] to-[#3b82f6]",
              "from-[#fde047] via-[#facc15] to-[#eab308]",
              "from-[#c084fc] via-[#a855f7] to-[#9333ea]"
            ];
            const currentGradient = bgGradients[idx % bgGradients.length];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="w-full"
              >
                {/* Main Glass Card Frame */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="group relative w-full bg-[#101014]/95 border border-white/15 rounded-[28px] md:rounded-[36px] p-6 md:p-8 lg:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-[46%_54%] gap-8 lg:gap-10 items-center cursor-pointer hover:border-white/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Left Column: Project Details & Spec Table */}
                  <div className="flex flex-col justify-between text-left space-y-6">
                    <div>
                      {/* Title & Featured Tag */}
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-3xl md:text-4xl font-black text-white font-sans tracking-tight group-hover:text-white/80 transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-white/10 text-white/90 border border-white/20">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans font-normal mb-8">
                        {project.description}
                      </p>

                      {/* Key Specification Table */}
                      <div className="border-t border-white/10 pt-4 space-y-3 font-sans text-xs md:text-sm">
                        {/* Status Row */}
                        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] items-center pb-3 border-b border-white/10">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 font-bold">STATUS</span>
                          <span className="text-white font-medium">Production Live · High Availability</span>
                        </div>

                        {/* Experience Row */}
                        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] items-center pb-3 border-b border-white/10">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 font-bold">EXPERIENCE</span>
                          <span className="text-white font-medium">{project.fullDescription.slice(0, 45)}...</span>
                        </div>

                        {/* Tags Row */}
                        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] items-center pt-1">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 font-bold">TAGS</span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 text-white/80 border border-white/15"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-4" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-sans text-xs font-bold hover:bg-slate-200 transition-all shadow-md"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 text-white font-sans text-xs font-semibold hover:bg-white/20 border border-white/15 transition-all"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Image Preview Canvas */}
                  <div className={`relative w-full h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br ${currentGradient} p-6 md:p-8 flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-700 shadow-2xl`}>
                    
                    {/* Floating Title Background Typography */}
                    <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-25">
                      <span className="text-6xl md:text-8xl lg:text-9xl font-black font-sans tracking-tighter text-slate-900 uppercase">
                        {project.title.split(" ")[0]}
                      </span>
                    </div>

                    {/* App / Website Screenshot Mockup Frame */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-slate-900/80 bg-slate-950 group-hover:scale-105 transition-transform duration-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
