"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export const LanyardCard: React.FC = () => {
  // Drag coordinates
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Parallax translation coordinates (follows cursor slightly)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), { stiffness: 100, damping: 20 });
  const parallaxY = useSpring(useTransform(mouseY, [-1, 1], [-15, 15]), { stiffness: 100, damping: 20 });

  // Parallax card rotation values (tilt on hover)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const cardScale = useSpring(useMotionValue(1), { stiffness: 150, damping: 15 });
  const cardShadow = useTransform(cardScale, [1, 1.03], [
    "0 18px 50px rgba(0,0,0,0.25)",
    "0 24px 70px rgba(0,0,0,0.35)"
  ]);

  // Synchronous Framer Motion useTransform calculation for strap path
  const strapPath = useTransform([dragX, dragY], ([latestX, latestY]) => {
    const startX = 180; // horizontal center of 360px wide container
    const startY = -140; // start above viewport
    const endX = 180 + (latestX as number);
    const endY = 35 + (latestY as number);

    const cp1X = startX + (latestX as number) * 0.2;
    const cp1Y = 10 + (latestY as number) * 0.2;
    const cp2X = startX + (latestX as number) * 0.85;
    const cp2Y = 25 + (latestY as number) * 0.65;

    return `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
  });

  // Track global mouse position for parallax
  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      const normalizedX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const normalizedY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMoveGlobal);
    return () => window.removeEventListener("mousemove", handleMouseMoveGlobal);
  }, [mouseX, mouseY]);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXInCard = e.clientX - rect.left - width / 2;
    const mouseYInCard = e.clientY - rect.top - height / 2;

    const rX = -(mouseYInCard / (height / 2)) * 6;
    const rY = (mouseXInCard / (width / 2)) * 6;

    rotateX.set(rX);
    rotateY.set(rY);
    cardScale.set(1.03);
  };

  const handleCardMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    cardScale.set(1);
  };

  return (
    <motion.div 
      style={{ x: parallaxX, y: parallaxY, perspective: "1200px" }}
      className="relative w-full max-w-[360px] h-[500px] mx-auto select-none overflow-visible z-30"
    >
      {/* Ambient Float Idle Animation */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full relative flex flex-col items-center overflow-visible"
      >
        {/* 1. Dynamic SVG Strap (Width: 36px fabric ribbon) */}
        <svg
          viewBox="0 0 360 480"
          className="w-full h-[480px] absolute inset-0 pointer-events-none z-10 overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <motion.path id="lanyard-path-def" d={strapPath} />
          </defs>

          {/* White Fabric Ribbon Base */}
          <motion.path
            d={strapPath}
            fill="none"
            stroke="#FAF9F6"
            strokeWidth="36"
            strokeLinecap="square"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          />
          {/* Ribbon Border Stitching */}
          <motion.path
            d={strapPath}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="38"
            strokeDasharray="1 4"
          />

          {/* Repeating Vertical Text */}
          <text className="text-[10px] font-mono font-medium uppercase fill-gray-500 tracking-[3px]">
            <textPath href="#lanyard-path-def" startOffset="10%">
              ADITHYAN P • DEVOPS ENGINEER •
            </textPath>
          </text>
        </svg>

        {/* 2. Draggable Assembly & Hardware Clip */}
        <motion.div
          style={{ x: dragX, y: dragY, transformStyle: "preserve-3d" }}
          drag
          dragConstraints={{ left: -140, right: 140, top: -50, bottom: 180 }}
          dragElastic={0.2}
          dragSnapToOrigin
          whileDrag={{ scale: 1.02, cursor: "grabbing" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-30 cursor-grab active:cursor-grabbing pt-[15px] flex flex-col items-center group overflow-visible"
        >
          {/* Silver Metallic Buckle & Connector */}
          <div className="relative z-30 flex flex-col items-center pointer-events-none">
            {/* Buckle Sleeve */}
            <div className="w-[36px] h-[9px] bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-sm border border-slate-500/50 shadow-sm" />
            
            {/* Buckle Ring */}
            <div className="w-9 h-7 rounded-[7px] border-[3px] border-slate-300 bg-gradient-to-tr from-slate-400 via-white to-slate-300 shadow-md flex items-center justify-center ring-1 ring-slate-400/50 -mt-0.5">
              <div className="w-4.5 h-2 bg-[#060606] rounded-[2.5px] border border-slate-400" />
            </div>
            
            {/* Cylindrical Connector */}
            <div className="w-[11px] h-[18px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 rounded-full -mt-2 shadow-md border-x border-slate-500" />
            
            {/* Card Loop */}
            <div className="w-11 h-5.5 bg-[#FAF9F6] border-2 border-slate-200/80 border-b-0 rounded-t-xl -mt-1 flex items-center justify-center shadow-sm">
              <div className="w-4.5 h-1.8 bg-[#060606] rounded-full border border-slate-300" />
            </div>
          </div>

          {/* 3. Glossy Off-White ID Card Shell */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              scale: cardScale,
              boxShadow: cardShadow,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="w-[240px] md:w-[275px] lg:w-[305px] h-[330px] md:h-[380px] lg:h-[420px] bg-[#FAF9F6] border-2 border-black/[0.05] rounded-[22px] p-3.5 md:p-4 lg:p-4 shadow-2xl relative overflow-hidden flex flex-col justify-between -mt-1 transition-shadow duration-300 z-30"
          >
            {/* Sheen Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Profile Photo Frame */}
            <div className="relative w-full h-[180px] md:h-[225px] lg:h-[260px] rounded-[16px] overflow-hidden border border-slate-200/80 shadow-inner bg-slate-50">
              <img
                src="/assets/profile.jpg"
                alt="Adithyan Pavithran"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Name & Role */}
            <div className="pt-1 px-0.5 text-left flex flex-col gap-1">
              <h2 className="text-xl md:text-[26px] lg:text-[32px] font-bold tracking-tight lg:tracking-[-1px] text-black leading-[0.92] font-sans">
                ADITHYAN<br />PAVITHRAN
              </h2>

              {/* Sub-badge Pill */}
              <div className="mt-0.5 inline-block">
                <span className="h-7 px-3 rounded-full border-[1.5px] border-[#BBBBBB] inline-flex items-center justify-center text-[9.5px] font-mono font-bold tracking-[1.2px] text-gray-700 bg-transparent">
                  DEVOPS ENGINEER
                </span>
              </div>
            </div>

            {/* Black Bottom Banner Ribbon */}
            <div className="h-[32px] -mx-3.5 md:-mx-4 lg:-mx-4 -mb-3.5 md:-mb-4 lg:-mb-4 bg-black text-white flex items-center justify-center text-[9px] font-mono tracking-[1px] rounded-b-[20px]">
              <span>DEVOPS • CLOUD • FLUTTER • AI</span>
            </div>
          </motion.div>
        </motion.div>


      </motion.div>
    </motion.div>
  );
};
