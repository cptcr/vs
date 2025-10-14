import { Shield, Zap, Lock, Globe, Database, Server } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: Database,
      title: "Virtual Private Servers",
      description: "High-performance VPS with dedicated resources, perfect for developers and businesses. Powered by Intel Xeon W-2295 processors.",
    },
    {
      icon: Server,
      title: "Dedicated Servers",
      description: "Enterprise-grade dedicated servers with 32GB DDR4 ECC RAM, 2TB Enterprise HDD, and full hardware control.",
    },
    {
      icon: Globe,
      title: "Container Hosting",
      description: "Specialized container hosting for FiveM, NodeJS, and Minecraft servers with easy deployment and scaling.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-level DDoS protection powered by Cloudflare, keeping your services safe and online 24/7.",
    },
    {
      icon: Zap,
      title: "High-Speed Network",
      description: "1 Gbps network connection with unlimited bandwidth for smooth and reliable performance.",
    },
    {
      icon: Lock,
      title: "Flexible Management",
      description: "Full root access, custom OS options, and dedicated resources with no restrictions on usage.",
    },
  ]

  return (
    <section id="features" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#000]">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Everything you need to scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed font-light">
            Built with enterprise-grade features that grow with your business, from startup to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 group"
            >
                <CardContent className="p-6 sm:p-8">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white/80" strokeWidth={1.5} />
                  </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
