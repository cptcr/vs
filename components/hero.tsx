"use client"
import { ArrowRight, BookOpen, Server, Shield, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/language-provider"

type HeroCopy = {
  badge: string
  title: string
  description: string
  highlights: string[]
  ctas: {
    primary: string
    secondary: string
  }
  bottomHighlights: string[]
}

export function Hero() {
  const { getValue } = useI18n()
  const heroCopy = getValue<HeroCopy>("hero")

  return (
  <section id="top" className="relative pt-20 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/50 backdrop-blur-sm text-secondary-foreground text-sm mb-8 border border-border/50">
            <Shield className="h-4 w-4" aria-hidden="true" />
            <span className="font-medium">{heroCopy.badge}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 text-balance leading-[1.1] tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              {heroCopy.title}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground/90 mb-6 max-w-2xl mx-auto text-pretty leading-relaxed font-light">
            {heroCopy.description}
          </p>

          <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
            {heroCopy.highlights.map((text, index) => {
              const Icon = [Server, Gauge, Shield][index] ?? Server
              return (
                <div key={text} className="flex items-center gap-2 text-white/80">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-medium">{text}</span>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-base px-8 h-12 shadow-xl shadow-white/20 font-medium tracking-wide w-full sm:w-auto"
              asChild
            >
              <a href="https://pay.vaultscope.dev" target="_blank" rel="noopener noreferrer">
                {heroCopy.ctas.primary}
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white w-full sm:w-auto text-base h-12 px-8 font-medium tracking-wide"
              asChild
            >
              <a href="/docs">
                {heroCopy.ctas.secondary}
                <BookOpen className="ml-2 h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            {heroCopy.bottomHighlights.map((text, index) => {
              if (index === 0) {
                return (
                  <div key={text} className="flex items-center gap-2">
                    <Server className="h-4 w-4" aria-hidden="true" />
                    <span>{text}</span>
                  </div>
                )
              }
              if (index === 1) {
                return (
                  <div key={text} className="flex items-center gap-2">
                    <Shield className="h-4 w-4" aria-hidden="true" />
                    <span>{text}</span>
                  </div>
                )
              }
              return (
                <div key={text} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                  <span>{text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
