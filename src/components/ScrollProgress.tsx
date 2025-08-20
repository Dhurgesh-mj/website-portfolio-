"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <motion.div
      style={{ scaleX: width }}
      className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[60]"
    >
      <div className="h-full w-full" style={{
        background: "linear-gradient(90deg, rgb(var(--gradient-start)), rgb(var(--gradient-end)))",
        boxShadow: "0 0 16px rgba(88,101,242,0.5), 0 0 24px rgba(255,100,80,0.35)"
      }} />
    </motion.div>
  );
}

export default ScrollProgress;



