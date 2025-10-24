/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function HardwareShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  const specs = [
    {
      category: "Processor",
      name: "Intel Xeon W-2295",
      details: "18 Cores / 36 Threads",
      class: "bg-gradient-to-br from-white/20 to-transparent"
    },
    {
      category: "Memory",
      name: "32GB DDR4 ECC",
      details: "Registered ECC Memory",
      class: "bg-gradient-to-br from-white/20 to-transparent"
    },
    {
      category: "Storage",
      name: "2TB Enterprise",
      details: "SATA Enterprise HDD",
      class: "bg-gradient-to-br from-white/20 to-transparent"
    },
    {
      category: "Network",
      name: "1 Gbps",
      details: "Unmetered Bandwidth",
      class: "bg-gradient-to-br from-white/20 to-transparent"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ scale, opacity, y }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Sample Configuration
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Explore our current enterprise hardware. All specifications can be customized to meet your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group`}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-2xl ${spec.class} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
                <div className="space-y-4">
                  <div className="text-sm text-white/60 uppercase tracking-wider font-medium">
                    {spec.category}
                  </div>
                  <div className="text-2xl font-semibold text-white">
                    {spec.name}
                  </div>
                  <div className="text-sm text-white/80">
                    {spec.details}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]) }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-white/60 mb-8">
            All hardware specifications can be customized based on your requirements.
            Contact us for a tailored configuration.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 border border-white/20 rounded-lg text-white/80 hover:bg-white/5 transition-all duration-300">
            Configure Your Infrastructure
          </div>
        </motion.div>
      </div>

      {/* 3D Server Effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-40" />
      </div>
    </section>
  )
}
