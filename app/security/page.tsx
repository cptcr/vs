import { Shield } from "lucide-react"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Security — VaultScope",
  description: "Overview of VaultScope's security posture, practices and recommendations.",
  path: "/security",
})

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <header className="mb-8 flex items-center gap-4">
          <Shield className="h-8 w-8 text-foreground" />
          <div>
            <h1 className="text-4xl font-bold text-foreground">Security</h1>
            <p className="text-muted-foreground">Last updated: October 2025</p>
          </div>
        </header>

        <div className="space-y-8 text-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
            <p className="text-muted-foreground">
              VaultScope operates a defense-in-depth security posture across networking, infrastructure, hosts, and
              application layers. We protect customer services using a combination of industry-standard best practices,
              continuous monitoring, and third-party security platforms. Perimeter Anti‑DDoS protection for our
              public-facing services is provided by Cloudflare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Perimeter & Network Security</h2>
            <p className="text-muted-foreground">
              Our edge security is provided by Cloudflare: DDoS mitigation, request filtering, a Web Application
              Firewall (WAF), and CDN-level protections. This prevents many attacks from reaching origin servers and
              reduces the impact of large-scale abuse.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Cloudflare Anti‑DDoS, WAF, and rate-limiting for edge protection</li>
              <li>Network segmentation and firewalls to isolate management and user workloads</li>
              <li>Strict port policies and connection controls to limit exposure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Infrastructure & Host Security</h2>
            <p className="text-muted-foreground">
              We apply secure configuration and hardening across hosts and container runtimes, automated patching,
              and isolation controls to reduce the attack surface.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Hardened base images and automated patch management</li>
              <li>Container isolation with resource limits to guard against noisy neighbours</li>
              <li>Filesystem and process restrictions (where supported) and secure SSH configurations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Panel & Application Security</h2>
            <p className="text-muted-foreground">
              The control panel and customer-facing applications are configured with security in mind. We encourage
              users to enable additional protections and follow strong authentication practices.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Secure configuration and timely updates for Pterodactyl and related services</li>
              <li>Recommendation to enable two‑factor authentication (2FA) for accounts</li>
              <li>Role-based access controls and limited API credentials for automation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Protection & Encryption</h2>
            <p className="text-muted-foreground">
              Customer data is protected in transit and at rest where applicable. We use industry standard cryptography
              and access controls to protect sensitive information.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>TLS (HTTPS) for all public-facing services and APIs</li>
              <li>Encrypted storage for backups and sensitive configuration where supported</li>
              <li>Strict access controls and audit logging for administrative actions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Monitoring, Detection & Response</h2>
            <p className="text-muted-foreground">
              We operate centralized logging, alerting, and monitoring to detect and respond to incidents quickly.
              When incidents occur we follow an established incident response process and notify affected
              customers as required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vulnerability Management</h2>
            <p className="text-muted-foreground">
              Regular vulnerability scanning, code reviews, and automated dependency checks are combined with a
              prioritized patching cadence to mitigate risk from known vulnerabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Responsible Disclosure</h2>
            <p className="text-muted-foreground">
              We welcome responsible vulnerability reports. When reporting, please provide sufficient detail to
              reproduce and triage the issue and avoid accessing or modifying user data.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Email: <a href="mailto:security@vaultscope.dev" className="text-foreground hover:underline">security@vaultscope.dev</a></li>
              <li>Discord (for urgent contact): <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">discord.gg/sRj3uPPpme</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Providers & Compliance</h2>
            <p className="text-muted-foreground">
              We partner with established infrastructure and edge-security providers and review their security
              posture as part of our operational procedures.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Anti‑DDoS and edge security provided by Cloudflare</li>
              <li>Infrastructure providers with physical and environmental controls (e.g., Hetzner, Linode)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Customer Recommendations</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Enable 2FA on your control panel account and use strong, unique passwords</li>
              <li>Keep application dependencies up-to-date and apply security patches promptly</li>
              <li>Encrypt sensitive data at the application layer where possible</li>
              <li>Regularly test backups and validate restoration procedures</li>
              <li>Use least-privilege principles for API keys and automation credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Related Documents</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li><Link href="/acceptable-use" className="text-foreground hover:underline">Acceptable Use Policy</Link></li>
              <li><Link href="/terms" className="text-foreground hover:underline">Terms of Service</Link></li>
              <li><a href="https://panel.vaultscope.dev" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Control Panel</a></li>
              <li><a href="https://pay.vaultscope.dev" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Payment Panel / Register</a></li>
              <li><a href="https://status.vaultscope.dev" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Status</a></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">← Back to Home</Link>
        </div>
      </main>
    </div>
  )
}
