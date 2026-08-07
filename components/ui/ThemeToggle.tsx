"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("sreedev-theme");
    if (saved === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("sreedev-theme", next);
    if (next === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        type="button"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="p-3.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-2xl shadow-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-400 group-hover:-rotate-12 transition-transform" />
        )}
      </button>
    </div>
  );
};
