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
  Server,
  Cpu,
  Globe2,
  ShieldCheck,
  Zap,
  HardDrive,
  Network,
  Clock,
  Terminal,
  Gamepad2,
  Layers,
  HelpCircle,
} from "lucide-react"

import { BackgroundWave } from "@/components/BackgroundWave"
import { InteractiveGlobe } from "@/components/interactive-globe"
import { Button } from "@/components/ui/button"

const LOCATIONS = [
  { name: "United States", code: "US" },
  { name: "Finland", code: "FI" },
  { name: "Singapore", code: "SG" },
  { name: "Germany", code: "DE" },
];

const TIERS = [
  {
    name: "Dirt",
    vcpu: 2,
    ram: "4GB",
    disk: "80GB",
    bandwidth: "5TB",
    price: "7.99",
  },
  {
    name: "Iron",
    vcpu: 4,
    ram: "8GB",
    disk: "160GB",
    bandwidth: "5TB",
    price: "14.99",
  },
  {
    name: "Silver",
    vcpu: 8,
    ram: "16GB",
    disk: "320GB",
    bandwidth: "5TB",
    price: "26.99",
    featured: true,
  },
  {
    name: "Gold",
    vcpu: 12,
    ram: "24GB",
    disk: "480GB",
    bandwidth: "5TB",
    price: "35.99",
  },
  {
    name: "Platinum",
    vcpu: 16,
    ram: "32GB",
    disk: "640GB",
    bandwidth: "5TB",
    price: "44.99",
  },
];

