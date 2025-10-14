import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Servers — VaultScope Docs",
  description: "Server provisioning, management and best practices for VaultScope users.",
  path: "/docs/servers",
})

export default function ServersPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Server Management</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Server Control Panel</h2>
          <p className="text-muted-foreground mb-4">
            Our control panel provides a powerful interface for managing your servers. Here's what you can do:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Start, stop, and restart your server</li>
            <li>Monitor resource usage in real-time</li>
            <li>Access console and command interface</li>
            <li>Manage files through web interface</li>
            <li>Configure automatic restarts</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Server Configuration</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Resource Allocation</h3>
              <p className="text-muted-foreground">
                Monitor and adjust server resources:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
                <li>CPU usage and limits</li>
                <li>Memory allocation</li>
                <li>Storage space</li>
                <li>Network bandwidth</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Network Settings</h3>
              <p className="text-muted-foreground">
                Configure network-related settings:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
                <li>Port allocation and management</li>
                <li>IP address settings</li>
                <li>DDoS protection configuration</li>
                <li>Firewall rules</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">File Management</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Manage your server files efficiently:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Upload and download files through web interface</li>
              <li>Edit configuration files directly</li>
              <li>Manage file permissions</li>
              <li>Create and extract archives</li>
              <li>Access file version history</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Console Access</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Full console access allows you to:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Execute server commands</li>
              <li>View real-time logs</li>
              <li>Monitor server performance</li>
              <li>Manage users and permissions</li>
              <li>Troubleshoot issues directly</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Automatic Tasks</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Configure automated tasks for your server:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Schedule automatic restarts</li>
              <li>Set up backup schedules</li>
              <li>Configure update routines</li>
              <li>Create custom scheduled tasks</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Follow these recommendations for optimal server performance:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Regularly monitor resource usage</li>
              <li>Keep software and configurations up to date</li>
              <li>Implement proper backup strategies</li>
              <li>Use strong security measures</li>
              <li>Document your server configurations</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}