"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";

interface Experience {
  id: string;
  badge: string;
  company: string;
  role: string;
  period: string;
  isOngoing?: boolean;
  bullets: string[];
}

const EXPERIENCES: Experience[] = [
  {
    id: "btransport",
    badge: "BT",
    company: "Btransport Solutions Limited Private",
    role: "Customer Support Executive",
    period: "2026 — Present",
    isOngoing: true,
    bullets: [
      "Providing technical customer support, issue resolution, and client communications for transport and logistics platforms.",
      "Collaborating with technical operations teams to troubleshoot service workflows, escalate tickets, and optimize client satisfaction.",
      "Managing customer query resolution SLA goals, incident tracking, and platform operational documentation."
    ]
  },
  {
    id: "freelance",
    badge: "AD",
    company: "Freelance",
    role: "DevOps Engineer & Mobile App Architect",
    period: "2022 — Ongoing",
    isOngoing: true,
    bullets: [
      "Architect cloud deployment pipelines, Kubernetes clusters, and Nginx reverse proxies for client platforms.",
      "Develop cross-platform mobile applications in Flutter and high-performance Web applications.",
      "Automate CI/CD pipelines using GitHub Actions, Docker containers, and Linux Bash scripting.",
      "Adapt each infrastructure build to meet tight security compliance, performance, and scaling goals."
    ]
  },
  {
    id: "navi-ai",
    badge: "NA",
    company: "Navi AI",
    role: "Lead AI Systems & Mobile App Architect",
    period: "2025 — 2026",
    bullets: [
      "Architected Navi AI, an AI-powered navigation application combining intelligent route planning, real-time guidance, and voice interactions.",
      "Built with Flutter, Firebase, Google Maps API, and AI capabilities (Gemini / LLM APIs) to deliver smart contextual route recommendations.",
      "Integrated voice-assisted navigation, interactive mapping services, and fast, optimized real-time location telemetry."
    ]
  },
  {
    id: "gather-up",
    badge: "GU",
    company: "Gather Up",
    role: "Lead Mobile App Architect & Developer",
    period: "2024 — 2025",
    bullets: [
      "Architected Gather Up, a cross-platform event management and social networking application built with Flutter and Firebase.",
      "Engineered real-time Firestore database synchronization, secure Firebase Auth, Cloud Storage, and instant push notifications.",
      "Implemented event discovery with search and category filters, RSVP attendee management, and a modern responsive mobile experience."
    ]
  },
  {
    id: "maitexa",
    badge: "MX",
    company: "Maitexa Technologies",
    role: "Flutter Developer Intern",
    period: "2022 — 2023",
    bullets: [
      "Built responsive mobile UI screens in Flutter and integrated RESTful backend APIs with Firebase.",
      "Optimized app launch speeds, state management flows, and reduced memory bottlenecks."
    ]
  }
];

export const ProfessionalJourney: React.FC = () => {
  const [viewMode, setViewMode] = useState<"list" | "timeline">("list");
  const [expandedId, setExpandedId] = useState<string>("btransport");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section className="py-20 px-6 md:px-[90px] max-w-[1600px] mx-auto select-none relative z-10">
      {/* Section Top Header Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-sans">
          Professional <span className="text-white/40 font-light">×</span> Experience
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Row Header + View Toggle Switch */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-sans">
            My professional journey
          </h3>

          {/* Glass Pill Toggle Button */}
          <div className="flex items-center p-1 rounded-full bg-[#16161a] border border-white/15 text-xs font-mono">
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-gradient-to-b from-[#343439] to-[#1c1c1f] text-white shadow-md border border-white/20"
                  : "text-white/50 hover:text-white"
              }`}
            >
              list
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                viewMode === "timeline"
                  ? "bg-gradient-to-b from-[#343439] to-[#1c1c1f] text-white shadow-md border border-white/20"
                  : "text-white/50 hover:text-white"
              }`}
            >
              timeline
            </button>
          </div>
        </div>

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {EXPERIENCES.map((exp) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div
                  key={exp.id}
                  className="rounded-2xl bg-[#101014]/90 border border-white/12 overflow-hidden transition-all duration-300 shadow-xl text-left"
                >
                  {/* Card Main Row (Clickable Header) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-5 md:p-6 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {/* Monochrome Avatar / Badge Icon */}
                      <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xs font-bold font-mono text-white shrink-0 shadow-md">
                        {exp.badge}
                      </div>

                      <div className="text-left">
                        <h4 className="text-lg md:text-xl font-bold text-white font-sans">
                          {exp.company}
                        </h4>
                        <p className="text-sm text-white/60 font-sans">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-xs md:text-sm font-mono text-white/50 hidden sm:inline-block">
                        {exp.period}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Accordion Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-2 text-left border-t border-white/5"
                      >
                        <ul className="space-y-2.5 text-sm text-white/75 font-sans leading-relaxed pl-14">
                          {exp.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="text-white/60 font-bold mt-0.5">✦</span>
                              <span className="text-white/80">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* Timeline View */}
        {viewMode === "timeline" && (
          <div className="relative pl-6 md:pl-8 border-l border-white/15 space-y-10 text-left my-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Bullet Node */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#16161a] border-2 border-white/80 group-hover:scale-125 transition-transform" />

                <div className="p-6 rounded-2xl bg-[#101014]/90 border border-white/10 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="text-xl font-bold text-white font-sans">
                      {exp.company}
                    </h4>
                    <span className="text-xs font-mono text-white/80 bg-white/10 border border-white/20 px-3 py-1 rounded-full w-max">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white/70 mb-4 font-sans">
                    {exp.role}
                  </p>
                  <ul className="space-y-2 text-sm text-white/70 font-sans">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-white/60 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