export function VPSPageContent() {
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
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8 text-left">
                <span className="inline-flex items-center justify-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                  Infrastructure
                </span>

                <div className="space-y-6">
                  <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                      Global Cloud VPS
                    </span>
                  </h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                    Deploy high-performance KVM instances in seconds. Engineered for mission-critical applications, game servers, and large-scale deployments. Experience raw power with no noisy neighbors.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                    <Zap className="w-4 h-4 text-blue-300" /> NVMe Storage
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                    <ShieldCheck className="w-4 h-4 text-blue-300" /> DDoS Protection
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                    <Network className="w-4 h-4 text-blue-300" /> 1Gbps Uplink
                  </span>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                   <Button
                    asChild
                    className="inline-flex items-center h-12 gap-2 px-8 bg-foreground text-background hover:bg-foreground/80"
                  >
                    <a href="#pricing">
                      View Pricing
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* 3D Globe Container */}
              <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
                <InteractiveGlobe />
                <div className="absolute left-0 right-0 text-center pointer-events-none bottom-4">
                  <p className="font-mono text-xs tracking-widest uppercase text-white/40">
                    Live Nodes: US • FI • SG • DE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
             <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Architecture
              </span>
              
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Built for Raw Performance
              </h2>

              <div className="space-y-6 prose prose-lg prose-invert text-white/75">
                <p>
                  At VaultScope, we exclude the possibility of overselling resources. Our Virtual Private Servers are built on top of enterprise-grade hardware utilizing KVM (Kernel-based Virtual Machine) virtualization technology. This ensures that the RAM and CPU resources assigned to your instance are fully dedicated to you, providing bare-metal-like performance with the flexibility of the cloud.
                </p>
                <p>
                  Every node in our fleet is equipped with high-frequency processors (AMD EPYC or Intel Xeon Gold) and Datacenter NVMe SSDs configured in RAID 10 arrays. This configuration guarantees superior I/O operations per second (IOPS), drastically reducing load times for databases, game servers, and high-traffic web applications compared to traditional SATA or SAS SSDs.
                </p>
                <p>
                  Network reliability is paramount. We operate a blend of Tier 1 transit providers to ensure low-latency routing globally. Whether your users are in North America, Europe, or Southeast Asia, our optimized routing paths ensure your data takes the shortest hop to its destination.
                </p>
              </div>

              <div className="grid gap-6 pt-4 sm:grid-cols-2">
                 <FeatureMini title="99.9% Uptime SLA" icon={<Clock />} text="Guaranteed availability backed by redundant power and networking." />
                 <FeatureMini title="DDoS Mitigation" icon={<ShieldCheck />} text="Always-on protection against volumetric L3/L4 attacks up to 1Tbps." />
                 <FeatureMini title="Full Root Access" icon={<Server />} text="Complete control over your kernel, OS environment, and firewall." />
                 <FeatureMini title="Instant Provisioning" icon={<Zap />} text="Automated deployment gets you online in under 60 seconds." />
              </div>
             </div>

             {/* Locations & Specs Panel */}
             <div className="space-y-6">
                <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur h-fit">
                    <div className="flex items-center gap-3 mb-6">
                    <Globe2 className="w-5 h-5 text-blue-300" />
                    <h3 className="text-lg font-semibold text-white">Data Center Locations</h3>
                    </div>
                    <div className="space-y-4">
                    {LOCATIONS.map((loc) => (
                        <div key={loc.code} className="flex items-center justify-between p-4 transition-colors border group rounded-xl border-white/5 bg-black/40 hover:bg-white/5">
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-1 font-mono text-sm text-blue-300 rounded bg-blue-900/20">
                            {loc.code}
                            </span>
                            <span className="font-medium text-white/90">{loc.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-green-400">
                            <span className="relative flex w-2 h-2">
                            <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                            <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
                            </span>
                            Online
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur h-fit">
                    <div className="flex items-center gap-3 mb-6">
                        <Cpu className="w-5 h-5 text-blue-300" />
                        <h3 className="text-lg font-semibold text-white">Hardware Specs</h3>
                    </div>
                    <ul className="space-y-4 text-sm text-white/80">
                        <li className="flex justify-between pb-2 border-b border-white/5">
                            <span>Virtualization</span>
                            <span className="font-mono text-white">KVM</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-white/5">
                            <span>Processors</span>
                            <span className="font-mono text-white">AMD EPYC / Xeon Gold</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-white/5">
                            <span>RAM Type</span>
                            <span className="font-mono text-white">DDR4/DDR5 ECC</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-white/5">
                            <span>Storage</span>
                            <span className="font-mono text-white">NVMe RAID 10</span>
                        </li>
                        <li className="flex justify-between pt-2">
                            <span>Port Speed</span>
                            <span className="font-mono text-white">1 Gbps - 10 Gbps</span>
                        </li>
                    </ul>
                </div>
             </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto mb-12 text-center">
                <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
                    Limitless Possibilities
                </h2>
                <p className="text-white/60">
                    Our VPS infrastructure is agnostic and flexible, perfect for any workload you throw at it.
                </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
                <div className="p-8 transition-colors border rounded-3xl border-white/10 bg-white/5 hover:bg-white/10">
                    <div className="flex items-center justify-center w-12 h-12 mb-6 text-blue-300 bg-blue-500/20 rounded-xl">
                        <Gamepad2 />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">Game Hosting</h3>
                    <p className="leading-relaxed text-white/60">
                        Host lag-free Minecraft, Rust, Ark, or CS:GO servers. Our high clock speeds ensure consistent tick rates, while DDoS protection keeps your community safe from attacks.
                    </p>
                </div>
                <div className="p-8 transition-colors border rounded-3xl border-white/10 bg-white/5 hover:bg-white/10">
                    <div className="flex items-center justify-center w-12 h-12 mb-6 text-purple-300 bg-purple-500/20 rounded-xl">
                        <Layers />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">Web & Apps</h3>
                    <p className="leading-relaxed text-white/60">
                        Deploy Node.js, Python, Docker containers, or high-traffic databases. With full root access, you can configure your environment exactly how your stack requires.
                    </p>
                </div>
                <div className="p-8 transition-colors border rounded-3xl border-white/10 bg-white/5 hover:bg-white/10">
                    <div className="flex items-center justify-center w-12 h-12 mb-6 text-green-300 bg-green-500/20 rounded-xl">
                        <Terminal />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">VPN & Proxy</h3>
                    <p className="leading-relaxed text-white/60">
                        Set up your own private VPN (OpenVPN, WireGuard) to secure your browsing or bypass geo-restrictions using our clean IP addresses in multiple regions.
                    </p>
                </div>
            </div>
        </section>

        {/* Pricing Tiers */}
        <section id="pricing" className="container px-4 mx-auto sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto mb-16 space-y-4 text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Transparent Pricing
              </h2>
              <p className="text-lg text-white/75">
                Choose the perfect size for your project. Upgrade anytime instantly.
              </p>
           </div>

           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {TIERS.map((tier) => (
                <div 
                  key={tier.name}
                  className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    tier.featured 
                      ? "bg-white/[0.08] border-blue-400/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]" 
                      : "bg-white/[0.04] border-white/10 hover:border-white/20"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute px-3 py-1 text-xs font-bold tracking-wider text-white uppercase -translate-x-1/2 bg-blue-500 rounded-full -top-3 left-1/2">
                      Popular
                    </div>
                  )}

                  <div className="mb-6 space-y-2">
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-white">€{tier.price}</span>
                      <span className="text-sm text-white/60">/mo</span>
                    </div>
                    <p className="text-xs text-white/40">+ €0.99 Setup Fee</p>
                  </div>

                  <div className="flex-1 mb-8 space-y-4">
                    <SpecRow label="vCores" value={tier.vcpu} icon={<Cpu className="w-4 h-4 text-blue-300"/>} />
                    <SpecRow label="RAM" value={tier.ram} icon={<Zap className="w-4 h-4 text-blue-300"/>} />
                    <SpecRow label="NVMe Disk" value={tier.disk} icon={<HardDrive className="w-4 h-4 text-blue-300"/>} />
                    <SpecRow label="Bandwidth" value={tier.bandwidth} icon={<Network className="w-4 h-4 text-blue-300"/>} />
                    <div className="flex items-center gap-3 text-sm text-white/80">
                      <div className="p-1 rounded bg-white/10">
                        <CheckCircle2 className="w-3 h-3 text-blue-300" />
                      </div>
                      <span>IPv4 Included</span>
                    </div>
                  </div>

                  <Button asChild className="w-full text-white border bg-white/10 hover:bg-white/20 border-white/10">
                    <a 
                      href="https://pay.vaultscope.dev/products/virtual-private-servers" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Deploy Now
                    </a>
                  </Button>
                </div>
              ))}
           </div>
           
           <div className="mt-8 text-center">
             <p className="text-sm text-white/40">
               All prices include VAT. Services are billed monthly. Bandwidth overages are capped or billed at standard rates.
             </p>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
                 <div className="flex items-center gap-3 mb-8">
                    <HelpCircle className="w-6 h-6 text-blue-300" />
                    <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions</h2>
                 </div>
                 
                 <div className="space-y-4">
                    <FaqItem question="Can I upgrade my plan later?" answer="Yes, you can scale your VPS resources vertically at any time through the billing dashboard. The changes are applied instantly after a reboot." />
                    <FaqItem question="What operating systems are available?" answer="We offer a wide range of Linux distributions including Ubuntu, Debian, CentOS, AlmaLinux, and Rocky Linux. Windows Server is also available on Silver plans and above." />
                    <FaqItem question="Do you offer backups?" answer="Yes, we offer automated daily backups as an add-on service. You can also take manual snapshots of your server at any time." />
                    <FaqItem question="What is your refund policy?" answer="Due to the nature of digital services and instant provisioning, we do not offer refunds once a service has been deployed. All sales are final." />
                 </div>
            </div>
        </section>

        {/* CTA */}
        <section className="container px-4 pb-20 mx-auto sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-16 backdrop-blur text-center overflow-hidden">
             {/* Decorative glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
             
            <h2 className="mb-6 text-3xl font-semibold text-white sm:text-4xl">
              Ready to scale your infrastructure?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-base text-white/75 sm:text-lg">
              Join thousands of developers and businesses relying on VaultScope for their mission-critical workloads.
            </p>

            <Button
                asChild
                className="inline-flex items-center gap-2 px-8 text-lg rounded-full bg-foreground text-background hover:bg-foreground/80 h-14"
              >
                <a
                  href="https://pay.vaultscope.dev/products/virtual-private-servers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Configure Server
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

function FeatureMini({ title, icon, text }: { title: string, icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center w-10 h-10 text-blue-300 border rounded-lg shrink-0 bg-blue-400/10 border-blue-400/20">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-white/60">{text}</p>
      </div>
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

function FaqItem({ question, answer }: { question: string, answer: string }) {
    return (
        <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <h4 className="mb-2 text-lg font-medium text-white">{question}</h4>
            <p className="leading-relaxed text-white/60">{answer}</p>
        </div>
    )
}