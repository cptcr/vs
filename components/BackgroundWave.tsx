"use client";

import React from "react";
import dynamic from "next/dynamic";

// Use the monochrome particle background for all pages that import BackgroundWave
const MonochromeParticles = dynamic(() => import("./MonochromeParticles"), { ssr: false });

type BackgroundWaveProps = {
  className?: string;
  intensity?: number;
};

export function BackgroundWave({ className = "", intensity = 0.9 }: BackgroundWaveProps) {
  return <MonochromeParticles className={className} />;
}

export default BackgroundWave;
