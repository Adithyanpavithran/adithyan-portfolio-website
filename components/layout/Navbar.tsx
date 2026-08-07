"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MusicPlayer } from "@/components/ui/MusicPlayer";

const NAV_ITEMS = [
  { name: "Home", href: "/", id: "home" },
  { name: "About", href: "/about", id: "about" },
  { name: "Works", href: "/#projects", id: "works" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("home");
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    if (pathname === "/about") {
      setActiveTab("about");
      return;
    }

    const handleScroll = () => {
      // Pause scrollspy while smooth scrolling via navbar clicks
      if (isNavigatingRef.current) return;

      const scrollPosition = window.scrollY + 300;

      const projectsEl = document.querySelector("#projects");
      const contactEl = document.querySelector("#contact");

      const projectsTop = projectsEl ? (projectsEl as HTMLElement).offsetTop : 800;
      const contactTop = contactEl ? (contactEl as HTMLElement).offsetTop : 3000;

      // Bottom of page check
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 120) {
        setActiveTab("contact");
      } else if (scrollPosition >= contactTop - 100) {
        setActiveTab("contact");
      } else if (scrollPosition >= projectsTop - 250) {
        setActiveTab("works");
      } else {
        setActiveTab("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent, href: string, id: string) => {
    setActiveTab(id);
    isNavigatingRef.current = true;
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1000);

    if (pathname === "/") {
      if (id === "home" || href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (href.includes("#")) {
        e.preventDefault();
        const targetId = href.split("#")[1];
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pt-[30px] pb-4 px-6 md:px-12 lg:px-[90px] flex items-center justify-between select-none pointer-events-auto">
      {/* Brand Logo (Far Left) */}
      <Link
        href="/"
        onClick={(e) => handleNavClick(e, "/", "home")}
        className="text-lg font-black tracking-tight text-white font-sans hover:opacity-80 transition-opacity"
      >
        DEV.DESIGNS
      </Link>

      {/* Center Desktop Navigation Glass Pill */}
      <nav 
        style={{ height: "64px", borderRadius: "999px", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
        className="hidden md:flex items-center gap-1.5 bg-[#121215]/85 border border-white/20 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)] absolute left-1/2 -translate-x-1/2"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              className={`px-8 py-2.5 rounded-full text-[15px] font-sans font-medium transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-b from-[#343439] via-[#26262a] to-[#1c1c1f] text-white border border-white/25 shadow-lg shadow-black/50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Right Music Player & Status Control (Far Right) */}
      <div className="flex items-center gap-6">
        <span className="hidden sm:flex items-center gap-1.5 text-xs font-sans font-medium text-white/50 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for Work
        </span>
        <MusicPlayer />
      </div>
    </header>
  );
};
