"use client";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { FiArrowDownRight } from "react-icons/fi";
import { GlitchText } from "@/components/GlitchText";
import { Magnetic } from "@/components/Magnetic";

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  return (
    <section id="home" className="section min-h-[100svh] w-full relative flex items-center justify-center overflow-hidden">
      {ready && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 -z-10"
          options={{
            background: { color: { value: "transparent" } },
            fullScreen: { enable: false },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 100 } },
            },
            particles: {
              color: { value: "#a5b4fc" },
              links: { enable: true, color: "#94a3b8", opacity: 0.3 },
              move: { enable: true, speed: 0.6 },
              opacity: { value: 0.5 },
              number: { value: 60, density: { enable: true } },
              size: { value: { min: 1, max: 3 } },
            },
          }}
        />
      )}

      <div className="max-w-5xl px-6 md:px-8 w-full mx-auto text-center vapor-grid">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          <GlitchText className="gradient-text" text="HI, I'm MJ DHURGESH" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-base md:text-xl text-[var(--muted)]"
        >
          I’m a cybersecurity enthusiast, builder, and breaker of things on the internet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <Magnetic>
            <a href="#projects" className="btn-glow glass rounded-full px-6 py-3 text-sm md:text-base">
              View Projects
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn-glow glass rounded-full px-6 py-3 text-sm md:text-base">
              Contact Me
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-6 left-0 right-0 mx-auto flex justify-center"
        >
          <FiArrowDownRight className="animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
}


