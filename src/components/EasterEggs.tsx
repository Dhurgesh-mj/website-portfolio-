"use client";
import { useEffect, useState } from "react";

export function EasterEggs() {
  const [konami, setKonami] = useState(false);
  useEffect(() => {
    const sequence = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    const buffer: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      buffer.push(e.key);
      if (buffer.length > sequence.length) buffer.shift();
      if (sequence.every((k, i) => buffer[i] === k)) {
        setKonami((v) => !v);
        const el = document.createElement("div");
        el.textContent = "🎉 Secret Mode: Vapor Overdrive!";
        el.className = "fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] glass neon rounded-full px-4 py-2";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 2200);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("konami", konami);
  }, [konami]);

  return null;
}


