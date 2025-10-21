"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  baseX: number;
  drift: number;
  speed: number;
  alpha: number;
};

type Wave = {
  amplitude: number;
  frequency: number;
  speed: number;
  offset: number;
  color: string;
  thickness: number;
};

const WAVE_CONFIG: Wave[] = [
  { amplitude: 42, frequency: 0.004, speed: 0.9, offset: 0, color: "rgba(255,255,255,0.12)", thickness: 1.6 },
  { amplitude: 58, frequency: 0.003, speed: 0.6, offset: 120, color: "rgba(200,200,200,0.1)", thickness: 1.4 },
  { amplitude: 32, frequency: 0.005, speed: 1.1, offset: -160, color: "rgba(160,160,160,0.12)", thickness: 1.2 },
];

const DESKTOP_PARTICLE_COUNT = 140;
const MOBILE_PARTICLE_COUNT = 60;

function createParticles(width: number, height: number, count: number): Particle[] {
  return Array.from({ length: count }, () => {
    const radius = Math.random() * 1.8 + 0.6;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius,
      baseX: Math.random() * width,
      drift: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.8,
      alpha: 0.25 + Math.random() * 0.35,
    };
  });
}

export function BackgroundWave() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = motionQuery.matches;
    let activeWaveConfig: Wave[] = [...WAVE_CONFIG];

    const getParticleCount = () => {
      if (prefersReducedMotion) {
        return Math.round(DESKTOP_PARTICLE_COUNT * 0.25);
      }

      const isMobile = window.innerWidth < 768;
      return isMobile ? MOBILE_PARTICLE_COUNT : DESKTOP_PARTICLE_COUNT;
    };

    const updateWaveConfig = () => {
      const isMobile = window.innerWidth < 768;
      const amplitudeScale = prefersReducedMotion ? 0.35 : isMobile ? 0.75 : 1;
      const thicknessScale = prefersReducedMotion ? 0.7 : 1;

      activeWaveConfig = WAVE_CONFIG.map((wave) => ({
        ...wave,
        amplitude: wave.amplitude * amplitudeScale,
        thickness: wave.thickness * thicknessScale,
      }));
    };

    const drawStaticBackdrop = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(0,0,0,0.9)";
      context.fillRect(0, 0, width, height);

      const baseGradient = context.createLinearGradient(0, 0, width, height);
      baseGradient.addColorStop(0, "rgba(255,255,255,0.06)");
      baseGradient.addColorStop(1, "rgba(50,50,50,0.08)");
      context.fillStyle = baseGradient;
      context.fillRect(0, 0, width, height);
    };

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
      updateWaveConfig();
      particlesRef.current = createParticles(innerWidth, innerHeight, getParticleCount());
      if (prefersReducedMotion) {
        drawStaticBackdrop();
      }
    };

    const render = () => {
      if (prefersReducedMotion) {
        animationRef.current = undefined;
        return;
      }

      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(0,0,0,0.9)";
      context.fillRect(0, 0, width, height);

      // subtle base tint
      const baseGradient = context.createLinearGradient(0, 0, width, height);
      baseGradient.addColorStop(0, "rgba(255,255,255,0.08)");
      baseGradient.addColorStop(1, "rgba(50,50,50,0.08)");
      context.fillStyle = baseGradient;
      context.fillRect(0, 0, width, height);

      timeRef.current += prefersReducedMotion ? 0.004 : 0.008;
      const time = timeRef.current;

      // draw flowing waves
      activeWaveConfig.forEach((wave) => {
        context.beginPath();
        context.lineWidth = wave.thickness;

        const gradient = context.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, "rgba(255,255,255,0.0)");
        gradient.addColorStop(0.4, wave.color);
        gradient.addColorStop(0.6, wave.color);
        gradient.addColorStop(1, "rgba(255,255,255,0.0)");
        context.strokeStyle = gradient;

        for (let x = 0; x <= width; x += 12) {
          const y =
            height / 2 +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            wave.offset;
          const noise = Math.sin((x + wave.offset) * 0.015 + time * 1.2) * 6;
          context.lineTo(x, y + noise);
        }
        context.stroke();
      });

      // update and render particles
      const particles = particlesRef.current;
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        particle.x = particle.baseX + Math.sin(time * 1.2 + particle.drift) * 32;

        if (particle.y < -10) {
          particle.y = height + 10;
          particle.baseX = Math.random() * width;
        }

        const radial = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 8
        );
        radial.addColorStop(0, `rgba(255,255,255,${particle.alpha})`);
        radial.addColorStop(0.35, `rgba(230,230,230,${particle.alpha * 0.6})`);
        radial.addColorStop(1, "rgba(0,0,0,0)");

        context.fillStyle = radial;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 8, 0, Math.PI * 2);
        context.fill();
      });

      // overlay grid for glass effect
      context.save();
      context.globalAlpha = 0.18;
      context.fillStyle = "rgba(200,200,200,0.08)";
      for (let gridX = -width; gridX < width * 2; gridX += 120) {
        context.fillRect(gridX + ((time * 40) % 120), 0, 1, height);
      }
      context.restore();

      animationRef.current = requestAnimationFrame(render);
    };

    const start = () => {
      resize();
      if (prefersReducedMotion) {
        drawStaticBackdrop();
      } else {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        animationRef.current = requestAnimationFrame(render);
      }
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
      timeRef.current = 0;
      start();
    };

    motionQuery.addEventListener("change", handleMotionChange);
    window.addEventListener("resize", resize);

    start();

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full select-none"
      style={{ pointerEvents: "none" }}
    />
  );
}

export default BackgroundWave;
