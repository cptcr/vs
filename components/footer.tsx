import { Shield, Cpu, MemoryStick, HardDrive, Network } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-foreground" aria-hidden="true" />
              <span className="text-lg font-bold text-foreground">VaultScope</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Free enterprise hosting solutions built for security, performance, and scale.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-xs text-muted-foreground">40% CPU</span>
              </div>
              <div className="flex items-center gap-2">
                <MemoryStick className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-xs text-muted-foreground">512MB RAM</span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-xs text-muted-foreground">5120MB ROM</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-xs text-muted-foreground">1Gbps Network</span>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <StatusBadge />
              <a
                href="https://status.vaultscope.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>View detailed status</span>
              </a>
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
              <li className="flex items-center gap-3">
                <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </a>
                <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-muted-foreground hover:text-foreground">
                  {/* Discord SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 71 55" fill="none" aria-hidden>
                    <path d="M60.104 4.552A58.99 58.99 0 0045.84.77a41.123 41.123 0 00-1.98 4.087 55.47 55.47 0 00-13.717 0A41.12 41.12 0 0027.167.77 59.03 59.03 0 0012.904 4.55C.72 20.342-.814 35.813.476 51.077a60.59 60.59 0 0018.638 4.7c1.342-1.85 2.532-3.822 3.55-5.9-5.33-1.578-9.324-4.085-12.02-7.042 1.012-.756 2.004-1.54 2.952-2.353 6.237 3.203 13.08 4.96 20.165 5.123 7.09-.163 13.93-1.92 20.164-5.122.95.814 1.943 1.598 2.954 2.354-2.694 2.957-6.69 5.464-12.02 7.042 1.018 2.078 2.207 4.05 3.55 5.9a60.59 60.59 0 0018.64-4.7c1.29-15.264-.244-30.735-11.43-46.525z" fill="currentColor" />
                    <path d="M46.708 36.47c-2.135-1.12-3.97-1.98-5.54-2.53 1.2-1.08 2.05-2.45 2.47-4.03-1.68.78-3.46 1.36-5.33 1.77-1.86-.42-3.64-.99-5.33-1.77.42 1.58 1.27 2.95 2.47 4.03-1.57.55-3.4 1.41-5.54 2.53-8.285 4.39-11.93 6.39-14.73 7.58 1.32 1.02 2.774 1.95 4.35 2.8 6.71 3.58 13.88 5.5 21.06 5.81 7.18-.31 14.35-2.23 21.06-5.81 1.576-.85 3.028-1.78 4.35-2.8-2.8-1.19-6.44-3.19-14.73-7.58z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://panel.vaultscope.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Control Panel
                </a>
              </li>
              <li>
                <a href="https://pay.vaultscope.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Payment Panel / Register
                </a>
              </li>
              <li>
                <a href="https://status.vaultscope.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Status
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
              {/* Status and Uptime links intentionally removed from footer */}
              <li>
                <a href="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
              {/* Compliance page not available — removed to avoid broken link */}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="pt-8 border-t border-border">
            <div className="flex items-center justify-center">
              <p className="text-sm text-muted-foreground">
                © 2025 VaultScope. All rights reserved. Free hosting powered by enterprise infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
