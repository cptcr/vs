"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type MonochromeParticlesProps = {
  className?: string;
  particleCount?: number;
  speed?: number;
  size?: number;
};

function Particles({ count = 900, speed = 0.15, size = 1.5 }: { count: number; speed: number; size: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] = (Math.random() - 0.5) * 80; // x
      arr[i3 + 1] = (Math.random() - 0.5) * 40; // y
      arr[i3 + 2] = (Math.random() - 0.5) * 40; // z
    }
    return arr;
  }, [count]);

  const velocities = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) arr[i] = 0.2 + Math.random() * 0.8;
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    const pts = pointsRef.current;
    if (!pts) return;

    const posAttr = pts.geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      let y = posAttr.array[i3 + 1] as number;
      y += velocities[i] * speed * delta * 60;
      if (y > 25) y = -25;
      posAttr.array[i3 + 1] = y;
    }
    posAttr.needsUpdate = true;

    pts.rotation.y += delta * 0.02;
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={0xffffff}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        transparent={true}
        opacity={0.95}
      />
    </points>
  );
}

export default function MonochromeParticles({ className = "", particleCount = 900, speed = 0.15, size = 1.5 }: MonochromeParticlesProps) {
  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none ${className}`}>
      <Canvas
        className="pointer-events-none"
        camera={{ position: [0, 0, 20], fov: 55 }}
        gl={{ antialias: true, alpha: false }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1}
        onCreated={() => console.debug("MonochromeParticles: canvas created and pointer-events disabled")}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 10, 40]} />

        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.2} position={[0, 10, 10]} />

        <Particles count={particleCount} speed={speed} size={size} />
      </Canvas>

      {/* subtle overlays: soft vignette + faint scanlines for texture */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-30" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.0))' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.02), transparent 25%)' }} />

      <div className="scanline" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <style jsx>{`
        .scanline::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px);
          background-size: 100% 6px;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
