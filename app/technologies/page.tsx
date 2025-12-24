/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from 'next/link';
import { ArrowUpRight, Code2, Bot, Server, GitBranchIcon } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { BackgroundWave } from '@/components/BackgroundWave';
import { Button } from '@/components/ui/button';

export const metadata = buildMetadata({
  title: 'Technologies',
  description:
    'Explore VaultScope technologies including SDKs, bots, and infrastructure tools built for production environments.',
  path: '/technologies',
});

export default function TechnologiesPage() {
  return (
    <div className="relative overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundWave />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />

      <main className="relative z-10 pb-32 space-y-32">
        {/* Hero */}
        <section className="pt-20 sm:pt-28">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Platform
              </span>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                  Technologies
                </span>
              </h1>

              <p className="text-lg text-white/75 sm:text-xl">
                Production-ready software built for monitoring, automation, and
                large-scale communities.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Grid */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Node.js SDK */}
            <TechnologyCard
              icon={<Code2 />}
              title="Node.js SDK"
              description="Fully typed TypeScript SDK for interacting with the VaultScope Statistics Server."
              tags={['TypeScript', 'API Client', 'Node.js']}
              href="/technologies/nodejs-sdk"
            />

            {/* Pegasus */}
            <TechnologyCard
              icon={<Bot />}
              title="Pegasus Discord Bot"
              description="Feature-rich, self-hosted Discord bot with moderation, economy, tickets, XP, and i18n."
              tags={['Discord.js', 'TypeScript', 'PostgreSQL']}
              href="/technologies/pegasus"
            />

            <TechnologyCard
              icon={<GitBranchIcon />}
              title="Connect"
              description="VaultScope Connect handles the entire deployment pipeline for your Pterodactyl game servers. From compression to reboot, everything happens automatically with intelligent defaults and persistent configuration."
              tags={[
                'One-Command Deploy',
                'Multi-Instance',
                'Auto-Extract',
                'CI/CD Ready',
              ]}
              href="/technologies/connect"
            />

            {/* Placeholder for future tech */}
            <TechnologyCard
              icon={<Server />}
              title="Recore (Coming 2026)"
              description="Next-Gen Hosting Solution"
              tags={[
                'Hosting',
                'Docker',
                'QEMU',
                'Proxmox',
                'Stripe',
                'Reverse-Proxy',
              ]}
              disabled
            />
          </div>
        </section>

        {/* CTA */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur text-center space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Built for Real Production Workloads
            </h2>
            <p className="max-w-2xl mx-auto text-base text-white/75 sm:text-lg">
              All VaultScope technologies are designed with scalability,
              security, and long-term maintenance in mind.
            </p>

            <Button
              asChild
              className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80"
            >
              <a
                href="https://github.com/VaultScope"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore on GitHub
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

function TechnologyCard({
  icon,
  title,
  description,
  tags,
  href,
  disabled,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  disabled?: boolean;
}) {
  const content = (
    <div
      className={`h-full rounded-[2rem] border p-6 backdrop-blur transition ${
        disabled
          ? 'border-white/5 bg-white/[0.02] opacity-60'
          : 'border-white/10 bg-white/[0.05] hover:border-white/30 hover:bg-white/[0.08]'
      }`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-center w-12 h-12 text-blue-300 rounded-xl bg-blue-400/10">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="text-sm text-white/70">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-black/60 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (disabled || !href) return content;

  return <Link href={href}>{content}</Link>;
}
