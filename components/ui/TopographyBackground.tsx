"use client";

import React, { useEffect, useRef } from "react";

export const TopographyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animId = 0;
    let step = 0;

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    handleResize();

    const draw = () => {
      // Clear screen with custom background dark tone
      ctx.fillStyle = "#060606";
      ctx.fillRect(0, 0, width, height);

      // Smooth cursor interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      } else {
        mouse.x += (width / 2 - mouse.x) * 0.02;
        mouse.y += (height / 2 - mouse.y) * 0.02;
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 1;

      const lineSpacing = 18;
      const numLines = Math.ceil(height / lineSpacing) + 8;
      step += 0.005;

      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        const yBase = i * lineSpacing - 40;

        for (let xPos = 0; xPos <= width; xPos += 15) {
          const dx = xPos - mouse.x;
          const dy = yBase - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let mouseEffect = 0;
          const mouseRadius = 300;
          const mouseStrength = 25;
          
          if (dist < mouseRadius) {
            const factor = Math.cos((dist / mouseRadius) * Math.PI) * 0.5 + 0.5;
            mouseEffect = factor * mouseStrength;
          }

          const wave =
            Math.sin(xPos * 0.007 + step + i * 0.18) * 12 +
            Math.cos(xPos * 0.003 + step) * 8;

          const yPos = yBase + wave - mouseEffect;

          if (xPos === 0) {
            ctx.moveTo(xPos, yPos);
          } else {
            ctx.lineTo(xPos, yPos);
          }
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="topography-canvas"
      className="fixed inset-0 w-full h-full -z-10 bg-[#070708] pointer-events-none"
    />
  );
};
