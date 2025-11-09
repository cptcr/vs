/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import Link from "next/link"
import { ArrowUpRight, Blocks, Database, Server } from "lucide-react"
import { useI18n } from "@/components/language-provider"

import { Button } from "@/components/ui/button"

type ServiceCardCopy = {
  key: string
  icon: string
  title: string
  description: string
  features: string[]
  cta?: { label: string; href: string }
}

type ServicesSectionCopy = {
  title: string
  description: string
  cards: ServiceCardCopy[]
}

const ICONS: Record<string, typeof Blocks> = {
  minecraft: Blocks,
  vps: Database,
  dedicated: Server,
}

export function Services() {
  const { getValue } = useI18n()
  const section = getValue<ServicesSectionCopy>("servicesSection")

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-transparent px-4 py-20 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="container relative z-10 mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              {section.title}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg font-light text-muted-foreground/90">
            {section.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {section.cards.map((card) => {
            const Icon = ICONS[card.icon] ?? Blocks
            const cta = card.cta
            const hasCta = Boolean(cta?.href && cta.label)
            const isExternal = hasCta && cta?.href ? /^https?:\/\//.test(cta.href) : false

            return (
              <div
                key={card.key}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 text-white/85 sm:h-6 sm:w-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white">{card.title}</h3>
                    <p className="mb-6 font-light text-white/70">{card.description}</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {card.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-white/80">
                          <span className="mr-2 inline-block h-1 w-1 rounded-full bg-white/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {hasCta ? (
                      <div className="mt-6">
                        <Button
                          asChild
                          variant="ghost"
                          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20"
                        >
                          {isExternal ? (
                            <a href={cta?.href} target="_blank" rel="noopener noreferrer">
                              {cta?.label}
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          ) : (
                            <Link href={cta?.href ?? "#"}>
                              {cta?.label}
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          )}
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
