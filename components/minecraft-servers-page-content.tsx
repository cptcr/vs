/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from "next/link"
import { ArrowUpRight, CheckCircle2, Gamepad2, Network, ShieldCheck } from "lucide-react"
import { BackgroundWave } from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Tier 1 – Starter",
    cpu: "40% of 1 vCore",
    ram: "1024 MiB",
    storage: "5120 MiB",
    allocations: "2",
    backups: "1",
    databases: "1",
    price: "€4.99",
    description: "Ideal for small survival or friends-only worlds running Paper or Fabric with lightweight mods.",
  },
  {
    name: "Tier 2 – Standard",
    cpu: "70% of 1 vCore",
    ram: "2048 MiB",
    storage: "10240 MiB",
    allocations: "3",
    backups: "2",
    databases: "1",
    price: "€7.99",
    description: "Built for modded survival or mid-size communities that need reliable TPS on Forge, Paper, or Fabric.",
  },
  {
    name: "Tier 3 – Advanced",
    cpu: "100% of 1 vCore",
    ram: "4096 MiB",
    storage: "20480 MiB",
    allocations: "4",
    backups: "3",
    databases: "2",
    price: "€11.99",
    description: "Targets larger SMPs and creative hubs with heavier plugin stacks or automation workloads.",
  },
  {
    name: "Tier 4 – Pro",
    cpu: "200% of 1 vCore",
    ram: "8192 MiB",
    storage: "40960 MiB",
    allocations: "5",
    backups: "5",
    databases: "3",
    price: "€19.99",
    description: "High-performance tier for busy modpacks, BungeeCord hubs, or studios validating ambitious experiences.",
  },
  {
    name: "Tier 5 – Enterprise",
    cpu: "300% of 1 vCore",
    ram: "16384 MiB",
    storage: "81920 MiB",
    allocations: "10",
    backups: "10",
    databases: "5",
    price: "€29.99",
    description: "Premium profile for professional projects that need aggressive scaling headroom and deep backups.",
  },
]

const focusAreas = [
  "Friend & casual servers",
  "Mid-size communities",
  "SMPs & creative worlds",
  "Busy modpack deployments",
  "Professional & premium projects",
]

const inclusions = [
  "Shared IPv4 with Cloudflare-backed DDoS protection on every tier",
  "Shared 1 Gbps uplink and unmetered traffic for consistent throughput",
  "Panel-managed backups according to your tier’s allocation",
  "Database slots bundled for plugins, proxies, or telemetry",
  "Mod, plugin, and player management directly in the control panel",
]

const panelFeatures = [
  {
    title: "In-panel mod installer",
    description: "Browse, queue, and roll back modpacks without FTP juggling.",
    href: "/docs/minecraft/mod-installer",
  },
  {
    title: "In-panel plugin installer",
    description: "Pull Paper, Bukkit, and community plugins with one click.",
    href: "/docs/minecraft/plugin-installer",
  },
  {
    title: "In-panel player management",
    description: "Manage whitelists, bans, and roles without jumping between tools.",
    href: "/docs/minecraft/players",
  },
]

const serverTypes = ["Vanilla", "Paper", "Spigot", "SpongeVanilla", "CurseForge", "BungeeCord"]

const ctaLink = "https://pay.vaultscope.dev/products/minecraft/"

