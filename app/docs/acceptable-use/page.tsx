/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Acceptable Use — Docs",
  description:
    "Review VaultScope's acceptable use policy: fair resource sharing, prohibited content, automated suspensions and abuse reporting.",
  path: "/docs/acceptable-use",
})

export default function AcceptableUsePage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Policy</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Acceptable use & service limits</h1>
        <p className="text-lg text-muted-foreground">
          VaultScope is built for communities, creators and enterprises who respect their neighbours. This policy explains
          what you can run, how we enforce limits and how to report abuse.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Resource fair use</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Plans include dedicated vCPU, RAM and NVMe storage. Short spikes are fine, but sustained usage over 90% triggers an automated review.</li>
          <li>Running cryptocurrency miners, stress-test tools or background compute unrelated to your game workload is prohibited.</li>
          <li>Bandwidth is unmetered within reason. If you exceed 10 TB outbound in a month, expect a note from our network team.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Prohibited content</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Illegal content of any kind, including but not limited to pirated software, hate speech and CSAM.</li>
          <li>Malware distribution, botnets, phishing kits and command-and-control infrastructure.</li>
          <li>Cheat hosting, trade duping services or anything that ruins another community&apos;s gameplay.</li>
          <li>Spam campaigns, mass emailers or unsolicited marketing automation.</li>
        </ul>
        <p className="text-muted-foreground">
          If you&apos;re unsure whether something is allowed, email <a href="mailto:compliance@vaultscope.dev" className="font-medium underline text-primary underline-offset-4">compliance@vaultscope.dev</a> before you deploy.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Automatic enforcement</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>We monitor for abusive traffic patterns and malware signatures. Offending servers are suspended automatically.</li>
          <li>Idle free-tier servers suspend after 14 days of inactivity. Paid plans receive a 30-day warning before intervention.</li>
          <li>Repeated or egregious violations lead to termination without refund as outlined in the terms of service.</li>
        </ul>
      </section>

      <section className="space-y-6" id="abuse">
        <h2 className="text-2xl font-semibold">Report abuse</h2>
        <p className="text-muted-foreground">
          Help keep the community safe by reporting violations. Provide as much detail as possible:
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Server IP or subdomain, offending content type and timestamps.</li>
          <li>Relevant logs, screenshots or download links.</li>
          <li>Your contact details so our trust & safety team can follow up.</li>
        </ul>
        <p className="text-muted-foreground">
          Email abuse reports to <a href="mailto:abuse@vaultscope.dev" className="font-medium underline text-primary underline-offset-4">abuse@vaultscope.dev</a> or use the reporting form in the control panel.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Appeals process</h2>
        <ol className="pl-6 space-y-2 list-decimal text-muted-foreground">
          <li>Respond to the suspension email within 48 hours with context and remediation steps.</li>
          <li>Our compliance team reviews appeals within three business days.</li>
          <li>If approved, we restore service with a probationary monitoring period.</li>
        </ol>
        <p className="text-muted-foreground">
          Appeals without corrective action plans are rarely granted. Show your work and demonstrate how you&apos;ll stay within the policy.
        </p>
      </section>

      <section className="pt-8 space-y-6 border-t border-border">
        <h2 className="text-2xl font-semibold">Questions?</h2>
        <p className="text-muted-foreground">
          Reach <a href="mailto:policy@vaultscope.dev" className="font-medium underline text-primary underline-offset-4">policy@vaultscope.dev</a> for clarification. For contract-specific obligations, reference the terms in your SLA or enterprise addendum.
        </p>
      </section>
    </div>
  )
}
