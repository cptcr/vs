/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from "next/link"
import { DocsScreenshot } from "@/components/docs-screenshot"
import createDatabaseButton from "@/app/assets/docs/manage-server/manage-database/create-new-database-button.png"
import createDatabaseModal from "@/app/assets/docs/manage-server/manage-database/create-new-database-window-set-database-name-and-allowed-connections-origins-as-ipv4.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Database Management — Docs",
  description:
    "Create databases inside the VaultScope panel, manage credentials, allow remote connections and keep replicas healthy.",
  path: "/docs/databases",
})

export default function DatabasesPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Managed databases</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Provision and operate databases</h1>
        <p className="text-lg text-muted-foreground">
          VaultScope ships with built-in database management for each server. You can spin up MySQL-compatible instances,
          control network access and share credentials with collaborators without leaving the panel.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Create a database</h2>
        <p className="text-muted-foreground">
          Open the <em>Databases</em> tab on your server and click <em>Create New Database</em>. Give it a descriptive
          name—VaultScope automatically prefixes it with your server identifier.
        </p>
        <DocsScreenshot
          image={createDatabaseButton}
          alt="VaultScope databases tab with the Create New Database button."
          caption="You need to be logged in to panel.vaultscope.dev and inside the server view to see this option."
          priority
        />
        <DocsScreenshot
          image={createDatabaseModal}
          alt="VaultScope create database modal with fields for name and allowed connections."
          caption="Restrict access by whitelisting IPv4 addresses or leave it blank for panel-only usage."
        />
        <div className="px-4 py-3 text-sm border rounded-lg border-border/60 bg-muted/10 text-muted-foreground">
          Passwords generate automatically. Copy them into your password manager—the panel will only show each password
          once.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Connect from applications and tools</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Panel-hosted applications (plugins, containers) can connect using 127.0.0.1 and the provided credentials.</li>
          <li>
            External tools like TablePlus or DBeaver require you to add your workstation IP in the <em>Allowed Connections</em> field.
          </li>
          <li>Use SSL tunnels or VPNs for production workloads—open databases directly to the internet only during development.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Manage credentials securely</h2>
        <p className="text-muted-foreground">
          Rotate credentials from the <em>Settings</em> tab when teammates leave or after suspected compromise. VaultScope
          updates environment variables for all running processes automatically.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Store secrets in a shared password manager rather than plain text documents.</li>
          <li>Audit database access via the <em>Activity</em> log to trace who created, rotated or deleted credentials.</li>
          <li>Use the <Link href="/docs/security" className="font-medium underline text-primary underline-offset-4">security guide</Link> to enable two-factor authentication before granting write access.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">4. Backups and restores</h2>
        <p className="text-muted-foreground">
          Databases piggyback on the server backup system. When you trigger a backup, VaultScope exports the database and
          stores it alongside your files.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Include a nightly backup schedule to capture incremental changes.</li>
          <li>For emergency restores, recover the database from the backup archive and import it via the panel console.</li>
          <li>Keep larger exports (over 1&nbsp;GB) locally as well—downloads from the panel are throttled to 50&nbsp;Mbps for fairness.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">5. Performance tuning checklist</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Limit long-running queries by adding indexes for frequently queried columns.</li>
          <li>Enable slow query logging and review results weekly.</li>
          <li>Separate read-heavy workloads into replicas—open a ticket for managed replica options.</li>
          <li>Monitor CPU, RAM and disk usage from the <em>Metrics</em> panel to detect spikes caused by database load.</li>
        </ul>
      </section>

      <section className="pt-8 space-y-6 border-t border-border">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            <strong className="text-foreground">Connection refused:</strong> confirm your IP is allowed and the database
            service is running.
          </li>
          <li>
            <strong className="text-foreground">Authentication failed:</strong> reset the password from the panel and
            restart dependent services so they pick up the new credentials.
          </li>
          <li>
            <strong className="text-foreground">Timeouts or slow queries:</strong> export the slow query log and follow the{" "}
            <Link href="/docs/optimization" className="font-medium underline text-primary underline-offset-4">
              optimization checklist
            </Link>
            .
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">
          If you get stuck, open a ticket under <em>Database Assistance</em> and include the server ID, database name and
          exact timestamps of the issue.
        </p>
      </section>
    </div>
  )
}
