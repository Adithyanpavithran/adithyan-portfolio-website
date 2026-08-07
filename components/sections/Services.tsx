"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { SERVICES } from "@/constants/portfolioData";
import { Server, Cloud, Smartphone, Cpu, Terminal, Code, CheckCircle2 } from "lucide-react";

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Server: <Server className="w-6 h-6 text-[#4F8CFF]" />,
    Cloud: <Cloud className="w-6 h-6 text-[#8B5CF6]" />,
    Smartphone: <Smartphone className="w-6 h-6 text-[#4F8CFF]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#8B5CF6]" />,
    Terminal: <Terminal className="w-6 h-6 text-[#4F8CFF]" />,
    Code: <Code className="w-6 h-6 text-[#8B5CF6]" />,
  };

  return (
    <section id="services" className="py-24 relative z-10 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 ambient-glow-blue pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Specialized Solutions"
          title="Services & Capabilities"
          subtitle="Delivering end-to-end engineering excellence across DevOps, cloud infrastructure, cross-platform mobile apps, and scalable web solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard glowColor={idx % 2 === 0 ? "blue" : "purple"} className="h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-fit mb-6">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#4F8CFF] shrink-0" />
                      <span className="text-xs font-mono text-white/80">{feature}</span>
                    </div>
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
