"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { 
  Search, 
  ListChecks, 
  Code2, 
  CheckCircle2, 
  BarChart3,
  Server,
  Cloud,
  Cpu,
  Terminal,
  Database,
  Layers,
  Boxes,
  Smartphone,
  GitBranch,
  Activity
} from "lucide-react";

// Official Tech Brand SVG Logos
const DockerLogo = () => (
  <svg className="w-5 h-5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm0 2.716h2.118a.185.185 0 00.186-.186V6.29a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm-2.956 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.073a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm0 2.714h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H8.073a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.955 0h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186H5.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm5.91 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-8.866 0h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H2.163a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H2.163a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm21.677 3.524c-.328-.21-.926-.334-1.631-.334-.413 0-.853.056-1.28.167-.282-.705-.838-1.238-1.558-1.516l-.28-.108-.182.241c-.495.658-.802 1.488-.86 2.378-.04.606.05 1.22.26 1.8.082.23.187.45.31.66.19.32.42.61.68.86.64.62 1.54.98 2.5 1.01.21.01.42.01.63 0 1.95-.08 3.52-1.3 3.99-3.08.06-.23.09-.47.1-.71.01-.58-.17-1.12-.49-1.57z"/>
  </svg>
);

const KubernetesLogo = () => (
  <svg className="w-5 h-5 text-[#326CE5]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L3.5 6.9v9.8L12 22l8.5-5.3V6.9L12 2zm0 2.3l6.2 3.6-2.5 4.3H8.3L5.8 7.9 12 4.3zm-6.5 5.5l2.5 4.3v5L5.5 15V9.8zm13 0V15l-2.5 4.1v-5l2.5-4.3z"/>
  </svg>
);

const FlutterLogo = () => (
  <svg className="w-5 h-5 text-[#54C5F8]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zM6 15.7L2.3 12l6.85-6.85L12.85 8.85 6 15.7zM14.314 24l-3.7-3.7 6.85-6.85 3.7 3.7L14.314 24z"/>
  </svg>
);

const AwsLogo = () => (
  <svg className="w-5 h-5 text-[#FF9900]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
);

const ReactLogo = () => (
  <svg className="w-5 h-5 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/>
  </svg>
);

const PythonLogo = () => (
  <svg className="w-5 h-5 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.753h5.797v.826H3.844S0 5.768 0 11.914c0 6.14 3.344 5.922 3.344 5.922h1.996v-2.82c0-3.23 2.72-3.13 2.72-3.13h5.706s2.584.05 2.584-2.528V3.82S16.89 0 11.914 0zm-3.08 1.832a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm12.01 10.254s-1.996 0-1.996 2.822c0 3.228-2.72 3.13-2.72 3.13h-5.706s-2.584-.05-2.584 2.528v5.526s-.542 3.82 4.436 3.82c6.094 0 5.714-2.656 5.714-2.656l-.006-2.753h-5.797v-.826h8.156S24 18.232 24 12.086c0-6.14-3.344-5.922-3.344-5.922zm-3.766 10.082a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"/>
  </svg>
);

const FirebaseLogo = () => (
  <svg className="w-5 h-5 text-[#FFCA28]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.89 15.672L6.16 2.45a.8.8 0 0 1 1.488-.235l2.637 5.011L3.89 15.672zm15.718-2.735L16.29 4.31a.8.8 0 0 0-1.428-.198l-2.73 5.166 7.476 3.659zM12 10.224l-2.63-5.01-6.732 12.72L12 22l9.362-4.066L12 10.224z"/>
  </svg>
);

const GithubLogo = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: any;
  toolLogos: Array<{ name: string; icon: React.FC }>;
}

const WORKFLOW_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Research & Synthesis",
    description: "Talk to users, analyze data to find real problems. Then use AI to surface patterns and insights at scale.",
    icon: Search,
    toolLogos: [
      { name: "AWS", icon: AwsLogo },
      { name: "Python", icon: PythonLogo },
      { name: "GitHub", icon: GithubLogo },
    ],
  },
  {
    number: "02",
    title: "Prioritize & Architect",
    description: "Align business and user needs. Design scalable cloud infrastructure, multi-tier architectures, and decide what to build first and why.",
    icon: ListChecks,
    toolLogos: [
      { name: "Kubernetes", icon: KubernetesLogo },
      { name: "Docker", icon: DockerLogo },
      { name: "AWS", icon: AwsLogo },
    ],
  },
  {
    number: "03",
    title: "Design & Prototype",
    description: "Design end-to-end flows, then build a functional prototype in code – not just Figma – to validate ideas fast.",
    icon: Code2,
    toolLogos: [
      { name: "Flutter", icon: FlutterLogo },
      { name: "React", icon: ReactLogo },
      { name: "Firebase", icon: FirebaseLogo },
    ],
  },
  {
    number: "04",
    title: "Test & Iterate",
    description: "Iterate with real users and stakeholders. Refine CI/CD deployment pipelines until the solution is bulletproof.",
    icon: CheckCircle2,
    toolLogos: [
      { name: "Docker", icon: DockerLogo },
      { name: "GitHub", icon: GithubLogo },
      { name: "Python", icon: PythonLogo },
    ],
  },
  {
    number: "05",
    title: "Ship & Measure",
    description: "Dev collab or own the build. Then track adoption, system health, task completion, and performance metrics to close the loop.",
    icon: BarChart3,
    toolLogos: [
      { name: "Kubernetes", icon: KubernetesLogo },
      { name: "AWS", icon: AwsLogo },
      { name: "Github", icon: GithubLogo },
      { name: "React", icon: ReactLogo },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[#060608] overflow-hidden select-none">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/3 right-0 w-96 h-96 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)"
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          badge="Technical Arsenal"
          title="Skills & Engineering Process"
          subtitle="Comprehensive expertise across DevOps infrastructure, cloud platforms, cross-platform mobile development, and modern web frameworks."
        />

        {/* Vertical Timeline Container */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Central Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent -translate-x-1/2 z-0" />

          <div className="space-y-16 md:space-y-24 relative z-10">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative flex flex-col md:flex-row items-center group"
                >
                  {/* Central Node Badge (Middle on Desktop) */}
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20 mb-6 md:mb-0">
                    {/* Dark Rounded Container */}
                    <div className="w-16 h-16 rounded-2xl bg-[#121215] border border-white/15 flex flex-col items-center justify-center shadow-2xl group-hover:border-white/40 transition-colors">
                      <StepIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      <span className="text-[11px] font-mono font-bold text-white/50 group-hover:text-white/80 mt-1">
                        {step.number}
                      </span>
                    </div>

                    {/* Hollow Circle Bullet on Line */}
                    <div className="hidden md:block absolute -left-6 w-3 h-3 rounded-full border-2 border-white/30 bg-[#060608] group-hover:border-white transition-colors" />
                  </div>

                  {/* Content Column (Alternating Left & Right) */}
                  <div
                    className={`w-full md:w-[42%] text-left ${
                      isEven ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                    }`}
                  >
                    <div className="p-6 md:p-8 rounded-3xl bg-[#101014]/60 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl backdrop-blur-md">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-sans">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6 font-sans font-normal">
                        {step.description}
                      </p>

                      {/* Tool / Brand Icons Row */}
                      <div className="flex items-center gap-3 pt-2">
                        {step.toolLogos.map((tool, i) => {
                          const ToolLogo = tool.icon;
                          return (
                            <div
                              key={i}
                              title={tool.name}
                              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all flex items-center justify-center shrink-0"
                            >
                              <ToolLogo />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
