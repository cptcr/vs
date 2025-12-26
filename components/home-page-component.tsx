/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Server,
  Database,
  Terminal,
  Cpu,
  ChevronRight,
  Network,
  Box,
  Layers,
  Globe2,
  ShieldCheck,
  Zap,
  Bot,
  Workflow,
  Code2,
  Rocket,
  Settings2,
  HardDrive,
  Clock,
  Gauge,
  Gamepad2
} from "lucide-react"

import { BackgroundWave } from "@/components/BackgroundWave"
import { InteractiveGlobe } from "@/components/interactive-globe"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- ANIMATION UTILS ---

function useOnScreen(ref: React.RefObject<HTMLElement>, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, rootMargin])
  return isIntersecting
}

function ScrollReveal({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref, "-50px")

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function Counter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    if (!isVisible) return
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return <span ref={ref}>{count}{suffix}</span>
}

// --- MAIN COMPONENT ---

export function HomePageContent() {
  return (
    <div className="relative min-h-screen bg-[#020202] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 pointer-events-none -z-50">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute top-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020202] to-[#020202]" />
        <div className="absolute inset-0 opacity-30">
           <BackgroundWave />
        </div>
      </div>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
          <div className="container relative z-20 px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              
              {/* LEFT: TEXT CONTENT */}
              <div className="text-center lg:text-left">
                
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 transition-colors border rounded-full cursor-default border-blue-500/20 bg-blue-900/10 backdrop-blur-md ring-1 ring-blue-500/10 hover:bg-blue-900/20">
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                            <span className="relative inline-flex w-2 h-2 bg-blue-500 rounded-full"></span>
                        </span>
                        <span className="font-mono text-[10px] font-bold tracking-widest text-blue-300 uppercase">
                            LIVE
                        </span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl">
                    <span className="block text-white">Premium Cloud.</span>
                    <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text animate-gradient-x">
                        Raw Performance.
                    </span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-white/50 sm:text-xl lg:mx-0">
                    Deploy <strong>AMD EPYC™</strong> & <strong>Intel® Xeon®</strong> instances in seconds. 
                    From scalable Cloud VPS to dedicated Game Servers, we provide the iron you need to build the future.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                    <Button
                        asChild
                        size="lg"
                        className="h-12 px-8 text-base font-bold text-black bg-white rounded-full hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                    >
                        <Link href="/services">
                            Deploy Server
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-12 px-8 text-base font-medium text-white transition-all duration-300 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 backdrop-blur-sm"
                    >
                        <Link href="/services/vps">
                            View VPS Pricing
                        </Link>
                    </Button>
                    </div>
                </ScrollReveal>

              </div>

              {/* RIGHT: GLOBE */}
              <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end">
                 {/* Glow behind globe */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />
                 
                 {/* The Globe Component */}
                 <div className="absolute inset-0 w-full h-full mask-image-gradient animate-fade-in-slow">
                    <InteractiveGlobe />
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- LIVE STATS STRIP --- */}
        <div className="hidden lg:block border-y border-white/5 bg-white/[0.01] backdrop-blur-md sticky top-0 z-40 transition-all duration-300 hover:bg-white/[0.03]">
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between py-6 font-mono text-xs tracking-widest uppercase text-white/40">
                    <div className="flex items-center gap-3 cursor-default group">
                        <Gauge className="w-4 h-4 text-blue-500 transition-transform group-hover:scale-110" />
                        <span className="transition-colors group-hover:text-white/60">
                            Capacity: <span className="ml-1 text-white"><Counter end={12} suffix=" Tbps+" /></span>
                        </span>
                    </div>
                    <div className="flex items-center gap-3 cursor-default group">
                        <Zap className="w-4 h-4 text-yellow-500 transition-colors group-hover:text-yellow-400" />
                        <span className="transition-colors group-hover:text-white/60">
                            Latency: <span className="ml-1 text-white">&lt; 1ms (Internal)</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-3 cursor-default group">
                        <Clock className="w-4 h-4 text-purple-500" />
                        <span className="transition-colors group-hover:text-white/60">
                            Uptime SLA: <span className="ml-1 text-white">99.99%</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-3 cursor-default group">
                        <ShieldCheck className="w-4 h-4 text-green-500 transition-transform group-hover:scale-110" />
                        <span className="transition-colors group-hover:text-white/60">
                            Security: <span className="ml-1 text-white"> HIGH</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* --- HOSTING HARDWARE SHOWCASE --- */}
        <section className="container px-4 py-24 mx-auto sm:px-6 lg:px-8">
             <ScrollReveal>
                <div className="flex flex-col items-end justify-between gap-6 mb-12 md:flex-row">
                    <div>
                        <h2 className="mb-2 text-3xl font-bold text-white">Bare Metal Powerhouse</h2>
                        <p className="text-white/50">
                            We don't oversell. You get the dedicated CPU power and RAM you pay for.
                        </p>
                    </div>
                    <div className="flex-col items-end hidden md:flex">
                        <div className="text-[10px] font-mono text-white/30 mb-1">CLUSTER_STATUS: ONLINE</div>
                        <div className="text-[10px] font-mono text-green-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> 
                            ALL SYSTEMS GO
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* The Rack Visual */}
            <ScrollReveal delay={200}>
                <div className="rounded-xl border border-white/10 bg-[#080808] overflow-hidden group/rack hover:border-white/20 transition-colors duration-500">
                    {/* Rack Header */}
                    <div className="bg-white/[0.03] border-b border-white/5 px-4 py-3 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover/rack:bg-red-500/50 transition-colors duration-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover/rack:bg-blue-500/50 transition-colors duration-500 delay-75" />
                        </div>
                        <div className="font-mono text-[10px] text-white/20 tracking-widest">/DATACENTER/NODE_SPECS</div>
                    </div>

                    {/* Rack Content */}
                    <div className="grid divide-y md:grid-cols-2 md:divide-y-0 md:divide-x divide-white/5">
                        
                        {/* AMD Node */}
                        <div className="p-8 md:p-10 relative group hover:bg-white/[0.02] transition-all duration-300">
                             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                            
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 text-red-500 transition-all duration-300 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 group-hover:scale-110">
                                    <Cpu className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold leading-none text-white">AMD EPYC™ 7401P</h3>
                                    <span className="block mt-1 font-mono text-xs text-red-400">24 CORES / 48 THREADS</span>
                                </div>
                            </div>
                            
                            <ul className="space-y-4 font-mono text-sm">
                                <li className="flex justify-between pb-2 border-b border-white/5">
                                    <span className="text-white/40">Clock Speed</span>
                                    <span className="text-white">Up to 3.0 GHz</span>
                                </li>
                                <li className="flex justify-between pb-2 border-b border-white/5">
                                    <span className="text-white/40">Memory</span>
                                    <span className="text-white">128GB DDR4 ECC</span>
                                </li>
                                <li className="flex justify-between pt-2">
                                    <span className="text-white/40">Ideal For</span>
                                    <span className="text-red-300">Game Servers / Multi-thread</span>
                                </li>
                            </ul>
                        </div>

                        {/* Intel Node */}
                        <div className="p-8 md:p-10 relative group hover:bg-white/[0.02] transition-all duration-300">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out delay-100" />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 text-blue-500 transition-all duration-300 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 group-hover:scale-110">
                                    <Cpu className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold leading-none text-white">Intel® Xeon® W-2295</h3>
                                    <span className="block mt-1 font-mono text-xs text-blue-400">18 CORES / 36 THREADS</span>
                                </div>
                            </div>
                            
                            <ul className="space-y-4 font-mono text-sm">
                                <li className="flex justify-between pb-2 border-b border-white/5">
                                    <span className="text-white/40">Max Turbo</span>
                                    <span className="text-white">4.60 GHz</span>
                                </li>
                                <li className="flex justify-between pb-2 border-b border-white/5">
                                    <span className="text-white/40">Memory</span>
                                    <span className="text-white">128GB DDR4 ECC</span>
                                </li>
                                <li className="flex justify-between pt-2">
                                    <span className="text-white/40">Ideal For</span>
                                    <span className="text-blue-300">High-Freq VPS / Databases</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </ScrollReveal>
        </section>

        {/* --- HOSTING PRODUCTS CATALOG --- */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
             <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="max-w-2xl mb-16">
                        <h2 className="mb-4 text-3xl font-bold text-white">Choose Your Plan</h2>
                        <p className="text-lg text-white/50">
                            Scalable hosting solutions for projects of any size. 
                            Instantly deployed to our global edge network.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <ServiceTile 
                        title="Cloud VPS"
                        subtitle="Virtual Private Servers"
                        desc="KVM Virtualization, NVMe Storage, and full root access. Choose your OS."
                        icon={<Server />}
                        color="blue"
                        href="/services/vps"
                        delay={0}
                        price="From €4.00/mo"
                    />
                    <ServiceTile 
                        title="Game Hosting"
                        subtitle="Minecraft & More"
                        desc="Modpack optimized. Pterodactyl panel. One-click plugin installers."
                        icon={<Gamepad2 />}
                        color="green"
                        href="/services/minecraft"
                        delay={100}
                        price="From €3.00/mo"
                    />
                    <ServiceTile 
                        title="Managed Databases"
                        subtitle="DBaaS Clusters"
                        desc="Instant MongoDB, PostgreSQL, and Redis clusters with auto-backups."
                        icon={<Database />}
                        color="purple"
                        href="/services/databases"
                        delay={200}
                        price="Free Tier Available"
                    />
                    <ServiceTile 
                        title="Coding Environments"
                        subtitle="Remote Development"
                        desc="VS Code Server in the browser. Ephemeral containers for quick edits."
                        icon={<Code2 />}
                        color="cyan"
                        href="/services/coding"
                        delay={0}
                        price="Free Forever"
                    />
                    <ServiceTile 
                        title="Dedicated Servers"
                        subtitle="Bare Metal Rental"
                        desc="Single-tenant hardware. No sharing. Full IPMI access."
                        icon={<Cpu />}
                        color="yellow"
                        href="/services/dedicated"
                        badge="WAITLIST"
                        delay={100}
                    />
                    
                    {/* Enterprise / Custom Block */}
                    <div className="bg-[#0a0a0a] p-10 flex flex-col justify-between group hover:bg-[#0f0f0f] transition-colors">
                        <ScrollReveal delay={200} className="flex flex-col justify-between h-full">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 mb-6 transition-all duration-300 rounded-lg bg-white/5 text-white/40 group-hover:scale-110 group-hover:rotate-12">
                                    <Globe2 className="w-5 h-5" />
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-white">Custom Infrastructure</h3>
                                <p className="text-sm text-white/40">Need a private rack or custom hardware config? We can build it.</p>
                            </div>
                            <div className="mt-8">
                                <Link href="/contact" className="inline-flex items-center text-sm font-bold text-white transition-colors duration-300 hover:text-blue-400 group-hover:translate-x-2">
                                    Contact Sales <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
             </div>
        </section>

        {/* --- WHY HOST WITH US --- */}
        <section className="container px-4 py-24 mx-auto sm:px-6 lg:px-8">
            <ScrollReveal>
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="mb-6 text-3xl font-bold text-white">Why Host With VaultScope?</h2>
                    <p className="text-lg text-white/50">We provide the features big clouds charge extra for, included by default.</p>
                </div>
            </ScrollReveal>
            
            <div className="grid gap-8 md:grid-cols-3">
                <FeatureCard 
                    title="Enterprise Everything" 
                    desc="We only use enterprise storage. No spinning rust. Your IOPS will thank you."
                    icon={<HardDrive className="text-blue-400" />}
                    delay={0}
                />
                <FeatureCard 
                    title="DDoS Protection" 
                    desc="Out of the box mitigation included free. Stay online during attacks."
                    icon={<ShieldCheck className="text-green-400" />}
                    delay={100}
                />
                <FeatureCard 
                    title="1 Gbps Network" 
                    desc="High-speed uplinks on every node ensure your data travels fast."
                    icon={<Network className="text-purple-400" />}
                    delay={200}
                />
            </div>
        </section>

        {/* --- SOFTWARE ECOSYSTEM --- */}
        <section className="py-24 bg-[#050505] border-t border-white/5">
             <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col items-start gap-16 lg:flex-row">
                    
                    {/* Left: Explanation */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-widest text-cyan-400 uppercase border rounded-full border-cyan-500/20 bg-cyan-950/30">
                                <Layers className="w-3 h-3" /> The Software Stack
                            </div>
                            <h2 className="mb-6 text-3xl font-bold text-white">
                                Tools to Manage Your Empire.
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-white/50">
                                Hosting is just the start. We provide a full suite of software to manage your communities, deploy servers, and automate your infrastructure.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Right: The List */}
                    <div className="grid gap-4 lg:w-2/3 md:grid-cols-2">
                        <TechCard 
                            title="Connect"
                            desc="The ultimate Pterodactyl deployment pipeline. Auto-extract, compression, and smart defaults."
                            icon={<Workflow className="text-blue-400" />}
                            link="/technologies/connect"
                            delay={0}
                        />
                        <TechCard 
                            title="Pegasus"
                            desc="Self-hosted Discord bot with economy, moderation, and XP systems."
                            icon={<Bot className="text-purple-400" />}
                            link="/technologies/pegasus"
                            delay={100}
                        />
                        <TechCard 
                            title="Node.js SDK"
                            desc="Fully typed TypeScript SDK to interact with our API programmatically."
                            icon={<Terminal className="text-yellow-400" />}
                            link="/technologies/nodejs-sdk"
                            delay={200}
                        />
                         <TechCard 
                            title="Recore"
                            desc="Next-Gen Hosting Solution (Coming 2026). Docker, QEMU, Proxmox orchestration."
                            icon={<Rocket className="text-cyan-400" />}
                            link="/technologies/recore"
                            delay={300}
                        />
                    </div>
                </div>
             </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="container px-4 py-32 mx-auto text-center">
             <ScrollReveal className="max-w-4xl mx-auto">
                <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Your Server is Ready.</h2>
                <p className="mb-10 text-xl text-white/50">
                    Join thousands of developers and gamers building on VaultScope.
                </p>
                <div className="flex justify-center gap-4">
                     <Button asChild size="lg" className="px-10 text-lg font-bold text-black transition-transform duration-300 bg-white rounded-full shadow-xl hover:bg-gray-200 h-14 hover:scale-105 shadow-white/10">
                        <Link href="/services">Get Started Now</Link>
                     </Button>
                </div>
             </ScrollReveal>
        </section>

      </main>
    </div>
  )
}

