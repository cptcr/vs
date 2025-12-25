/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Zap,
  HardDrive,
  Database,
  Archive,
  Network,
  Box,
  Layers,
  ShieldCheck,
  Terminal,
} from "lucide-react"

import { BackgroundWave } from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"

// Exact data from your request
const TIERS = [
  {
    name: "Starter",
    ram: "512 MB",
    disk: "20 GB",
    cores: "1 Core",
    db: "1 Database",
    backup: "1 Slot",
    ports: "3 Ports",
    description: "Ideal for small modded servers (≈ 10 players).",
    price: "4.99",
  },
  {
    name: "Pro",
    ram: "6 GB",
    disk: "40 GB",
    cores: "2 Cores",
    db: "2 Databases",
    backup: "3 Slots",
    ports: "5 Ports",
    description: "Balanced for mid-sized modpacks or plugin setups (10–20 players). Excellent TPS stability.",
    price: "8.99",
    featured: true, // Highlighted as best value based on typical usage
  },
  {
    name: "Expert",
    ram: "9 GB",
    disk: "80 GB",
    cores: "3 Cores",
    db: "3 Databases",
    backup: "5 Slots",
    ports: "6 Ports",
    description: "For heavy modpacks like RLCraft / ATM9 / Better MC. Handles 20–30 players reliably.",
    price: "14.99",
  },
  {
    name: "Elite",
    ram: "12 GB",
    disk: "160 GB",
    cores: "4 Cores",
    db: "4 Databases",
    backup: "9 Slots",
    ports: "10 Ports",
    description: "Advanced plan for larger modded communities or creative-world networks. High IO throughput.",
    price: "21.99",
  },
  {
    name: "Titan",
    ram: "16 GB",
    disk: "240 GB",
    cores: "6 Cores",
    db: "4 Databases",
    backup: "15 Slots",
    ports: "8 Ports",
    description: "Enterprise-grade environment for big modded servers or multi-hub networks. Full Docker isolation.",
    price: "29.99",
  },
];

const SUPPORTED_TYPES = [
  "Vanilla",
  "Forge",
  "Neo Forge",
  "Bungeecord",
  "Paper",
  "SpongeVanilla",
  "Spigot",
];

export function MinecraftPageContent() {
  return (
    <div className="relative overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundWave />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />

      <main className="relative z-10 pb-32 space-y-32">
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-28">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <span className="inline-flex items-center justify-center rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-green-200">
                Game Hosting
              </span>

              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                    Minecraft, Evolved.
                  </span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed text-white/75 sm:text-xl">
                  Experience lag-free gameplay with high-performance hardware optimized for Modpacks, Plugins, and large communities.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  <Zap className="w-4 h-4 text-green-400" /> NVMe Storage
                </span>
                <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  <ShieldCheck className="w-4 h-4 text-green-400" /> DDoS Protection
                </span>
                <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  <Terminal className="w-4 h-4 text-green-400" /> Full FTP Access
                </span>
              </div>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  className="inline-flex items-center h-12 gap-2 px-8 bg-foreground text-background hover:bg-foreground/80"
                >
                  <a href="#pricing">
                    View Plans
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Types Grid */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <Layers className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-semibold text-white">One Click Installers</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {SUPPORTED_TYPES.map((type) => (
                        <div key={type} className="relative flex items-center gap-3 px-6 py-3 transition-all duration-300 border group rounded-xl border-white/10 bg-black/40 hover:border-green-500/50 hover:bg-green-500/10">
                            <Box className="w-5 h-5 transition-colors text-white/40 group-hover:text-green-400" />
                            <span className="font-medium tracking-wide text-white">{type}</span>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-sm text-center text-white/40">
                    Plus ability to upload custom jars via SFTP.
                </p>
            </div>
        </section>

        {/* Pricing Tiers */}
        <section id="pricing" className="container px-4 mx-auto sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto mb-16 space-y-4 text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Server Tiers
              </h2>
              <p className="text-lg text-white/75">
                Scalable performance for any world size.
              </p>
           </div>

           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TIERS.map((tier) => (
                <div 
                  key={tier.name}
                  className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                    tier.featured 
                      ? "bg-white/[0.08] border-green-500/50 shadow-[0_0_40px_-10px_rgba(34,197,94,0.2)] z-10 scale-[1.02]" 
                      : "bg-white/[0.04] border-white/10 hover:border-white/20"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute px-4 py-1 text-xs font-bold tracking-wider text-white uppercase -translate-x-1/2 bg-green-600 rounded-full shadow-lg -top-4 left-1/2">
                      Recommended
                    </div>
                  )}

                  <div className="mb-6 space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                            <p className="mt-1 text-sm text-white/50">Minecraft</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-baseline justify-end gap-1">
                                <span className="text-3xl font-bold text-white">€{tier.price}</span>
                                <span className="text-sm text-white/60">/mo</span>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-sm text-white/70 leading-relaxed min-h-[40px]">
                        {tier.description}
                    </p>
                  </div>

                  <div className="flex-1 p-6 mb-8 space-y-4 border rounded-2xl bg-black/40 border-white/5">
                    <SpecRow label="RAM" value={tier.ram} icon={<Zap className="w-4 h-4 text-green-400"/>} />
                    <SpecRow label="NVMe Disk" value={tier.disk} icon={<HardDrive className="w-4 h-4 text-green-400"/>} />
                    <SpecRow label="Processor" value={tier.cores} icon={<Cpu className="w-4 h-4 text-green-400"/>} />
                    <SpecRow label="Databases" value={tier.db} icon={<Database className="w-4 h-4 text-green-400"/>} />
                    <SpecRow label="Backups" value={tier.backup} icon={<Archive className="w-4 h-4 text-green-400"/>} />
                    <SpecRow label="Network" value={tier.ports} icon={<Network className="w-4 h-4 text-green-400"/>} />
                  </div>

                  <Button asChild className="w-full h-12 text-base text-white border bg-white/10 hover:bg-white/20 border-white/10">
                    <a 
                      href="https://pay.vaultscope.dev/products/minecraft" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Deploy Server
                    </a>
                  </Button>
                </div>
              ))}
           </div>
           
           <div className="mt-12 space-y-2 text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/10 bg-white/5 text-white/60">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>One-time Setup Fee: <strong>€1.99</strong></span>
             </div>
             <p className="text-xs text-white/30">
               All prices include VAT.
             </p>
           </div>
        </section>

        {/* Features / CTA */}
        <section className="container px-4 pb-20 mx-auto sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-16 backdrop-blur text-center overflow-hidden">
             {/* Decorative glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-green-500/10 blur-[100px] -z-10 rounded-full" />
             
            <h2 className="mb-6 text-3xl font-semibold text-white sm:text-4xl">
              Not sure which plan to pick?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-base text-white/75 sm:text-lg">
              Start with the <strong>Pro</strong> plan for a balanced experience with friends, or go <strong>Titan</strong> for large-scale public servers. You can upgrade instantly at any time.
            </p>

            <div className="flex justify-center gap-4">
                 <Button
                    asChild
                    variant="outline"
                    className="inline-flex items-center h-12 gap-2 px-8 text-white border-white/20 bg-white/5 hover:bg-white/10"
                >
                    <a
                    href="https://discord.gg/vaultscope"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Ask in Discord
                    </a>
                </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function SpecRow({ label, value, icon }: { label: string, value: string | number, icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between pb-3 border-b border-white/5 last:border-0 last:pb-0">
      <div className="flex items-center gap-2 text-sm text-white/60">
        {icon}
        {label}
      </div>
      <span className="font-mono text-sm font-medium text-white">{value}</span>
    </div>
  )
}