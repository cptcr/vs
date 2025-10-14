import { Shield } from "lucide-react"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Terms of Service — VaultScope",
  description: "Terms and conditions for using VaultScope services.",
  path: "/terms",
})

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#000]">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <header className="mb-8 flex items-center gap-4">
          <Shield className="h-8 w-8 text-foreground" />
          <div>
            <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
        </header>

        <div className="space-y-8 text-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using VaultScope's hosting services, you agree to be bound by these Terms of Service and
              our Acceptable Use Policy. If you do not agree to these terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-muted-foreground">
              VaultScope provides free hosting services managed through a Pterodactyl panel with billing handled by
              Paymenter. Our current offering includes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>40% CPU allocation</li>
              <li>512 MB RAM</li>
              <li>5120 MB storage (ROM)</li>
              <li>Shared IPv4 address</li>
              <li>5 network ports</li>
              <li>No bandwidth limitations</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Services are provided "as‑is"; we reserve the right to modify, suspend, or discontinue any aspect of the
              service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            <p className="text-muted-foreground">To use our services, you must:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be at least 13 years of age</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground">
              You must comply with our {" "}
              <Link href="/acceptable-use" className="text-foreground hover:underline">
                Acceptable Use Policy
              </Link>
              . Prohibited activities include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Illegal activities or content</li>
              <li>Malware, viruses, or malicious code</li>
              <li>Cryptocurrency mining</li>
              <li>DDoS attacks or network abuse</li>
              <li>Spam or unsolicited communications</li>
              <li>Adult content or illegal file sharing</li>
              <li>Resource abuse or excessive usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Service Availability</h2>
            <p className="text-muted-foreground">
              While we strive for high availability, we do not guarantee uninterrupted service. We are not liable for:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Service interruptions or downtime</li>
              <li>Data loss (users are responsible for backups)</li>
              <li>Performance issues or slowdowns</li>
              <li>Scheduled or emergency maintenance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data and Backups</h2>
            <p className="text-muted-foreground">
              You are responsible for backing up your data. VaultScope is not responsible for any data loss, corruption,
              or deletion. We may perform backups at our discretion but do not guarantee availability or restoration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Billing and Payments</h2>
            <p className="text-muted-foreground">Currently, VaultScope offers free hosting services. If paid services are introduced:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Payments will be processed through Paymenter</li>
              <li>All fees are non‑refundable unless required by law</li>
              <li>We reserve the right to change pricing with notice</li>
              <li>Failure to pay may result in service suspension or termination</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="text-muted-foreground">We may suspend or terminate accounts for:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Violation of these Terms or the Acceptable Use Policy</li>
              <li>Fraudulent or illegal activity</li>
              <li>Abuse of resources or services</li>
              <li>Non‑payment (if applicable)</li>
              <li>Inactivity for extended periods</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Upon termination, data may be deleted without notice. You may terminate your account at any time from the
              control panel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="text-muted-foreground">
              You retain ownership of content you upload. By using VaultScope you grant us a license to host, store, and
              transmit content as necessary to provide the service. VaultScope and its logos are our property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VAULTSCOPE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING FROM YOUR USE
              OF OUR SERVICES. Our total liability shall not exceed the amount you paid us in the past 12 months, or $100,
              whichever is less.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify and hold VaultScope harmless from any claims, damages, or expenses arising from your
              use of the services, violation of these Terms, or infringement of any rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Third‑Party Services</h2>
            <p className="text-muted-foreground">
              Our services utilize third‑party platforms such as Pterodactyl (panel management) and Paymenter (billing).
              Your use of these platforms is subject to their terms and policies. We are not responsible for third‑party
              service issues or changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Modifications to Terms</h2>
            <p className="text-muted-foreground">
              We may modify these Terms at any time. Changes are effective upon posting. Continued use after changes
              constitutes acceptance. Material changes will be communicated via email or control panel notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with applicable law. Disputes will be
              resolved through binding arbitration or in courts of competent jurisdiction as permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground">For questions about these Terms, contact us through:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  Control Panel
                </a>
              </li>
            </ul>
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
