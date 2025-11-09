/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

/* eslint-disable react/no-unescaped-entities */
import { Scale } from "lucide-react"
import Link from "next/link"

import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Fair Usage Policy — VaultScope",
  description: "Guidelines that explain how shared resources may be used across VaultScope's free and paid services.",
  path: "/fair-usage",
})

const resourceGuidelines = [
  {
    title: "Compute & memory",
    items: [
      "Free tier workloads are capped at 40% shared vCPU and 512 MiB RAM. Bursts above 80% sustained for more than 10 minutes may be throttled.",
      "Paid workloads are entitled to the resources purchased for their tier. Bursting above 125% of the included CPU for longer than 15 minutes may trigger throttling.",
      "Cryptomining or synthetic load generation to monopolize CPU is prohibited on every plan.",
    ],
  },
  {
    title: "Storage & backups",
    items: [
      "Free tier storage is limited to 5 GiB per container. Long-lived artifacts, ISO images, or backup archives are not permitted on the free tier.",
      "Paid plans must keep utilization under 90% of the provisioned SSD quota to maintain snapshot reliability.",
      "Backups older than 30 days may be pruned if they exceed the number of guaranteed backup slots on your tier.",
    ],
  },
  {
    title: "Network & bandwidth",
    items: [
      "All tiers include unmetered transfer on a shared 1 Gbps uplink. Sustained traffic above 250 Mbps per container may be rate limited to protect other tenants.",
      "Free tier workloads cannot be used as CDN nodes, VPN relays, or public download mirrors.",
      "Traffic that triggers repeated abuse complaints (spam, reflection attacks, etc.) may be suspended immediately.",
    ],
  },
  {
    title: "Panel & automation",
    items: [
      "API polling must stay below 120 requests per minute per project.",
      "Automated deployment loops should include exponential backoff; tight retry loops that degrade panel performance will be blocked.",
      "Do not share panel credentials. Use sub-users with scoped permissions instead.",
    ],
  },
]

const enforcementSteps = [
  { label: "Notification", description: "We email the account owner with details about the policy breach and steps to resolve it." },
  {
    label: "Mitigation",
    description: "If the breach creates immediate risk to other tenants, we may throttle or suspend the workload while we await your response.",
  },
  {
    label: "Remediation",
    description: "You will have 72 hours to reduce usage, migrate, or upgrade. Repeated violations can result in account termination per our Terms of Service.",
  },
]

export default function FairUsagePolicy() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 flex items-center gap-4">
          <Scale className="h-10 w-10 text-foreground" aria-hidden="true" />
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Policy</p>
            <h1 className="text-4xl font-bold text-foreground">Fair Usage Policy</h1>
            <p className="text-muted-foreground">Last updated: November 2025</p>
          </div>
        </header>

        <div className="space-y-10 text-foreground">
          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              VaultScope provides a generous free tier and shared resource pools to help builders experiment without a credit
              card. This Fair Usage Policy explains how we balance that flexibility with the responsibility to keep the
              platform stable for everyone. It applies to every workload, whether it runs on the free tier, paid Minecraft
              servers, or bespoke infrastructure.
            </p>
            <p>
              These guidelines complement the{" "}
              <Link href="/terms" className="text-foreground underline underline-offset-4 hover:text-foreground/80">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/acceptable-use" className="text-foreground underline underline-offset-4 hover:text-foreground/80">
                Acceptable Use Policy
              </Link>
              . If there is a conflict, those documents take precedence.
            </p>
          </section>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Resource expectations</h2>
              <p className="mt-2 text-muted-foreground">
                Use resources within the limits of your plan. Sustained consumption that degrades neighbouring workloads may be
                throttled or migrated without notice.
              </p>
            </div>

            <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
              {resourceGuidelines.map((group) => (
                <div key={group.title} className="space-y-3 px-6 py-6">
                  <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                  <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Temporary bursts</h2>
              <p className="mt-2">
                We allow short bursts for deployments, backups, or major content drops. Please open a ticket in advance if you
                expect a burst that will exceed your plan for more than 30 minutes so we can allocate capacity proactively.
              </p>
            </div>
            <ul className="list-disc space-y-2 pl-6 text-sm">
              <li>Paid tiers may request a scheduled burst with at least 24 hours’ notice.</li>
              <li>Free tier workloads cannot exceed 2 simultaneous containers per account.</li>
              <li>Minecraft servers may not run more than one intensive world reset per hour without prior approval.</li>
            </ul>
          </section>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Enforcement process</h2>
              <p className="mt-2">
                Our goal is to nudge rather than surprise. Most issues are resolved with a quick conversation, but we reserve
                the right to act immediately when the platform is at risk.
              </p>
            </div>
            <ol className="space-y-4 rounded-2xl border border-white/10 bg-black/50 p-6 text-sm">
              {enforcementSteps.map((step, index) => (
                <li key={step.label} className="space-y-1">
                  <p className="text-foreground font-semibold">
                    {index + 1}. {step.label}
                  </p>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Need an exception?</h2>
              <p className="mt-2">
                If your workload requires sustained usage beyond these limits, reach out so we can scope a dedicated or higher
                tier environment.
              </p>
            </div>
            <ul className="list-disc space-y-2 pl-6 text-sm">
              <li>
                Email{" "}
                <a className="text-foreground underline underline-offset-4 hover:text-foreground/80" href="mailto:support@vaultscope.dev">
                  support@vaultscope.dev
                </a>{" "}
                with your expected CPU, memory, storage, and bandwidth profile.
              </li>
              <li>Provide at least 3 business days for us to review bespoke or burst requests.</li>
              <li>We may offer alternative architectures (queue workers, dedicated nodes, etc.) where appropriate.</li>
            </ul>
          </section>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-semibold text-foreground">Questions</h2>
            <p>
              Need clarification? Join the{" "}
              <a
                href="https://discord.gg/wK8UZ7AAmc"
                className="text-foreground underline underline-offset-4 hover:text-foreground/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                VaultScope Discord
              </a>{" "}
              or open a support ticket via the panel.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
