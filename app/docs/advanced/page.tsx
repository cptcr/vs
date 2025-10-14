import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Advanced Guides — VaultScope Docs",
  description: "Advanced guides for server management, SFTP, custom ports, databases and performance tuning.",
  path: "/docs/advanced",
})

export default function AdvancedPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Advanced Guides</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Uploading Custom Files via SFTP</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">SFTP Setup</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Install an SFTP client (FileZilla, WinSCP)</li>
                <li>Locate SFTP credentials in panel</li>
                <li>Configure connection settings</li>
                <li>Test connection</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">File Management</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Navigate directory structure</li>
                <li>Upload/download files</li>
                <li>Set file permissions</li>
                <li>Manage file ownership</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Best Practices</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Use secure connections only</li>
                <li>Maintain organized folders</li>
                <li>Regular backup important files</li>
                <li>Monitor file sizes</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Creating Custom Ports</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Port Configuration</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Request port allocation</li>
                <li>Configure port settings</li>
                <li>Set up port forwarding</li>
                <li>Test port connectivity</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Port Management</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Monitor port usage</li>
                <li>Configure firewall rules</li>
                <li>Set up port restrictions</li>
                <li>Troubleshoot port issues</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Using Databases</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Database Setup</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Create database instance</li>
                <li>Configure database settings</li>
                <li>Set up user access</li>
                <li>Import initial data</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Database Management</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Monitor database performance</li>
                <li>Backup database regularly</li>
                <li>Optimize queries</li>
                <li>Manage storage space</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Security</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Set strong passwords</li>
                <li>Configure access controls</li>
                <li>Enable encryption</li>
                <li>Regular security updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Optimizing Performance</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Resource Optimization</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Monitor resource usage</li>
                <li>Optimize server settings</li>
                <li>Configure caching</li>
                <li>Manage background processes</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Performance Monitoring</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Track server metrics</li>
                <li>Set up alerts</li>
                <li>Analyze performance logs</li>
                <li>Identify bottlenecks</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Optimization Tips</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Regular maintenance schedule</li>
                <li>Clean up unused files</li>
                <li>Optimize configurations</li>
                <li>Update software regularly</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Advanced Security</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Security Measures</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Configure SSL/TLS</li>
                <li>Set up IP whitelisting</li>
                <li>Enable two-factor authentication</li>
                <li>Implement access controls</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Monitoring & Alerts</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Set up security monitoring</li>
                <li>Configure alert thresholds</li>
                <li>Review security logs</li>
                <li>Monitor access attempts</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              For more advanced topics and support:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
              <li>Join our Discord community</li>
              <li>Check our knowledge base</li>
              <li>Contact technical support</li>
              <li>Review system documentation</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}