export function MinecraftServersPageContent() {
  return (
    <div className="relative overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundWave />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/95 to-black" />

      <main className="relative z-10 space-y-24 pb-24 pt-28 sm:pt-32">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Minecraft Hosting
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                  Worlds that scale with your community
                </span>
              </h1>
              <p className="text-lg text-white/75 sm:text-xl">
                VaultScope now provisions managed Minecraft servers starting at €4.99 per month. Spin up SMPs, creative
                hubs, or modded adventures with panel-driven automation, proactive backups, and Cloudflare protection
                included.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                asChild
                className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80"
              >
                <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                  Launch a Minecraft server
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="inline-flex items-center gap-2 border-white/25 bg-white/5 text-white hover:border-white/45 hover:bg-white/10"
              >
                <Link href="/docs/minecraft/players">
                  Browse Minecraft docs
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Starting at", value: "€4.99 / mo" },
                { label: "Setup fee", value: "€1.99 (may apply)" },
                { label: "Network", value: "Shared 1 Gbps uplink" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">{stat.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur">
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Choose the tier that fits</h2>
                <p className="text-sm text-white/75 sm:text-base">
                  Every tier runs on SSD-backed nodes with shared IPv4, Cloudflare DDoS protection, and automated
                  backups. Database slots unlock integrations for proxies, telemetry, or control bots.
                </p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="min-w-full divide-y divide-white/10 text-left text-xs text-white/80 sm:text-sm">
                  <thead className="bg-white/[0.02] text-white/60">
                    <tr>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-medium">
                        Tier
                      </th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-medium">
                        CPU
                      </th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-medium">
                        RAM
                      </th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-medium">
                        Storage
                      </th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-medium">
                        Allocations
                      </th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-medium">
                        Backups
                      </th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-medium">
                        Databases
                      </th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-medium">
                        Price
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        Ideal for
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {tiers.map((tier) => (
                      <tr key={tier.name} className="align-top">
                        <td className="whitespace-nowrap px-4 py-4 font-semibold text-white">{tier.name}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-white/75">{tier.cpu}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-white/75">{tier.ram}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-white/75">{tier.storage}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-white/75">{tier.allocations}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-white/75">{tier.backups}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-white/75">{tier.databases}</td>
                        <td className="whitespace-nowrap px-4 py-4 font-semibold text-white">{tier.price}</td>
                        <td className="px-4 py-4 text-white/70">{tier.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-white/60">
                Additionally, a €1.99 setup fee may apply to new Minecraft servers. Taxes are excluded from the prices
                shown above.
              </p>
            </div>

            <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-black/60 p-6 sm:p-8 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Every Minecraft plan includes</h3>
              <ul className="space-y-3 text-sm text-white/80">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">Server types</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serverTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-white/80" aria-hidden="true" />
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/50">Panel capabilities</p>
                  <h3 className="text-2xl font-semibold text-white">Automation built into Paymenter + Pterodactyl</h3>
                </div>
              </div>
              <p className="text-sm text-white/75">
                Install mods, plugins, and manage players without leaving the control panel. Each workflow has a
                matching guide so you can delegate server management to trusted community members with confidence.
              </p>
              <div className="divide-y divide-white/10 rounded-2xl border border-white/10">
                {panelFeatures.map((feature) => (
                  <Link
                    key={feature.title}
                    href={feature.href}
                    className="flex flex-col gap-1 px-4 py-5 text-left text-white/80 transition hover:bg-white/5"
                  >
                    <span className="text-base font-semibold text-white">{feature.title}</span>
                    <span className="text-sm text-white/65">{feature.description}</span>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                      Read the guide
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-black/60 p-6 sm:p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <Gamepad2 className="h-6 w-6 text-white/80" aria-hidden="true" />
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/50">Why builders switch</p>
                  <h3 className="text-2xl font-semibold text-white">Designed for communities that evolve fast</h3>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-white/75">
                <li className="flex items-start gap-3">
                  <Network className="mt-0.5 h-4 w-4 text-white/70" aria-hidden="true" />
                  <span>Shared 1 Gbps uplink keeps latency low for global communities and mod-heavy hubs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-white/70" aria-hidden="true" />
                  <span>Cloudflare-backed mitigation with DDoS protection tuned for Minecraft traffic patterns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gamepad2 className="mt-0.5 h-4 w-4 text-white/70" aria-hidden="true" />
                  <span>Server templates cover Vanilla, Paper, Spigot, SpongeVanilla, CurseForge, and BungeeCord.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-white/70" aria-hidden="true" />
                  <span>
                    Backups, allocations, and database counts scale with your tier so you can grow without migrations.
                  </span>
                </li>
              </ul>
              <Button
                asChild
                className="inline-flex w-full items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/80"
              >
                <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                  Compare tiers & deploy
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
