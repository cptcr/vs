"use client"

import { motion } from 'framer-motion'
import { Cpu, MemoryStick as Memory, HardDrive, Network, Shield, Gauge, Server, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Solutions() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Node Specifications */}
      <div className="container mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Infrastructure Node Specifications
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            All services are powered by our enterprise-grade infrastructure nodes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Cpu,
              name: "Processor",
              spec: "Intel Xeon W-2295",
              detail: "18 Cores / 36 Threads"
            },
            {
              icon: Memory,
              name: "Memory",
              spec: "128GB DDR4 ECC",
              detail: "4x 32GB Registered ECC"
            },
            {
              icon: HardDrive,
              name: "Storage",
              spec: "2TB Enterprise HDD",
              detail: "High-Performance SATA"
            },
            {
              icon: Network,
              name: "Network",
              spec: "1 Gbps Unmetered",
              detail: "High-Speed Connection"
            }
          ].map((spec, index) => (
            <motion.div
              key={spec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
              <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <spec.icon className="h-8 w-8 mb-4 text-white/80" strokeWidth={1.5} />
                <div className="space-y-2">
                  <h3 className="text-sm text-white/60 font-medium">{spec.name}</h3>
                  <p className="text-xl font-semibold text-white">{spec.spec}</p>
                  <p className="text-sm text-white/80">{spec.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Free Plan */}
      <div className="container mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-3xl" />
          <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 tracking-tighter">Free Hosting Plan</h2>
                <p className="text-lg text-white/60 mb-8">
                  Start with our free tier, powered by enterprise infrastructure and protected by Cloudflare
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Cpu, label: "40% CPU Share" },
                    { icon: Memory, label: "512MB RAM" },
                    { icon: HardDrive, label: "5GB Storage" },
                    { icon: Network, label: "Shared IPv4" },
                    { icon: Shield, label: "DDoS Protection" },
                    { icon: Gauge, label: "Unmetered Traffic" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <feature.icon className="h-5 w-5 text-white/60" strokeWidth={1.5} />
                      <span className="text-white/80">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:text-right">
                <div className="inline-block text-center lg:text-right">
                  <div className="mb-4">
                    <span className="text-5xl font-bold">$0</span>
                    <span className="text-white/60 ml-2">Forever</span>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 text-base px-8 shadow-xl shadow-white/20 font-medium tracking-wide w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href="https://discord.gg/sRj3uPPpme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started Free
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
              Custom Infrastructure Solutions
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
            Work with our team to design the perfect infrastructure solution for your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Server,
              title: "Virtual Private Servers",
              description: "Customizable VPS solutions with dedicated resources",
              features: [
                "Configurable CPU Allocation",
                "Flexible RAM Options",
                "Custom Storage Configuration",
                "Root Access",
                "Choice of Operating System",
                "24/7 Support"
              ]
            },
            {
              icon: Database,
              title: "Dedicated Servers",
              description: "Enterprise-grade dedicated infrastructure",
              features: [
                "Custom Hardware Selection",
                "Full Resource Control",
                "Flexible Configuration",
                "Premium Network Access",
                "Enhanced Security Options",
                "Priority Support"
              ]
            }
          ].map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
              <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <solution.icon className="h-10 w-10 mb-6 text-white/80" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-white/60 mb-6">{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-white/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10"
                  disabled={true}
                >
                  NOT AVAILABLE YET
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}