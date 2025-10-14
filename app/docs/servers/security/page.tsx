export default function SecurityPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Server Security</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Security Overview</h2>
          <p className="text-muted-foreground mb-4">
            Comprehensive security measures to protect your server:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>DDoS protection</li>
            <li>Firewall configuration</li>
            <li>Access control management</li>
            <li>Security monitoring and alerts</li>
            <li>Regular security updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Access Management</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">User Authentication</h3>
              <p className="text-muted-foreground">
                Secure user authentication features:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
                <li>Two-factor authentication (2FA)</li>
                <li>Password policy enforcement</li>
                <li>Session management</li>
                <li>Login attempt monitoring</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Permission Controls</h3>
              <p className="text-muted-foreground">
                Granular permission management:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
                <li>Role-based access control</li>
                <li>Custom permission sets</li>
                <li>Resource-level permissions</li>
                <li>Access logs and auditing</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Network Security</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Comprehensive network protection:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Advanced firewall configuration</li>
              <li>DDoS mitigation systems</li>
              <li>SSL/TLS encryption</li>
              <li>IP whitelisting</li>
              <li>Traffic monitoring</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Ensure your data remains secure:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Data encryption at rest</li>
              <li>Secure data transmission</li>
              <li>Regular security audits</li>
              <li>Backup encryption</li>
              <li>Data access monitoring</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security Best Practices</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Follow these security recommendations:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Regular security updates and patches</li>
              <li>Strong password requirements</li>
              <li>Regular security audits</li>
              <li>Monitor access logs</li>
              <li>Implement least privilege access</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Incident Response</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Steps to take during security incidents:
            </p>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Detection</h3>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Monitor security alerts</li>
                  <li>Review system logs</li>
                  <li>Analyze unusual activity</li>
                  <li>Automated threat detection</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Response</h3>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Isolate affected systems</li>
                  <li>Investigate root cause</li>
                  <li>Implement security measures</li>
                  <li>Document incident details</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Recovery</h3>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Restore from secure backups</li>
                  <li>Patch security vulnerabilities</li>
                  <li>Update security policies</li>
                  <li>Implement preventive measures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}