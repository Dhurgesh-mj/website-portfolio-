"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxOrbs() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -80]);
  const y2 = useTransform(scrollY, [0, 800], [0, 60]);
  const y3 = useTransform(scrollY, [0, 800], [0, -40]);

  return (
    <div className="fixed inset-0 -z-[15] pointer-events-none">
      <motion.div className="absolute blur-3xl opacity-25" style={{ width: 380, height: 380, left: "5%", top: "5%", borderRadius: 9999, background: "rgb(var(--neon-purple))", y: y1 }} />
      <motion.div className="absolute blur-3xl opacity-25" style={{ width: 420, height: 420, right: "8%", top: "10%", borderRadius: 9999, background: "rgb(var(--neon-green))", y: y2 }} />
      <motion.div className="absolute blur-3xl opacity-20" style={{ width: 360, height: 360, left: "20%", bottom: "8%", borderRadius: 9999, background: "rgb(var(--neon-cyan))", y: y3 }} />
    </div>
  );
}

export default ParallaxOrbs;



