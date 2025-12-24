/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { BackgroundWave } from '@/components/BackgroundWave';
import { Github, Globe } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Team',
  description:
    'Meet the VaultScope team – founders, engineers, maintainers, moderators, and translators.',
  path: '/team',
});

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundWave />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />

      <main className="relative z-10 pb-32 space-y-28">
        {/* Hero */}
        <section className="pt-20 text-center sm:pt-28">
          <div className="container px-4 mx-auto">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              People
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                Our Team
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mt-4 text-lg text-white/75">
              The people building, maintaining, and supporting VaultScope.
            </p>
          </div>
        </section>

        {/* Founders */}
        <TeamSection title="Founders">
          <TeamMember
            name="Tony"
            role="Founder"
            github="cptcr"
            website="https://cptcr.dev"
          />
          <TeamMember
            name="Jason"
            role="Founder, Chief Technology Officer"
            github="altifyx"
          />
          <TeamMember name="Rúben" role="Founder, Head of Infrastructure" />
          <TeamMember
            name="Justin"
            role="Founder, Internal Maintenance"
            github="d3rjust1n"
            website="https://d3rjust1n.xyz"
          />
          <TeamMember
            name="Charlie"
            role="Founder, General Support & Maintainer"
            github="Tittysou"
          />
          <TeamMember
            name="Marek"
            role="Founder, Technical Support"
            github="veroxjs"
          />
        </TeamSection>

        {/* Engineering */}
        <TeamSection title="Engineering & Infrastructure">
          <TeamMember name="Ace" role="Maintainer" />
        </TeamSection>

        {/* Support */}
        <TeamSection title="Support">
          <TeamMember
            name="Alex"
            role="Discord Administration & Customer Support"
            github="Ba55M3ll0w"
          />
          <TeamMember
            name="Franki"
            role="Customer Support, Translator"
            github="FranKi1902"
          />
          <TeamMember
            name="Hugvin"
            role="Customer Support, Translator"
            github="Hugvin"
          />
        </TeamSection>

        {/* Moderation */}
        <TeamSection title="Discord Moderation">
          <TeamMember
            name="IIIIXI"
            role="Discord Moderation & Customer Support"
          />
          <TeamMember name="Metxhrt" role="Discord Moderator" />
          <TeamMember name="Rio" role="Discord Moderator" />
        </TeamSection>

        {/* Translators */}
        <TeamSection title="Translators">
          <TeamMember name="Itz_Fire" role="Translator" />
          <TeamMember name="121afaswpos" role="Translator" />
          <TeamMember name="ggod" role="Translator" />
          <TeamMember name="Nick" role="Translator" />
        </TeamSection>
      </main>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function TeamSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  if (!children) return null;

  return (
    <section className="container px-4 mx-auto">
      <h2 className="mb-6 text-2xl font-semibold text-white">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  );
}

function TeamMember({
  name,
  role,
  github,
  website,
}: {
  name: string;
  role: string;
  github?: string;
  website?: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.08]">
      <div className="space-y-4">
        <div className="flex items-center justify-center text-lg font-semibold text-blue-300 h-14 w-14 rounded-xl bg-blue-400/10">
          {name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-white/65">{role}</p>
        </div>

        {(github || website) && (
          <div className="flex gap-3 pt-2">
            {github && (
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
              >
                <Globe className="w-4 h-4" />
                Website
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
