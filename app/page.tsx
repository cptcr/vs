// ...existing code...
import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Solutions } from "@/components/solutions"
import { WaveWrapper } from "@/components/wave-wrapper"

export const metadata = buildMetadata({
  title: "VaultScope — Custom Infrastructure Solutions",
  description:
    "Enterprise-grade VPS and dedicated servers with customizable configurations. High-performance infrastructure tailored to your specific requirements.",
  path: "/",
})

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <WaveWrapper />
      <div className="relative z-10">
        <Hero />
        <Features />
        <Solutions />
      </div>
    </main>
  )
}