// --- SUB-COMPONENTS ---

function ServiceTile({ title, subtitle, desc, icon, color, href, badge, delay = 0, price }: any) {
    const colors: any = {
        blue: "text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]",
        green: "text-green-400 group-hover:bg-green-500/20 group-hover:text-green-300 group-hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.5)]",
        purple: "text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 group-hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.5)]",
        cyan: "text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 group-hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.5)]",
        yellow: "text-yellow-400 group-hover:bg-yellow-500/20 group-hover:text-yellow-300 group-hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.5)]",
    }

    return (
        <div className="bg-[#0a0a0a] group hover:bg-[#0f0f0f] transition-all duration-300 relative h-full hover:z-10 hover:scale-[1.02] hover:shadow-2xl border-transparent hover:border-white/5">
            <ScrollReveal delay={delay} className="flex flex-col justify-between h-full p-10">
                <Link href={href} className="absolute inset-0 z-20" />
                {badge && (
                    <span className="absolute top-6 right-6 text-[10px] font-bold border border-white/10 px-2 py-0.5 rounded text-white/50 group-hover:border-white/30 group-hover:text-white transition-colors">
                        {badge}
                    </span>
                )}
                <div>
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 transition-all duration-300 ${colors[color]} group-hover:scale-110`}>
                        {icon}
                    </div>
                    <h3 className="mb-1 text-xl font-bold text-white transition-transform group-hover:translate-x-1">{title}</h3>
                    <p className="mb-4 font-mono text-xs tracking-wider uppercase text-white/40">{subtitle}</p>
                    <p className="mb-6 text-sm leading-relaxed text-white/60">
                        {desc}
                    </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                    {price && <span className="px-2 py-1 font-mono text-xs rounded text-white/30 bg-white/5">{price}</span>}
                    <div className="flex items-center text-sm font-bold transition-colors duration-300 text-white/30 group-hover:text-white group-hover:translate-x-2">
                        Config <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}

function TechCard({ title, desc, icon, delay = 0 }: any) {
    return (
        <ScrollReveal delay={delay}>
            <div className="flex gap-5 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-default">
                <div className="pt-1 shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-black border rounded-lg border-white/10 text-white/70 group-hover:scale-110 group-hover:border-white/30">
                        {icon}
                    </div>
                </div>
                <div>
                    <h3 className="flex items-center gap-2 mb-1 text-base font-bold text-white transition-colors group-hover:text-blue-400">
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">
                        {desc}
                    </p>
                </div>
            </div>
        </ScrollReveal>
    )
}

function FeatureCard({ title, desc, icon, delay = 0 }: any) {
    return (
         <ScrollReveal delay={delay}>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors group">
                <div className="flex items-center justify-center w-12 h-12 mb-6 transition-transform rounded-lg bg-white/5 group-hover:scale-110">
                    {icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="leading-relaxed text-white/50">{desc}</p>
            </div>
        </ScrollReveal>
    )
}