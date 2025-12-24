/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Coins,
  Gift,
  Ticket,
  Languages,
  Database,
  Code2,
} from "lucide-react"

import { BackgroundWave } from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"

export function PegasusPageContent() {
  return (
    <div className="relative overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundWave />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />

      <main className="relative z-10 pb-32 space-y-32">
        {/* Hero */}
        <section className="relative pt-20 sm:pt-28">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Discord Bot
              </span>

              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                    Pegasus
                  </span>
                </h1>
                <p className="text-lg text-white/75 sm:text-xl">
                  A production-ready, feature-rich Discord bot built with TypeScript.
                  Advanced moderation, economy, tickets, giveaways, XP, and multi-language support.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  Discord.js v14
                </span>
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  TypeScript
                </span>
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/10 text-white/75">
                  Production Ready
                </span>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button
                  asChild
                  className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80"
                >
                  <a
                    href="https://github.com/cptcr/pegasus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

        {/* Overview */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                Enterprise Discord Bot
              </span>

              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Everything Your Server Needs
              </h2>

              <p className="text-base text-white/75 sm:text-lg">
                Pegasus is a fully modular Discord bot designed for large and small communities alike.
                It combines powerful moderation, a full economy, professional ticketing, giveaways,
                leveling, and multi-language support into one cohesive system.
              </p>

              <ul className="space-y-2">
                {[
                  "Advanced moderation with automation and audit logs",
                  "Full economy system with gambling and shops",
                  "Professional ticket system with transcripts",
                  "XP & leveling with role rewards",
                  "Giveaways with requirements and rerolls",
                  "Multi-language support (EN, DE, ES, FR)",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-blue-300" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Installation */}
            <div
              id="installation"
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-blue-300" />
                  <h3 className="text-lg font-semibold text-white">Installation</h3>
                </div>

                <div className="p-4 font-mono text-sm text-blue-300 border rounded-xl border-white/10 bg-black/60">
                  git clone https://github.com/cptcr/pegasus.git
                </div>

                <div className="p-4 font-mono text-sm text-blue-300 border rounded-xl border-white/10 bg-black/60">
                  npm install
                </div>

                <div className="p-4 font-mono text-sm text-blue-300 border rounded-xl border-white/10 bg-black/60">
                  npm run build && npm start
                </div>

                <p className="text-sm text-white/60">
                  Requires Node.js 18+, PostgreSQL, and a Discord application token.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon={<Shield />}
                title="Advanced Moderation"
                text="Warnings, automations, audit logs, role-based permissions, and blacklist system."
              />
              <Feature
                icon={<Coins />}
                title="Economy System"
                text="Virtual currency, gambling games, shops, daily rewards, work & rob."
              />
              <Feature
                icon={<Gift />}
                title="Giveaways"
                text="Advanced giveaways with requirements, weighted entries, and rerolls."
              />
              <Feature
                icon={<Ticket />}
                title="Ticket System"
                text="Professional support tickets with panels, actions, and transcripts."
              />
              <Feature
                icon={<Languages />}
                title="Multi-Language"
                text="English, German, Spanish, and French with per-user preferences."
              />
              <Feature
                icon={<Database />}
                title="PostgreSQL Backend"
                text="Reliable relational storage using Drizzle ORM and migrations."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur text-center space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Deploy Pegasus Today
            </h2>
            <p className="max-w-2xl mx-auto text-base text-white/75 sm:text-lg">
              Self-host Pegasus and gain full control over moderation, economy,
              and community automation.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80"
              >
                <a
                  href="https://github.com/cptcr/pegasus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="inline-flex items-center gap-2 text-white border border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20"
              >
                <a
                  href="https://discord.gg/vaultscope"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support Server
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="p-6 space-y-3 border rounded-2xl border-white/10 bg-white/5">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 text-blue-300 rounded-lg bg-blue-400/10">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-white/70">{text}</p>
    </div>
  )
}
