"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
}) => {
  const isCenter = align === "center";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className={`mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
    >


      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]"
      >
        {title.split(" ").map((word, i) => (
          <span key={i} className="inline-block mr-2">
            {word}
          </span>
        ))}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-[#A0A0A0] leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
