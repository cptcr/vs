/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How VaultScope collects, stores and protects user data.",
  path: "/privacy",
})

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mb-8 text-muted-foreground">Last updated: November 2025</p>

        <div className="space-y-8 text-foreground">

          {/* 1. Data Controller */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Data Controller</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                VaultScope is the data controller within the meaning of Art. 4(7) GDPR.
              </p>
              <ul className="pl-6 space-y-2 list-disc">
                <li><strong className="text-foreground">Controller:</strong> VaultScope</li>
                <li><strong className="text-foreground">Privacy Contact:</strong> privacy@vaultscope.dev</li>
                <li><strong className="text-foreground">Jurisdiction:</strong> European Union</li>
              </ul>
            </div>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">2. Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="pl-6 space-y-2 list-disc">
                <li><strong className="text-foreground">Account Information:</strong> Email address, username, encrypted password</li>
                <li><strong className="text-foreground">Service Usage Data:</strong> Server configurations, resource usage, and panel activity via Pterodactyl</li>
                <li><strong className="text-foreground">Billing Information:</strong> Payment preferences and transaction references processed via Stripe (no full card data stored)</li>
                <li><strong className="text-foreground">Technical Data:</strong> IP addresses, browser type, device information, and access logs</li>
                <li><strong className="text-foreground">Communications:</strong> Support tickets, emails, and Discord messages</li>
                <li><strong className="text-foreground">Analytics:</strong> Usage data collected through Google Analytics (consent-based)</li>
              </ul>

              <p className="text-sm">
                VaultScope accepts payments exclusively via Stripe. Full payment credentials remain with Stripe in accordance with{" "}
                <a
                  href="https://stripe.com/privacy"
                  className="underline text-foreground underline-offset-4 hover:text-foreground/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stripe&apos;s Privacy Policy
                </a>.
              </p>
            </div>
          </section>

          {/* 3. Legal Basis */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">3. Legal Basis for Processing (Art. 6 GDPR)</h2>
            <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
              <li>Performance of a contract (Art. 6(1)(b))</li>
              <li>Legal obligations (Art. 6(1)(c))</li>
              <li>Legitimate interests – security, abuse prevention, service improvement (Art. 6(1)(f))</li>
              <li>Consent – cookies and analytics (Art. 6(1)(a))</li>
            </ul>
          </section>

          {/* 4. How We Use Data */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">4. How We Use Your Information</h2>
            <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
              <li>Providing and maintaining hosting services</li>
              <li>Processing payments and managing billing through Stripe and Paymenter</li>
              <li>Monitoring performance and preventing abuse</li>
              <li>Communicating service updates and support</li>
              <li>Improving services and developing new features</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          {/* 5. Data Retention */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">5. Data Retention</h2>
            <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
              <li><strong className="text-foreground">Account Data:</strong> 7 days after termination</li>
              <li><strong className="text-foreground">Billing Data:</strong> 1 year after termination</li>
              <li><strong className="text-foreground">Logs:</strong> 7 days after termination</li>
              <li><strong className="text-foreground">Analytics:</strong> Governed by Google Analytics retention policies</li>
            </ul>
          </section>

          {/* 6. Security */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">6. Data Storage & Security</h2>
            <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
              <li>Encrypted data transmission (TLS/SSL)</li>
              <li>Secure password hashing</li>
              <li>Access controls and monitoring</li>
              <li>Regular security updates</li>
            </ul>
          </section>

          {/* 7. Third Parties */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">7. Data Sharing & Third Parties</h2>
            <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
              <li>
                <strong className="text-foreground">Stripe:</strong> Payment processing – see{" "}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                  Stripe Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-foreground">Trustpilot:</strong> Review invitations based on legitimate interest –{" "}
                <a href="https://legal.trustpilot.com/for-reviewers/end-user-privacy-terms" target="_blank" rel="noopener noreferrer" className="underline">
                  Reviewers
                </a>,{" "}
                <a href="https://legal.trustpilot.com/for-businesses/business-privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">
                  Businesses
                </a>
              </li>
              <li><strong className="text-foreground">Google Analytics:</strong> Usage analytics (consent-based)</li>
              <li><strong className="text-foreground">Pterodactyl:</strong> Server & panel management</li>
            </ul>
          </section>

          {/* 8. International Transfers */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">8. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Where data is processed outside the EU/EEA, we rely on appropriate safeguards such as EU Standard
              Contractual Clauses or adequacy decisions.
            </p>
          </section>

          {/* 9. Cookies */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">9. Cookies & Tracking</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We require explicit consent before setting non-essential cookies. You can manage or withdraw consent at
                any time via our cookie settings.
              </p>
              <p>
                Stripe may set cookies for fraud prevention and security purposes.
              </p>
            </div>
          </section>

          {/* 10. Automated Decisions */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">10. Automated Decision-Making</h2>
            <p className="text-muted-foreground">
              VaultScope does not use automated decision-making or profiling with legal or similarly significant effects.
            </p>
          </section>

          {/* 11. GDPR Rights */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">11. GDPR Rights</h2>
            <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Contact <strong className="text-foreground">privacy@vaultscope.dev</strong>. You also have the right to
              lodge a complaint with a supervisory authority.
            </p>
          </section>

          {/* 12. Withdrawal & Refunds */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">12. Right of Withdrawal & Refunds</h2>
            <p className="text-muted-foreground">
              Under EU consumer law, the right of withdrawal expires immediately for digital services once service
              delivery begins with your consent. Refunds are generally not offered.
            </p>
          </section>

          {/* 13. Termination & Liability */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">13. Termination & Liability</h2>
            <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
              <li>Accounts may be terminated without notice</li>
              <li>Services are provided “as is”</li>
              <li>No liability for data loss or service interruptions</li>
            </ul>
          </section>

          {/* 14. Children */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">14. Children’s Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not intended for users under 13 years of age.
            </p>
          </section>

          {/* 15. Changes */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">15. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. Continued use of our services constitutes acceptance of
              the updated policy.
            </p>
          </section>

          {/* 16. Contact */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">16. Contact</h2>
            <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
              <li>Email: privacy@vaultscope.dev</li>
              <li>
                Discord:{" "}
                <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer" className="underline text-foreground">
                  discord.gg/sRj3uPPpme
                </a>
              </li>
            </ul>
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
