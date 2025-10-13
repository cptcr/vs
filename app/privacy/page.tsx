import { Shield } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#000]">
      <header className="border-b border-border bg-[#000]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-foreground" />
              <span className="text-lg font-bold text-foreground">VaultScope</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When you use VaultScope's hosting services, we collect information necessary to provide and improve our
                services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Account Information:</strong> Email address, username, and
                  password (encrypted)
                </li>
                <li>
                  <strong className="text-foreground">Service Usage Data:</strong> Server configurations, resource
                  usage, and panel activity through Pterodactyl
                </li>
                <li>
                  <strong className="text-foreground">Billing Information:</strong> Payment details processed securely
                  through Paymenter (we do not store full payment card details)
                </li>
                <li>
                  <strong className="text-foreground">Technical Data:</strong> IP addresses, browser type, device
                  information, and access logs
                </li>
                <li>
                  <strong className="text-foreground">Communications:</strong> Support tickets, Discord messages, and
                  other correspondence
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We use collected information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and maintaining hosting services through Pterodactyl panel</li>
                <li>Processing payments and managing billing through Paymenter</li>
                <li>Monitoring service performance and preventing abuse</li>
                <li>Communicating service updates, maintenance, and support</li>
                <li>Improving our services and developing new features</li>
                <li>Complying with legal obligations and enforcing our Terms of Service</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Your data is stored on secure servers with enterprise-grade hardware. We implement industry-standard
                security measures including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure password hashing</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and monitoring</li>
                <li>Automated backups (where applicable)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Third Parties</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Service Providers:</strong> Pterodactyl (panel management) and
                  Paymenter (billing) to operate our services
                </li>
                <li>
                  <strong className="text-foreground">Legal Requirements:</strong> When required by law, court order, or
                  to protect our rights
                </li>
                <li>
                  <strong className="text-foreground">Business Transfers:</strong> In case of merger, acquisition, or
                  asset sale
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We retain your information for as long as your account is active or as needed to provide services. After
                account termination, we may retain certain data for legal compliance, dispute resolution, and enforcing
                our agreements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request data deletion (subject to legal obligations)</li>
                <li>Export your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us through Discord or email support.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We use cookies and similar technologies to maintain sessions, remember preferences, and analyze service
                usage. You can control cookies through your browser settings, though some features may not function
                properly without them.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our services are not intended for users under 13 years of age. We do not knowingly collect information
                from children. If we become aware of such collection, we will delete the information promptly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated
                revision date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>For privacy-related questions or concerns, contact us through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Discord:{" "}
                  <a
                    href="https://discord.gg/sRj3uPPpme"
                    className="text-foreground hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    discord.gg/sRj3uPPpme
                  </a>
                </li>
                <li>
                  Control Panel:{" "}
                  <a
                    href="https://panel.vaultscope.dev"
                    className="text-foreground hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    panel.vaultscope.dev
                  </a>
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
