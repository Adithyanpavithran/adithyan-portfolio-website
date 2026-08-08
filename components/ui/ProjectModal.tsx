"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Project } from "@/constants/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        data-lenis-prevent
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-black/85 backdrop-blur-xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[85vh] my-auto overflow-y-auto glass-panel border border-white/15 rounded-3xl p-6 md:p-8 bg-[#0F0F12] shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image banner */}
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4F8CFF]/20 text-[#4F8CFF] border border-[#4F8CFF]/30 backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Tech stack tags */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8B5CF6]" /> Tech Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {project.highlights && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-3">
                  Key Technical Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#4F8CFF] shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-white/80">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="pt-4 pb-4 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all transform hover:scale-[1.02] shadow-lg shadow-white/10"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <FaGithub className="w-4 h-4" /> GitHub Repository
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
