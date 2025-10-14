import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "FAQ — VaultScope Docs",
  description: "Frequently asked questions and answers for VaultScope users.",
  path: "/docs/faq",
})

export default function FAQPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">General Questions</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">What resources are included with my server?</h3>
              <p className="text-muted-foreground">
                Each server includes dedicated CPU cores, allocated RAM, SSD storage, and unmetered bandwidth. Specific resources depend on your chosen plan.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">How quickly can I get started?</h3>
              <p className="text-muted-foreground">
                Server deployment is instant. Once payment is processed, your server will be ready within minutes, complete with all necessary configurations.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">What operating systems are supported?</h3>
              <p className="text-muted-foreground">
                We support major Linux distributions including Ubuntu, CentOS, and Debian. Custom OS installations are available on request.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technical Questions</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">How do I access my server?</h3>
              <p className="text-muted-foreground">
                You can access your server through our web-based control panel, SSH, SFTP, or direct console access. Detailed connection information is provided upon server creation.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">What kind of backups are available?</h3>
              <p className="text-muted-foreground">
                We provide automated daily backups with 7-day retention. You can also create manual backups at any time, and download them for local storage.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Is DDoS protection included?</h3>
              <p className="text-muted-foreground">
                Yes, all servers include DDoS protection powered by Cloudflare. This provides enterprise-grade protection against various types of attacks.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Account & Billing</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">How does billing work?</h3>
              <p className="text-muted-foreground">
                We offer monthly and annual billing cycles. Services are billed in advance, and you can upgrade or downgrade at any time with pro-rated adjustments.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">What payment methods are accepted?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and cryptocurrency payments. Enterprise clients can arrange for wire transfers or purchase orders.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Can I upgrade my server later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade your server resources at any time. Upgrades are applied instantly with minimal downtime, and billing is adjusted accordingly.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Support & Maintenance</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">What support is included?</h3>
              <p className="text-muted-foreground">
                All plans include 24/7 technical support via email and ticket system. Premium plans also include priority support and direct phone assistance.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">How are updates handled?</h3>
              <p className="text-muted-foreground">
                Security updates are applied automatically. Major system updates are scheduled with advance notice and performed during maintenance windows.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">What is your uptime guarantee?</h3>
              <p className="text-muted-foreground">
                We guarantee 99.9% uptime for all servers. Any downtime exceeding this is credited according to our Service Level Agreement.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">How secure are your servers?</h3>
              <p className="text-muted-foreground">
                We implement multiple security layers including firewalls, DDoS protection, intrusion detection, and regular security audits. All data is encrypted at rest and in transit.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">What about data privacy?</h3>
              <p className="text-muted-foreground">
                We adhere to strict data privacy standards and never access your server content without permission. All data centers are GDPR compliant.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground">
            If you couldn&apos;t find the answer you&apos;re looking for, please contact our support team:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
            <li>Email: support@vaultscope.dev</li>
            <li>Submit a ticket through your control panel</li>
            <li>Join our Discord community</li>
          </ul>
        </section>
      </div>
    </div>
  )
}