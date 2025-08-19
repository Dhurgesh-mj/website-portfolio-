"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setGlitch((g) => !g), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.span
      data-text={text}
      className={`glitch ${className}`}
      animate={{ textShadow: glitch ? "0 0 12px rgba(0,255,255,0.6), 0 0 24px rgba(255,0,128,0.5)" : "0 0 0 transparent" }}
      transition={{ duration: 0.4 }}
    >
      {text}
    </motion.span>
  );
}


