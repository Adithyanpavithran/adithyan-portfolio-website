"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "white" | "none";
  hoverScale?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  glowColor = "purple",
  hoverScale = true,
  onClick,
}) => {
  const glowStyles = {
    blue: "hover:border-[#4F8CFF]/40 hover:shadow-[0_10px_40px_rgba(79,140,255,0.15)]",
    purple: "hover:border-[#8B5CF6]/40 hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]",
    white: "hover:border-white/40 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)]",
    none: "hover:border-white/20",
  };

  return (
    <motion.div
      whileHover={hoverScale ? { y: -6, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      className={`glass-panel glass-card-glow rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${glowStyles[glowColor]} ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
