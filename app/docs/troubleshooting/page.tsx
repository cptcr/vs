/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Troubleshooting — Docs",
  description:
    "Follow VaultScope runbooks for incident response: server startup failures, connection issues, panel outages and escalation paths.",
  path: "/docs/troubleshooting",
})

export default function TroubleshootingPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">On-call toolkit</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Troubleshooting runbook</h1>
        <p className="text-lg text-muted-foreground">
          These are the same steps VaultScope engineers use during incidents. Start at the top, gather evidence and loop
          in support with full context if you need a hand.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Server fails to start</h2>
        <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
          <li>Check the console output for stack traces or port binding errors.</li>
          <li>Verify the main jar or binary exists and the start command references the correct filename.</li>
          <li>Ensure RAM allocation matches the JVM flags—out-of-memory kills appear as exit code 137.</li>
          <li>Run a manual backup before retrying so you can roll back if the disk becomes corrupted.</li>
        </ol>
        <p className="text-muted-foreground">
          Still stuck? Zip the latest log file and attach it to your support ticket for faster analysis.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Players cannot connect</h2>
        <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
          <li>Confirm the server is online in the panel and not in a suspended or stopping state.</li>
          <li>Verify the correct allocation is assigned under the <em>Network</em> tab.</li>
          <li>Check firewall rules or proxies for recent changes.</li>
          <li>Test connectivity using <code>mtr</code> or <code>ping</code> from a remote machine.</li>
          <li>Rotate subdomains or DNS records if propagation issues linger.</li>
        </ol>
        <div className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm text-muted-foreground">
          If only some regions experience issues, gather traceroutes and node names—this helps our network engineers escalate to upstream providers.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Panel or file manager errors</h2>
        <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
          <li>Hard refresh the browser or try a different profile to rule out cached assets.</li>
          <li>Check <a href="https://status.vaultscope.dev" className="font-medium text-primary underline underline-offset-4">status.vaultscope.dev</a> for active incidents.</li>
          <li>Collect console logs from the browser DevTools if a specific request returns 500.</li>
          <li>Attempt the action via SFTP or the API to confirm whether the issue is UI-specific.</li>
        </ol>
        <p className="text-muted-foreground">
          Include request IDs or timestamps when contacting support—we can trace them in our application logs.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">4. Performance degradation</h2>
        <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
          <li>Review resource graphs in the panel for CPU or memory exhaustion.</li>
          <li>Capture a profiler snapshot (spark, WarmRoast or VisualVM).</li>
          <li>Check the <em>Schedules</em> tab for overlapping automated tasks causing spikes.</li>
          <li>
            Compare current plugins or mods against a known-good backup. Revert recently added modules to isolate the issue.
          </li>
        </ol>
        <p className="text-muted-foreground">
          Share profiler output with performance@vaultscope.dev if you need tuning suggestions.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">5. Database problems</h2>
        <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
          <li>Confirm the database exists and credentials are valid in the <em>Databases</em> tab.</li>
          <li>Check that your IP is whitelisted if connecting externally.</li>
          <li>Inspect server logs for deadlocks or slow query warnings.</li>
          <li>Restore from the most recent backup if corruption is detected.</li>
        </ol>
        <p className="text-muted-foreground">
          The <Link href="/docs/databases" className="font-medium text-primary underline underline-offset-4">database guide</Link> covers common maintenance tasks in more depth.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">6. Escalating to VaultScope support</h2>
        <p className="text-muted-foreground">
          When opening a ticket or emailing support@vaultscope.dev, include:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Server ID, region and the exact timestamp the issue started.</li>
          <li>Steps to reproduce and whether the problem persists after a restart or backup restore.</li>
          <li>Relevant logs, profiler output or screenshots.</li>
          <li>Impact assessment (e.g., player count affected, revenue, tournaments).</li>
        </ul>
        <p className="text-muted-foreground">
          For critical outages, submit the ticket first, then ping the on-call role in the{" "}
          <a href="https://discord.gg/vaultscope" className="font-medium text-primary underline underline-offset-4">
            VaultScope Discord
          </a>
          . Include the ticket number so the engineer can pick it up immediately.
        </p>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-semibold">Post-incident checklist</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Document the root cause, impact and resolution steps in your runbook.</li>
          <li>Create or update schedules and alerts to prevent recurrence.</li>
          <li>Share learnings in <span className="font-semibold text-foreground">#operations</span> so the wider team stays informed.</li>
          <li>Celebrate the fix—operational excellence is a team sport.</li>
        </ul>
      </section>
    </div>
  )
}
