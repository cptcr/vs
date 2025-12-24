/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Performance Optimization — Docs',
  description:
    'Optimize VaultScope servers with resource tuning, JVM flags, network hardening, caching layers and performance testing workflows.',
  path: '/docs/optimization',
});

export default function OptimizationPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Tune for peak hours
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Performance optimization guide
        </h1>
        <p className="text-lg text-muted-foreground">
          VaultScope hardware is fast by default, but great performance requires
          deliberate tuning. Use this checklist to squeeze the most out of your
          resources and prevent lag spikes.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Right-size your plan</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Track average CPU, RAM and disk usage during peak hours. Upgrade
            before you sustain 80% utilization.
          </li>
          <li>
            For memory-hungry workloads, choose plans with higher RAM-to-core
            ratios and avoid swapping.
          </li>
          <li>
            Move data-heavy servers to NVMe plans for better I/O throughput.
          </li>
        </ul>
        <p className="text-muted-foreground">
          Unsure which plan fits? Open a ticket with recent metrics and the
          reliability team will recommend a configuration.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Tune the JVM and runtime flags
        </h2>
        <p className="text-muted-foreground">
          Many game servers and mod loaders run on the JVM. Adjust launch flags
          from the schedules or start commands.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Use Aikar&apos;s flags for Minecraft Paper/Purpur instances to
            balance CPU usage and GC pauses.
          </li>
          <li>
            Set <code>-Xms</code> and <code>-Xmx</code> to the same value to
            avoid heap resizing overhead.
          </li>
          <li>
            Enable <code>-XX:+ZGC</code> or <code>-XX:+UseG1GC</code> for large
            heaps (&gt;8&nbsp;GB).
          </li>
          <li>
            Log garbage collection with <code>-Xlog:gc*</code> and review output
            weekly.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Reduce tick and TPS pressure</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Cap mob spawning and redstone updates on survival servers.</li>
          <li>
            Pre-generate chunks and store them on NVMe-backed storage to reduce
            on-demand generation.
          </li>
          <li>
            Disable unused plugins or modules—each one consumes CPU even when
            idle.
          </li>
          <li>
            Profile with spark or WarmRoast and fix the top offenders before the
            next event.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Network optimization</h2>
        <p className="text-muted-foreground">
          VaultScope terminates DDoS mitigation in front of your server. You
          still control ports and subdomains via the panel.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Keep only required ports open. Reclaim extras to avoid scanning
            noise.
          </li>
          <li>
            Use subdomains from vaultscope.dev or bring a reverse proxy to
            manage SSL certificates.
          </li>
          <li>
            Place latency-sensitive servers in the region closest to your
            players. Use health checks to detect when a region degrades.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Caching and external services
        </h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Offload static assets (resource packs, maps) to a CDN or object
            storage.
          </li>
          <li>
            Use Redis or Memcached for frequently accessed data rather than
            hitting the database every tick.
          </li>
          <li>
            Enable connection pooling and configure sensible timeouts to prevent
            resource leaks.
          </li>
        </ul>
        <p className="text-muted-foreground">
          For complex setups, consider containerized sidecars or separate
          compute nodes connected via the VaultScope network.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Load testing and validation</h2>
        <ol className="pl-6 space-y-2 list-decimal text-muted-foreground">
          <li>Clone production to a staging server using backups.</li>
          <li>
            Replay traffic with tools like tcpreplay, JMeter or custom bots.
          </li>
          <li>
            Monitor metrics in real-time and annotate when you apply changes.
          </li>
          <li>
            Document results and adjust runbooks before rolling updates to
            production.
          </li>
        </ol>
      </section>

      <section className="pt-8 space-y-6 border-t border-border">
        <h2 className="text-2xl font-semibold">Keep learning</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Review the{' '}
            <Link
              href="/docs/monitoring"
              className="font-medium underline text-primary underline-offset-4"
            >
              monitoring guide
            </Link>{' '}
            to make sure your dashboards highlight regressions.
          </li>
          <li>
            Pair optimizations with strong fallback plans—snapshots and
            rollbacks live in the{' '}
            <Link
              href="/docs/control-panel"
              className="font-medium underline text-primary underline-offset-4"
            >
              control panel doc
            </Link>
            .
          </li>
          <li>
            Share what you learn in{' '}
            <span className="font-semibold text-foreground">#performance</span>{' '}
            on Discord so others benefit.
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Need help interpreting profiler output? Email{' '}
          <a
            href="mailto:performance@vaultscope.dev"
            className="font-medium underline text-primary underline-offset-4"
          >
            performance@vaultscope.dev
          </a>{' '}
          with logs and timings—our team loves nerding out about optimizations.
        </p>
      </section>
    </div>
  );
}
