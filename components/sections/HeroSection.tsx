"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Send } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const roles = [
  "Manual Testing Expert",
  "AI System Validator",
  "Regression Testing Specialist",
  "API Testing with Postman",
];

export default function HeroSection() {
  const typedText = useTypingAnimation(roles, 70, 35, 1800);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-2 sm:px-6 overflow-hidden pb-32">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#7B61FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-[#00D4FF]/80 border border-[#00D4FF]/20 rounded-full mb-8 bg-[#00D4FF]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse-glow" />
            Available for Hire
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          <span className="text-white">QUALITY FIRST</span>
          <br />
          <span className="gradient-text">PRECISION ALWAYS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.7 }}
          className="text-white/70 text-base md:text-lg mb-4 max-w-2xl mx-auto"
        >
          Junior QA Engineer | AI Healthcare &amp; Logistics Testing Specialist
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.9 }}
          className="h-8 mb-10"
        >
          <span className="font-mono text-[#00D4FF] text-sm md:text-base">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-black font-semibold text-base hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300"
          >
            View Projects
            <ArrowDown
              size={18}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="/MOHAMMEDKAIF-CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/70 text-base hover:border-[#00D4FF]/30 hover:text-[#00D4FF] transition-all duration-300"
          >
            <FileText size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/70 text-base hover:border-[#7B61FF]/30 hover:text-[#7B61FF] transition-all duration-300"
          >
            <Send size={18} />
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-[#00D4FF]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
