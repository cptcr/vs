"use client";

import React, { useEffect, useRef } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/technologies/recore",
  title: "Recore",
  description: "Next generation hosting solution."
})

export default function RecorePreview() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const count = Math.floor((w * h) / 13000);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.7)";

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.strokeStyle = `rgba(180,180,255, ${1 - dist / 110})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main className="relative flex items-center justify-center w-full min-h-screen overflow-hidden text-white bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-transparent sm:text-7xl bg-gradient-to-br from-white to-zinc-500 bg-clip-text drop-shadow-xl">
          Recore
        </h1>
        <p className="mt-4 text-lg tracking-wide sm:text-xl text-zinc-400">
          A new experience is forming.
        </p>

        <p className="mt-10 text-sm text-zinc-600">Coming Soon</p>
      </div>

      <div className="absolute left-0 w-full text-xs text-center bottom-6 text-zinc-700">
        © {new Date().getFullYear()} Vaultscope
      </div>
    </main>
  );
}

