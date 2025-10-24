/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import BackgroundWave from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import {
  Activity,
  ArrowUpRight,
  BookOpenCheck,
  CreditCard,
  LifeBuoy,
  Lock,
  Rocket,
  Settings2,
} from "lucide-react"

const DOC_SECTIONS: {
  title: string
  href: string
  description: string
  highlights: string[]
  icon: LucideIcon
}[] = [
  {
    title: "Getting started",
    href: "/docs/getting-started",
    description: "Work through the first-session checklist: console, files, backups and escalation paths.",
    highlights: ["Orientation tour", "File uploads", "Backup safety net"],
    icon: Rocket,
  },
  {
    title: "Control panel",
    href: "/docs/control-panel",
    description: "Operate day-to-day with confidence—delegate access, automate schedules and manage networking.",
    highlights: ["Run backups", "Build schedules", "Assign access"],
    icon: Settings2,
  },
  {
    title: "Billing & plans",
    href: "/docs/billing",
    description: "Set up Paymenter, verify invoices, manage renewals and handle refunds without guesswork.",
    highlights: ["Account setup", "Invoice cadence", "Payment methods"],
    icon: CreditCard,
  },
  {
    title: "Operations hub",
    href: "/docs/troubleshooting",
    description: "Diagnose issues fast with the incident runbook our on-call team uses every day.",
    highlights: ["Startup triage", "Connectivity checks", "Escalation steps"],
    icon: Activity,
  },
  {
    title: "Advanced playbooks",
    href: "/docs/advanced",
    description: "Level up with GitOps pipelines, custom networking and observability-driven automation.",
    highlights: ["GitOps deploys", "Proxy patterns", "Security hardening"],
    icon: BookOpenCheck,
  },
  {
    title: "Security & trust",
    href: "/docs/security",
    description: "Harden your environments with layered protection, 2FA and incident response hygiene.",
    highlights: ["Two-factor setup", "Credential rotation", "Incident response"],
    icon: Lock,
  },
]

const QUICK_LINKS = [
  { label: "Launch your first server", href: "/docs/quickstart" },
  { label: "Secure your account", href: "/docs/security" },
  { label: "Check billing policies", href: "/docs/billing" },
]

const OPERATIONS_LINKS = [
  { label: "Server provisioning checklist", href: "/docs/servers" },
  { label: "Performance optimization", href: "/docs/optimization" },
  { label: "Monitoring and alerts", href: "/docs/monitoring" },
  { label: "Incident runbook", href: "/docs/troubleshooting" },
]

export const metadata = buildMetadata({
  title: "Documentation — VaultScope",
  description: "Guides, references and tutorials to help you use VaultScope and manage your servers.",
  path: "/docs",
})

export default function DocsPage() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/80 px-6 py-12 text-foreground shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] sm:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <BackgroundWave />
        </div>
        <div className="pointer-events-none absolute -top-32 right-[-20%] h-64 w-64 rounded-full bg-primary/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-32 left-[-10%] h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" aria-hidden />
        <div className="relative z-10 space-y-16">
          <section className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
              VaultScope docs
            </span>
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Operate VaultScope with confidence</h1>
              <p className="text-lg text-muted-foreground">
                The documentation library captures the exact playbooks our reliability team uses every day. Work
                through guided setups, diagnose incidents faster and keep your infrastructure resilient.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {QUICK_LINKS.map(link => (
                <Button
                  key={link.href}
                  asChild
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:border-primary/80 hover:bg-primary/20"
                >
                  <Link href={link.href} className="inline-flex items-center gap-2">
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold sm:text-3xl">Browse by objective</h2>
              <p className="text-muted-foreground">
                Start with the path that best matches what you’re shipping today. Each guide links deeper runbooks and
                command references.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {DOC_SECTIONS.map(section => {
                const Icon = section.icon
                return (
                  <Link
                    key={section.href}
                    href={section.href}
                    className="group relative block h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-primary/70 hover:bg-primary/10"
                  >
                    <Card className="h-full border-0 bg-transparent shadow-none">
                      <CardHeader className="space-y-4 pb-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <CardTitle className="text-lg font-semibold text-foreground">{section.title}</CardTitle>
                          <CardDescription className="mt-2 text-sm leading-relaxed text-white/70">
                            {section.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2 text-sm text-white/70">
                          {section.highlights.map(item => (
                            <li key={item} className="flex items-center gap-2">
                              <span className="inline-flex h-2 w-2 rounded-full bg-primary/70" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <div className="absolute inset-x-0 bottom-0 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-100" />
                    </Card>
                  </Link>
                )
              })}
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <Card className="border-white/10 bg-white/5 backdrop-blur">
              <CardHeader className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-primary/20 text-primary">
                    <Activity className="h-5 w-5" />
                  </span>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">Operations command centre</CardTitle>
                    <CardDescription className="text-sm text-white/70">
                      Shortcut into the deep-dive runbooks our reliability engineers trust during incident response.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {OPERATIONS_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/70 transition hover:border-primary/70 hover:bg-primary/20 hover:text-foreground"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card className="flex h-full flex-col justify-between border-white/10 bg-gradient-to-br from-primary/15 via-primary/10 to-transparent p-6 text-white shadow-lg">
              <div className="space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80">
                  <LifeBuoy className="h-5 w-5" />
                </span>
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground">Need support?</CardTitle>
                  <CardDescription className="mt-2 text-sm text-white/80">
                    Our on-call team covers 24/7 incident response with a median 15 minute first reply time.
                    Escalate through your preferred channel and we’ll stay on the issue until resolution.
                  </CardDescription>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/40 p-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/50 text-xs font-semibold">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-xs text-white/70">support@vaultscope.dev</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/40 p-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/50 text-xs font-semibold">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Discord</p>
                    <p className="text-xs text-white/70">Join the community for real-time help</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/40 p-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/50 text-xs font-semibold">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Control panel ticket</p>
                    <p className="text-xs text-white/70">Open a ticket directly from your project dashboard</p>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
