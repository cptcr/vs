import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { WaveBackground } from "@/components/wave-background"
import { Solutions } from "@/components/solutions"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <WaveBackground />
      <Header />
      <Hero />
      <Solutions />
      <Footer />
    </main>
  )
}
