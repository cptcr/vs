// ...existing code...
import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Solutions } from "@/components/solutions"
import { Testimonials } from "@/components/testimonials"
import { WaveWrapper } from "@/components/wave-wrapper"

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
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              Back to top
              <span aria-hidden="true" className="text-xs">↑</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
