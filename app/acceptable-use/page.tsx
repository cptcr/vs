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
  title: "Acceptable Use",
  description: "Policies describing acceptable and prohibited use of VaultScope services.",
  path: "/acceptable-use",
})

export default function AcceptableUsePolicy() {
  return (
    <div className="min-h-screen bg-black">
      {/* header removed: global Header is provided in the root layout */}

      <main className="container max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="flex items-center gap-4 mb-8">
          <Shield className="w-8 h-8 text-foreground" />
          <div>
            <h1 className="text-4xl font-bold text-foreground">Acceptable Use Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
        </header>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Purpose</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                This Acceptable Use Policy (AUP) outlines prohibited uses of VaultScope's hosting services. Violation of
                this policy may result in immediate suspension or termination of your account without refund.
              </p>
              <p className="mt-2 text-muted-foreground">Prohibited content includes, but is not limited to:</p>
              <ul className="pl-6 mt-4 space-y-2 list-disc text-muted-foreground">
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
            <h2 className="mb-4 text-2xl font-semibold">3. Prohibited Activities</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>The following activities are strictly prohibited:</p>

              <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">Network Abuse</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li>DDoS attacks or participation in botnets</li>
                <li>Port scanning or network probing</li>
                <li>Attempting to breach security of any system</li>
                <li>IP spoofing or packet manipulation</li>
                <li>Excessive bandwidth consumption affecting other users</li>
              </ul>

              <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">Resource Abuse</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Cryptocurrency mining of any kind</li>
                <li>Running processes that monopolize CPU or memory</li>
                <li>Creating excessive disk I/O operations</li>
                <li>Using services as file storage or backup solutions</li>
                <li>Running multiple accounts to circumvent resource limits</li>
              </ul>

              <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">Spam and Abuse</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Sending unsolicited bulk email (spam)</li>
                <li>Operating mail servers for spam purposes</li>
                <li>Harvesting email addresses without consent</li>
                <li>Creating fake accounts or impersonating others</li>
                <li>Automated scraping or data harvesting</li>
              </ul>

              <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">Gaming and Gambling</h3>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Online gambling or casino services (unless legally licensed)</li>
                <li>Betting or wagering platforms</li>
                <li>Game servers that violate game publisher terms</li>
                <li>Cheating tools or game exploits</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">4. Pterodactyl Panel Usage</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>When using the Pterodactyl control panel, you must:</p>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Not attempt to access other users' servers or data</li>
                <li>Not exploit panel vulnerabilities or bugs</li>
                <li>Not share panel access with unauthorized users</li>
                <li>Not automate panel actions in ways that cause excessive load</li>
                <li>Report security issues responsibly through proper channels</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">5. Compliance and Legal Requirements</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>You must:</p>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Obtain necessary licenses for software you run</li>
                <li>Comply with GDPR, CCPA, and other privacy regulations if collecting user data</li>
                <li>Maintain appropriate terms of service and privacy policies for your applications</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">6. Resource Limits</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Your service includes specific resource allocations (40% CPU, 512 MB RAM, 5120 MB storage, 5 ports). You
                must:
              </p>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Stay within allocated resource limits</li>
                <li>Not attempt to bypass or circumvent limitations</li>
                <li>Optimize applications for efficient resource usage</li>
                <li>Not run services designed to consume maximum resources continuously</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">7. Security Responsibilities</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>You are responsible for:</p>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Keeping your software and applications updated</li>
                <li>Using strong passwords and securing credentials</li>
                <li>Configuring firewalls and security settings appropriately</li>
                <li>Monitoring your server for compromises</li>
                <li>Responding promptly to security notifications</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">8. Monitoring and Enforcement</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>VaultScope reserves the right to:</p>
              <ul className="pl-6 space-y-2 list-disc">
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
            <h2 className="mb-4 text-2xl font-semibold">9. Reporting Violations</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>If you become aware of any violations of this AUP, please report them immediately through:</p>
              <ul className="pl-6 space-y-2 list-disc">
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
            <h2 className="mb-4 text-2xl font-semibold">10. Consequences of Violations</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Violations of this AUP may result in:</p>
              <ul className="pl-6 space-y-2 list-disc">
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
            <h2 className="mb-4 text-2xl font-semibold">11. Updates to This Policy</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We may update this AUP at any time. Continued use of our services after changes constitutes acceptance.
                It is your responsibility to review this policy periodically.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">12. Questions</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                If you have questions about what is or isn't allowed under this policy, please contact us before
                proceeding. We're happy to provide clarification.
              </p>
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
