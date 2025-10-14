import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Control Panel — VaultScope Docs",
  description: "How to manage servers, ports, SFTP and other control panel features.",
  path: "/docs/control-panel",
})

export default function ControlPanelPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Using the Control Panel</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Creating & Managing Servers</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Server Creation</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Click &quot;Create Server&quot; in the dashboard</li>
                <li>Select server specifications</li>
                <li>Choose server location</li>
                <li>Configure initial settings</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Server Management</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Start/Stop/Restart server</li>
                <li>Monitor server status</li>
                <li>View server statistics</li>
                <li>Manage server settings</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Ports & Networking</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Port Management</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>View allocated ports</li>
                <li>Request additional ports</li>
                <li>Configure port settings</li>
                <li>Monitor port usage</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Network Configuration</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Configure network settings</li>
                <li>Set up reverse proxy</li>
                <li>Manage IP allocations</li>
                <li>Configure firewalls</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">SFTP File Access</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">SFTP Setup</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Find SFTP credentials in server settings</li>
                <li>Use recommended SFTP clients</li>
                <li>Configure connection settings</li>
                <li>Test connection</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">File Management</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Upload and download files</li>
                <li>Manage file permissions</li>
                <li>Create and edit directories</li>
                <li>Synchronize local files</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Resource Usage</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">CPU Usage</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Monitor CPU utilization</li>
                <li>View CPU throttling stats</li>
                <li>Check process usage</li>
                <li>Set CPU limits</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Memory (RAM)</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Track memory usage</li>
                <li>Monitor swap usage</li>
                <li>View memory allocation</li>
                <li>Set memory limits</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Disk Space</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Monitor disk usage</li>
                <li>View storage allocation</li>
                <li>Track I/O operations</li>
                <li>Manage disk quotas</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Server Backups</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Manual Backups</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Create on-demand backups</li>
                <li>Schedule backup times</li>
                <li>Select backup content</li>
                <li>Configure retention policy</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Backup Management</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>View backup history</li>
                <li>Download backup files</li>
                <li>Restore from backups</li>
                <li>Delete old backups</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Keep in mind these important aspects while using the control panel:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
              <li>Regular monitoring of resource usage helps prevent issues</li>
              <li>Create backups before making major changes</li>
              <li>Keep SFTP credentials secure and never share them</li>
              <li>Contact support if you notice unusual resource spikes</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}