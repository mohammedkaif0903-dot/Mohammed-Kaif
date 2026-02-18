"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Project {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  testingAreas: string[];
  tools: string[];
  strategies: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "CareScribe",
    tagline: "AI-Powered Healthcare Tool",
    description:
      "Ensured all features like recording, summary generation, OPD sheet creation, and export worked as intended. Validated that new feature updates didn't break existing functionality.",
    icon: "🏥",
    color: "#00D4FF",
    testingAreas: [
      "Functional Testing (recording, summary generation)",
      "Regression Testing (feature updates)",
      "OPD Sheet Creation Validation",
      "Export Functionality",
    ],
    tools: ["Postman", "Redmine", "Excel", "Sauce Labs"],
    strategies: [
      "Black Box Testing",
      "Exploratory Testing",
      "Smoke & Sanity",
      "Regression Suite",
    ],
    highlights: [
      "Ensured all features worked as intended",
      "Validated new feature updates",
      "Maintained existing functionality stability",
    ],
  },
  {
    title: "SFL Worldwide",
    tagline: "Global Shipping Platform",
    description:
      "Performed system, integration, and cross-browser testing for booking, tracking & payment flows. Ensured compatibility across devices and validated edge cases with boundary value testing.",
    icon: "🌐",
    color: "#7B61FF",
    testingAreas: [
      "System & Integration Testing",
      "Cross-browser testing",
      "Booking, Tracking & Payment Flows",
      "Boundary Value Testing",
      "Edge Case Validation",
    ],
    tools: ["Sauce Labs", "Postman", "Redmine", "Excel"],
    strategies: [
      "Integration Testing",
      "Cross-Browser Matrix",
      "Payment Flow Testing",
      "Boundary Value Analysis",
    ],
    highlights: [
      "Ensured compatibility across devices",
      "Validated booking and payment flows",
      "Tested edge cases with boundary values",
    ],
  },
  {
    title: "Kuraray Chatbot",
    tagline: "Manufacturing Support Bot",
    description:
      "Tested user flow logic, NLP responses, and fallback handling for a global chemical brand.",
    icon: "🤖",
    color: "#00FFB2",
    testingAreas: [
      "User Flow Logic",
      "NLP Response Validation",
      "Fallback Handling",
      "Global Brand Support",
    ],
    tools: ["Postman", "Redmine", "Excel", "Google Docs"],
    strategies: [
      "NLP Testing",
      "Conversational Testing",
      "Globalization Testing",
      "Regression",
    ],
    highlights: [
      "Validated chatbot responses across multiple languages",
      "Identified gaps in fallback conversation handling",
      "Improved conversational accuracy through iterative testing",
    ],
  },
];

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.08)] relative overflow-hidden">
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.color}08, transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <span className="text-4xl">{project.icon}</span>
            <ExternalLink
              size={20}
              className="text-white/20 group-hover:text-[#00D4FF]/60 transition-colors"
            />
          </div>

          <h3 className="text-2xl font-bold text-white mb-1.5">
            {project.title}
          </h3>
          <p
            className="text-sm font-mono uppercase tracking-wider mb-4 font-medium"
            style={{ color: project.color + "99" }}
          >
            {project.tagline}
          </p>
          <p className="text-white/60 text-base leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 text-xs font-mono rounded border border-white/10 text-white/50 bg-white/5"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Testing areas preview */}
          <div className="flex flex-wrap gap-2">
            {project.testingAreas.slice(0, 4).map((area) => (
              <div
                key={area}
                className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-white/50"
              >
                <CheckCircle2
                  size={12}
                  className="flex-shrink-0"
                  style={{ color: project.color + "80" }}
                />
                <span>{area}</span>
              </div>
            ))}
            {project.testingAreas.length > 4 && (
              <span className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-white/30">
                +{project.testingAreas.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10"
      >
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-5">
            <span className="text-5xl">{project.icon}</span>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p
                className="text-base font-mono bg-white/5 px-2 py-1 rounded inline-block"
                style={{ color: project.color }}
              >
                {project.tagline}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 border-b border-white/5 pb-8">
          {project.description}
        </p>

        {/* Testing Areas */}
        <div className="mb-8">
          <h4 className="text-sm font-mono uppercase tracking-wider text-[#00D4FF] mb-4 font-bold">
            Key Testing Areas
          </h4>
          <div className="space-y-3">
            {project.testingAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 text-base text-white/80"
              >
                <CheckCircle2 size={18} style={{ color: project.color }} />
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* Test Strategy */}
        <div className="mb-8">
          <h4 className="text-sm font-mono uppercase tracking-wider text-[#00D4FF] mb-4 font-bold">
            Test Strategies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.strategies.map((s) => (
              <span
                key={s}
                className="px-3.5 py-1.5 text-sm rounded-lg border text-white/70"
                style={{
                  borderColor: project.color + "30",
                  backgroundColor: project.color + "08",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-8">
          <h4 className="text-sm font-mono uppercase tracking-wider text-[#00D4FF] mb-4 font-bold">
            Tools Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 text-sm rounded-lg border border-white/10 text-white/60 bg-white/5"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div>
          <h4 className="text-sm font-mono uppercase tracking-wider text-[#00D4FF] mb-4 font-bold">
            Key Highlights
          </h4>
          <div className="space-y-3">
            {project.highlights.map((h) => (
              <div
                key={h}
                className="flex items-start gap-3 text-base text-white/60"
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: project.color }}
                />
                {h}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Testing Excellence in Action"
          subtitle="Real-world QA projects across AI, Healthcare, Logistics, and Manufacturing"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
