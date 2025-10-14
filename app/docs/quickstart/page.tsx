export default function QuickStartPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Quick Start Guide</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Setting Up Your Server</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">1. Choose Your Configuration</h3>
              <p className="text-muted-foreground mb-2">
                Select your server specifications:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>CPU cores and speed</li>
                <li>Memory allocation</li>
                <li>Storage capacity</li>
                <li>Network bandwidth</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">2. Server Deployment</h3>
              <p className="text-muted-foreground mb-2">
                Your server will be automatically deployed with:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Latest security updates</li>
                <li>Optimized configuration</li>
                <li>DDoS protection</li>
                <li>Backup system</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">3. Access Your Server</h3>
              <p className="text-muted-foreground mb-2">
                Multiple ways to manage your server:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Web-based control panel</li>
                <li>SSH access</li>
                <li>SFTP for file management</li>
                <li>Console access</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Initial Configuration</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Security Setup</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Change default passwords</li>
                <li>Configure firewall rules</li>
                <li>Set up SSH keys</li>
                <li>Enable two-factor authentication</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Network Configuration</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Configure network ports</li>
                <li>Set up domain names</li>
                <li>Configure SSL certificates</li>
                <li>Set up reverse proxy (if needed)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Operations</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Server Controls</h3>
              <p className="text-muted-foreground mb-2">Essential server operations:</p>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Start/Stop server</li>
                <li>Restart services</li>
                <li>Monitor resources</li>
                <li>View server logs</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">File Management</h3>
              <p className="text-muted-foreground mb-2">Managing your files:</p>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Upload/download files</li>
                <li>Edit configuration files</li>
                <li>Set file permissions</li>
                <li>Create backups</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              After completing the initial setup, explore these areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Performance</h3>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Resource monitoring</li>
                  <li>Performance optimization</li>
                  <li>Server scaling</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Security</h3>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Security hardening</li>
                  <li>SSL configuration</li>
                  <li>Backup strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Issues</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Troubleshooting Tips</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Check server status and logs</li>
                <li>Verify network connectivity</li>
                <li>Monitor resource usage</li>
                <li>Review recent changes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}