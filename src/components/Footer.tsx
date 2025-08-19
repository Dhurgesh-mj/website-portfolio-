"use client";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-8 text-center text-sm text-[var(--muted)]"
      >
        © {new Date().getFullYear()} MJ DHURGESH. All rights reserved.
      </motion.div>
    </footer>
  );
}


