/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Monitoring & Alerts — Docs',
  description:
    'Instrument VaultScope servers with built-in metrics, external exporters, alert routing and incident response workflows.',
  path: '/docs/monitoring',
});

export default function MonitoringPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Stay ahead of incidents
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Monitoring and alerting strategy
        </h1>
        <p className="text-lg text-muted-foreground">
          Visibility is baked into the VaultScope control panel. Combine the
          built-in graphs with external exporters so you know about performance
          regressions before your players do.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Baseline metrics in the panel
        </h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            The console header shows real-time CPU, RAM and disk usage averaged
            across the last 15 seconds. Click any metric to expand historical
            charts for the previous hour, day or week.
          </li>
          <li>
            Use the <em>Activity</em> tab to audit restarts, backups and
            schedule executions with timestamps.
          </li>
          <li>
            Export raw console output when debugging—the download icon saves a
            text file for offline analysis.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Send metrics to your observability stack
        </h2>
        <p className="text-muted-foreground">
          VaultScope supports sidecar exporters and agent-based collectors.
          Popular setups include Prometheus node_exporter, Influx Telegraf or
          lightweight StatsD daemons.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Deploy exporters via the file manager or an automation schedule so
            they restart after reboots.
          </li>
          <li>
            Use custom ports for exporters and expose them via the{' '}
            <em>Network</em> tab if your monitoring stack lives elsewhere.
          </li>
          <li>
            Secure exporters with basic auth or mTLS. Never leave plaintext
            metrics endpoints open to the internet.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Alert routing</h2>
        <p className="text-muted-foreground">
          Alerts should page the right person at the right time. VaultScope
          teams typically route alerts using a mix of Discord, PagerDuty and
          email.
        </p>
        <ol className="pl-6 space-y-2 list-decimal text-muted-foreground">
          <li>
            Define thresholds for CPU, memory, TPS, ping and scheduled task
            failures.
          </li>
          <li>
            Send low-severity alerts to a Discord channel. Reserve PagerDuty or
            SMS for SLO-impacting incidents.
          </li>
          <li>
            Document escalation paths and expected response times in your
            runbook.
          </li>
        </ol>
        <div className="px-4 py-3 text-sm border rounded-lg border-border/60 bg-muted/10 text-muted-foreground">
          Every alert should include the server ID, region, metric value and
          links to relevant dashboards. Replace guesswork with actionable data.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Logging strategy</h2>
        <p className="text-muted-foreground">
          Treat console output as ephemeral. Ship logs off the server so you can
          search them during and after incidents.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Configure log shippers (Vector, Fluent Bit) to push data to services
            like Loki, Elastic or Datadog.
          </li>
          <li>
            Rotate files nightly with logrotate or a scheduled archive task to
            avoid disk exhaustion.
          </li>
          <li>
            Tag logs with the server ID and environment to filter quickly during
            investigations.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Runbooks and incident drills</h2>
        <p className="text-muted-foreground">
          Combine metrics and logs with actionable runbooks. If a graph spikes
          or a process crashes, the team should know the first three steps
          automatically.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Link alerts to specific troubleshooting sections—start with the{' '}
            <Link
              href="/docs/troubleshooting"
              className="font-medium underline text-primary underline-offset-4"
            >
              troubleshooting guide
            </Link>
            .
          </li>
          <li>
            Run quarterly game days where you intentionally break staging
            servers and follow your response checklist.
          </li>
          <li>
            Track mean time to acknowledge (MTTA) and mean time to resolve
            (MTTR) so improvements are measurable.
          </li>
        </ul>
      </section>

      <section className="pt-8 space-y-6 border-t border-border">
        <h2 className="text-2xl font-semibold">Compliance and retention</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Retain monitoring data for at least 30 days and security logs for 90
            days to support incident forensics.
          </li>
          <li>
            Restrict access to dashboards and alert configs to trusted operators
            with two-factor authentication.
          </li>
          <li>
            Back up your observability configuration just like any other
            critical system—store Terraform or Helm charts in version control.
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Questions about integrating a specific monitoring stack? Reach the
          reliability team at{' '}
          <a
            href="mailto:sre@vaultscope.dev"
            className="font-medium underline text-primary underline-offset-4"
          >
            sre@vaultscope.dev
          </a>
          .
        </p>
      </section>
    </div>
  );
}
