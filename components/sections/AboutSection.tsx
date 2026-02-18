"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TechMarquee from "@/components/ui/TechMarquee"; // Ensure this matches the file path

const skills = [
  "Manual Testing",
  "Test Case Design",
  "Defect Tracking",
  "Client Coordination",
  "API Testing (Postman)",
  "Cross Browser Testing",
  "Sauce Labs",
  "Redmine",
  "Excel Documentation",
  "JIRA",
  "Agile Methodologies",
  "Regression Testing",
  "System Validation",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7B61FF]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="About Me"
          title="Quality Engineering Redefined"
          subtitle="Passionate about delivering bug-free, reliable software experiences through rigorous testing and innovation."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative glass-strong rounded-3xl p-6 md:p-10 border border-white/10 hover:border-[#00D4FF]/30 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D4FF]/20 to-[#7B61FF]/20 flex items-center justify-center border border-[#00D4FF]/30 shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#00D4FF] to-[#7B61FF]">MK</span>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide">Mohammed Kaif</h3>
                  <p className="text-lg text-[#00D4FF] font-medium tracking-wide mt-1">Junior QA Engineer</p>
                </div>
              </div>

              <div className="space-y-6 text-white/70 leading-relaxed text-base md:text-lg">
                <p>
                  Motivated <span className="text-white font-semibold">Junior QA Engineer</span> with skills in manual testing, test case design, defect tracking, and cross-functional collaboration. Experienced in testing AI-driven healthcare and logistics applications using QA methodologies like <span className="text-[#7B61FF]">SDLC, STLC</span>, functional, regression, UI/UX, and negative testing.
                </p>
                <p>
                  Proficient in executing <span className="text-[#00D4FF]">smoke/sanity tests</span>, reporting bugs, and ensuring product quality across platforms. Seeking to apply a quality-first approach in a fast-paced, agile tech environment.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-3">
                {["Chennai, TN", "Open to Relocate", "Immediately Available"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full border border-white/10 bg-white/5 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Infinity Loop Skills & Stats */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-10 h-1.5 bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] rounded-full" />
                Technical Arsenal
              </h3>

              <div className="relative">
                {/* Gradient Masks for Marquee */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none hidden md:block" />

                <div className="space-y-8">
                  <TechMarquee items={skills.slice(0, 7)} speed={22} direction="left" />
                  <TechMarquee items={skills.slice(7)} speed={20} direction="right" />
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Bug Accuracy", value: "99%" },
                { label: "Requirement Coverage", value: "100%" },
                { label: "Test Cases", value: "500+" },
                { label: "Client Satisfaction", value: "100%" }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#00D4FF]/20 transition-all duration-300 group">
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{stat.value}</h4>
                  <p className="text-sm text-white/50 uppercase tracking-widest font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
