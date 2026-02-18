"use client";

import { motion } from "framer-motion";
import {
  Bug,
  FileSearch,
  BarChart3,
  Layers,
  Globe,
  Cpu,
  FileText,
  ListChecks,
  ClipboardList,
  FileBarChart,
  Wrench,
  FlaskConical,
  Mail,
  Table2,
  PenTool,
  FileSpreadsheet,
  GitBranch,
  Repeat,
  Triangle,
  Zap,
  Workflow,
  Box,
  UserCheck,
  Compass,
  CheckSquare,
  Scroll,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    title: "Testing Types",
    color: "#00D4FF",
    icon: Bug,
    skills: [
      { name: "Smoke Testing", icon: Zap },
      { name: "Component Testing", icon: Box },
      { name: "Integration Testing", icon: Layers },
      { name: "System Testing", icon: Cpu },
      { name: "Adhoc Testing", icon: FileSearch },
      { name: "Sanity Testing", icon: FlaskConical },
      { name: "Regression Testing", icon: Repeat },
      { name: "Usability Testing", icon: UserCheck },
      { name: "Performance Testing", icon: BarChart3 },
      { name: "Compatibility Testing", icon: Globe },
      { name: "Exploratory Testing", icon: Compass },
      { name: "Globalization Testing", icon: Globe },
      { name: "Acceptance Testing", icon: CheckSquare },
    ],
  },
  {
    title: "Documentation",
    color: "#7B61FF",
    icon: FileText,
    skills: [
      { name: "Detailed Test Cases", icon: ListChecks },
      { name: "Bug Reports (Redmine)", icon: Bug },
      { name: "Release Notes Validation", icon: CheckCircle2 },
      { name: "Requirement Docs", icon: FileText },
      { name: "Test Plans", icon: ClipboardList },
      { name: "Test Scenarios", icon: Scroll },
      { name: "RTM", icon: Table2 },
      { name: "Test Summary Reports", icon: FileBarChart },
    ],
  },
  {
    title: "Tools",
    color: "#00FFB2",
    icon: Wrench,
    skills: [
      { name: "Redmine", icon: Bug },
      { name: "Sauce Labs", icon: FlaskConical },
      { name: "Excel", icon: FileSpreadsheet },
      { name: "Figma", icon: PenTool },
      { name: "Google Docs", icon: FileText },
      { name: "Postman", icon: Mail },
      { name: "Antigravity", icon: Rocket },
    ],
  },
  {
    title: "Methodologies",
    color: "#FF6B6B",
    icon: GitBranch,
    skills: [
      { name: "Waterfall", icon: Triangle },
      { name: "Spiral", icon: Repeat },
      { name: "V&V", icon: CheckCircle2 },
      { name: "Prototype", icon: Layers },
      { name: "Customized", icon: Wrench },
      { name: "Hybrid", icon: Workflow },
      { name: "Agile", icon: Zap },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          subtitle="Comprehensive QA toolkit spanning testing methodologies, tools, and documentation"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: cat.color + "15",
                    border: `1px solid ${cat.color}25`,
                  }}
                >
                  <cat.icon size={24} style={{ color: cat.color }} />
                </div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * si }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all cursor-default group"
                  >
                    <skill.icon
                      size={16}
                      className="transition-colors"
                      style={{ color: cat.color + "60" }}
                    />
                    <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
