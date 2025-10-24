/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { DocsScreenshot } from "@/components/docs-screenshot"
import backupActions from "@/app/assets/docs/manage-server/backups/backup-actions-window-for-more-actions-if-needed.png"
import restoreBackup from "@/app/assets/docs/manage-server/backups/restore-backup-window.png"
import newScheduleButton from "@/app/assets/docs/manage-server/schedules/create-new-schedule-button.png"
import scheduleWindow from "@/app/assets/docs/manage-server/schedules/create-new-schedule-window.png"
import addScheduleTask from "@/app/assets/docs/manage-server/schedules/add-new-task-to-existing-schedule-button-and-window.png"
import subdomainMenu from "@/app/assets/docs/manage-server/subdomain/click-on-more-then-subdomain-on-left-sidebar.png"
import createSubdomain from "@/app/assets/docs/manage-server/subdomain/create-new-subdomain-window-set-allocation-set-subdomain-name-and-set-the-domain-no-ssl-no-custom-domains.png"
import addUserButton from "@/app/assets/docs/manage-server/users/create-new-user-to-allow-to-see-server-make-sure-he-already-uses-the-platform-and-has-an-active-server-button.png"
import userPermissions from "@/app/assets/docs/manage-server/users/add-new-user-window-set-email-and-permissions-permissions-can-be-edited-later.png"
import newAllocation from "@/app/assets/docs/manage-server/network/add-new-allocation-if-server-allows-button.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Control Panel — VaultScope Docs",
  description:
    "Operate the VaultScope control panel: schedules, backups, networking, delegated access and subdomain management for your servers.",
  path: "/docs/control-panel",
})

export default function ControlPanelPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Operations cockpit</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Master the VaultScope control panel</h1>
        <p className="text-lg text-muted-foreground">
          Every server shares the same interface. Learn how to navigate the sidebar, automate maintenance and expose your
          workloads safely.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Orient yourself</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            Tabs run down the left rail: <em>Console</em>, <em>Files</em>, <em>Schedules</em>, <em>Users</em>, <em>Backups</em>, <em>Network</em> and <em>Settings</em>.
          </li>
          <li>The top bar holds quick actions for power control and displays live resource usage.</li>
          <li>
            Use the <em>Activity</em> drawer in the top-right to see recent actions, logins and automated jobs performed
            by panel users.
          </li>
        </ul>
        <div className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm text-muted-foreground">
          The control panel mirrors real-time state. If something looks out of sync, refresh the page first—most drift is
          transient replication delay.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Manage backups and restores</h2>
        <p className="text-muted-foreground">
          VaultScope stores manual and automatic backups in the cloud region nearest the server. Use the <em>Backups</em>{" "}
          tab to create, download or restore snapshots.
        </p>
        <DocsScreenshot
          image={backupActions}
          alt="VaultScope backups list showing actions for download, restore and delete."
          caption="Use the actions menu to trigger restores, download archives or prune old snapshots when you hit retention limits."
          priority
        />
        <p className="text-muted-foreground">
          Restoring does not overwrite the latest files immediately—we create a new archive of current data before rolling
          back so you can recover if needed.
        </p>
        <DocsScreenshot
          image={restoreBackup}
          alt="VaultScope restore backup modal prompting for confirmation."
          caption="Restores temporarily stop the server. Plan around peak traffic or run them from a maintenance schedule."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Automate maintenance with schedules</h2>
        <p className="text-muted-foreground">
          Schedules run commands, backups or power actions on a timer. Navigate to <em>Schedules</em> and click{" "}
          <em>Create Schedule</em>.
        </p>
        <DocsScreenshot
          image={newScheduleButton}
          alt="Create new schedule button inside the VaultScope schedules tab."
          caption="Each server supports multiple schedules. Use naming conventions like Nightly Backup or Sunday Restart."
        />
        <DocsScreenshot
          image={scheduleWindow}
          alt="VaultScope schedule creation modal with timing options."
          caption="Schedules run in the server time zone—UTC by default. Adjust the frequency before adding tasks."
        />
        <p className="text-muted-foreground">
          Add tasks to the schedule to perform specific actions. You can chain multiple tasks in order.
        </p>
        <DocsScreenshot
          image={addScheduleTask}
          alt="Add new task modal with options for command, backup and power actions."
          caption="Space out tasks with delays to give commands time to finish before the next one executes."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">4. Delegate access with user roles</h2>
        <p className="text-muted-foreground">
          Add teammates under the <em>Users</em> tab. Invites require the collaborator to have an active VaultScope
          account.
        </p>
        <DocsScreenshot
          image={addUserButton}
          alt="VaultScope users tab with the Create New User button highlighted."
          caption="Invite existing VaultScope users by email. New accounts must purchase or be added to a server before they appear."
        />
        <DocsScreenshot
          image={userPermissions}
          alt="VaultScope user invitation modal showing permission toggles."
          caption="Granular permissions let you grant console access without billing or power controls."
        />
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Keep console access limited to trusted operators—it includes raw command execution.</li>
          <li>Use the <em>SFTP</em> toggle to allow external file management via clients like WinSCP.</li>
          <li>Revoke access instantly by removing the user; changes propagate across nodes immediately.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">5. Expose services via networking and subdomains</h2>
        <p className="text-muted-foreground">
          The <em>Network</em> tab manages port allocations while <em>Subdomains</em> lets you assign VaultScope-managed
          DNS records.
        </p>
        <DocsScreenshot
          image={newAllocation}
          alt="VaultScope network tab with the Add New Allocation button."
          caption="Request additional allocations when your plan allows. We approve them instantly if spare ports are available."
        />
        <DocsScreenshot
          image={subdomainMenu}
          alt="VaultScope server sidebar highlighting the Subdomain option under the More menu."
          caption="Subdomains live under vaultscope.dev or cptcr.dev. Remove an existing subdomain before creating a new one."
        />
        <DocsScreenshot
          image={createSubdomain}
          alt="VaultScope subdomain creation modal with allocation selector."
          caption="Map a subdomain to the allocation serving your game or application. SSL is coming soon—stick with HTTP until then."
        />
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-semibold">Operational best practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Schedule a daily backup even if you use version control—snapshots simplify disaster recovery.</li>
          <li>Audit user access monthly and remove former collaborators right away.</li>
          <li>Tag subdomains with the environment name (e.g., <code>prod-lobby</code>) so the team recognizes them instantly.</li>
          <li>Document every automated schedule in your internal runbook and link back to this guide for screenshots.</li>
        </ul>
      </section>
    </div>
  )
}
