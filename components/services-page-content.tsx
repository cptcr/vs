/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { BackgroundWave } from "@/components/BackgroundWave"
import { useI18n } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  CloudLightning,
  Command,
  Cpu,
  GitBranch,
  Layers,
  Network,
  Radar,
  ShieldCheck,
  Share2,
  Sparkles,
  Zap,
} from "lucide-react"

type ServicesPageCopy = {
  hero: {
    badge: string
    title: string
    description: string
    ctas: {
      primary: { label: string; href: string }
      secondary: { label: string; href: string }
    }
    metrics: Array<{ label: string; value: string; description: string }>
    preview: {
      eyebrow: string
      title: string
      description: string
      points: string[]
    }
  }
  highlights: {
    title: string
    description: string
    items: Array<{
      key: string
      title: string
      description: string
      icon: string
    }>
  }
  stack: {
    title: string
    description: string
    categories: Array<{
      key: string
      title: string
      description: string
      items: string[]
    }>
  }
  features: {
    title: string
    description: string
    items: Array<{
      key: string
      title: string
      description: string
      icon: string
      href?: string
      linkLabel?: string
    }>
  }
  workflow: {
    title: string
    description: string
    steps: Array<{
      key: string
      title: string
      description: string
      result: string
    }>
  }
  freeTier: {
    title: string
    description: string
    note: string
  }
}

type FreePlanCopy = {
  title: string
  description: string
  features: Array<{ key: string; label: string }>
  price: string
  priceCaption: string
  cta?: string
}

const FEATURE_ICONS: Record<string, LucideIcon> = {
  reverseProxy: Share2,
  subdomains: Layers,
  cloudflareDdos: ShieldCheck,
  docker: Boxes,
  oneClickInstall: Zap,
  freeTier: CloudLightning,
  gigabitUplink: Network,
  autoUpdates: GitBranch,
}

const HIGHLIGHT_ICONS: Record<string, LucideIcon> = {
  orchestration: Command,
  reliability: ShieldCheck,
  velocity: Sparkles,
  observability: Radar,
  compute: Cpu,
}

const HIGHLIGHT_GRADIENTS = [
  "from-white/25 via-white/10 to-transparent",
  "from-white/20 via-white/8 to-transparent",
  "from-white/18 via-white/7 to-transparent",
  "from-white/22 via-white/9 to-transparent",
]

