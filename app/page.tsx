/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

// ...existing code...
import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Solutions } from "@/components/solutions"
import { Testimonials } from "@/components/testimonials"
import { WaveWrapper } from "@/components/wave-wrapper"
import { BackToTopLink } from "@/components/back-to-top-link"

export const metadata = buildMetadata({
  title: "VaultScope — Custom Infrastructure Solutions",
  description:
    "Enterprise-grade VPS and dedicated servers with customizable configurations. High-performance infrastructure tailored to your specific requirements.",
  path: "/",
})

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <WaveWrapper />
      <div className="relative z-10">
        <Hero />
        <Features />
        <Testimonials />
        <Solutions />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex justify-end">
            <BackToTopLink />
          </div>
        </div>
      </div>
    </main>
  )
}
