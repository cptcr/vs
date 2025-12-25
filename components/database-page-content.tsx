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
  Database,
  HardDrive,
  Cpu,
  Network,
  ShieldCheck,
  Save,
  Server,
  Zap,
} from "lucide-react"

import { BackgroundWave } from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"

export function DatabasesPageContent() {
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
              <span className="inline-flex items-center justify-center rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-purple-200">
                Managed Cloud
              </span>

              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                    Production-Ready Databases.
                  </span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed text-white/75 sm:text-xl">
                  Deploy MongoDB, PostgreSQL, or MariaDB clusters in seconds. 
                  Zero maintenance, automated backups, and fully managed reliability.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  <Zap className="w-4 h-4 text-purple-400" /> Instant Deployment
                </span>
                <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  <ShieldCheck className="w-4 h-4 text-purple-400" /> Enterprise Security
                </span>
                <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  <Save className="w-4 h-4 text-purple-400" /> Automated Backups
                </span>
              </div>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  className="inline-flex items-center h-12 gap-2 px-8 bg-foreground text-background hover:bg-foreground/80"
                >
                  <a href="https://pay.vaultscope.dev/products/free-server">
                    Create Database
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Engines */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
                <EngineCard 
                    name="MongoDB" 
                    desc="NoSQL document database perfect for modern apps and JSON-heavy workloads."
                    color="text-green-400"
                />
                <EngineCard 
                    name="PostgreSQL" 
                    desc="Advanced object-relational database known for reliability and robust SQL features."
                    color="text-blue-400"
                />
                <EngineCard 
                    name="MariaDB" 
                    desc="Fast, scalable, and robust open-source relational database fork of MySQL."
                    color="text-orange-400"
                />
            </div>
        </section>

        {/* The "Free" Plan */}
        <section id="pricing" className="container px-4 mx-auto sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto mb-16 space-y-4 text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Simple Pricing
              </h2>
              <p className="text-lg text-white/75">
                Powerful specs to get your project off the ground. No hidden fees.
              </p>
           </div>

           <div className="max-w-md mx-auto">
                <div className="relative flex flex-col p-8 rounded-3xl border bg-white/[0.08] border-purple-500/50 shadow-[0_0_50px_-10px_rgba(168,85,247,0.2)]">
                  
                  {/* Badge */}
                  <div className="absolute px-4 py-1 text-xs font-bold tracking-wider text-white uppercase -translate-x-1/2 bg-purple-600 rounded-full shadow-lg -top-4 left-1/2">
                    Developer Tier
                  </div>

                  <div className="mb-8 space-y-2 text-center">
                    <h3 className="text-2xl font-bold text-white">Starter Cluster</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-white">Free</span>
                    </div>
                    <p className="text-sm text-white/40">Forever free. No credit card required.</p>
                  </div>

                  <div className="p-6 mb-8 space-y-4 border rounded-2xl bg-black/40 border-white/5">
                    <SpecRow label="CPU Share" value="75% (Fair Use)" icon={<Cpu className="w-4 h-4 text-purple-400"/>} />
                    <SpecRow label="Memory" value="1024 MB" icon={<Zap className="w-4 h-4 text-purple-400"/>} />
                    <SpecRow label="NVMe Storage" value="8192 MB" icon={<HardDrive className="w-4 h-4 text-purple-400"/>} />
                    <SpecRow label="Databases" value="3 Included" icon={<Database className="w-4 h-4 text-purple-400"/>} />
                    <SpecRow label="Backups" value="2 Slots" icon={<Save className="w-4 h-4 text-purple-400"/>} />
                    <SpecRow label="Connectivity" value="1 Gbps Shared" icon={<Network className="w-4 h-4 text-purple-400"/>} />
                  </div>

                  <div className="mb-8 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        <span>DDoS Protection included</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        <span>Unmetered Traffic</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        <span>Zero Setup Fees</span>
                    </div>
                  </div>

                  <Button asChild className="w-full h-12 text-base font-medium text-black bg-white hover:bg-white/90">
                    <a 
                      href="https://pay.vaultscope.dev/products/free-server" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Deploy for Free
                    </a>
                  </Button>
                </div>
           </div>
        </section>

        {/* Technical Features */}
        <section className="container px-4 pb-20 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs border rounded-full border-white/10 bg-white/5 text-white/60">
                        <Server className="w-3 h-3" />
                        <span>Technical Details</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-white">
                        Why choose managed?
                    </h2>
                    <p className="leading-relaxed text-white/60">
                        Focus on your code, not the infrastructure. Our managed databases are pre-configured for performance and security out of the box. 
                        We handle the updates, uptime monitoring, and backup rotation.
                    </p>
                    <ul className="pt-2 space-y-3">
                        <li className="flex items-center gap-3 text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            99.9% Uptime Guarantee
                        </li>
                        <li className="flex items-center gap-3 text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            Instant Provisioning (Under 60s)
                        </li>
                        <li className="flex items-center gap-3 text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            Easy-to-use Control Panel
                        </li>
                    </ul>
                </div>
                <div className="relative">
                     {/* Abstract Visual Representation of DB Connections */}
                     <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full" />
                     <div className="relative grid grid-cols-2 gap-4 p-8 border rounded-2xl border-white/10 bg-black/50 backdrop-blur">
                        <div className="flex flex-col items-center justify-center p-4 border rounded-xl bg-white/5 border-white/5 aspect-square">
                            <Database className="w-8 h-8 mb-2 text-white/40" />
                            <span className="font-mono text-xs text-white/40">PRIMARY</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 border rounded-xl bg-white/5 border-white/5 aspect-square">
                            <ShieldCheck className="w-8 h-8 mb-2 text-white/40" />
                            <span className="font-mono text-xs text-white/40">SECURE</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 border rounded-xl bg-white/5 border-white/5 aspect-square">
                            <Network className="w-8 h-8 mb-2 text-white/40" />
                            <span className="font-mono text-xs text-white/40">PUBLIC</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 border rounded-xl bg-white/5 border-white/5 aspect-square">
                            <Save className="w-8 h-8 mb-2 text-white/40" />
                            <span className="font-mono text-xs text-white/40">BACKUP</span>
                        </div>
                     </div>
                </div>
            </div>
        </section>

      </main>
    </div>
  )
}

function EngineCard({ name, desc, color }: { name: string, desc: string, color: string }) {
    return (
        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors group">
            <div className={`mb-4 ${color}`}>
                <Database className="w-8 h-8" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">{name}</h3>
            <p className="text-sm leading-relaxed text-white/60">
                {desc}
            </p>
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