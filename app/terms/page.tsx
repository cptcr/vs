import { Shield } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#000]">
      {/* header removed: global Header is provided in the root layout */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                By accessing or using VaultScope's hosting services, you agree to be bound by these Terms of Service and
                our Acceptable Use Policy. If you do not agree to these terms, you may not use our services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                VaultScope provides free hosting services managed through Pterodactyl panel with billing handled by
                Paymenter. Our current offering includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>40% CPU allocation</li>
                <li>512 MB RAM</li>
                <li>5120 MB storage (ROM)</li>
                <li>Shared IPv4 address</li>
                <li>5 network ports</li>
                <li>No bandwidth limitations</li>
              </ul>
              <p className="mt-4">
                Services are provided "as-is" and we reserve the right to modify, suspend, or discontinue any aspect of
                the service at any time.
              </p>
            </div>
          </section>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>To use our services, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be at least 13 years of age</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You must comply with our{" "}
                <Link href="/acceptable-use" className="text-foreground hover:underline">
                  Acceptable Use Policy
                </Link>
                . Prohibited activities include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Illegal activities or content</li>
                <li>Malware, viruses, or malicious code</li>
                <li>Cryptocurrency mining</li>
                <li>DDoS attacks or network abuse</li>
                <li>Spam or unsolicited communications</li>
                <li>Adult content or illegal file sharing</li>
                <li>Resource abuse or excessive usage</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Service Availability</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                While we strive for high availability, we do not guarantee uninterrupted service. We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service interruptions or downtime</li>
                <li>Data loss (users are responsible for backups)</li>
                <li>Performance issues or slowdowns</li>
                <li>Scheduled or emergency maintenance</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data and Backups</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You are solely responsible for backing up your data. VaultScope is not responsible for any data loss,
                corruption, or deletion. We may perform backups at our discretion, but do not guarantee their
                availability or restoration.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Billing and Payments</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Currently, VaultScope offers free hosting services. If paid services are introduced:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments will be processed through Paymenter</li>
                <li>All fees are non-refundable unless required by law</li>
                <li>We reserve the right to change pricing with notice</li>
                <li>Failure to pay may result in service suspension or termination</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We reserve the right to suspend or terminate your account at any time for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violation of these Terms or Acceptable Use Policy</li>
                <li>Fraudulent or illegal activity</li>
                <li>Abuse of resources or services</li>
                <li>Non-payment (if applicable)</li>
                <li>Inactivity for extended periods</li>
              </ul>
              <p className="mt-4">
                Upon termination, your data may be deleted without notice. You may terminate your account at any time
                through the control panel.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You retain ownership of content you upload to our services. By using VaultScope, you grant us a license
                to host, store, and transmit your content as necessary to provide services. VaultScope, our logo, and
                related marks are our property.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, VAULTSCOPE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING FROM YOUR
                USE OF OUR SERVICES.
              </p>
              <p className="mt-4">
                Our total liability shall not exceed the amount you paid us in the past 12 months, or $100, whichever is
                less.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You agree to indemnify and hold VaultScope harmless from any claims, damages, or expenses arising from
                your use of our services, violation of these terms, or infringement of any rights of others.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Third-Party Services</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our services utilize Pterodactyl (panel management) and Paymenter (billing). Your use of these platforms
                is subject to their respective terms and policies. We are not responsible for third-party service issues
                or changes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Modifications to Terms</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We may modify these Terms at any time. Changes will be effective upon posting. Continued use of our
                services after changes constitutes acceptance. Material changes will be communicated via email or panel
                notification.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be
                resolved through binding arbitration or in courts of competent jurisdiction.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>For questions about these Terms, contact us through:</p>
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
