/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import Link from "next/link"
import { ArrowUpRight, CheckCircle2, Code2, Zap, Shield, Database } from "lucide-react"
import { BackgroundWave } from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"

export function NodeJsSDKPageContent() {
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
                TypeScript SDK
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                    Node.js SDK
                  </span>
                </h1>
                <p className="text-lg text-white/75 sm:text-xl">
                  TypeScript/JavaScript SDK for VaultScope Statistics Server. Monitor system resources, manage alerts, and control infrastructure with a fully typed API.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  TypeScript
                </span>
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  Fully Typed
                </span>
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  Auto Retry
                </span>
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  Error Handling
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button
                  asChild
                  className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80"
                >
                  <a href="https://github.com/VaultScope/vss-sdk" target="_blank" rel="noopener noreferrer">
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
              <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                TypeScript SDK
              </span>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Full-Featured Statistics Server Client
                </h2>
                <p className="text-base text-white/75 sm:text-lg">
                  The VaultScope Statistics Server SDK provides a complete TypeScript interface for monitoring system resources, managing alerts, and controlling infrastructure. Built with modern Node.js best practices and complete type safety.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                    <span>Complete TypeScript definitions for all API responses</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                    <span>Automatic retry logic with configurable attempts and delays</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                    <span>Comprehensive error handling with status codes and messages</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                    <span>Monitor CPU, memory, disk, network, GPU, and processes</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                    <span>Manage alerts, API keys, and system logs programmatically</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                    <span>Execute power commands with safety controls and delays</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80"
                >
                  <a href="https://www.npmjs.com/package/@vaultscope/vss-sdk" target="_blank" rel="noopener noreferrer">
                    Install via npm
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="inline-flex items-center gap-2 text-white border border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20"
                >
                  <a href="https://github.com/VaultScope/vss-sdk#readme" target="_blank" rel="noopener noreferrer">
                    Documentation
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              <p className="text-sm text-white/60">
                Requires Node.js 18+ and a valid VaultScope Statistics Server API key.
              </p>
            </div>

            {/* Installation & Quick Start Cards */}
            <div className="space-y-6">
              <div id="installation" className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-blue-300" />
                    <h3 className="text-lg font-semibold text-white">Installation</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="p-4 font-mono text-sm text-blue-300 border rounded-xl border-white/10 bg-black/60">
                      npm install @vaultscope/vss-sdk
                    </div>
                    <div className="p-4 font-mono text-sm text-blue-300 border rounded-xl border-white/10 bg-black/60">
                      yarn add @vaultscope/vss-sdk
                    </div>
                    <div className="p-4 font-mono text-sm text-blue-300 border rounded-xl border-white/10 bg-black/60">
                      pnpm add @vaultscope/vss-sdk
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-white/10 bg-black/60 p-6 sm:p-8 backdrop-blur">
                <h3 className="mb-4 text-lg font-semibold text-white">Quick Start</h3>
                <div className="p-4 border rounded-xl border-white/10 bg-black/60">
                  <pre className="overflow-x-auto text-xs text-white/80">
{`import { VSSClient } from '@vaultscope/vss-sdk';

const client = new VSSClient({
  baseURL: 'http://localhost:4000',
  apiKey: 'your-api-key-here',
  timeout: 30000,
  retryAttempts: 3
});

// Get system stats
const stats = await client.stats();
console.log(stats);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Categories Section */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Comprehensive API Coverage</h2>
                <p className="max-w-2xl mx-auto text-base text-white/75 sm:text-lg">
                  Access every aspect of your VaultScope Statistics Server with fully typed methods
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 text-blue-300 rounded-lg bg-blue-400/10">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">System Statistics</h3>
                  </div>
                  <p className="text-sm text-white/70">
                    Monitor CPU, memory, disk, network interfaces, processes, and GPU metrics in real-time
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">stats()</code>
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">cpu()</code>
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">memory()</code>
                  </div>
                </div>

                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 text-blue-300 rounded-lg bg-blue-400/10">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Alert Management</h3>
                  </div>
                  <p className="text-sm text-white/70">
                    Create, update, and manage system alerts with customizable thresholds and actions
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">createAlert()</code>
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">listAlerts()</code>
                  </div>
                </div>

                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 text-blue-300 rounded-lg bg-blue-400/10">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Power Commands</h3>
                  </div>
                  <p className="text-sm text-white/70">
                    Execute shutdown, reboot, and other power operations with safety delays and force options
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">power()</code>
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">cancelPower()</code>
                  </div>
                </div>

                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 text-blue-300 rounded-lg bg-blue-400/10">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">API Key Management</h3>
                  </div>
                  <p className="text-sm text-white/70">
                    Programmatically create, update, and manage API keys with granular permissions
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">createApiKey()</code>
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">listApiKeys()</code>
                  </div>
                </div>

                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 text-blue-300 rounded-lg bg-blue-400/10">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Hardware Information</h3>
                  </div>
                  <p className="text-sm text-white/70">
                    Access detailed hardware specs including mainboard, BIOS, chassis, and GPU details
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">hardware()</code>
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">gpu()</code>
                  </div>
                </div>

                <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 text-blue-300 rounded-lg bg-blue-400/10">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Network Speed Test</h3>
                  </div>
                  <p className="text-sm text-white/70">
                    Run comprehensive network speed tests and monitor bandwidth performance over time
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">speedTest()</code>
                    <code className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/80">networkHistory()</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Code Examples</h2>
              <p className="max-w-2xl mx-auto text-base text-white/75 sm:text-lg">
                Get started quickly with these common use cases
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur">
                <h3 className="mb-4 text-lg font-semibold text-white">System Monitoring</h3>
                <div className="p-4 border rounded-xl border-white/10 bg-black/60">
                  <pre className="overflow-x-auto text-xs text-white/80">
{`// Monitor CPU and memory
const stats = await client.stats();
console.log(\`CPU: \${stats.cpu.usage}%\`);
console.log(\`Memory: \${stats.memory.used}MB\`);

// Get process list
const processes = await client.processes({
  sortBy: 'cpu',
  limit: 10
});`}
                  </pre>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur">
                <h3 className="mb-4 text-lg font-semibold text-white">Alert Creation</h3>
                <div className="p-4 border rounded-xl border-white/10 bg-black/60">
                  <pre className="overflow-x-auto text-xs text-white/80">
{`// Create high CPU alert
const alert = await client.createAlert({
  name: 'High CPU Alert',
  type: 'cpu',
  condition: 'greater_than',
  threshold: 80,
  action: 'notify',
  severity: 'high'
});`}
                  </pre>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur">
                <h3 className="mb-4 text-lg font-semibold text-white">Error Handling</h3>
                <div className="p-4 border rounded-xl border-white/10 bg-black/60">
                  <pre className="overflow-x-auto text-xs text-white/80">
{`try {
  const stats = await client.stats();
} catch (error) {
  if (error.status === 401) {
    console.error('Invalid API key');
  } else if (error.code === 'NETWORK_ERROR') {
    console.error('Connection failed');
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur">
                <h3 className="mb-4 text-lg font-semibold text-white">TypeScript Types</h3>
                <div className="p-4 border rounded-xl border-white/10 bg-black/60">
                  <pre className="overflow-x-auto text-xs text-white/80">
{`import { SystemStats, CPUInfo } from '@vaultscope/vss-sdk';

const stats: SystemStats = await client.stats();
const cpu: CPUInfo = stats.cpu;
const usage: number = cpu.usage;`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <h3 className="mb-6 text-xl font-semibold text-white">Configuration Options</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-xl border-white/10 bg-black/60">
                  <pre className="overflow-x-auto text-xs text-white/80">
{`interface VSSConfig {
  baseURL: string;
  apiKey: string;
  timeout?: number;       // Default: 30000ms
  retryAttempts?: number; // Default: 3
  retryDelay?: number;    // Default: 1000ms
}`}
                  </pre>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                    <span>Configurable timeout and retry logic</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                    <span>Runtime configuration updates</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                    <span>Custom request methods for new endpoints</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <h3 className="mb-6 text-xl font-semibold text-white">Built-in Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-white">Automatic Retries</span>
                    <p className="text-white/65">Failed requests retry automatically with exponential backoff</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-white">Type Safety</span>
                    <p className="text-white/65">Complete TypeScript definitions for all responses and parameters</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-white">Error Details</span>
                    <p className="text-white/65">Comprehensive error messages with status codes and error types</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-white">Promise-Based</span>
                    <p className="text-white/65">Modern async/await API for clean, readable code</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Start Building Today</h2>
                <p className="text-base text-white/75 sm:text-lg">
                  Install the VaultScope Statistics Server SDK and start monitoring your infrastructure with TypeScript.
                </p>
              </div>
              <div className="grid gap-4">
                <a
                  href="https://www.npmjs.com/package/@vaultscope/vss-sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col gap-1 px-4 py-4 text-sm text-left transition border group rounded-2xl border-white/10 bg-white/5 text-white/80 hover:border-white/35 hover:bg-white/10"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-white/90">npm Package</span>
                  <span className="text-xs text-white/65">Install via npm, yarn, or pnpm</span>
                </a>
                <a
                  href="https://github.com/VaultScope/vss-sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col gap-1 px-4 py-4 text-sm text-left transition border group rounded-2xl border-white/10 bg-white/5 text-white/80 hover:border-white/35 hover:bg-white/10"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-white/90">GitHub Repository</span>
                  <span className="text-xs text-white/65">View source code and examples</span>
                </a>
                <a
                  href="https://github.com/VaultScope/vss-sdk#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col gap-1 px-4 py-4 text-sm text-left transition border group rounded-2xl border-white/10 bg-white/5 text-white/80 hover:border-white/35 hover:bg-white/10"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-white/90">Documentation</span>
                  <span className="text-xs text-white/65">API reference and detailed guides</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}