import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Getting Started — VaultScope Docs',
  description: 'Quick start guide including control panel overview, console, files and basic troubleshooting.',
  path: '/docs/getting-started',
})

export default function GettingStartedPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Getting Started</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Welcome to VaultScope, your premium game server hosting solution. This guide will help you get started with our platform and make the most of your server.
            </p>
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">What you&apos;ll need:</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>A VaultScope account</li>
                <li>A supported web browser</li>
                <li>Basic understanding of server management</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Control Panel Overview</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The VaultScope control panel is your central hub for managing all aspects of your server:
            </p>
            <div className="grid gap-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Dashboard Features</h3>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Server status and quick controls</li>
                  <li>Resource usage monitoring</li>
                  <li>File management system</li>
                  <li>Console access</li>
                  <li>Backup management</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Navigation Guide</h3>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Left sidebar: Main navigation menu</li>
                  <li>Top bar: Quick actions and account settings</li>
                  <li>Center area: Main content and server controls</li>
                  <li>Bottom bar: System status and support access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Accessing the Console & Files</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Console Access</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Click the &quot;Console&quot; tab in your server panel</li>
                <li>Use the command input at the bottom</li>
                <li>View real-time server output</li>
                <li>Access command history with up/down arrows</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">File Management</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Access the file manager through the &quot;Files&quot; tab</li>
                <li>Upload files using drag-and-drop or file browser</li>
                <li>Edit files directly in the browser</li>
                <li>Manage file permissions and ownership</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">SFTP Access</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Find SFTP credentials in the &quot;Settings&quot; tab</li>
                <li>Use any SFTP client (FileZilla, WinSCP, etc.)</li>
                <li>Connect using your server&apos;s SFTP details</li>
                <li>Transfer files securely and efficiently</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Troubleshooting</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Common Issues</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Server won&apos;t start: Check console for error messages</li>
                <li>Can&apos;t connect: Verify port configurations</li>
                <li>Performance issues: Monitor resource usage</li>
                <li>File upload problems: Check file permissions</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Quick Fixes</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Restart the server if unresponsive</li>
                <li>Clear temporary files if space is low</li>
                <li>Check resource limits in panel</li>
                <li>Verify network connectivity</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Getting Help</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Check the knowledge base first</li>
                <li>Join our Discord community</li>
                <li>Contact support via email: support@vaultscope.dev</li>
                <li>Use the ticket system for technical issues</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <div className="grid gap-4">
            <Link 
              href="/docs/control-panel"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">Using the Control Panel</h3>
              <p className="text-muted-foreground">
                Learn how to manage your servers effectively using our control panel.
              </p>
            </Link>

            <Link 
              href="/docs/billing"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">Billing & Plans</h3>
              <p className="text-muted-foreground">
                Understand our pricing, plans, and billing system.
              </p>
            </Link>

            <Link 
              href="/docs/advanced"
              className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">Advanced Guides</h3>
              <p className="text-muted-foreground">
                Explore advanced features and optimizations for your server.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}