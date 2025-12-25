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
  Terminal,
  Code2,
  Cpu,
  Network,
  ShieldCheck,
  Save,
  Laptop,
  Database,
  Globe,
  Zap,
  Box,
  Layers,
  HelpCircle,
  FileCode,
  AlertTriangle,
} from "lucide-react"

import { BackgroundWave } from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"

const SOFTWARE_OPTIONS = [
  { name: "Node.js", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "Lua", category: "Language" },
  { name: "Dart", category: "Language" },
  { name: "Elixir", category: "Language" },
  { name: "C / C++", category: "Language" },
  { name: "C# (.NET)", category: "Language" },
  { name: "Rust", category: "Language" },
  { name: "Prometheus", category: "Tool" },
  { name: "Loki", category: "Tool" },
  { name: "VS Code Server", category: "IDE" },
];

export function CodingPageContent() {
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
              <span className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                Free Tier
              </span>

              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                    One Click. One Container.
                  </span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed text-white/75 sm:text-xl">
                  Deploy a high-performance application container instantly. 
                  Select your specific runtime environment—whether it's a Discord bot, a monitoring tool, or a full browser-based IDE.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  <Box className="w-4 h-4 text-cyan-400" /> Isolated Environment
                </span>
                <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  <Globe className="w-4 h-4 text-cyan-400" /> 24/7 Uptime
                </span>
                <span className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" /> Secure Sandbox
                </span>
              </div>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  className="inline-flex items-center h-12 gap-2 px-8 bg-foreground text-background hover:bg-foreground/80"
                >
                  <a href="#pricing">
                    Deploy Now
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="inline-flex items-center h-12 gap-2 px-8 text-white border-white/20 bg-white/5 hover:bg-white/10"
                >
                  <a href="#software">
                    View Supported Software
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture / How it Works */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                    <h2 className="text-3xl font-semibold text-white">How It Works</h2>
                    <p className="text-lg leading-relaxed text-white/70">
                        Unlike a traditional VPS, our Free Tier uses containerization technology. This provides a lightweight, secure, and highly efficient environment for your code without the overhead of a full operating system.
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex items-center justify-center w-8 h-8 font-bold border rounded-full shrink-0 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">1</div>
                            <div>
                                <h3 className="font-medium text-white">Select Your Image</h3>
                                <p className="text-sm text-white/50">Choose <strong>one</strong> software type from our list during deployment (e.g., Node.js OR Python).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center justify-center w-8 h-8 font-bold border rounded-full shrink-0 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">2</div>
                            <div>
                                <h3 className="font-medium text-white">Upload Your Code</h3>
                                <p className="text-sm text-white/50">Use our web-based File Manager or SFTP to upload your scripts and assets.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center justify-center w-8 h-8 font-bold border rounded-full shrink-0 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">3</div>
                            <div>
                                <h3 className="font-medium text-white">Run 24/7</h3>
                                <p className="text-sm text-white/50">Start the server. Your application runs continuously in the background, fully protected.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Visual Representation of Single Selection */}
                <div className="relative p-8 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="absolute top-0 right-0 p-4">
                         <div className="inline-flex items-center gap-2 px-3 py-1 text-xs text-yellow-200 border rounded-full bg-yellow-500/10 border-yellow-500/20">
                            <AlertTriangle className="w-3 h-3" />
                            <span>Mutually Exclusive Selection</span>
                         </div>
                    </div>
                    <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between p-3 text-white border rounded-lg bg-cyan-500/20 border-cyan-400">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                <span className="font-medium">Node.js Container</span>
                            </div>
                            <span className="text-xs bg-cyan-500 text-black px-2 py-0.5 rounded font-bold">ACTIVE</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg opacity-50 bg-white/5 border-white/5 text-white/40">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border rounded-full border-white/20" />
                                <span>Python Container</span>
                            </div>
                            <span className="text-xs border border-white/10 px-2 py-0.5 rounded">DISABLED</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg opacity-50 bg-white/5 border-white/5 text-white/40">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border rounded-full border-white/20" />
                                <span>VS Code Server</span>
                            </div>
                            <span className="text-xs border border-white/10 px-2 py-0.5 rounded">DISABLED</span>
                        </div>
                        <p className="pt-2 text-xs text-center text-white/30">
                            *Example: If Node.js is installed, you cannot run VS Code Server simultaneously on the same instance.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Software Selection Grid */}
        <section id="software" className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mb-12 space-y-4 text-center">
                <h2 className="text-3xl font-semibold text-white">Select Your Runtime</h2>
                <p className="max-w-2xl mx-auto text-white/60">
                    We support a wide range of pre-configured Docker images. 
                    Choose the environment that matches your project needs.
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {SOFTWARE_OPTIONS.map((tech) => (
                    <div 
                        key={tech.name} 
                        className={`
                            p-4 rounded-xl border transition-all duration-300 group
                            ${tech.category === "IDE" 
                                ? "bg-blue-600/10 border-blue-500/30 hover:bg-blue-600/20 hover:border-blue-400" 
                                : "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-cyan-400/30"}
                        `}
                    >
                        <div className="flex items-start justify-between mb-2">
                            <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${
                                tech.category === "IDE" ? "border-blue-500/30 text-blue-200" : 
                                tech.category === "Tool" ? "border-orange-500/30 text-orange-200" :
                                "border-white/10 text-white/40"
                            }`}>
                                {tech.category}
                            </span>
                            {tech.category === "IDE" && <Laptop className="w-4 h-4 text-blue-400" />}
                        </div>
                        <h3 className="font-medium text-white transition-colors group-hover:text-cyan-200">{tech.name}</h3>
                    </div>
                ))}
            </div>
        </section>

        {/* Use Cases Detail */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
                <div className="p-8 space-y-4 border rounded-3xl border-white/10 bg-white/5">
                    <div className="flex items-center justify-center w-12 h-12 text-blue-400 rounded-xl bg-blue-500/20">
                        <Code2 />
                    </div>
                    <h3 className="text-xl font-bold text-white">Remote IDE</h3>
                    <p className="text-sm leading-relaxed text-white/60">
                        Deploy the <strong>VS Code Server</strong> image to turn your browser into a fully functional development environment. Access your terminal, edit files, and debug code from an iPad, Chromebook, or work laptop without local admin rights.
                    </p>
                </div>
                <div className="p-8 space-y-4 border rounded-3xl border-white/10 bg-white/5">
                    <div className="flex items-center justify-center w-12 h-12 text-purple-400 rounded-xl bg-purple-500/20">
                        <Terminal />
                    </div>
                    <h3 className="text-xl font-bold text-white">Bot Hosting</h3>
                    <p className="text-sm leading-relaxed text-white/60">
                        The ideal home for Discord, Telegram, or Matrix bots. Select <strong>Node.js</strong>, <strong>Python</strong>, or <strong>Java</strong> to keep your bot online 24/7. Includes unmetered bandwidth for heavy API usage.
                    </p>
                </div>
                <div className="p-8 space-y-4 border rounded-3xl border-white/10 bg-white/5">
                    <div className="flex items-center justify-center w-12 h-12 text-orange-400 rounded-xl bg-orange-500/20">
                        <Layers />
                    </div>
                    <h3 className="text-xl font-bold text-white">Observability</h3>
                    <p className="text-sm leading-relaxed text-white/60">
                        Run lightweight infrastructure tools like <strong>Prometheus</strong> for metrics or <strong>Loki</strong> for log aggregation. Perfect for monitoring your other VPS or Game Server services within our network.
                    </p>
                </div>
            </div>
        </section>

        {/* Pricing / Specs Plan */}
        <section id="pricing" className="container px-4 mx-auto sm:px-6 lg:px-8">
           <div className="max-w-md mx-auto">
                <div className="relative flex flex-col p-8 rounded-3xl border bg-white/[0.08] border-cyan-500/50 shadow-[0_0_60px_-15px_rgba(34,211,238,0.15)] backdrop-blur-sm">
                  
                  <div className="absolute px-4 py-1 text-xs font-bold tracking-wider text-white uppercase -translate-x-1/2 rounded-full shadow-lg -top-4 left-1/2 bg-cyan-600">
                    Free Forever
                  </div>

                  <div className="mb-8 space-y-2 text-center">
                    <h3 className="text-2xl font-bold text-white">Standard Container</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-white">€0.00</span>
                    </div>
                    <p className="text-sm text-white/40">No credit card required.</p>
                  </div>

                  <div className="p-6 mb-8 space-y-4 border rounded-2xl bg-black/40 border-white/5">
                    <SpecRow label="CPU Allocation" value="75% (Fair Use)" icon={<Cpu className="w-4 h-4 text-cyan-400"/>} />
                    <SpecRow label="Memory (RAM)" value="1024 MB" icon={<Zap className="w-4 h-4 text-cyan-400"/>} />
                    <SpecRow label="NVMe Storage" value="8192 MB" icon={<Database className="w-4 h-4 text-cyan-400"/>} />
                    <SpecRow label="Network Port" value="1 Gbps Shared" icon={<Network className="w-4 h-4 text-cyan-400"/>} />
                    <SpecRow label="Databases" value="3 Included" icon={<Database className="w-4 h-4 text-cyan-400"/>} />
                    <SpecRow label="Auto-Backups" value="2 Slots" icon={<Save className="w-4 h-4 text-cyan-400"/>} />
                  </div>

                  <div className="mb-8 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span>Shared IPv4 Address</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span>DDoS Protection Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span>Unmetered Traffic</span>
                    </div>
                  </div>

                  <Button asChild className="w-full h-12 text-base font-medium text-black bg-white hover:bg-white/90">
                    <a 
                      href="https://pay.vaultscope.dev/products/free-server" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Deploy Container
                    </a>
                  </Button>
                </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="container px-4 pb-20 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
                 <div className="flex items-center gap-3 mb-8">
                    <HelpCircle className="w-6 h-6 text-cyan-400" />
                    <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions</h2>
                 </div>
                 
                 <div className="space-y-4">
                    <FaqItem 
                        question="Do I get root access?" 
                        answer="No. These services are containerized for security and efficiency. You have full access to your file directory and can run commands within your environment, but you cannot modify the host operating system or install kernel-level packages." 
                    />
                    <FaqItem 
                        question="Can I install Node.js AND Python on the same server?" 
                        answer="No. Each container is configured for a specific runtime image (e.g., only Node.js). If you need a different environment, you must reinstall the server with the new image, which will wipe existing data." 
                    />
                    <FaqItem 
                        question="Can I install packages?" 
                        answer="Yes! For Node.js you can use npm/yarn, for Python pip, etc. As long as the package does not require root/sudo permissions to install, it will work perfectly." 
                    />
                     <FaqItem 
                        question="What does 'Fair Use' CPU mean?" 
                        answer="You are allocated 75% of a vCore. This is sufficient for almost all bots and development tasks. Consistently exceeding this limit (crypto mining, stress testing) may result in automatic suspension to protect other users." 
                    />
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

function FaqItem({ question, answer }: { question: string, answer: string }) {
    return (
        <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <h4 className="mb-2 text-lg font-medium text-white">{question}</h4>
            <p className="leading-relaxed text-white/60">{answer}</p>
        </div>
    )
}