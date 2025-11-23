/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import Link from "next/link"
import { ArrowUpRight, CheckCircle2, Terminal, Zap, Package, Server } from "lucide-react"
import { BackgroundWave } from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"

export function ConnectPageContent() {
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
              <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Developer Tools
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                    VaultScope Connect
                  </span>
                </h1>
                <p className="text-lg text-white/75 sm:text-xl">
                  Deploy to Pterodactyl game servers with a single command. Automate compression, uploads, extraction, and restarts.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  One-Command Deploy
                </span>
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  Multi-Instance
                </span>
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  Auto-Extract
                </span>
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  CI/CD Ready
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button
                  asChild
                  className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80"
                >
                  <a href="https://github.com/VaultScope/vs-connect" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="inline-flex items-center gap-2 text-white border-white/25 bg-white/5 hover:border-white/45 hover:bg-white/10"
                >
                  <Link href="#installation">
                    Quick Start
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
                CLI Tool
              </span>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Streamline Your Pterodactyl Deployments
                </h2>
                <p className="text-base text-white/75 sm:text-lg">
                  VaultScope Connect handles the entire deployment pipeline for your Pterodactyl game servers. From compression to reboot, everything happens automatically with intelligent defaults and persistent configuration.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-300" aria-hidden="true" />
                    <span>Deploy with a single command — no manual file transfers</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-300" aria-hidden="true" />
                    <span>Manage multiple Pterodactyl panels simultaneously</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-300" aria-hidden="true" />
                    <span>Automatic compression with customizable levels (1-9)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-300" aria-hidden="true" />
                    <span>Auto-extract and reboot options for hands-free deployment</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-300" aria-hidden="true" />
                    <span>Persistent project configuration for quick redeployment</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-300" aria-hidden="true" />
                    <span>CI/CD pipeline ready with skip-prompts mode</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80"
                >
                  <a href="https://github.com/VaultScope/vs-connect" target="_blank" rel="noopener noreferrer">
                    Get Started
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="inline-flex items-center gap-2 text-white border border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20"
                >
                  <a href="https://github.com/VaultScope/vs-connect#readme" target="_blank" rel="noopener noreferrer">
                    Documentation
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              <p className="text-sm text-white/60">
                Open source and available via npm. Requires a Pterodactyl client API key with appropriate permissions.
              </p>
            </div>

            {/* Installation & Commands Cards */}
            <div className="space-y-6">
              <div id="installation" className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-emerald-300" />
                    <h3 className="text-lg font-semibold text-white">Installation</h3>
                  </div>
                  <div className="p-4 font-mono text-sm border rounded-xl border-white/10 bg-black/60 text-emerald-300">
                    npm i -g vs-connect
                  </div>
                  <p className="text-sm text-white/65">
                    Install globally to access the CLI from anywhere in your system.
                  </p>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-white/10 bg-black/60 p-6 sm:p-8 backdrop-blur">
                <h3 className="mb-6 text-lg font-semibold text-white">Core Commands</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-white/70" />
                      <code className="text-sm font-semibold text-white">vs-connect init</code>
                    </div>
                    <p className="pl-6 text-xs text-white/65">
                      Run setup wizard to configure your first Pterodactyl instance
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-white/70" />
                      <code className="text-sm font-semibold text-white">vs-connect deploy</code>
                    </div>
                    <p className="pl-6 text-xs text-white/65">
                      Deploy your code — compresses, uploads, extracts, and reboots
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-white/70" />
                      <code className="text-sm font-semibold text-white">vs-connect add-instance</code>
                    </div>
                    <p className="pl-6 text-xs text-white/65">
                      Add additional Pterodactyl panels to your configuration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">How It Works</h2>
                <p className="max-w-2xl mx-auto text-base text-white/75 sm:text-lg">
                  VaultScope Connect automates the entire deployment pipeline with intelligent configuration management
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-300">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-white">Configuration Check</h3>
                  <p className="text-sm text-white/70">
                    Verifies global config and loads or creates deploy.json for your project with saved preferences
                  </p>
                </div>
                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-300">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-white">Compression</h3>
                  <p className="text-sm text-white/70">
                    Creates a ZIP archive with your configured compression level, respecting .gitignore patterns
                  </p>
                </div>
                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-300">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-white">Upload</h3>
                  <p className="text-sm text-white/70">
                    Requests signed URL from Pterodactyl and uploads ZIP file securely to your server
                  </p>
                </div>
                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-300">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-white">Extraction</h3>
                  <p className="text-sm text-white/70">
                    Automatically decompresses files to your specified directory if auto-extract is enabled
                  </p>
                </div>
                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-300">
                    5
                  </div>
                  <h3 className="text-lg font-semibold text-white">Reboot</h3>
                  <p className="text-sm text-white/70">
                    Optionally restarts your server after successful extraction to apply changes immediately
                  </p>
                </div>
                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-300">
                    ✓
                  </div>
                  <h3 className="text-lg font-semibold text-white">Complete</h3>
                  <p className="text-sm text-white/70">
                    Cleanup temporary files and confirm successful deployment with detailed logs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration Section */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <h3 className="mb-6 text-xl font-semibold text-white">Global Configuration</h3>
              <div className="space-y-4">
                <p className="text-sm text-white/70">
                  Stored in your system config directory and shared across all projects
                </p>
                <div className="p-4 border rounded-xl border-white/10 bg-black/60">
                  <pre className="overflow-x-auto text-xs text-white/80">
{`{
  "defaultInstance": "Production",
  "instances": [
    {
      "name": "Production",
      "url": "panel.example.com",
      "apikey": "your-api-key"
    }
  ],
  "experimental": {
    "zipCompressionLevel": 9,
    "autoExtractFiles": true
  }
}`}
                  </pre>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 text-xs border rounded-full border-white/15 bg-white/5 text-white/75">
                    Multi-instance
                  </span>
                  <span className="px-3 py-1 text-xs border rounded-full border-white/15 bg-white/5 text-white/75">
                    Default settings
                  </span>
                  <span className="px-3 py-1 text-xs border rounded-full border-white/15 bg-white/5 text-white/75">
                    API keys
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <h3 className="mb-6 text-xl font-semibold text-white">Project Configuration</h3>
              <div className="space-y-4">
                <p className="text-sm text-white/70">
                  Created as deploy.json in your project directory after first deployment
                </p>
                <div className="p-4 border rounded-xl border-white/10 bg-black/60">
                  <pre className="overflow-x-auto text-xs text-white/80">
{`{
  "useInstanceURL": "Production",
  "autoExtract": true,
  "autoReboot": true,
  "autoCleanup": true,
  "defaultCompressedFolder": "./dist",
  "defaultExtractDirectory": "/",
  "defaultServerId": "abc12345",
  "skipPrompts": false
}`}
                  </pre>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 text-xs border rounded-full border-white/15 bg-white/5 text-white/75">
                    Project-specific
                  </span>
                  <span className="px-3 py-1 text-xs border rounded-full border-white/15 bg-white/5 text-white/75">
                    Automation rules
                  </span>
                  <span className="px-3 py-1 text-xs border rounded-full border-white/15 bg-white/5 text-white/75">
                    CI/CD ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to Deploy?</h2>
                <p className="text-base text-white/75 sm:text-lg">
                  Get started with VaultScope Connect today and streamline your Pterodactyl deployments.
                </p>
              </div>
              <div className="grid gap-4">
                <a
                  href="https://github.com/VaultScope/vs-connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col gap-1 px-4 py-4 text-sm text-left transition border group rounded-2xl border-white/10 bg-white/5 text-white/80 hover:border-white/35 hover:bg-white/10"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-white/90">GitHub Repository</span>
                  <span className="text-xs text-white/65">View source code, report issues, and contribute</span>
                </a>
                <a
                  href="https://github.com/VaultScope/vs-connect#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col gap-1 px-4 py-4 text-sm text-left transition border group rounded-2xl border-white/10 bg-white/5 text-white/80 hover:border-white/35 hover:bg-white/10"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-white/90">Documentation</span>
                  <span className="text-xs text-white/65">Complete guide with examples and troubleshooting</span>
                </a>
                <a
                  href="https://www.npmjs.com/package/@vaultscope/vs-connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col gap-1 px-4 py-4 text-sm text-left transition border group rounded-2xl border-white/10 bg-white/5 text-white/80 hover:border-white/35 hover:bg-white/10"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-white/90">npm Package</span>
                  <span className="text-xs text-white/65">Install via npm and check version history</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}