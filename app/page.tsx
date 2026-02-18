"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AnimatedGrid = dynamic(() => import("@/components/AnimatedGrid"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"), { ssr: false });
const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection"), { ssr: false });
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), { ssr: false });
const Galaxy = dynamic(() => import("@/components/ui/Galaxy"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="fixed inset-0 z-[-1]">
        <Galaxy
          className="w-full h-full"
          starSpeed={0.5}
          density={1.5}
          twinkleIntensity={0.5}
        />
      </div>
      <AnimatedGrid />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
