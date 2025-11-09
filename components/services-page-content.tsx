/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { BackgroundWave } from "@/components/BackgroundWave"
import { useI18n } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

type ServicesPageCopy = {
  hero: {
    badge: string
    title: string
    description: string
    highlights: string[]
    ctas: {
      primary: { label: string; href: string }
      secondary: { label: string; href: string }
    }
  }
  coding: {
    badge: string
    title: string
    description: string
    specsTitle: string
    featuresTitle: string
    features: string[]
    serverTypesTitle: string
    serverTypes: Array<{ title: string; items: string[] }>
    note: string
    ctas: {
      primary: { label: string; href: string }
      secondary: { label: string; href: string }
    }
  }
  contact: {
    title: string
    description: string
    items: Array<{ label: string; description: string; href: string }>
  }
}

type FreePlanCopy = {
  title: string
  description: string
  features: Array<{ key: string; label: string }>
  price: string
  priceCaption: string
  ctaLabel: string
  ctaHref: string
}

export function ServicesPageContent() {
  const { getValue } = useI18n()
  const copy = getValue<ServicesPageCopy>("servicesPageV2")
  const freePlan = getValue<FreePlanCopy>("solutions.freePlan")

  return (
    <div className="relative overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundWave />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />

      <main className="relative z-10 space-y-32 pb-32">
        <section className="relative pt-20 sm:pt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                {copy.hero.badge}
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-transparent">
                    {copy.hero.title}
                  </span>
                </h1>
                <p className="text-lg text-white/75 sm:text-xl">{copy.hero.description}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {copy.hero.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/75"
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
                  <a href={copy.hero.ctas.primary.href} target="_blank" rel="noopener noreferrer">
                    {copy.hero.ctas.primary.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="inline-flex items-center gap-2 border-white/25 bg-white/5 text-white hover:border-white/45 hover:bg-white/10"
                >
                  <Link href={copy.hero.ctas.secondary.href}>
                    {copy.hero.ctas.secondary.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
                {copy.coding.badge}
              </span>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.coding.title}</h2>
                <p className="text-base text-white/75 sm:text-lg">{copy.coding.description}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                  {copy.coding.featuresTitle}
                </h3>
                <ul className="space-y-2">
                  {copy.coding.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-300" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80"
                >
                  <a href={copy.coding.ctas.primary.href} target="_blank" rel="noopener noreferrer">
                    {copy.coding.ctas.primary.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20"
                >
                  <Link href={copy.coding.ctas.secondary.href}>
                    {copy.coding.ctas.secondary.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-white/60">{copy.coding.note}</p>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">{copy.coding.specsTitle}</h3>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-semibold text-white">{freePlan.price}</span>
                    <span className="text-sm uppercase tracking-[0.3em] text-white/60">{freePlan.priceCaption}</span>
                  </div>
                  <p className="text-sm text-white/65">{freePlan.description}</p>
                </div>
                <div className="mt-6 space-y-3">
                  {freePlan.features.map((feature) => (
                    <div key={feature.key} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-white" aria-hidden="true" />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="mt-6 inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80"
                >
                  <a href={freePlan.ctaHref} target="_blank" rel="noopener noreferrer">
                    {freePlan.ctaLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="rounded-[2.5rem] border border-white/10 bg-black/60 p-6 sm:p-8 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">{copy.coding.serverTypesTitle}</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {copy.coding.serverTypes.map((group) => (
                    <div key={group.title} className="space-y-3">
                      <p className="text-sm font-semibold text-white/70">{group.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.contact.title}</h2>
                <p className="text-base text-white/75 sm:text-lg">{copy.contact.description}</p>
              </div>
              <div className="grid gap-4">
                {copy.contact.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group inline-flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-sm text-white/80 transition hover:border-white/35 hover:bg-white/10"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-white/90">{item.label}</span>
                    <span className="text-xs text-white/65">{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
