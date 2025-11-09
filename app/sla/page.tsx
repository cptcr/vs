/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

/* eslint-disable react/no-unescaped-entities */
import { ShieldCheck } from "lucide-react"
import Link from "next/link"

import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Service Level Agreement — VaultScope",
  description: "Availability targets, response commitments, and service credits for VaultScope managed infrastructure.",
  path: "/sla",
})

const priorities = [
  {
    name: "P1 — Critical outage",
    target: "15 minutes acknowledgement · constant effort until resolution",
    examples: ["Complete control panel outage", "Global loss of connectivity", "Security event impacting multiple tenants"],
  },
  {
    name: "P2 — Major degradation",
    target: "1 hour acknowledgement · workaround or fix within 4 hours",
    examples: ["Single region downtime", "Severe packet loss", "Minecraft tier unavailable"],
  },
  {
    name: "P3 — Standard incident",
    target: "4 hour acknowledgement · resolution target 1 business day",
    examples: ["Isolated container failure", "Backup job delay", "Intermittent API errors"],
  },
  {
    name: "P4 — Service request",
    target: "1 business day acknowledgement · delivery scheduled with customer",
    examples: ["Quota increase request", "DNS / reverse proxy change", "Guidance on best practices"],
  },
]

const creditTable = [
  { uptime: "≥ 99.9%", credit: "No credit (target met)" },
  { uptime: "99.0% – 99.89%", credit: "10% of monthly fee for affected service" },
  { uptime: "95.0% – 98.99%", credit: "25% of monthly fee for affected service" },
  { uptime: "< 95.0%", credit: "50% of monthly fee for affected service" },
]

export default function ServiceLevelAgreement() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 flex items-center gap-4">
          <ShieldCheck className="h-10 w-10 text-foreground" aria-hidden="true" />
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Service Commitment</p>
            <h1 className="text-4xl font-bold text-foreground">Service Level Agreement (SLA)</h1>
            <p className="text-muted-foreground">Last updated: November 2025</p>
          </div>
        </header>

        <div className="space-y-10 text-foreground">
          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This SLA describes the availability targets and support response timelines for VaultScope managed services,
              including the free tier, paid Minecraft servers, and bespoke infrastructure. It supplements our{" "}
              <Link href="/terms" className="text-foreground underline underline-offset-4 hover:text-foreground/80">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/acceptable-use" className="text-foreground underline underline-offset-4 hover:text-foreground/80">
                Acceptable Use Policy
              </Link>
              .
            </p>
            <p>
              “Monthly uptime percentage” is calculated per calendar month using the formula:{" "}
              <span className="font-semibold text-foreground">(Total minutes - Downtime) / Total minutes</span>. Downtime is
              any full minute when customer workloads are unavailable due to VaultScope-controlled infrastructure issues.
            </p>
          </section>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-semibold text-foreground">Availability targets</h2>
            <ul className="list-disc space-y-2 pl-6 text-sm">
              <li>Control panel and API: 99.9% monthly uptime.</li>
              <li>Free tier workloads: best-effort availability with 99.5% internal target.</li>
              <li>Paid Minecraft servers and bespoke environments: 99.9% monthly uptime.</li>
              <li>Scheduled maintenance up to 4 hours per month is excluded when announced at least 48 hours in advance.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Incident response commitments</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Submit incidents through the panel, status page, or Discord. Priority is determined jointly with the customer.
              </p>
            </div>

            <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/40">
              {priorities.map((priority) => (
                <div key={priority.name} className="space-y-3 px-6 py-6">
                  <div>
                    <p className="text-lg font-semibold text-foreground">{priority.name}</p>
                    <p className="text-sm text-muted-foreground">{priority.target}</p>
                  </div>
                  <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                    {priority.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-semibold text-foreground">Service credits</h2>
            <p>Customers on paid plans may request credits when monthly uptime falls below the contractual target.</p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm text-muted-foreground">
                <thead className="bg-white/[0.02] text-white/60">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Monthly uptime</th>
                    <th className="px-4 py-3 font-semibold">Credit level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {creditTable.map((row) => (
                    <tr key={row.uptime}>
                      <td className="px-4 py-3 text-white">{row.uptime}</td>
                      <td className="px-4 py-3">{row.credit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="list-disc space-y-2 pl-6 text-sm">
              <li>Requests must be submitted to support@vaultscope.dev within 30 days of the incident.</li>
              <li>Credits apply to future invoices and cannot exceed the monthly fee for the affected service.</li>
              <li>Credits are unavailable if fees are overdue or if the incident was caused by customer-side configuration.</li>
            </ul>
          </section>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-semibold text-foreground">Exclusions</h2>
            <ul className="list-disc space-y-2 pl-6 text-sm">
              <li>Force majeure events (natural disasters, large-scale internet outages).</li>
              <li>Issues caused by customer software, third-party plugins, or denial-of-service attacks beyond Cloudflare coverage.</li>
              <li>Maintenance requested by the customer or performed to address Acceptable Use violations.</li>
            </ul>
          </section>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-semibold text-foreground">Questions & escalation</h2>
            <p>
              Open a ticket in the panel, reach out via{" "}
              <a
                href="https://discord.gg/wK8UZ7AAmc"
                className="text-foreground underline underline-offset-4 hover:text-foreground/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
              , or email{" "}
              <a className="text-foreground underline underline-offset-4 hover:text-foreground/80" href="mailto:support@vaultscope.dev">
                support@vaultscope.dev
              </a>{" "}
              for clarification. Formal escalation requests can be sent to{" "}
              <a className="text-foreground underline underline-offset-4 hover:text-foreground/80" href="mailto:legal@vaultscope.dev">
                legal@vaultscope.dev
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
