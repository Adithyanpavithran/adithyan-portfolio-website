"use client";

import React from "react";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { PERSONAL_INFO } from "@/constants/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050505] pt-16 pb-12 text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-t from-[#8B5CF6]/10 via-[#4F8CFF]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#4F8CFF] to-[#8B5CF6] flex items-center justify-center text-white text-xs font-mono font-bold shadow-lg shadow-[#4F8CFF]/20">
                AP
              </span>
              <span>ADITHYAN PAVITHRAN</span>
            </a>
            <p className="text-sm text-[#A0A0A0] max-w-md leading-relaxed font-normal">
              DevOps Engineer & Software Developer dedicated to building scalable cloud infrastructure, automated workflows, and modern web & mobile experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#A0A0A0]">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Tech</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Technologies Credit */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Built With
            </h4>
            <ul className="space-y-2 text-sm text-[#A0A0A0]">
              <li>Next.js 15 (App Router)</li>
              <li>React 19 & TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion & GSAP</li>
              <li>Three.js (React Three Fiber)</li>
              <li>Lenis Smooth Scroll</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A0A0]">
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> by Adithyan Pavithran &copy; {new Date().getFullYear()}
          </p>

          <MagneticButton onClick={scrollToTop} strength={0.3}>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors">
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};
