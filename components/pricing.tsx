/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useI18n } from "@/components/language-provider"

type PricingSectionCopy = {
  badge: string
  title: string
  description: string
  plan: {
    name: string
    price: string
    priceCaption: string
    description: string
    ctaLabel: string
    ctaHref: string
    includeTitle: string
    features: string[]
  }
}

export function Pricing() {
  const { getValue } = useI18n()
  const copy = getValue<PricingSectionCopy>("pricingSection")

  return (
    <section id="pricing" className="relative bg-black px-4 py-16 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-14 text-center sm:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-sm text-secondary-foreground backdrop-blur-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span className="font-medium">{copy.badge}</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {copy.description}
            </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="border-2 border-foreground/20 bg-card shadow-2xl shadow-foreground/10 transition-all duration-300 hover:border-foreground/40">
            <CardHeader className="p-6 pb-6 sm:p-8">
              <h3 className="mb-2 text-2xl font-bold text-foreground">{copy.plan.name}</h3>
              <p className="mb-6 text-muted-foreground">{copy.plan.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                  {copy.plan.price}
                </span>
                <span className="text-lg text-muted-foreground">{copy.plan.priceCaption}</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-6 sm:p-8">
              <Button
                className="mb-8 h-12 w-full bg-foreground text-background shadow-lg shadow-foreground/20 hover:bg-foreground/90"
                asChild
              >
                <a href={copy.plan.ctaHref} target="_blank" rel="noopener noreferrer">
                  {copy.plan.ctaLabel}
                </a>
              </Button>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-foreground">{copy.plan.includeTitle}</p>
                <ul className="space-y-3">
                  {copy.plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-foreground" aria-hidden="true" />
                      <span className="leading-relaxed text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
