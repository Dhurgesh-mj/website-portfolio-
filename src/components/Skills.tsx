"use client";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiTrendingUp, FiActivity } from "react-icons/fi";
 

const skills = [
  { name: "Python", level: 90 },
  { name: "C", level: 76 },
  { name: "C++", level: 70 },
  { name: "Web & API Security", level: 88 },
];

export function Skills() {
  return (
    <section id="skills" className="section py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="h-full w-full soft-gradient" />
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-3 mb-8">
          <FiTrendingUp />
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {skills.map((skill, idx) => (
              <div key={skill.name} className="glass p-3 rounded-lg">
                <div className="flex justify-between text-xs mb-2">
                  <span>{skill.name}</span>
                  <span className="text-[var(--muted)]">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 * idx }}
                    className="h-full rounded-full soft-gradient"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 items-start content-start no-stretch">
            {[
              {
                Icon: FiCode,
                title: "Binary Exploitation & Malware development",
                lines: ["Pwntools, GDB, reversing", "Exploit dev → PoCs","Reverse engineering","Shellcoding"],
              },
              {
                Icon: FiLayout,
                title: "Web & API Security",
                lines: ["Auth/JWT/SSRF, GraphQL", "Recon → exploitation","bug bounty"],
              },
              {
                Icon: FiActivity,
                title: "Automation & AI Pentesting",
                lines: ["Python/FastAPI async scanners", "LLM‑assisted workflows"],
              },
              {
                Icon: FiActivity,
                title: "Bug Hunter",
                lines: ["Hall of fame in private bug bounty programs", "secured 10+ government websites"],
              },
            ].map(({ Icon, title, lines }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="glass rounded-lg p-4 hover:rotate-1 hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="text-base" />
                  <h3 className="text-[11px] font-semibold">{title}</h3>
                </div>
                <ul className="text-[10px] text-[var(--muted)] space-y-0.5">
                  {lines.map((l) => (
                    <li key={l}>• {l}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


