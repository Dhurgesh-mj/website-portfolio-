"use client";
import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current!;
    let raf = 0;
    let targetX = 0, targetY = 0;
    let x = -9999, y = -9999;
    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    const loop = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed z-[40] size-[300px] rounded-full opacity-20 mix-blend-soft-light"
      style={{
        background: "radial-gradient(120px 120px at 50% 50%, rgba(88,101,242,0.45), transparent 60%)"
      }}
    />
  );
}

export default CursorGlow;



