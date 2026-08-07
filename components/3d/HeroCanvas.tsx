"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GlassSphere } from "./GlassSphere";
import { FloatingParticles } from "./FloatingParticles";

interface HeroCanvasProps {
  mousePos?: { x: number; y: number };
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ mousePos }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-white/10 bg-gradient-to-tr from-[#4F8CFF]/20 to-[#8B5CF6]/20 animate-pulse blur-xl" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.6} />
        <GlassSphere mousePos={mousePos} />
        <FloatingParticles count={150} />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
