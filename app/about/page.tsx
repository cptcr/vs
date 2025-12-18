/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import BackgroundWave from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { Globe, Rocket, Server } from "lucide-react"
import Image from "next/image"

const stats = [
  {
    value: "1",
    label: "Global location",
    description: "Strategic footprint in a carrier-neutral facility with worldwide network reach.",
  },
  {
    value: "99.0%",
    label: "Platform uptime",
    description: "Measured across core services with transparent incident postmortems.",
  },
  {
    value: "15 min",
    label: "Median deployment window",
    description: "Average time from confirmed order to production-ready workload.",
  },
]

const pillars = [
  {
    title: "Global edge fabric",
    description:
      "Anycast networking, Cloudflare-backed DDoS mitigation, and tier-1 carriers keep latency predictable everywhere your workloads run.",
    icon: Globe,
  },
  {
    title: "Dedicated compute tiers",
    description:
      "Choose between tuned VPS clusters or bare-metal fleets with automated firmware hygiene and lifecycle rotation.",
    icon: Server,
  },
  {
    title: "Automation-ready tooling",
    description:
      "API-first provisioning, Git-powered configuration templates, and Terraform modules accelerate platform teams.",
    icon: Rocket,
  },
]

const milestones = [
  {
    year: "2023",
    title: "CPTCR Hosting launches",
    description:
      "Our founding team introduced CPTCR Hosting, proving that lean infrastructure teams could still deliver dependable compute.",
  },
  {
    year: "2024",
    title: "CPTCR Hosting sunset",
    description:
      "We paused operations to rebuild the platform fundamentals—prioritising failover, observability, and a secure-by-default posture.",
  },
  {
    year: "2025",
    title: "Reborn as VaultScope",
    description:
      "VaultScope emerged as the next chapter, specialising in reliability, security, and easy deployment for developer-led teams.",
  },
]

const leadership = [
  {
    name: "Anton Schmidt",
    initials: "AS",
    role: "Chief Executive Officer",
    bio: "Leads strategy and customer partnerships, drawing on 15+ years of guiding infrastructure scale-ups from early traction through global expansion.",
    discordId: "931870926797160538",
    avatarHash: "eade90ccd9cc369fc550364f7d749a97",
  },
  {
    name: "Rúben Fernandes",
    initials: "RF",
    role: "Head of Infrastructure",
    bio: "Owns the global network and compute architecture, specialising in edge performance, hardware lifecycle automation, and zero-trust security foundations.",
    discordId: "246306478019969024",
    avatarHash: "a_84906e9335927636d67024e68dba7fcf",
  },
  {
    name: "Jason",
    initials: "J",
    role: "Chief Technology Officer",
    bio: "Shapes VaultScope’s platform roadmap with a focus on developer experience, orchestration automation, and resilient multi-cloud interoperability.",
    discordId: "759037138929975297",
    avatarHash: "092a54dce42e50446ae77f65944e4d9c",
  },
]

const buildDiscordAvatarUrl = (id: string, hash: string, size = 128) => {
  const ext = hash.startsWith("a_") ? "gif" : "png"
  return `https://cdn.discordapp.com/avatars/${id}/${hash}.${ext}?size=${size}`
}

