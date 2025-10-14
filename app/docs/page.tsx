import Link from 'next/link'

export default function DocsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">VaultScope Documentation</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Documentation Sections</h2>
          <div className="grid gap-4">
            <Link 
              href="/docs/getting-started"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">1. Getting Started</h3>
              <ul className="list-disc ml-6 text-sm text-muted-foreground">
                <li>Introduction</li>
                <li>Control Panel Overview</li>
                <li>Accessing the Console / Files</li>
                <li>Basic Troubleshooting</li>
              </ul>
            </Link>

            <Link 
              href="/docs/control-panel"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">2. Using the Control Panel</h3>
              <ul className="list-disc ml-6 text-sm text-muted-foreground">
                <li>Creating & Managing Servers</li>
                <li>Ports & Networking</li>
                <li>SFTP File Access</li>
                <li>Resource Usage (CPU, RAM, Disk)</li>
                <li>Server Backups (Manual)</li>
              </ul>
            </Link>

            <Link 
              href="/docs/billing"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">3. Billing & Plans</h3>
              <ul className="list-disc ml-6 text-sm text-muted-foreground">
                <li>How Paymenter Works</li>
                <li>Free Tier Info</li>
                <li>Upgrading / Downgrading</li>
              </ul>
            </Link>

            <Link 
              href="/docs/acceptable-use"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">4. Acceptable Use & Limits</h3>
              <ul className="list-disc ml-6 text-sm text-muted-foreground">
                <li>Resource Fair-Use Policy</li>
                <li>Prohibited Content</li>
                <li>Inactivity & Auto-Suspension</li>
                <li>Abuse Reporting</li>
              </ul>
            </Link>

            <Link 
              href="/docs/troubleshooting"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">5. Troubleshooting</h3>
              <ul className="list-disc ml-6 text-sm text-muted-foreground">
                <li>Common Errors</li>
                <li>Console Logs & Error Reading</li>
                <li>Panel Not Loading</li>
                <li>Server Stuck / Unresponsive</li>
                <li>Contacting Support</li>
              </ul>
            </Link>

            <Link 
              href="/docs/advanced"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">6. Advanced Guides</h3>
              <ul className="list-disc ml-6 text-sm text-muted-foreground">
                <li>Uploading Custom Files via SFTP</li>
                <li>Creating Custom Ports</li>
                <li>Using Databases</li>
                <li>Optimizing Performance</li>
              </ul>
            </Link>

            <Link 
              href="/docs/security"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">7. Security</h3>
              <ul className="list-disc ml-6 text-sm text-muted-foreground">
                <li>Account Security Tips</li>
                <li>Password Management</li>
                <li>DDoS Protection Explanation</li>
                <li>Safe File Upload Practices</li>
              </ul>
            </Link>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-4">
            If you need assistance, our support team is available:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Email: support@vaultscope.dev</li>
            <li>Discord: Join our community server for real-time support</li>
            <li>Submit a ticket through your control panel</li>
            <li>Browse our comprehensive guides</li>
          </ul>
        </section>
      </div>
    </div>
  )
}