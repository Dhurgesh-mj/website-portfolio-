"use client";
import { useEffect, useRef } from "react";

export function FlowLines() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let animationId = 0;
    const DPR = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * DPR);
      canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type Line = { x: number; y: number; vx: number; len: number; hue: number };
    const lines: Line[] = Array.from({ length: 24 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() * 0.6 + 0.2) * (Math.random() < 0.5 ? -1 : 1),
      len: Math.random() * 120 + 60,
      hue: 220 + Math.random() * 60,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      for (const l of lines) {
        l.x += l.vx;
        if (l.x < -l.len) l.x = window.innerWidth + l.len;
        if (l.x > window.innerWidth + l.len) l.x = -l.len;
        const grad = ctx.createLinearGradient(l.x, l.y, l.x + l.len, l.y);
        grad.addColorStop(0, `rgba(88,101,242,0)`);
        grad.addColorStop(0.5, `rgba(88,101,242,0.25)`);
        grad.addColorStop(1, `rgba(255,100,80,0)`);
        ctx.strokeStyle = grad as unknown as string;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + l.len, l.y);
        ctx.stroke();
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 -z-[25] opacity-[0.16] pointer-events-none" />;
}

export default FlowLines;



