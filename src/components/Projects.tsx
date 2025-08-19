"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "DDOS SUITE",
    desc: "Modular traffic generator + rate-limit stress tester with smart ramp-ups, heuristics, and live graphs.",
    image: "/window.svg",
    href: "#",
  },
  {
    title: "SHINOBIJS",
    desc: "Stealthy JS toolkit for recon, DOM sink mapping, and payload delivery with plugin-based evasion.",
    image: "/file.svg",
    href: "https://github.com/Dhurgesh-mj/ShinobiJS",
  },
  {
    title: "SUBDOMINATOR",
    desc: "Blazing subdomain hunter (Amass/Subfinder + DNS brute + takeover checks) with pretty diff reports.",
    image: "/globe.svg",
    href: "https://github.com/Dhurgesh-mj/Subdomainator-V2",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <TiltCard key={p.title} idx={idx}>
              <a href={p.href} className="block">
                <div className="relative h-40 w-full">
                  <Image src={p.image} alt={p.title} fill className="object-contain p-6 opacity-80" />
                </div>
                <h3 className="text-lg font-semibold glitch" data-text={p.title}>{p.title}</h3>
                <p className="text-sm text-[var(--muted)] mt-1">{p.desc}</p>
                <div className="mt-2 text-[10px] uppercase tracking-wider text-white/70">{idx === 0 ? "⚙️ Stress Test Beast" : idx === 1 ? "🕵️ Stealth Recon Kit" : "🔎 Subdomain Hunter"}</div>
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ children, idx }: { children: React.ReactNode; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * idx }}
      className="glass rounded-2xl p-5 tilt-card will-change-transform"
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="tilt-inner">
        {children}
      </div>
    </motion.div>
  );
}


