"use client";

import React from "react";
import { useLenis } from "@/hooks/useLenis";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { TopographyBackground } from "@/components/ui/TopographyBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ServiceMarquee } from "@/components/ui/ServiceMarquee";
import { PhotoMarquee } from "@/components/ui/PhotoMarquee";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { GithubSection } from "@/components/sections/Github";
import { Services } from "@/components/sections/Services";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  useLenis();

  return (
    <main className="relative min-h-screen bg-[#060606] text-white overflow-hidden">
      {/* Interactive Topography Canvas Background */}
      <TopographyBackground />

      {/* Interactive & Layout Utilities */}
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <ThemeToggle />
      <Navbar />

      {/* Main Hero & Ticker Unified Viewport Section */}
      <div className="relative w-full bg-transparent flex flex-col justify-between min-h-screen">
        <Hero />
        <ServiceMarquee />
      </div>

      {/* Remaining Portfolio Sections */}
      <PhotoMarquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubSection />
      <Services />
      <WhyChooseMe />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
