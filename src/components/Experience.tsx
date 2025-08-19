"use client";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

const items: ExperienceItem[] = [
  {
    role: "Cybersecurity Tutor",
    company: "Ecron Technologies",
    period: "2025 — Present",
    bullets: [
      "Teaching cybersecurity concepts to students",
      "Helping them understand the concepts of cybersecurity",
      "Providing them with the necessary tools and resources to learn cybersecurity",
    ],
  },
  {
    role: "Web Penetration Tester (Intern)",
    company: "CappricioSec University",
    period: "june 2025- july 2025",
    bullets: [
      "Web application security assessments",
      "Bug bounty hunting",
      "Produced detailed vulnerability reports as part of red team evaluations."
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-3 mb-8">
          <FiBriefcase />
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
          <ul className="space-y-6">
            {items.map((item, i) => (
              <motion.li
                key={item.role + i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="relative pl-10 group"
              >
                <div className="absolute left-0 top-2 size-2.5 rounded-full bg-white/40 shadow-[0_0_12px_rgba(88,101,242,0.6)]" />
                <div className="glass rounded-xl p-4 transition-transform duration-200 group-hover:scale-[1.01] group-hover:rotate-[0.2deg]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold">{item.role}</h3>
                      <p className="text-xs text-[var(--muted)]">{item.company}</p>
                    </div>
                    <span className="text-[10px] text-[var(--muted)]">{item.period}</span>
                  </div>
                  <ul className="mt-2 text-[11px] text-[var(--muted)] space-y-1">
                    {item.bullets.map((b) => (
                      <li key={b} className="transition-opacity duration-200 group-hover:opacity-100">• {b}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


