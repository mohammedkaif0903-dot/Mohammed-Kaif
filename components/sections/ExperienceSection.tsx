"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const experiences = [
  {
    title: "Junior Quality Testing Engineer",
    company: "ADSHI5",
    payroll: "Payroll: Medify",
    period: "March 2025 – Present",
    description:
      "Leading QA efforts for AI-powered healthcare, logistics, and manufacturing platforms. Acting as a bridge between clients and development teams to ensure requirement clarity and timely delivery. Responsible for functional, regression, and API testing of CareScribe, SFL Worldwide, and Kuraray Chatbot projects.",
    highlights: [
      "AI/NLP system validation",
      "Client & Team Coordination",
      "Project Management",
      "API testing with Postman",
      "Defect tracking with Redmine",
    ],
    current: true,
  },
  {
    title: "Process Executive",
    company: "ATOS",
    payroll: "Payroll: Compunnel",
    period: "September 2024 – March 2025",
    description:
      "Managed sales processes, ensuring timely and accurate completion of customer transactions. Delivered exceptional customer service, addressing inquiries and resolving issues efficiently.",
    highlights: [
      "Sales Process Management",
      "Customer Service",
      "Transaction Accuracy",
      "Issue Resolution",
    ],
    current: false,
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsapModule: typeof import("gsap") | null = null;
    let scrollTriggerModule: typeof import("gsap/ScrollTrigger") | null = null;

    const initGSAP = async () => {
      gsapModule = await import("gsap");
      scrollTriggerModule = await import("gsap/ScrollTrigger");
      gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger);

      if (!sectionRef.current) return;

      const items = sectionRef.current.querySelectorAll(".timeline-item");
      items.forEach((item) => {
        gsapModule!.gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      const line = sectionRef.current.querySelector(".timeline-line");
      if (line) {
        gsapModule.gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 40%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    };

    initGSAP();

    return () => {
      if (scrollTriggerModule) {
        scrollTriggerModule.ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative py-24 px-2 sm:px-6"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          subtitle="Building quality into every product I touch"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-2 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF]/40 via-[#7B61FF]/30 to-transparent origin-top" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`timeline-item relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-2 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      exp.current
                        ? "bg-[#00D4FF] border-[#00D4FF] shadow-[0_0_12px_rgba(0,212,255,0.5)]"
                        : "bg-[#1E293B] border-[#7B61FF]/50"
                    }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pl-6 sm:pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <motion.div className="glass rounded-2xl p-6 md:p-8 hover:shadow-[0_0_30px_rgba(0,212,255,0.06)] transition-all duration-300">
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-[#00D4FF] bg-[#00D4FF]/10 rounded-full border border-[#00D4FF]/20 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                        Current
                      </span>
                    )}

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <div
                      className={`flex items-center gap-3 mb-2 justify-start md:justify-end flex-wrap ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-[#7B61FF]/80" />
                        <span className="text-base text-[#7B61FF] font-medium">
                          {exp.company}
                        </span>
                      </div>
                      <span className="text-white/20">·</span>
                      <span className="text-sm text-white/50">
                        {exp.payroll}
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-2 mb-6 text-sm text-white/50 ${i % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      <Calendar size={14} />
                      {exp.period}
                    </div>

                    <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1 text-xs md:text-sm rounded-md border border-white/10 text-white/60 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
