/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import type { ComponentType, FC, SVGProps } from "react"
import { useMemo } from "react"
import {
  Shield,
  Cpu,
  Network,
  Gauge,
  Bookmark,
  LifeBuoy,
  Users,
  MessageSquare,
  GitBranch,
  Zap,
  Box,
  FileText,
  Key,
  Terminal,
  Clock,
  Database,
} from "lucide-react"
import { useI18n } from "@/components/language-provider"

type Feature = {
  key: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

// Temporary placeholder for an icon not in lucide-react bundle used elsewhere
const CouponIconPlaceholder: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M21 8v8a2 2 0 0 1-2 2h-3l-3 3-3-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l3-3 3 3h3a2 2 0 0 1 2 2z" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
    </svg>
  )
}

const featureBlueprint: Feature[] = [
  { key: "freeTierHosting", icon: Bookmark },
  { key: "oneClickInstall", icon: Zap },
  { key: "ddosProtection", icon: Shield },
  { key: "dailyBackups", icon: Clock },
  { key: "instantScaling", icon: Gauge },
  { key: "apiAccess", icon: Key },
  { key: "sshAccess", icon: Terminal },
  { key: "ipv4", icon: Network },
  { key: "network", icon: Cpu },
  { key: "monitoring", icon: Gauge },
  { key: "logs", icon: Terminal },
  { key: "rbac", icon: Users },
  { key: "cron", icon: Clock },
  { key: "fileManager", icon: FileText },
  { key: "gitDeploy", icon: GitBranch },
  { key: "templates", icon: Box },
  { key: "marketplace", icon: Database },
  { key: "uptime", icon: LifeBuoy },
  { key: "support", icon: MessageSquare },
  { key: "community", icon: MessageSquare },
  { key: "referrals", icon: Bookmark },
  { key: "promoCodes", icon: CouponIconPlaceholder },
  { key: "sla", icon: Shield },
]

export function Features() {
  const { getValue } = useI18n()
  const translations = getValue<{
    title: string
    description: string
    items: Array<{ key: string; title: string; description: string }>
  }>("features")

  const itemsByKey = useMemo(() => {
    return Object.fromEntries(translations.items.map((item) => [item.key, item]))
  }, [translations.items])

  return (
  <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-20">
      <h2 className="text-3xl font-bold text-foreground mb-4 sm:mb-6">{translations.title}</h2>
      <p className="text-muted-foreground max-w-2xl mb-8 text-sm sm:text-base">{translations.description}</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {featureBlueprint.map((feature) => {
          const copy = itemsByKey[feature.key] ?? { title: feature.key, description: "" }
          return (
            <div
              key={feature.key}
              className="group relative flex gap-4 items-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
            >
            {/* inner blur layer */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 mt-1 text-foreground">
              <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-foreground">{copy.title}</h3>
              <p className="text-sm text-muted-foreground">{copy.description}</p>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features

