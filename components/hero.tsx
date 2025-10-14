import { ArrowRight, Server, Shield, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
  <section className="relative pt-20 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/50 backdrop-blur-sm text-secondary-foreground text-sm mb-8 border border-border/50">
            <Shield className="h-4 w-4" />
            <span className="font-medium">Free Enterprise-Grade Infrastructure</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 text-balance leading-[1.1] tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Enterprise Infrastructure For Everyone
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground/90 mb-6 max-w-2xl mx-auto text-pretty leading-relaxed font-light">
            Start with our free enterprise-grade hosting solution, or work with our team to design 
            custom VPS and dedicated server configurations tailored to your needs.
          </p>

          <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
            <div className="flex items-center gap-2 text-white/80">
              <Server className="h-5 w-5" strokeWidth={1.5} />
              <span className="font-medium">Free Tier Available</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Gauge className="h-5 w-5" strokeWidth={1.5} />
              <span className="font-medium">1 Gbps Network</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="h-5 w-5" strokeWidth={1.5} />
              <span className="font-medium">Cloudflare DDoS</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-base px-8 h-12 shadow-xl shadow-white/20 font-medium tracking-wide w-full sm:w-auto"
              asChild
            >
              <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer">
                Configure Your Server
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2.5} />
              </a>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              <span>Enterprise Hardware</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>DDoS Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
