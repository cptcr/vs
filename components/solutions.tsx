/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { motion } from "framer-motion"
import { Cpu, MemoryStick as Memory, HardDrive, Network, Shield, Gauge, Server, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/language-provider"

type SolutionsCopy = {
  nodes: {
    title: string
    description: string
    specs: Array<{ key: "processor" | "memory" | "storage" | "network"; name: string; spec: string; detail: string }>
  }
  freePlan: {
    title: string
    description: string
    features: Array<{ key: "cpuShare" | "memory" | "storage" | "ipv4" | "ddos" | "traffic" | "uplink"; label: string }>
    price: string
    priceCaption: string
    ctaLabel: string
    ctaHref: string
  }
  custom: {
    title: string
    description: string
    cards: Array<{
      key: "vps" | "dedicated"
      title: string
      description: string
      features: string[]
    }>
    notAvailable: string
  }
}

const nodeIcons: Record<SolutionsCopy["nodes"]["specs"][number]["key"], typeof Cpu> = {
  processor: Cpu,
  memory: Memory,
  storage: HardDrive,
  network: Network,
}

const freePlanIcons: Record<SolutionsCopy["freePlan"]["features"][number]["key"], typeof Cpu> = {
  cpuShare: Cpu,
  memory: Memory,
  storage: HardDrive,
  ipv4: Network,
  ddos: Shield,
  traffic: Gauge,
  uplink: Network,
}

const customIcons: Record<SolutionsCopy["custom"]["cards"][number]["key"], typeof Server> = {
  vps: Server,
  dedicated: Database,
}

export function Solutions() {
  const { getValue } = useI18n()
  const copy = getValue<SolutionsCopy>("solutions")

  return (
    <section id="solutions" className="relative overflow-hidden py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Node Specifications */}
      <div className="container mx-auto mb-20 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              {copy.nodes.title}
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">{copy.nodes.description}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {copy.nodes.specs.map((spec, index) => {
            const Icon = nodeIcons[spec.key] ?? Cpu
            return (
              <motion.div
                key={spec.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]">
                  <Icon className="h-8 w-8 mb-4 text-white/80" strokeWidth={1.5} aria-hidden="true" />
                  <div className="space-y-2">
                    <h3 className="text-sm text-white/60 font-medium">{spec.name}</h3>
                    <p className="text-xl font-semibold text-white">{spec.spec}</p>
                    <p className="text-sm text-white/80">{spec.detail}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Free Plan */}
      <div className="container mx-auto mb-20 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-transparent to-transparent blur-3xl" />
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-6 lg:p-12 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 tracking-tighter">{copy.freePlan.title}</h2>
                <p className="text-lg text-white/60 mb-8">{copy.freePlan.description}</p>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  {copy.freePlan.features.map((feature) => {
                    const Icon = freePlanIcons[feature.key] ?? Cpu
                    return (
                      <div key={feature.key} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-white/60" strokeWidth={1.5} aria-hidden="true" />
                        <span className="text-white/80">{feature.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="lg:text-right">
                <div className="inline-block text-center lg:text-right">
                  <div className="mb-4">
                    <span className="text-4xl sm:text-5xl font-bold">{copy.freePlan.price}</span>
                    <span className="text-white/60 ml-2">{copy.freePlan.priceCaption}</span>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 text-base px-8 font-medium tracking-wide shadow-xl shadow-white/20 w-full sm:w-auto"
                    asChild
                  >
                    <a href={copy.freePlan.ctaHref} target="_blank" rel="noopener noreferrer">
                      {copy.freePlan.ctaLabel}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Solutions */}
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              {copy.custom.title}
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">{copy.custom.description}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {copy.custom.cards.map((solution, index) => {
            const Icon = customIcons[solution.key] ?? Server
            return (
              <motion.div
                key={solution.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
                  <Icon className="h-10 w-10 mb-6 text-white/80" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-white/60 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10" disabled>
                    {copy.custom.notAvailable}
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
