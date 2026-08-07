"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { TESTIMONIALS } from "@/constants/portfolioData";
import { Star, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative z-10 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 ambient-glow-blue pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Endorsements"
          title="What Leaders & Teammates Say"
          subtitle="Feedback from product leads, system architects, and clients I have collaborated with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard glowColor="blue" className="h-full p-8 flex flex-col justify-between relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 pointer-events-none" />

                <div className="space-y-4 mb-6">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Avatar and Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-[#4F8CFF] font-mono">{testimonial.role}</p>
                    <p className="text-[11px] text-[#A0A0A0]">{testimonial.company}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
