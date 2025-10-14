export default function TroubleshootingPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Troubleshooting Guide</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Errors</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Server Start Failures</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Check console logs for error messages</li>
                <li>Verify resource allocation</li>
                <li>Check file permissions</li>
                <li>Validate configuration files</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Port Issues</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Confirm port allocation</li>
                <li>Check for port conflicts</li>
                <li>Verify firewall settings</li>
                <li>Test port accessibility</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Java Related Errors</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Verify Java version compatibility</li>
                <li>Check memory allocation</li>
                <li>Validate Java arguments</li>
                <li>Review Java installation</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Console Logs & Error Reading</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Reading Console Logs</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Access console through control panel</li>
                <li>Identify error messages</li>
                <li>Understand log severity levels</li>
                <li>Use log filtering options</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Common Error Messages</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Port already in use</li>
                <li>Out of memory errors</li>
                <li>Permission denied</li>
                <li>Connection timeout</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Panel Not Loading</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Basic Checks</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Verify internet connection</li>
                <li>Clear browser cache</li>
                <li>Try different browser</li>
                <li>Check system status page</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Advanced Troubleshooting</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Check browser console for errors</li>
                <li>Verify DNS resolution</li>
                <li>Test with incognito mode</li>
                <li>Disable browser extensions</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Server Stuck / Unresponsive</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Immediate Actions</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Check resource usage</li>
                <li>Review recent changes</li>
                <li>Check console output</li>
                <li>Force restart if necessary</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Prevention</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Monitor resource usage</li>
                <li>Set up usage alerts</li>
                <li>Regular maintenance</li>
                <li>Backup important data</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contacting Support</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Before Contacting Support</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Check documentation first</li>
                <li>Gather error messages</li>
                <li>List recent changes</li>
                <li>Try basic troubleshooting</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Support Channels</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Email: support@vaultscope.dev</li>
                <li>Discord community support</li>
                <li>Support ticket system</li>
                <li>Emergency contact (Premium only)</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Information to Include</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Server ID and details</li>
                <li>Error messages</li>
                <li>Steps to reproduce</li>
                <li>Recent changes made</li>
                <li>Attempted solutions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">Emergency Procedures</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Emergency Recovery Steps</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Force stop unresponsive servers</li>
                <li>Restore from latest backup</li>
                <li>Contact emergency support</li>
                <li>Document incident details</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Data Recovery</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Access backup archives</li>
                <li>Restore specific files</li>
                <li>Verify data integrity</li>
                <li>Test recovered data</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}