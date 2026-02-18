"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold">
              <span className="text-[#00D4FF]">MK</span>
              <span className="text-white/30">.</span>
            </span>
          </motion.div>
          <p className="text-xs text-white/20 text-center">
            Designed & Built by Mohammed Kaif &middot; Quality First. Precision Always.
          </p>
          <p className="text-xs text-white/15 font-mono">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
