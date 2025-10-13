import { Server, Database, Code, GamepadIcon } from "lucide-react"

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
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#000]">
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
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                  <service.icon className="h-6 w-6 text-white/80" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/60 mb-6 font-light">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-white/70"
                      >
                        <span className="h-1 w-1 rounded-full bg-white/70 mr-2" />
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