export function ServicesPageContent() {
  const { getValue } = useI18n()
  const copy = getValue<ServicesPageCopy>("servicesPage")
  const freePlan = getValue<FreePlanCopy>("solutions.freePlan")

  const primaryIsExternal = /^https?:\/\//.test(copy.hero.ctas.primary.href)
  const secondaryIsExternal = /^https?:\/\//.test(copy.hero.ctas.secondary.href)

  return (
    <div className="relative overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundWave />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />

      <main className="relative z-10 space-y-28 pb-32">
        <section className="relative pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] lg:items-start">
              <div className="space-y-10">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                  {copy.hero.badge}
                </span>
              <div className="space-y-6">
                  <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-transparent">
                      {copy.hero.title}
                    </span>
                  </h1>
                  <p className="max-w-2xl text-lg text-white/75 sm:text-xl">
                    {copy.hero.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="bg-foreground text-background shadow-[0_20px_80px_-30px_rgba(255,255,255,0.9)] hover:bg-foreground/80"
                  >
                    {primaryIsExternal ? (
                      <a
                        href={copy.hero.ctas.primary.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <span>{copy.hero.ctas.primary.label}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link href={copy.hero.ctas.primary.href} className="inline-flex items-center gap-2">
                        <span>{copy.hero.ctas.primary.label}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:border-white/60 hover:bg-white/10 hover:text-foreground"
                  >
                    {secondaryIsExternal ? (
                      <a
                        href={copy.hero.ctas.secondary.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <span>{copy.hero.ctas.secondary.label}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link href={copy.hero.ctas.secondary.href} className="inline-flex items-center gap-2">
                        <span>{copy.hero.ctas.secondary.label}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {copy.hero.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5"
                    >
                      <div className="absolute -right-6 -top-10 h-24 w-24 rounded-full bg-white/10 blur-3xl" aria-hidden />
                      <p className="text-sm uppercase tracking-widest text-white/60">{metric.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-2 text-sm text-white/65">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(120,120,120,0.25),transparent_55%)]" />
                <div className="relative space-y-6">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                    {copy.hero.preview.eyebrow}
                  </span>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-white">{copy.hero.preview.title}</h2>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {copy.hero.preview.description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {copy.hero.preview.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 rounded-[2rem] border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80"
                      >
                        <span className="h-2 w-2 rounded-full bg-white/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.highlights.title}</h2>
              <p className="text-lg text-white/70">{copy.highlights.description}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {copy.highlights.items.map((item, index) => {
                const Icon = HIGHLIGHT_ICONS[item.icon] ?? Sparkles
                const gradient = HIGHLIGHT_GRADIENTS[index % HIGHLIGHT_GRADIENTS.length]
                return (
                  <div
                    key={item.key}
                    className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_40px_120px_-45px_rgba(0,0,0,0.7)] backdrop-blur"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-75`} aria-hidden />
                    <div className="relative space-y-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] p-10 shadow-[0_50px_120px_-50px_rgba(0,0,0,0.6)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(110,110,110,0.25),transparent_55%)]" />
              <div className="relative space-y-8">
                <div className="max-w-3xl space-y-4">
                  <h2 className="text-3xl font-semibold text-white">{copy.stack.title}</h2>
                  <p className="text-base text-white/75">{copy.stack.description}</p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {copy.stack.categories.map((category) => (
                    <div
                      key={category.key}
                      className="rounded-[2.5rem] border border-white/10 bg-black/50 p-6 backdrop-blur"
                    >
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{category.title}</p>
                          <h3 className="text-xl font-semibold text-white">{category.description}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/80"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.features.title}</h2>
              <p className="text-base text-white/70">{copy.features.description}</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {copy.features.items.map((item) => {
                const Icon = FEATURE_ICONS[item.icon] ?? CheckCircle2
                const content = (
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.65)] backdrop-blur transition hover:border-white/40 hover:bg-white/[0.08]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%)] opacity-90 transition group-hover:opacity-100" aria-hidden />
                    <div className="relative space-y-5">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1.75rem] border border-white/30 bg-white/10 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                      </div>
                      {item.linkLabel && item.href ? (
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-white/70">
                          {item.linkLabel}
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      ) : null}
                    </div>
                  </div>
                )

                if (item.href) {
                  const isExternal = /^https?:\/\//.test(item.href)
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="h-full"
                    >
                      {content}
                    </Link>
                  )
                }

                return (
                  <div key={item.key} className="h-full">
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.workflow.title}</h2>
              <p className="text-base text-white/70">{copy.workflow.description}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {copy.workflow.steps.map((step, index) => (
                <div
                  key={step.key}
                  className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)] opacity-70" aria-hidden />
                  <div className="relative space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-sm font-semibold text-white/80">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="relative mt-6 rounded-[2rem] border border-white/15 bg-black/60 px-4 py-3 text-sm text-white/80">
                    {step.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/6 via-white/10 to-black px-8 py-12 shadow-[0_60px_160px_-60px_rgba(0,0,0,0.7)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(140,140,140,0.3),transparent_55%)]" />
              <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
                <div className="space-y-5">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.freeTier.title}</h2>
                  <p className="text-base text-white/70 leading-relaxed">{copy.freeTier.description}</p>
                  <p className="text-sm text-white/60">{copy.freeTier.note}</p>
                </div>
                <div className="rounded-[2.5rem] border border-white/15 bg-black/60 p-6 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/50">{freePlan.title}</p>
                  <p className="mt-3 text-sm text-white/70">{freePlan.description}</p>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="text-4xl font-semibold text-white">{freePlan.price}</span>
                    <span className="text-xs uppercase tracking-widest text-white/60">{freePlan.priceCaption}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {freePlan.features.map((feature) => (
                      <li key={feature.key} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                        <span>{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-6 w-full bg-foreground text-background hover:bg-foreground/80"
                  >
                    <a href="https://pay.vaultscope.dev/products/free-server" target="_blank" rel="noopener noreferrer">
                      {freePlan.cta ?? "Claim free server"}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