const futureFocus = [
  "Expanding dedicated GPU fleets for real-time workloads and ML inference at the edge.",
  "Launching compliance workspaces with SOC 2 Type I evidence and automated reporting.",
  "Doubling 24/7 customer reliability coverage across the Americas, EMEA, and APAC.",
]

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about VaultScope's mission, team values, and commitment to reliable infrastructure.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0">
        <BackgroundWave />
      </div>

      <main className="relative z-10">
        <section className="container px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <span className="inline-flex items-center px-4 py-1 text-sm tracking-wide uppercase border rounded-full border-white/10 bg-white/5 text-white/70">
            Our story
          </span>
          <div className="max-w-4xl mt-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Purpose-built reliability, security, and easy deployment for your infrastructure ambitions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              VaultScope began as CPTCR Hosting, a small collective determined to remove the downtime anxiety that slows
              modern teams. After a strategic pause in 2024 to rebuild our foundations, we relaunched in 2025 under the
              VaultScope name—laser-focused on reliability, layered security, and effortless deployment experiences.
            </p>
          </div>

          <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-white/10 bg-white/5 backdrop-blur">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</CardTitle>
                  <p className="text-sm tracking-wide uppercase text-primary/80">{stat.label}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-white/70">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container px-4 pb-20 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">How we deliver trust at scale</h2>
            <p className="mt-4 text-base text-muted-foreground">
              The VaultScope platform blends dedicated hardware, multi-cloud connectivity, and orchestrated observability
              to meet demanding workloads without sacrificing ownership or flexibility.
            </p>
          </div>
          <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <Card key={pillar.title} className="border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                  <CardHeader className="flex items-start gap-4">
                    <span className="p-3 rounded-full bg-primary/20 text-primary">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <CardTitle className="text-xl font-semibold">{pillar.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm leading-relaxed text-white/70">
                        {pillar.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="container px-4 pb-20 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Milestones that shaped VaultScope</h2>
              <p className="mt-4 text-base text-muted-foreground">
                We grow deliberately—prioritising reliability and customer impact over vanity metrics—so the platform you
                depend on keeps getting smarter.
              </p>
              <ol className="pl-6 mt-10 space-y-8 border-l border-white/10">
                {milestones.map((milestone, index) => (
                  <li key={`${milestone.year}-${milestone.title}`} className="relative">
                    <span className="absolute -left-[1.55rem] top-2 h-3 w-3 rounded-full border border-white/30 bg-primary" />
                    <p className="text-sm tracking-wide uppercase text-primary/80">{milestone.year}</p>
                    <h3 className="mt-1 text-xl font-semibold">{milestone.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{milestone.description}</p>
                    {index !== milestones.length - 1 ? <div className="mt-6 border-t border-white/5" /> : null}
                  </li>
                ))}
              </ol>
            </div>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">What we&apos;re building next</CardTitle>
                <CardDescription className="text-sm text-white/70">
                  Guided by feedback from platform, gaming, and SaaS teams pushing global scale.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {futureFocus.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <span className="w-2 h-2 mt-1 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container px-4 pb-20 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">The people behind the platform</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Our leadership team blends infrastructure engineering, customer reliability, and operations expertise so
              every launch is supported by seasoned practitioners.
            </p>
          </div>
          <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader) => (
              <Card key={leader.name} className="border-white/10 bg-white/5 backdrop-blur">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-12 w-12 overflow-hidden rounded-full bg-primary/10 ring-2 ring-primary/30 shadow-[0_10px_30px_-12px_rgba(56,189,248,0.6)]">
                      {leader.avatarHash ? (
                        <Image
                          src={buildDiscordAvatarUrl(leader.discordId, leader.avatarHash, 128)}
                          alt={`${leader.name} Discord avatar`}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                          unoptimized
                        />
                      ) : (
                        <span className="flex items-center justify-center w-full h-full text-base font-semibold text-primary">
                          {leader.initials}
                        </span>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">{leader.name}</CardTitle>
                      <p className="text-sm text-primary/80">{leader.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-white/70">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container px-4 pb-24 mx-auto sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent)]" />
            <CardHeader className="relative">
              <CardTitle className="text-3xl font-semibold sm:text-4xl">Join the next chapter</CardTitle>
              <CardDescription className="text-base text-white/80">
                Whether you&apos;re migrating legacy workloads, launching a new platform, or scaling a fast-moving game
                title, we&apos;d love to build alongside you.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-col gap-4 pt-0 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/80">
                Talk with our customer reliability team to map your architecture, migrate safely, and plan for what&apos;s
                next.
              </p>
              <Button
                asChild
                size="lg"
                className="text-black bg-white hover:bg-white/90 focus-visible:ring-offset-0"
              >
                <a href="https://discord.gg/8KAj4N5fgN" target="_blank" rel="noopener noreferrer">
                  Schedule a discovery call
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
