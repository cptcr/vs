/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import Link from "next/link"
import {
  ArrowRight,
  Server,
  Database,
  Gamepad2,
  Code2,
  Cpu,
  ShieldCheck,
  Globe2,
  Zap,
} from "lucide-react"

import { BackgroundWave } from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"

export function ServicesHubContent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundWave />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />

      <main className="relative z-10 pb-32 space-y-32">
        
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-28">
          <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/60 mb-8">
              Ecosystem
            </span>
            
            <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                Infrastructure for Builders.
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-white/60 sm:text-xl">
              Whether you are hosting a massive game server, deploying a microservice, or just learning to code—we have the metal for you.
            </p>
          </div>
        </section>

        {/* Primary Services Grid */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* VPS */}
            <ServiceCard 
              href="/services/vps"
              icon={<Server className="text-blue-400" />}
              title="Cloud VPS"
              desc="High-performance KVM instances with NVMe storage. Deploy in US, Germany, Finland, or Singapore."
              stats={["Up to 16 vCores", "10Gbps Network", "DDoS Protected"]}
              color="blue"
            />

            {/* Minecraft */}
            <ServiceCard 
              href="/services/minecraft"
              icon={<Gamepad2 className="text-green-400" />}
              title="Minecraft Hosting"
              desc="Premium hosting for Vanilla, Forge, and Fabric. Optimized hardware ensures 20 TPS for any modpack."
              stats={["Modpack Ready", "Auto-Backups", "One-Click Install"]}
              color="green"
            />

            {/* Databases */}
            <ServiceCard 
              href="/services/databases"
              icon={<Database className="text-purple-400" />}
              title="Managed Databases"
              desc="Production-ready clusters for MongoDB, PostgreSQL, and MariaDB. Zero maintenance required."
              stats={["Auto-Scaling", "Daily Backups", "Free Tier Available"]}
              color="purple"
            />

            {/* Coding */}
            <ServiceCard 
              href="/services/coding"
              icon={<Code2 className="text-cyan-400" />}
              title="Dev Containers"
              desc="Instant remote development environments. Run VS Code Server, Node.js bots, or Python scripts 24/7."
              stats={["Free Forever", "Browser IDE", "Isolated Sandbox"]}
              color="cyan"
            />

            {/* Dedicated */}
            <ServiceCard 
              href="/services/dedicated"
              icon={<Cpu className="text-yellow-400" />}
              title="Bare Metal"
              desc="Single-tenant hardware for enterprise workloads. Complete physical isolation and raw power."
              stats={["Coming 2026", "Waitlist Open", "Custom Specs"]}
              color="yellow"
              badge="Soon"
            />

            {/* Network / General (Placeholder for future or general info) */}
            <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-between">
                <div className="space-y-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-white/40">
                        <Globe2 />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Global Network</h3>
                    <p className="leading-relaxed text-white/50">
                        Our 100+ Tbps network backbone ensures low latency connections from anywhere in the world.
                    </p>
                </div>
                <div className="pt-8">
                    <Button variant="link" className="h-auto p-0 text-white opacity-50 cursor-default hover:no-underline">
                        Network Map <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>

          </div>
        </section>

        {/* Global Features */}
        <section className="container px-4 pb-20 mx-auto sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-16 backdrop-blur">
                <div className="grid gap-12 text-center md:grid-cols-3">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-blue-400 rounded-full bg-blue-500/10">
                            <Zap />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Instant Setup</h3>
                        <p className="text-sm text-white/60">
                            From payment to provisioning in under 60 seconds for all cloud services.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-purple-400 rounded-full bg-purple-500/10">
                            <ShieldCheck />
                        </div>
                        <h3 className="text-lg font-semibold text-white">DDoS Protection</h3>
                        <p className="text-sm text-white/60">
                            Always-on mitigation against volumetric attacks included with every plan.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-green-400 rounded-full bg-green-500/10">
                            <Globe2 />
                        </div>
                        <h3 className="text-lg font-semibold text-white">99.9% Uptime</h3>
                        <p className="text-sm text-white/60">
                            Enterprise-grade SLAs backed by redundant power and networking.
                        </p>
                    </div>
                </div>
            </div>
        </section>

      </main>
    </div>
  )
}

function ServiceCard({ 
    href, 
    icon, 
    title, 
    desc, 
    stats, 
    color,
    badge
}: { 
    href: string, 
    icon: React.ReactNode, 
    title: string, 
    desc: string, 
    stats: string[],
    color: string,
    badge?: string
}) {
    // Dynamic color classes map
    const colorClasses: Record<string, string> = {
        blue: "hover:border-blue-500/50 hover:bg-blue-500/5 group-hover:text-blue-400",
        green: "hover:border-green-500/50 hover:bg-green-500/5 group-hover:text-green-400",
        purple: "hover:border-purple-500/50 hover:bg-purple-500/5 group-hover:text-purple-400",
        cyan: "hover:border-cyan-500/50 hover:bg-cyan-500/5 group-hover:text-cyan-400",
        yellow: "hover:border-yellow-500/50 hover:bg-yellow-500/5 group-hover:text-yellow-400",
    };

    return (
        <Link href={href} className={`group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 flex flex-col justify-between ${colorClasses[color]}`}>
            {badge && (
                <div className="absolute top-6 right-6 px-2 py-1 bg-white/10 rounded text-[10px] font-bold uppercase tracking-wider text-white/80">
                    {badge}
                </div>
            )}
            
            <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 transition-colors ${colorClasses[color]}`}>
                    {icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white transition-transform group-hover:translate-x-1">{title}</h3>
                
                <p className="text-sm leading-relaxed text-white/60">
                    {desc}
                </p>

                <ul className="pt-4 space-y-2">
                    {stats.map((stat, i) => (
                        <li key={i} className="flex items-center gap-2 font-mono text-xs text-white/40">
                            <div className={`w-1 h-1 rounded-full bg-white/40`} />
                            {stat}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center pt-8 text-sm font-medium text-white transition-opacity opacity-60 group-hover:opacity-100">
                Explore {title} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    )
}