"use client";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

type EducationItem = {
  degree: string;
  school: string;
  period: string;
  bullets?: string[];
};

const items: EducationItem[] = [
  {
    degree: "B.Tech  — Computer Science and Cybersecurity",
    school: "SRM Institute of Science and Technology",
    period: "2024-2028",
    bullets: [
      "Focus: security engineering, networks, systems",
      "Research, security clubs, and research projects",
    ],
  },
  {
    degree: "Schooling",
    school: "Chennai Public School",
    period: "2012-2024",
    bullets: [
      "Focus: Computer Science, Mathematics, Physics",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="section py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-3 mb-8">
          <FiBookOpen />
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="glass rounded-xl p-5 group transition-transform duration-200 hover:scale-[1.01] hover:rotate-[0.2deg]"
            >
              <h3 className="text-sm font-semibold">{item.degree}</h3>
              <div className="text-xs text-[var(--muted)] flex items-center justify-between mt-1">
                <span>{item.school}</span>
                <span>{item.period}</span>
              </div>
              {item.bullets && (
                <ul className="mt-3 text-[11px] text-[var(--muted)] space-y-1">
                  {item.bullets.map((b) => (
                    <li key={b} className="transition-opacity duration-200 group-hover:opacity-100">• {b}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


