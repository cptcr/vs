import type { ComponentType, FC, SVGProps } from "react"
import { Shield, Cpu, Network, Gauge, Bookmark, LifeBuoy, Users, MessageSquare, GitBranch, Zap, Box, FileText, Key, Terminal, Clock, Database } from "lucide-react"

type Feature = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  desc: string;
}

// Temporary placeholder for an icon not in lucide-react bundle used elsewhere
const CouponIconPlaceholder: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M21 8v8a2 2 0 0 1-2 2h-3l-3 3-3-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l3-3 3 3h3a2 2 0 0 1 2 2z" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
    </svg>
  )
}

const features: Feature[] = [
  { title: "Free tier hosting", icon: Bookmark, desc: "Start for free with our entry level plan." },
  { title: "One-click server install", icon: Zap, desc: "Deploy servers quickly with prebuilt installers." },
  { title: "DDoS protection", icon: Shield, desc: "Edge protection powered by Cloudflare." },
  { title: "Daily automated backups", icon: Clock, desc: "Automatic daily snapshots to protect your data." },
  { title: "Instant server scaling", icon: Gauge, desc: "Scale resources instantly when you need them." },
  { title: "API access / API keys", icon: Key, desc: "Programmatic control with secure API tokens." },
  { title: "SSH access (paid)", icon: Terminal, desc: "SSH access available on paid plans." },
  { title: "IPv4 / Dedicated IP", icon: Network, desc: "Optional dedicated IPv4 addresses." },
  { title: "1 Gbps network", icon: Cpu, desc: "Fast network connectivity for low-latency services." },
  { title: "Resource monitoring dashboard", icon: Gauge, desc: "Track CPU, RAM and network in real time." },
  { title: "Real-time logs (console)", icon: Terminal, desc: "View server console outputs instantly." },
  { title: "Role-based access control", icon: Users, desc: "Team accounts with role-based permissions." },
  { title: "Scheduled tasks / cron jobs", icon: Clock, desc: "Schedule recurring tasks with ease." },
  { title: "File manager UI", icon: FileText, desc: "Manage files directly from the panel." },
  { title: "Git deploy / auto-deploy", icon: GitBranch, desc: "Deploy from your repository automatically." },
  { title: "Server templates / presets", icon: Box, desc: "Quickly create servers from templates." },
  { title: "Marketplace for mods/plugins", icon: Database, desc: "Find and install community plugins." },
  { title: "Uptime status page", icon: LifeBuoy, desc: "Public status with incident history." },
  { title: "Integrated support / ticketing", icon: MessageSquare, desc: "Open and track support tickets." },
  { title: "Community Discord", icon: MessageSquare, desc: "Join our Discord community." },
  { title: "Referral program / credits", icon: Bookmark, desc: "Earn credits by referring friends." },
  { title: "Promo codes & discounts", icon: CouponIconPlaceholder, desc: "Apply promo codes at checkout." },
  { title: "SLA: 99.0% uptime", icon: Shield, desc: "Service-level commitment for uptime." },
]

export function Features() {
  return (
  <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-20">
      <h2 className="text-3xl font-bold text-foreground mb-4 sm:mb-6">Features</h2>
      <p className="text-muted-foreground max-w-2xl mb-8 text-sm sm:text-base">Everything you need to run reliable game and application servers — simple, fast, and community-driven.</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="group relative flex gap-4 items-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]">
            {/* inner blur layer */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 mt-1 text-foreground">
              <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features

