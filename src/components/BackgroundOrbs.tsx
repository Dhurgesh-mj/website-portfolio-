"use client";
import { motion } from "framer-motion";

export function BackgroundOrbs() {
  const blobs = [
    { c: "rgb(var(--neon-pink))", s: 240, x: "10%", y: "-10%", d: 8 },
    { c: "rgb(var(--neon-cyan))", s: 260, x: "85%", y: "0%", d: 10 },
    { c: "rgb(var(--neon-purple))", s: 220, x: "20%", y: "85%", d: 12 },
  ];
  return (
    <div className="fixed inset-0 -z-30 pointer-events-none">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute blur-3xl opacity-30"
          style={{ width: b.s, height: b.s, left: b.x, top: b.y, background: b.c, borderRadius: 9999 }}
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}


