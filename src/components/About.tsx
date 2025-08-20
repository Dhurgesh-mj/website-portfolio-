"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiShield, FiTool, FiZap } from "react-icons/fi";
import { useEffect, useState } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i } }),
};

export function About() {
  const FUN_FACTS = [
    "I debug with console-log like a samurai with a katana.",
    "I once fixed a bug by staring at it. The bug blinked first.",
    "My code passes all tests… I wrote zero tests.",
    "I put the ‘fun’ in buffer overflow.",
    "I treat 0‑days like holidays.",
    "I can neither confirm nor deny knowing Wi‑Fi passwords by heart.",
    "Coffee → compile → exploit → repeat.",
    "If it’s not broken, I’ll still refactor it.",
  ];
  // Avoid hydration mismatch: deterministic initial value, randomize after mount
  const [fact, setFact] = useState(FUN_FACTS[0]);
  const refreshFact = () =>
    setFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]);
  useEffect(() => {
    refreshFact();
  }, [refreshFact]);
  return (
    <section id="about" className="section py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-auto">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden glass neon mx-auto flip float" onMouseEnter={refreshFact}>
              <div className="flip-inner">
                <div className="flip-front absolute inset-0">
                  <Image
                    src="/avatar.jpg"
                    alt="Profile"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 12rem, 16rem"
                    className="object-cover object-center avatar-blend"
                  />
                  <div className="absolute inset-0 avatar-overlay" />
                </div>
                <div className="flip-back flex items-center justify-center p-6 text-center">
                  <p className="text-sm text-[var(--muted)]">{fact}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left flex flex-col justify-center md:pl-16">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="mt-4 text-lg md:text-xl text-[var(--muted)] leading-relaxed">
              I love diving deep into binary exploitation, web hacking, and API security. I build tools for
              offensive security in Python (FastAPI, async scanners) and explore network security, forensics,
              automation, and AI-driven pentesting.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 justify-items-center md:justify-items-start">
              {[
                { icon: <FiZap />, title: "Binary Whisperer 🧨" },
                { icon: <FiShield />, title: "API Lockpicker 🔐" },
                { icon: <FiTool />, title: "Async Toolsmith 🛠️" },
              ].map((item, i) => (
                <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass p-4 rounded-xl tilt-card hover:scale-[1.02] transition-transform">
                  <div className="tilt-inner flex items-center gap-3">
                    <span className="text-lg opacity-80">{item.icon}</span>
                    <span className="text-sm">{item.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


