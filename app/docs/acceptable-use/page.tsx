import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Docs: Acceptable Use — VaultScope",
  description: "Detailed acceptable use documentation including fair-use, prohibited content and abuse reporting.",
  path: "/docs/acceptable-use",
})

export default function AcceptableUsePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Acceptable Use & Limits</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Resource Fair-Use Policy</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Our fair-use policy ensures optimal performance for all users while maintaining system stability.
            </p>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">CPU Usage</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Maximum sustained CPU usage: 90% of allocated resources</li>
                <li>Brief spikes allowed for up to 100%</li>
                <li>Automatic throttling if sustained high usage</li>
                <li>Regular monitoring for abuse</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Memory Usage</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Full use of allocated RAM permitted</li>
                <li>Swap usage monitored and limited</li>
                <li>Automatic restart if memory limits exceeded</li>
                <li>Memory leak detection and notification</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Network Usage</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Unlimited inbound traffic</li>
                <li>Fair-use outbound bandwidth</li>
                <li>DDoS protection limits</li>
                <li>Port usage restrictions</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Prohibited Content</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Strictly Prohibited</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Illegal content or activities</li>
                <li>Malware or harmful code</li>
                <li>Unauthorized copyrighted material</li>
                <li>Phishing or scam content</li>
                <li>Resource abuse or crypto mining</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Content Restrictions</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Adult or NSFW content</li>
                <li>Hate speech or discriminatory content</li>
                <li>Spam or bulk messaging services</li>
                <li>Unauthorized proxies or VPNs</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Inactivity & Auto-Suspension</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Inactivity Policy</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>30 days of inactivity triggers warning</li>
                <li>45 days: automatic suspension</li>
                <li>60 days: potential service termination</li>
                <li>Data retained for 7 days after termination</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Suspension Process</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Email notification before suspension</li>
                <li>Option to prevent suspension</li>
                <li>Reactivation process</li>
                <li>Data recovery options</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Abuse Reporting</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">How to Report Abuse</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Email: abuse@vaultscope.dev</li>
                <li>Use the abuse report form</li>
                <li>Contact support via Discord</li>
                <li>Open a support ticket</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Required Information</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Server IP or hostname</li>
                <li>Nature of abuse</li>
                <li>Time and date of incident</li>
                <li>Supporting evidence</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Enforcement</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Policy Violations</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Warning for first offense</li>
                <li>Temporary suspension for repeated violations</li>
                <li>Permanent termination for serious breaches</li>
                <li>No refunds for policy violations</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Appeal Process</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Submit appeal via support ticket</li>
                <li>Provide explanation and evidence</li>
                <li>Review process timeline</li>
                <li>Decision finality</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            For questions about our acceptable use policy or to report violations:
          </p>
          <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
            <li>Email: compliance@vaultscope.dev</li>
            <li>Support ticket system</li>
            <li>Discord community moderators</li>
            <li>Emergency contact: For critical violations only</li>
          </ul>
        </section>
      </div>
    </div>
  )
}