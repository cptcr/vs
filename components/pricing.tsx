import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function Pricing() {
  const plan = {
    name: "Free Tier",
    price: "Free",
    description: "Everything you need to get started",
    features: ["40% CPU", "512 MB RAM", "5120 MB ROM", "No Bandwidth Limits", "Shared IPv4", "5 Ports"],
  }

  return (
    <section id="pricing" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm text-secondary-foreground text-sm mb-6 border border-border/50">
            <Sparkles className="h-4 w-4" />
            <span className="font-medium">No Credit Card Required</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Premium hosting, completely free
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Get started with our free tier. All the resources you need with enterprise-grade features included.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="bg-card border-2 border-foreground/20 shadow-2xl shadow-foreground/10 hover:border-foreground/40 transition-all duration-300">
            <CardHeader className="p-8 pb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-foreground tracking-tight">{plan.price}</span>
                <span className="text-lg text-muted-foreground">forever</span>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-6">
              <Button
                className="w-full mb-8 bg-foreground text-background hover:bg-foreground/90 h-12 text-base font-semibold shadow-lg shadow-foreground/20"
                asChild
              >
                <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                </a>
              </Button>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-foreground mb-3">What's included:</p>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
