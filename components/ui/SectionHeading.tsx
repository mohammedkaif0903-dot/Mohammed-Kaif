"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function SectionHeading({ title, subtitle, label }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {label && (
        <span className="inline-block px-3 py-1 text-sm font-mono tracking-widest uppercase text-[#00D4FF] border border-[#00D4FF]/20 rounded-full mb-4 bg-[#00D4FF]/5">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
      {subtitle && (
        <p className="text-white/40 max-w-lg mx-auto text-base md:text-lg">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent" />
    </motion.div>
  );
}
