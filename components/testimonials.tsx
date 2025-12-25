/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/components/language-provider"

export function Testimonials() {
  const { getValue } = useI18n()
  const copy = getValue<{
    title: string
    description: string
    items: Array<{ key: string; quote: string; name: string; role: string }>
  }>("testimonials")

  return (
    <section id="testimonials" className="relative px-4 py-16 bg-black sm:py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80">
              {copy.title}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60">{copy.description}</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {copy.items.map((testimonial, index) => {
            const initials = testimonial.name
              .split(' ')
              .map(n => n[0])
              .join('')
              .toUpperCase()
            
            return (
              <motion.blockquote
                key={testimonial.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                {/* Animated glow effect */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent blur-lg group-hover:opacity-100" />
                
                {/* Decorative quote icon */}
                <Quote 
                  aria-hidden="true" 
                  className="absolute w-12 h-12 transition-all duration-300 top-4 right-4 text-white/10 group-hover:text-white/20 group-hover:scale-110" 
                />
                
                {/* Quote text */}
                <p className="relative z-10 mt-4 text-base font-light leading-relaxed sm:text-lg text-white/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author info with avatar */}
                <footer className="relative z-10 flex items-center gap-3 mt-8">
                  <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-full bg-gradient-to-br from-white/20 to-white/10 text-white/90 ring-1 ring-white/20">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/60">{testimonial.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            )
          })}
        </div>
      </div>
    </section>
  )
}