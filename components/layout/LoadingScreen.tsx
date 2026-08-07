"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if loading animation already played in this browser session
    if (typeof window !== "undefined" && sessionStorage.getItem("hasLoadedPortfolio")) {
      setIsLoading(false);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("hasLoadedPortfolio", "true");
          }
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 22) + 12;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="quote-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-8 bg-[#050505] text-white select-none"
        >
          <div className="max-w-lg w-full text-center space-y-8">
            {/* Quote Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                “You lose your grip, and then you slip into the Masterpiece.”
              </p>
              <p className="text-xs font-mono tracking-widest text-[#4F8CFF] uppercase font-bold">
                — Leonard Cohen
              </p>
            </motion.div>

            {/* Progress Bar & Percentage */}
            <div className="space-y-2 pt-4">
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#4F8CFF] via-[#8B5CF6] to-white"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-white/50">
                <span>Loading</span>
                <span>{Math.min(progress, 100)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
