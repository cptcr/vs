/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

/* eslint-disable react/no-unescaped-entities */
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Backup & Recovery — Docs',
  description:
    'Backup schedules, retention and disaster recovery guidance for VaultScope servers.',
  path: '/docs/servers/backup-recovery',
});

export default function BackupRecoveryPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Backup and Recovery</h1>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Backup System</h2>
          <p className="mb-4 text-muted-foreground">
            Our comprehensive backup system ensures your data is safe and
            recoverable. Here's what you need to know:
          </p>
          <ul className="ml-6 space-y-2 list-disc text-muted-foreground">
            <li>Automatic daily backups of your server</li>
            <li>Manual backup creation at any time</li>
            <li>Configurable backup retention periods</li>
            <li>Secure, encrypted backup storage</li>
            <li>Multiple backup locations for redundancy</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Backup Configuration</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg border-border">
              <h3 className="mb-2 text-lg font-medium">Schedule Settings</h3>
              <p className="text-muted-foreground">
                Configure your backup schedule:
              </p>
              <ul className="mt-2 ml-6 space-y-1 list-disc text-muted-foreground">
                <li>Set backup frequency (daily, weekly, custom)</li>
                <li>Choose backup time windows</li>
                <li>Configure retention policies</li>
                <li>Set up backup notifications</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg border-border">
              <h3 className="mb-2 text-lg font-medium">Storage Options</h3>
              <p className="text-muted-foreground">
                Choose where to store your backups:
              </p>
              <ul className="mt-2 ml-6 space-y-1 list-disc text-muted-foreground">
                <li>Local backup storage</li>
                <li>Remote backup locations</li>
                <li>Cloud storage integration</li>
                <li>Redundant storage options</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Data Recovery</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Restore your data quickly and efficiently:
            </p>
            <ul className="ml-6 space-y-2 list-disc text-muted-foreground">
              <li>Full server restoration</li>
              <li>Selective file recovery</li>
              <li>Point-in-time recovery options</li>
              <li>Quick rollback capabilities</li>
              <li>Test restoration in staging environment</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Disaster Recovery</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Be prepared for any scenario with our disaster recovery features:
            </p>
            <ul className="ml-6 space-y-2 list-disc text-muted-foreground">
              <li>Complete system recovery procedures</li>
              <li>Automated failover options</li>
              <li>Emergency restore capabilities</li>
              <li>Data integrity verification</li>
              <li>Recovery time optimization</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Best Practices</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Follow these backup and recovery best practices:
            </p>
            <ul className="ml-6 space-y-2 list-disc text-muted-foreground">
              <li>Regularly test backup integrity</li>
              <li>Maintain multiple backup copies</li>
              <li>Document recovery procedures</li>
              <li>Monitor backup status and alerts</li>
              <li>Keep recovery credentials secure</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Troubleshooting</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Common backup and recovery issues and their solutions:
            </p>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg border-border">
                <h3 className="mb-2 text-lg font-medium">Failed Backups</h3>
                <ul className="ml-6 space-y-1 list-disc text-muted-foreground">
                  <li>Check storage space availability</li>
                  <li>Verify network connectivity</li>
                  <li>Review backup logs for errors</li>
                  <li>Contact support if issues persist</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg border-border">
                <h3 className="mb-2 text-lg font-medium">Recovery Issues</h3>
                <ul className="ml-6 space-y-1 list-disc text-muted-foreground">
                  <li>Verify backup file integrity</li>
                  <li>Check system requirements</li>
                  <li>Ensure sufficient storage space</li>
                  <li>Review recovery logs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
