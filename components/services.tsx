/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { Server, Database } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Database,
      title: "Virtual Private Servers",
      description: "Customizable VPS solutions with dedicated resources and full control",
      features: [
        "Configurable CPU Cores",
        "Flexible RAM Allocation",
        "Scalable Storage Options",
        "Root Access",
        "Custom OS Selection",
        "Resource Monitoring",
        "Instant Deployment"
      ]
    },
    {
      icon: Server,
      title: "Dedicated Servers",
      description: "Enterprise-grade dedicated infrastructure tailored to your needs",
      features: [
        "Custom Hardware Selection",
        "Flexible RAM Configuration",
        "Storage Customization",
        "Network Optimization",
        "DDoS Protection",
        "24/7 Support",
        "Full Hardware Control"
      ]
    }
  ]

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Tailored hosting solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed font-light">
            Choose from our range of specialized hosting solutions designed for developers,
            businesses, and gaming communities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start gap-6">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white/85" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-6 font-light">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-white/80">
                        <span className="mr-2 inline-block h-1 w-1 rounded-full bg-white/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
