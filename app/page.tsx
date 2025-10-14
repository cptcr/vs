// ...existing code...
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { WaveWrapper } from "@/components/wave-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <WaveWrapper />
      <div className="relative z-10">
        <Hero />
        <Solutions />
      </div>
    </main>
  )
}
