export default function BillingPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Billing & Plans</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">How Paymenter Works</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              VaultScope uses Paymenter for secure and reliable billing management. Here&apos;s what you need to know:
            </p>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Payment Methods</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Major credit cards (Visa, MasterCard, American Express)</li>
                <li>PayPal</li>
                <li>Cryptocurrency</li>
                <li>Bank transfers (for enterprise plans)</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Billing Cycle</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Monthly or annual billing options</li>
                <li>Automatic renewal system</li>
                <li>Pro-rated billing for upgrades</li>
                <li>Flexible payment dates</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Free Tier Information</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Free Tier Features</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>1GB RAM allocation</li>
                <li>Basic CPU resources</li>
                <li>Limited storage space</li>
                <li>Standard support access</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Free Tier Limitations</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Limited backup storage</li>
                <li>Basic DDoS protection</li>
                <li>Shared resources</li>
                <li>Standard support only</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Upgrading & Downgrading</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">How to Request Changes</h3>
              <p className="text-muted-foreground mb-4">
                To change your plan, please contact our support team:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Email: support@vaultscope.dev</li>
                <li>Discord: Join our community server</li>
                <li>Support ticket system</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Plan Change Process</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Contact support with your request</li>
                <li>Receive custom quote if applicable</li>
                <li>Review and approve changes</li>
                <li>Changes applied within 24 hours</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Premium Plans</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Premium Features</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Dedicated resources</li>
                <li>Priority support</li>
                <li>Advanced DDoS protection</li>
                <li>Extended backup storage</li>
                <li>Custom domain support</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Enterprise Solutions</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Custom resource allocation</li>
                <li>Dedicated support team</li>
                <li>Custom SLA options</li>
                <li>Advanced monitoring</li>
                <li>Custom integration options</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Payment Policies</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Refund Policy</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>72-hour money-back guarantee</li>
                <li>Pro-rated refunds for unused service</li>
                <li>Case-by-case review for issues</li>
                <li>Contact support for refund requests</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Late Payments</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>3-day grace period</li>
                <li>Automatic payment reminders</li>
                <li>Service suspension after grace period</li>
                <li>Data retention for 7 days after suspension</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-4">
            For any billing-related questions or assistance:
          </p>
          <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
            <li>Email our billing team: billing@vaultscope.dev</li>
            <li>Open a support ticket for billing issues</li>
            <li>Contact us on Discord for quick assistance</li>
            <li>Check our billing FAQ section</li>
          </ul>
        </section>
      </div>
    </div>
  )
}