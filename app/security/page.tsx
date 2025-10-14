import { ShieldAlert } from "lucide-react"
import Link from "next/link"

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-[#000]">
      <header className="border-b border-border bg-[#000]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <ShieldAlert className="h-6 w-6 text-foreground" />
              <span className="text-lg font-bold text-foreground">VaultScope Security</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Security Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: October 2025</p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Reporting Security Issues</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We take security concerns seriously. If you discover a security vulnerability, please report it immediately to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Email: <a href="mailto:security@vaultscope.dev" className="text-foreground hover:underline">security@vaultscope.dev</a>
                </li>
                <li>
                  For urgent matters, also notify us on Discord:{" "}
                  <a href="https://discord.gg/sRj3uPPpme" className="text-foreground hover:underline" target="_blank" rel="noopener noreferrer">
                    discord.gg/sRj3uPPpme
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Infrastructure Security</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Our infrastructure is built with security at its core:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Location:</strong> All servers are located in Finland (Helsinki, Hetzner)
                </li>
                <li>
                  <strong className="text-foreground">DDoS Protection:</strong> Enterprise-grade Cloudflare Anti-DDoS protection
                </li>
                <li>
                  <strong className="text-foreground">Container Isolation:</strong> Fast & isolated containers with secure backend
                </li>
                <li>
                  <strong className="text-foreground">Uptime:</strong> 99.89% guaranteed uptime
                </li>
                <li>
                  <strong className="text-foreground">Network:</strong> No bandwidth limits with optimized routing
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Features & Security Measures</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li>⚡ Fast & isolated containers for maximum security and performance</li>
                <li>🔐 Secure backend architecture with Cloudflare Anti-DDoS protection</li>
                <li>🧠 Unlimited bandwidth with intelligent traffic management</li>
                <li>🧰 Instant setup with secure default configurations</li>
                <li>🛡️ Regular security audits and updates</li>
                <li>🔒 End-to-end encryption for all sensitive data</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Responsible Disclosure</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>When reporting security issues, please:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide detailed information about the vulnerability</li>
                <li>Allow reasonable time for response and remediation</li>
                <li>Avoid accessing or modifying user data</li>
                <li>Act in good faith and avoid privacy violations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>For different types of inquiries:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Security Issues: <a href="mailto:security@vaultscope.dev" className="text-foreground hover:underline">security@vaultscope.dev</a>
                </li>
                <li>
                  General Support: <a href="mailto:support@vaultscope.dev" className="text-foreground hover:underline">support@vaultscope.dev</a>
                </li>
                <li>
                  Custom Plans & Upgrades: Contact us on{" "}
                  <a href="https://discord.gg/sRj3uPPpme" className="text-foreground hover:underline" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>{" "}
                  for pricing overview
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}