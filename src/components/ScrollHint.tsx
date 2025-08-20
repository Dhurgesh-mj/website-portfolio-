"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollHint() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div style={{ opacity }} className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
      <div className="glass rounded-full px-4 py-2 text-xs text-white/80">Scroll to explore</div>
    </motion.div>
  );
}

export default ScrollHint;



