import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Databases — VaultScope Docs",
  description: "How to create and manage databases for your servers on VaultScope.",
  path: "/docs/databases",
})

export default function DatabasesPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Database Management</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Database Overview</h2>
          <p className="text-muted-foreground mb-4">
            Comprehensive database management features and capabilities:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Multiple database engine support</li>
            <li>Automated backups</li>
            <li>Performance monitoring</li>
            <li>Security management</li>
            <li>Scaling capabilities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Database Setup</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Creating Databases</h3>
              <p className="text-muted-foreground">Steps to create a new database:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
                <li>Choose database engine</li>
                <li>Set database name</li>
                <li>Configure character set</li>
                <li>Set collation</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">User Management</h3>
              <p className="text-muted-foreground">Database user administration:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
                <li>Create database users</li>
                <li>Set user permissions</li>
                <li>Manage access control</li>
                <li>Password policies</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Database Access</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Different ways to access your databases:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Web-based database manager</li>
              <li>Command-line interface</li>
              <li>Remote database connections</li>
              <li>API access</li>
              <li>Database administration tools</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Backup & Recovery</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Backup Options</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Automated daily backups</li>
                <li>Manual backup creation</li>
                <li>Backup compression</li>
                <li>Backup encryption</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Recovery Procedures</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Point-in-time recovery</li>
                <li>Full database restore</li>
                <li>Table-level recovery</li>
                <li>Emergency recovery options</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Performance Optimization</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Monitoring</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Query performance analysis</li>
                <li>Resource usage monitoring</li>
                <li>Connection tracking</li>
                <li>Performance metrics</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Optimization</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Query optimization</li>
                <li>Index management</li>
                <li>Cache configuration</li>
                <li>Resource allocation</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Access Control</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>User authentication</li>
                <li>Role-based access control</li>
                <li>SSL/TLS encryption</li>
                <li>IP whitelisting</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Security Best Practices</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Regular security updates</li>
                <li>Password policies</li>
                <li>Access logging</li>
                <li>Security audits</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Common Issues</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Connection problems</li>
                <li>Performance issues</li>
                <li>Backup failures</li>
                <li>Access denied errors</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Diagnostic Tools</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Log analysis</li>
                <li>Query profiling</li>
                <li>System monitoring</li>
                <li>Diagnostic reports</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}