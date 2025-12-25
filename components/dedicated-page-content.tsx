/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import {
  ArrowRight,
  BrainCircuit,
  Globe2,
  Lock,
  Zap,
  LayoutGrid,
  Database,
  Fingerprint,
  Scale,
} from "lucide-react"

import { BackgroundWave } from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"

export function DedicatedPageContent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundWave />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />

      <main className="relative z-10 pb-32 space-y-32">
        
        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-40">
          <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 mb-8 backdrop-blur-md">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-yellow-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-yellow-500 rounded-full"></span>
              </span>
              <span className="text-xs font-semibold tracking-widest text-yellow-200 uppercase">
                Project "Titan" • Coming 2026
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-semibold tracking-tight sm:text-7xl">
              <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/50 bg-clip-text">
                Infrastructure
              </span>
              <br />
              <span className="text-white/40">Reimagined.</span>
            </h1>

            <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-white/60 sm:text-xl">
              We are building the next generation of single-tenant compute. 
              Complete physical isolation designed for workloads that demand absolute sovereignty.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="inline-flex items-center h-12 gap-2 px-8 text-base font-medium text-black bg-white hover:bg-white/90"
              >
                <a href="#notify">
                  Get Early Access
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Philosophy / Vision Grid */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
                <VisionCard 
                    icon={<Fingerprint />}
                    title="Single Tenancy"
                    desc="No shared resources. No noisy neighbors. Every clock cycle and byte of RAM is physically yours."
                />
                <VisionCard 
                    icon={<Scale />}
                    title="Infinite Scale"
                    desc="Designed for horizontal scalability. Deploy bare metal clusters as easily as virtual instances."
                />
                <VisionCard 
                    icon={<Lock />}
                    title="Sovereignty"
                    desc="Total control over the hardware stack, from the BIOS configuration to the network edge."
                />
            </div>
        </section>

        {/* Target Workloads (Usage Examples) */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Built for the Future
                    </h2>
                    <p className="text-white/60">
                        We are designing these environments for the heaviest workloads of tomorrow.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <UseCase 
                        icon={<BrainCircuit className="text-purple-400" />}
                        title="AI Training Clusters"
                        desc="High-throughput environments optimized for distributed training of Large Language Models and inference engines."
                    />
                    <UseCase 
                        icon={<LayoutGrid className="text-blue-400" />}
                        title="Private Clouds"
                        desc="The perfect foundation for running your own OpenStack or Kubernetes clusters with hardware-level isolation."
                    />
                    <UseCase 
                        icon={<Globe2 className="text-green-400" />}
                        title="MMO Game Universes"
                        desc="Massive single-shard game worlds requiring extreme clock speeds and zero-latency database access."
                    />
                    <UseCase 
                        icon={<Database className="text-orange-400" />}
                        title="Big Data Analytics"
                        desc="Crunch petabytes of data in real-time without virtualization overhead slowing down I/O operations."
                    />
                </div>
            </div>
        </section>

        {/* "Under Construction" Blur Section */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative rounded-[3rem] border border-white/10 bg-white/[0.02] p-1 overflow-hidden">
                
                {/* Overlay Text */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-black/60 backdrop-blur-sm">
                    <Zap className="w-12 h-12 mb-4 text-yellow-500/80" />
                    <h3 className="mb-2 text-2xl font-bold text-white">Configurations Loading...</h3>
                    <p className="max-w-md text-white/60">
                        We are currently benchmarking prototypes. Specific hardware tiers and pricing will be announced closer to launch.
                    </p>
                </div>

                {/* Blurred Content Background (Simulates a pricing table) */}
                <div className="grid gap-8 p-8 pointer-events-none opacity-20 filter blur-md sm:p-12 md:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-6 space-y-4 border border-white/10 rounded-2xl bg-white/5">
                            <div className="w-1/2 h-8 rounded bg-white/20" />
                            <div className="w-full h-32 rounded bg-white/10" />
                            <div className="w-full h-10 rounded bg-white/20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Newsletter / Waitlist CTA */}
        <section id="notify" className="container px-4 pb-20 mx-auto sm:px-6 lg:px-8">
             <div className="rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] via-black to-black border border-white/10 p-8 sm:p-16 text-center">
                <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
                    Shape the Roadmap
                </h2>
                <p className="max-w-xl mx-auto mb-8 text-white/60">
                    Join the waitlist to receive development updates and survey invitations to help define our hardware selection.
                </p>

                <form className="flex flex-col max-w-md gap-3 mx-auto sm:flex-row">
                    <input 
                        type="email" 
                        placeholder="enter@your.email" 
                        className="flex-1 px-6 py-3 text-white transition-colors border rounded-full bg-white/5 border-white/10 placeholder:text-white/30 focus:outline-none focus:border-white/40"
                        required
                    />
                    <Button type="submit" className="px-8 text-black bg-white rounded-full hover:bg-gray-200">
                        Join Waitlist
                    </Button>
                </form>
             </div>
        </section>

      </main>
    </div>
  )
}

function VisionCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] text-center hover:bg-white/[0.04] transition-colors">
            <div className="flex items-center justify-center mx-auto mb-6 border w-14 h-14 rounded-2xl bg-white/5 text-white/80 border-white/10">
                {icon}
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
            <p className="leading-relaxed text-white/60">
                {desc}
            </p>
        </div>
    )
}

function UseCase({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors">
            <div className="p-2 mt-1 border rounded-lg shrink-0 bg-white/5 border-white/5">
                {icon}
            </div>
            <div>
                <h4 className="mb-2 text-lg font-medium text-white">{title}</h4>
                <p className="text-sm leading-relaxed text-white/50">{desc}</p>
            </div>
        </div>
    )
}