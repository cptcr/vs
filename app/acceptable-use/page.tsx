/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

/* eslint-disable react/no-unescaped-entities */
import { Shield } from "lucide-react"
import Link from "next/link"

import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Acceptable Use — VaultScope",
  description: "Policies describing acceptable and prohibited use of VaultScope services.",
  path: "/acceptable-use",
})

export default function AcceptableUsePolicy() {
  return (
    <div className="min-h-screen bg-black">
      {/* header removed: global Header is provided in the root layout */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <header className="mb-8 flex items-center gap-4">
          <Shield className="h-8 w-8 text-foreground" />
          <div>
            <h1 className="text-4xl font-bold text-foreground">Acceptable Use Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
        </header>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Purpose</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This Acceptable Use Policy (AUP) outlines prohibited uses of VaultScope's hosting services. Violation of
                this policy may result in immediate suspension or termination of your account without refund.
              </p>
              <p className="mt-2 text-muted-foreground">Prohibited content includes, but is not limited to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Adult Content:</strong> Pornography, sexually explicit material, or
                  adult services
                </li>
                <li>
                  <strong className="text-foreground">Hate Speech:</strong> Content promoting violence, discrimination, or
                  hatred based on race, religion, gender, sexual orientation, or other protected characteristics
                </li>
                <li>
                  <strong className="text-foreground">Pirated Content:</strong> Copyrighted material without
                  authorization, warez, cracks, or illegal file sharing
                </li>
                <li>
                  <strong className="text-foreground">Malicious Content:</strong> Malware, viruses, trojans, ransomware, or
                  any harmful code
                </li>
                <li>
                  <strong className="text-foreground">Phishing:</strong> Fraudulent websites or content designed to steal
                  credentials or personal information
                </li>
                <li>
                  <strong className="text-foreground">Child Exploitation:</strong> Any content involving minors in
                  inappropriate contexts (zero tolerance)
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Prohibited Activities</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>The following activities are strictly prohibited:</p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Network Abuse</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>DDoS attacks or participation in botnets</li>
                <li>Port scanning or network probing</li>
                <li>Attempting to breach security of any system</li>
                <li>IP spoofing or packet manipulation</li>
                <li>Excessive bandwidth consumption affecting other users</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Resource Abuse</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cryptocurrency mining of any kind</li>
                <li>Running processes that monopolize CPU or memory</li>
                <li>Creating excessive disk I/O operations</li>
                <li>Using services as file storage or backup solutions</li>
                <li>Running multiple accounts to circumvent resource limits</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Spam and Abuse</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sending unsolicited bulk email (spam)</li>
                <li>Operating mail servers for spam purposes</li>
                <li>Harvesting email addresses without consent</li>
                <li>Creating fake accounts or impersonating others</li>
                <li>Automated scraping or data harvesting</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Gaming and Gambling</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Online gambling or casino services (unless legally licensed)</li>
                <li>Betting or wagering platforms</li>
                <li>Game servers that violate game publisher terms</li>
                <li>Cheating tools or game exploits</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Pterodactyl Panel Usage</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>When using the Pterodactyl control panel, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Not attempt to access other users' servers or data</li>
                <li>Not exploit panel vulnerabilities or bugs</li>
                <li>Not share panel access with unauthorized users</li>
                <li>Not automate panel actions in ways that cause excessive load</li>
                <li>Report security issues responsibly through proper channels</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Compliance and Legal Requirements</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>You must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Obtain necessary licenses for software you run</li>
                <li>Comply with GDPR, CCPA, and other privacy regulations if collecting user data</li>
                <li>Maintain appropriate terms of service and privacy policies for your applications</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Resource Limits</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Your service includes specific resource allocations (40% CPU, 512 MB RAM, 5120 MB storage, 5 ports). You
                must:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stay within allocated resource limits</li>
                <li>Not attempt to bypass or circumvent limitations</li>
                <li>Optimize applications for efficient resource usage</li>
                <li>Not run services designed to consume maximum resources continuously</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Security Responsibilities</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keeping your software and applications updated</li>
                <li>Using strong passwords and securing credentials</li>
                <li>Configuring firewalls and security settings appropriately</li>
                <li>Monitoring your server for compromises</li>
                <li>Responding promptly to security notifications</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Monitoring and Enforcement</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>VaultScope reserves the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monitor resource usage and network activity</li>
                <li>Investigate suspected violations of this AUP</li>
                <li>Suspend services immediately if abuse is detected</li>
                <li>Terminate accounts for repeated or severe violations</li>
                <li>Report illegal activities to law enforcement</li>
                <li>Cooperate with legal investigations and court orders</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Reporting Violations</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>If you become aware of any violations of this AUP, please report them immediately through:</p>
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

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Consequences of Violations</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Violations of this AUP may result in:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Warning:</strong> First-time minor violations may receive a
                  warning
                </li>
                <li>
                  <strong className="text-foreground">Suspension:</strong> Temporary service suspension while
                  investigation occurs
                </li>
                <li>
                  <strong className="text-foreground">Termination:</strong> Permanent account closure for serious or
                  repeated violations
                </li>
                <li>
                  <strong className="text-foreground">Legal Action:</strong> Referral to law enforcement for illegal
                  activities
                </li>
                <li>
                  <strong className="text-foreground">No Refunds:</strong> Violations result in forfeiture of any paid
                  services
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Updates to This Policy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We may update this AUP at any time. Continued use of our services after changes constitutes acceptance.
                It is your responsibility to review this policy periodically.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Questions</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                If you have questions about what is or isn't allowed under this policy, please contact us before
                proceeding. We're happy to provide clarification.
              </p>
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
