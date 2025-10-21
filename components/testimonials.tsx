"use client"

import { Quote } from "lucide-react"
import { useI18n } from "@/components/language-provider"

export function Testimonials() {
  const { getValue } = useI18n()
  const copy = getValue<{
    title: string
    description: string
    items: Array<{ key: string; quote: string; name: string; role: string }>
  }>("testimonials")

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">{copy.title}</h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">{copy.description}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((testimonial) => (
            <blockquote
              key={testimonial.key}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Quote aria-hidden="true" className="h-6 w-6 text-white/30 transition-transform duration-300 group-hover:-translate-y-1" />
              <p className="mt-4 text-sm text-white/80 leading-relaxed">{testimonial.quote}</p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs text-white/60">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
