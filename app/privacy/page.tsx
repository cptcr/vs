import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Privacy Policy — VaultScope",
  description: "How VaultScope collects, stores and protects user data.",
  path: "/privacy",
})

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#000]">
      {/* header removed: global Header is provided in the root layout */}

      <main className="container max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mb-8 text-muted-foreground">Last updated: January 2025</p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Information We Collect</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                When you use VaultScope's hosting services, we collect information necessary to provide and improve our
                services:
              </p>
              <ul className="pl-6 space-y-2 list-disc">
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
                  through our payment processors (we do not store full payment details)
                </li>
                <li>
                  <strong className="text-foreground">Technical Data:</strong> IP addresses, browser type, device
                  information, access logs, and analytics data collected through Google Analytics
                </li>
                <li>
                  <strong className="text-foreground">Communications:</strong> Support tickets, Discord messages, and
                  other correspondence
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">2. How We Use Your Information</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>We use collected information for:</p>
              <ul className="pl-6 space-y-2 list-disc">
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
            <h2 className="mb-4 text-2xl font-semibold">3. Data Storage and Security</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Your data is stored on secure servers with enterprise-grade hardware. We implement industry-standard
                security measures including:
              </p>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure password hashing</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and monitoring</li>
                <li>Automated backups (where applicable)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">4. Data Sharing and Third Parties</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>We do not sell your personal information. We may share data with:</p>
              <ul className="pl-6 space-y-2 list-disc">
                <li>
                  <strong className="text-foreground">Payment Processors:</strong> Payments are processed and stored by
                  Stripe, PayPal, and Cryptomus. These processors handle and store payment information according to their own
                  privacy policies and industry standards. We do not store full payment details — we only retain your selected
                  or preferred payment method (for example a processor-specific token or a last-4 reference) to facilitate billing
                  and recurring payments.
                </li>
                <li>
                  <strong className="text-foreground">Infrastructure Providers:</strong> We partner with Hetzner Cloud
                  and Linode as infrastructure providers. Your service usage data may be processed on their platforms
                  according to their respective privacy policies.
                </li>
                <li>
                  <strong className="text-foreground">Analytics:</strong> We use Google Analytics to understand service
                  usage patterns and improve our offerings. This involves collecting anonymous usage data in accordance
                  with Google's privacy policy.
                </li>
                <li>
                  <strong className="text-foreground">Service Management:</strong> Pterodactyl for panel management
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
            <h2 className="mb-4 text-2xl font-semibold">5. Data Retention</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We retain your information for as long as your account is active or as needed to provide services. After
                account termination, we may retain certain data for legal compliance, dispute resolution, and enforcing
                our agreements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">6. GDPR Rights and Information (Art. 13/14 DSGVO)</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Under the General Data Protection Regulation (GDPR), if you are an EU resident, you have the following rights:</p>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Right to information (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object (Art. 21 GDPR)</li>
                <li>Right to withdraw consent (Art. 7(3) GDPR)</li>
              </ul>
              <p>To exercise these rights, contact our Data Protection Officer at support@vaultscope.dev</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">7. Eligibility and Account Responsibilities</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>You have the right to:</p>
              <ul className="pl-6 space-y-2 list-disc">
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
            <h2 className="mb-4 text-2xl font-semibold">8. Service Scope and Limitations</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <h3 className="mb-2 text-xl font-semibold">Eligibility</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Users must be at least 13 years old</li>
                <li>Services must be used for legal purposes only</li>
                <li>Users are responsible for maintaining account security</li>
              </ul>

              <h3 className="mt-4 mb-2 text-xl font-semibold">Account Responsibilities</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Keep login credentials secure</li>
                <li>Maintain accurate account information</li>
                <li>Report unauthorized access immediately</li>
                <li>Comply with all applicable laws and our terms</li>
              </ul>

              <h3 className="mt-4 mb-2 text-xl font-semibold">Acceptable Use Policy</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li>No illegal content or activities</li>
                <li>No unauthorized access attempts</li>
                <li>No service abuse or resource misuse</li>
                <li>No distribution of malware or harmful content</li>
              </ul>

              <h3 className="mt-4 mb-2 text-xl font-semibold">Data & Backups</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Users are responsible for their own data backups</li>
                <li>We do not guarantee data recovery</li>
                <li>Regular backups are recommended</li>
              </ul>

              <h3 className="mt-4 mb-2 text-xl font-semibold">Liability Limitation</h3>
              <p>Our service is provided "as is" without warranties. We are not liable for:</p>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Data loss or corruption</li>
                <li>Service interruptions</li>
                <li>Indirect or consequential damages</li>
              </ul>

              <h3 className="mt-4 mb-2 text-xl font-semibold">Termination</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li>We reserve the right to terminate accounts without notice or reason</li>
                <li>Servers and accounts can be deleted at any time without prior information</li>
                <li>No refunds for terminated accounts</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">9. Right of Withdrawal and Refunds</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <h3 className="mb-2 text-xl font-semibold">Widerrufsbelehrung (Right of Withdrawal)</h3>
              <p>Under EU consumer law, you have the right to withdraw from contracts within 14 days without giving reasons. However, this right expires immediately for digital services that have begun with your express consent.</p>
              
              <h3 className="mt-4 mb-2 text-xl font-semibold">Refund Policy</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Generally, we do not offer refunds</li>
                <li>Exceptions may be considered on a case-by-case basis</li>
                <li>Contact support for refund requests</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">10. Cookies and Tracking</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <h3 className="mb-2 text-xl font-semibold">Cookie Consent</h3>
              <p>
                We require explicit consent before setting non-essential cookies. Our cookie banner provides:
              </p>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Clear accept and reject options</li>
                <li>Detailed information about cookie purposes</li>
                <li>Cookie settings management</li>
              </ul>
              
              <h3 className="mt-4 mb-2 text-xl font-semibold">Cookie Usage</h3>
              <p>
                We use cookies and similar technologies to maintain sessions, remember preferences, and analyze service
                usage. This includes Google Analytics for understanding how users interact with our services. You can 
                control cookies through your browser settings, and may opt-out of Google Analytics tracking using 
                Google's opt-out browser add-on.
              </p>
              <p>
                Our payment processors (Stripe, PayPal, and Cryptomus) may also use cookies and tracking technologies for
                fraud prevention and security purposes. Payment information is stored and processed by those providers; VaultScope
+                does not store full payment credentials.
+              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">11. Children's Privacy</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Our services are not intended for users under 13 years of age. We do not knowingly collect information
                from children. If we become aware of such collection, we will delete the information promptly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">12. Changes to This Policy</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated
                revision date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">13. Contact Us</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>For privacy-related questions or concerns, contact us through:</p>
              <ul className="pl-6 space-y-2 list-disc">
                <li>
                  Discord: {" "}
                  <a
                    href="https://discord.gg/sRj3uPPpme"
                    className="text-foreground hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    discord.gg/sRj3uPPpme
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="pt-8 mt-12 border-t border-border">
          <Link href="/" className="transition-colors text-muted-foreground hover:text-foreground">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
