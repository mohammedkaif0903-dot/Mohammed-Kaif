"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TechMarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export default function TechMarquee({
  items,
  direction = "left",
  speed = 20,
  className = "",
}: TechMarqueeProps) {
  const [duplicatedItems, setDuplicatedItems] = useState<string[]>([]);

  useEffect(() => {
    // Duplicate items to ensure smooth loop
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  return (
    <div
      className={`w-full overflow-hidden flex select-none [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] ${className}`}
    >

      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-nowrap gap-4 md:gap-8 pr-4 md:pr-8" // Add padding-right to match gap for smooth loop
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex-shrink-0">
            <span className="inline-block px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF]/90 font-mono text-xs md:text-sm tracking-wide shadow-[0_0_15px_rgba(0,212,255,0.05)] backdrop-blur-sm whitespace-nowrap hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300 transform hover:scale-105 cursor-default">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
