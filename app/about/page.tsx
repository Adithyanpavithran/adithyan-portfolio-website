"use client";

import React from "react";
import { useLenis } from "@/hooks/useLenis";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { TopographyBackground } from "@/components/ui/TopographyBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

// Dedicated About Components
import { AboutHero } from "@/components/about/AboutHero";
import { EducationSection } from "@/components/about/EducationSection";
import { ProfessionalJourney } from "@/components/about/ProfessionalJourney";
import { BeyondCodeSection } from "@/components/about/BeyondCodeSection";
import { ResumeSection } from "@/components/about/ResumeSection";

export default function AboutPage() {
  useLenis();

  return (
    <main className="relative min-h-screen bg-[#060606] text-white overflow-x-hidden">
      {/* Interactive Topography Canvas Background */}
      <TopographyBackground />

      {/* Interactive & Layout Utilities */}
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <ThemeToggle />
      <Navbar />

      {/* Dedicated About Page Sections */}
      <AboutHero />
      <EducationSection />
      <ProfessionalJourney />
      <BeyondCodeSection />
      <ResumeSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
