import { Shield, Server, Cpu, HardDrive, MemoryStick, Network, Gauge } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[#000]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-foreground" />
              <span className="text-lg font-bold text-foreground">VaultScope</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Free enterprise hosting solutions built for security, performance, and scale.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">40% CPU</span>
              </div>
              <div className="flex items-center gap-2">
                <MemoryStick className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">512MB RAM</span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">5120MB ROM</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">1Gbps Network</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="/panel" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Control Panel
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Infrastructure</h4>
            <ul className="space-y-3">
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/status" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="/uptime" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Uptime
                </a>
              </li>
              <li>
                <a href="/docs/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/acceptable-use" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Acceptable Use
                </a>
              </li>
              <li>
                <a href="/docs/compliance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 VaultScope. All rights reserved. Free hosting powered by enterprise infrastructure.
            </p>
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-muted-foreground" />
              <a href="/status" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                System Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
