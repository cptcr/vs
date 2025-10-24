/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from "next/link"
import { DocsScreenshot } from "@/components/docs-screenshot"
import createDirectory from "@/app/assets/docs/manage-server/filemanager/create-new-directory-or-file-buttons.png"
import uploadFile from "@/app/assets/docs/manage-server/filemanager/uploa-file-button.png"
import manualBackup from "@/app/assets/docs/manage-server/backups/create-manual-backup-click-create-backup-button.png"
import backupWindow from "@/app/assets/docs/manage-server/backups/create-backup-window.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Getting Started — VaultScope Docs",
  description:
    "Tour the VaultScope control panel, upload your first files, create a manual backup and learn the fastest paths to support.",
  path: "/docs/getting-started",
})

export default function GettingStartedPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">First session checklist</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get comfortable inside the VaultScope panel</h1>
        <p className="text-lg text-muted-foreground">
          You already have server access. The next ten minutes will help you understand the day-to-day tools: file
          uploads, console access, backups and where to escalate questions.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Meet the server view</h2>
        <p className="text-muted-foreground">
          When you click a server from the dashboard you land on the combined console and metrics canvas. It shows live
          CPU, memory and network usage along the top and exposes quick actions—start, stop and restart—above the
          terminal. Keep the browser open during troubleshooting so you can reference historical output.
        </p>
        <div className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm text-muted-foreground">
          Tip: The control panel automatically reconnects after temporary network drops. You can safely leave the tab
          open in the background while a command runs.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Upload configuration files</h2>
        <p className="text-muted-foreground">
          Open the <span className="font-medium text-foreground">Files</span> tab for an in-browser file manager. Drag
          and drop works for single files and zipped archives, or use the <em>Upload</em> button for a traditional
          picker.
        </p>
        <DocsScreenshot
          image={uploadFile}
          alt="VaultScope file manager with the Upload button highlighted."
          caption="Upload accepts files up to 250&nbsp;MB. Larger archives should be transferred through SFTP."
        />
        <p className="text-muted-foreground">
          Need to scaffold folders or scripts directly from the panel? Use the <em>New File</em> and <em>New Folder</em>{" "}
          buttons in the top-right corner.
        </p>
        <DocsScreenshot
          image={createDirectory}
          alt="VaultScope file manager showing the New Directory and New File actions."
          caption="Create empty files for quick config tweaks without leaving the browser."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Capture a safety backup</h2>
        <p className="text-muted-foreground">
          Before you modify anything substantial, create a manual backup. Head to the <span className="font-medium text-foreground">Backups</span> tab and click <em>Create backup</em>.
        </p>
        <DocsScreenshot
          image={manualBackup}
          alt="VaultScope backups list with the Create Backup button emphasized."
          caption="Manual backups include the entire server directory and count toward your retention limit."
        />
        <p className="text-muted-foreground">
          Confirm the name and retention window. Manual backups respect the same limits as scheduled runs and expire
          automatically once they age out.
        </p>
        <DocsScreenshot
          image={backupWindow}
          alt="VaultScope backup modal prompting for a backup name."
          caption="Name backups after the change you plan to make so rollbacks are easy to identify later."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">4. Know where to find credentials</h2>
        <p className="text-muted-foreground">
          The <span className="font-medium text-foreground">Settings</span> tab exposes SFTP credentials, database
          passwords and allocation details. Rotate sensitive values from here, not the billing portal—the panel syncs
          them instantly across the cluster.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Enable SFTP if you prefer a desktop client such as FileZilla or WinSCP.</li>
          <li>Copy the connection details into your password manager so teammates can retrieve them securely.</li>
          <li>Audit credential usage from the <em>Activity</em> tab in the billing area if you suspect a compromise.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">5. Escalate the right way</h2>
        <p className="text-muted-foreground">
          Support staffing follows the same runbooks published in this documentation. When you need help, include the
          following in your ticket:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Server ID, region and the action you attempted.</li>
          <li>Console output or log snippets around the time of failure.</li>
          <li>Whether the issue reproduces after a restart or backup restore.</li>
        </ul>
        <p className="text-muted-foreground">
          For urgent impact, open a ticket inside the control panel (<em>Support &gt; Create Ticket</em>) and ping the{" "}
          <span className="font-semibold text-foreground">#incidents</span> channel in Discord. Both notify the on-call
          engineer.
        </p>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-semibold">Where to go next</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/docs/control-panel"
            className="rounded-lg border border-border/60 bg-background/60 p-4 transition hover:border-primary/70 hover:bg-primary/10"
          >
            <h3 className="text-lg font-semibold text-foreground">Deep dive the control panel</h3>
            <p className="mt-2 text-sm text-muted-foreground">Learn how backups, schedules, subdomains and user access tie together.</p>
          </Link>
          <Link
            href="/docs/security"
            className="rounded-lg border border-border/60 bg-background/60 p-4 transition hover:border-primary/70 hover:bg-primary/10"
          >
            <h3 className="text-lg font-semibold text-foreground">Lock down your account</h3>
            <p className="mt-2 text-sm text-muted-foreground">Enable 2FA, rotate passwords and keep billing separate from operational access.</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
