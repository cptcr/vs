/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from 'next/link';
import { DocsScreenshot } from '@/components/docs-screenshot';
import backupActions from '@/app/assets/docs/manage-server/backups/backup-actions-window-for-more-actions-if-needed.png';
import restoreBackup from '@/app/assets/docs/manage-server/backups/restore-backup-window.png';
import newScheduleButton from '@/app/assets/docs/manage-server/schedules/create-new-schedule-button.png';
import scheduleWindow from '@/app/assets/docs/manage-server/schedules/create-new-schedule-window.png';
import addScheduleTask from '@/app/assets/docs/manage-server/schedules/add-new-task-to-existing-schedule-button-and-window.png';
import subdomainMenu from '@/app/assets/docs/manage-server/subdomain/click-on-more-then-subdomain-on-left-sidebar.png';
import createSubdomain from '@/app/assets/docs/manage-server/subdomain/create-new-subdomain-window-set-allocation-set-subdomain-name-and-set-the-domain-no-ssl-no-custom-domains.png';
import addUserButton from '@/app/assets/docs/manage-server/users/create-new-user-to-allow-to-see-server-make-sure-he-already-uses-the-platform-and-has-an-active-server-button.png';
import userPermissions from '@/app/assets/docs/manage-server/users/add-new-user-window-set-email-and-permissions-permissions-can-be-edited-later.png';
import newAllocation from '@/app/assets/docs/manage-server/network/add-new-allocation-if-server-allows-button.png';
import changeStartupCommandButton from '@/app/assets/docs/manage-server/startup/change_startup_command_button.png';
import editStartupCommandModal from '@/app/assets/docs/manage-server/startup/change_startup_command_marked_text_field.png';
import saveStartupCommandButton from '@/app/assets/docs/manage-server/startup/change_startup_command_save_button.png';
import restoreStartupDefaultButton from '@/app/assets/docs/manage-server/startup/restore_to_default_button.png';
import confirmStartupResetModal from '@/app/assets/docs/manage-server/startup/reset_button.png';
import openProxyMenu from '@/app/assets/docs/manage-server/reverse-proxy/click_more_then_proxy_button.png';
import createProxyButton from '@/app/assets/docs/manage-server/reverse-proxy/click_create_proxy_button.png';
import createProxyModal from '@/app/assets/docs/manage-server/reverse-proxy/create_new_reverse_proxy_window.png';
import cloudflareProxyExample from '@/app/assets/docs/manage-server/reverse-proxy/example_configuration_in_cloudflare_dont_use_proxy.png';
import proxyFinalResult from '@/app/assets/docs/manage-server/reverse-proxy/final_result.png';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Control Panel — Docs',
  description:
    'Operate the VaultScope control panel: schedules, backups, networking, delegated access and subdomain management for your servers.',
  path: '/docs/control-panel',
});

export default function ControlPanelPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Operations cockpit
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Master the VaultScope control panel
        </h1>
        <p className="text-lg text-muted-foreground">
          Every server shares the same interface. Learn how to navigate the
          sidebar, automate maintenance and expose your workloads safely.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Orient yourself</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Tabs run down the left rail: <em>Console</em>, <em>Files</em>,{' '}
            <em>Schedules</em>, <em>Users</em>, <em>Backups</em>,{' '}
            <em>Network</em> and <em>Settings</em>.
          </li>
          <li>
            The top bar holds quick actions for power control and displays live
            resource usage.
          </li>
          <li>
            Use the <em>Activity</em> drawer in the top-right to see recent
            actions, logins and automated jobs performed by panel users.
          </li>
        </ul>
        <div className="px-4 py-3 text-sm border rounded-lg border-border/60 bg-muted/10 text-muted-foreground">
          The control panel mirrors real-time state. If something looks out of
          sync, refresh the page first—most drift is transient replication
          delay.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          2. Manage backups and restores
        </h2>
        <p className="text-muted-foreground">
          VaultScope stores manual and automatic backups in the cloud region
          nearest the server. Use the <em>Backups</em> tab to create, download
          or restore snapshots.
        </p>
        <DocsScreenshot
          image={backupActions}
          alt="VaultScope backups list showing actions for download, restore and delete."
          caption="Use the actions menu to trigger restores, download archives or prune old snapshots when you hit retention limits."
          priority
        />
        <p className="text-muted-foreground">
          Restoring does not overwrite the latest files immediately—we create a
          new archive of current data before rolling back so you can recover if
          needed.
        </p>
        <DocsScreenshot
          image={restoreBackup}
          alt="VaultScope restore backup modal prompting for confirmation."
          caption="Restores temporarily stop the server. Plan around peak traffic or run them from a maintenance schedule."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          3. Automate maintenance with schedules
        </h2>
        <p className="text-muted-foreground">
          Schedules run commands, backups or power actions on a timer. Navigate
          to <em>Schedules</em> and click <em>Create Schedule</em>.
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
          Add tasks to the schedule to perform specific actions. You can chain
          multiple tasks in order.
        </p>
        <DocsScreenshot
          image={addScheduleTask}
          alt="Add new task modal with options for command, backup and power actions."
          caption="Space out tasks with delays to give commands time to finish before the next one executes."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          4. Delegate access with user roles
        </h2>
        <p className="text-muted-foreground">
          Add teammates under the <em>Users</em> tab. Invites require the
          collaborator to have an active VaultScope account.
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
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Keep console access limited to trusted operators—it includes raw
            command execution.
          </li>
          <li>
            Use the <em>SFTP</em> toggle to allow external file management via
            clients like WinSCP.
          </li>
          <li>
            Revoke access instantly by removing the user; changes propagate
            across nodes immediately.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          5. Customize startup commands
        </h2>
        <p className="text-muted-foreground">
          The <em>Startup</em> tab lets you adjust launch arguments without
          redeploying files. This is the quickest way to roll out JVM flags,
          memory switches or plugin bootstrap parameters.
        </p>
        <DocsScreenshot
          image={changeStartupCommandButton}
          alt="VaultScope server Startup tab highlighting the Change Startup Command button."
          caption="Open the Startup tab from the sidebar and select Change Startup Command to edit the launch template."
        />
        <DocsScreenshot
          image={editStartupCommandModal}
          alt="Startup command modal with the editable command text field highlighted."
          caption="Update the command inline. Environment variables remain available in the template for easy reuse."
        />
        <DocsScreenshot
          image={saveStartupCommandButton}
          alt="Save button in the Startup command modal highlighted."
          caption="Click Save to persist the new startup command. Restart the server to apply your changes."
        />
        <p className="text-muted-foreground">
          Need to revert? Use <em>Restore to Default</em> to bring back the
          original command that shipped with your plan. We keep the template
          versioned so you can experiment safely.
        </p>
        <DocsScreenshot
          image={restoreStartupDefaultButton}
          alt="Restore to Default button highlighted inside the Startup command modal."
          caption="Restore to Default reinstates the VaultScope baseline command in one click."
        />
        <DocsScreenshot
          image={confirmStartupResetModal}
          alt="Confirmation dialog showing the Reset button after choosing Restore to Default."
          caption="Confirm with Reset to finish the rollback. The panel stores the previous command in your activity log."
        />
        <div className="px-4 py-3 text-sm border rounded-lg border-border/60 bg-muted/10 text-muted-foreground">
          Want a dedicated walkthrough? Visit the{' '}
          <Link
            href="/docs/startup-commands"
            className="font-medium underline text-primary underline-offset-4"
          >
            startup command guide
          </Link>{' '}
          for step-by-step instructions and rollback tips.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          6. Expose services via networking and subdomains
        </h2>
        <p className="text-muted-foreground">
          The <em>Network</em> tab manages port allocations while{' '}
          <em>Subdomains</em> maps VaultScope-managed DNS records to those
          ports. Subdomains provide friendly hostnames under{' '}
          <code>vaultscope.dev</code> or <code>cptcr.dev</code>
          but they do not provision SSL or replace a full reverse proxy.
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
          caption="Map a subdomain to the allocation serving your workload. For HTTPS, route traffic through a reverse proxy."
        />
        <p className="text-muted-foreground">
          Need SSL or a custom domain? Reverse proxies handle certificates and
          edge routing while subdomains remain a lightweight pointer. Follow the{' '}
          <Link
            href="#reverse-proxies"
            className="font-medium underline text-primary underline-offset-4"
          >
            reverse proxy walkthrough
          </Link>{' '}
          below to secure traffic end-to-end.
        </p>
        <div className="px-4 py-3 text-sm border rounded-lg border-border/60 bg-muted/10 text-muted-foreground">
          Looking for more examples? See the{' '}
          <Link
            href="/docs/subdomains"
            className="font-medium underline text-primary underline-offset-4"
          >
            subdomains guide
          </Link>{' '}
          for naming conventions and common troubleshooting steps.
        </div>
      </section>

      <section className="space-y-6">
        <h2 id="reverse-proxies" className="text-2xl font-semibold">
          7. Publish reverse proxies for custom domains
        </h2>
        <p className="text-muted-foreground">
          Reverse proxies sit in front of your allocation, terminate SSL and
          forward traffic to the internal port. They are separate from
          subdomains—use subdomains for VaultScope-provided hostnames, and
          reverse proxies when you need custom domains or edge security
          controls.
        </p>
        <DocsScreenshot
          image={openProxyMenu}
          alt="VaultScope server sidebar showing the Proxy option under the More menu."
          caption="Open More → Proxy to manage reverse proxies for the current server."
        />
        <DocsScreenshot
          image={createProxyButton}
          alt="Create Proxy button highlighted inside the reverse proxy tab."
          caption="Click Create Proxy to launch the configuration modal."
        />
        <DocsScreenshot
          image={createProxyModal}
          alt="Reverse proxy creation modal with domain, allocation and SSL options."
          caption="Point your domain at the server IPv4 via an A record, then choose the allocation and SSL preference."
        />
        <DocsScreenshot
          image={cloudflareProxyExample}
          alt="Cloudflare DNS configuration showing an A record without the proxy (gray cloud)."
          caption="Disable third-party orange-cloud proxies when setting up the DNS record so VaultScope can validate SSL."
        />
        <DocsScreenshot
          image={proxyFinalResult}
          alt="Reverse proxy list showing an active proxy with SSL enabled."
          caption="Once created, the proxy appears in the list with status indicators for SSL and Let's Encrypt automation."
        />
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Toggle <em>Let&apos;s Encrypt</em> to auto-issue certificates. If
            disabled, upload your own trusted certificate and private key pair.
          </li>
          <li>
            Keep Cloudflare/DNS proxies off while provisioning SSL; you can
            re-enable additional protection after validation succeeds.
          </li>
          <li>
            Restart the workload after creating a proxy if it binds to the new
            hostname for virtual hosting rules.
          </li>
        </ul>
        <div className="px-4 py-3 text-sm border rounded-lg border-border/60 bg-muted/10 text-muted-foreground">
          Need deeper coverage? The{' '}
          <Link
            href="/docs/reverse-proxy"
            className="font-medium underline text-primary underline-offset-4"
          >
            reverse proxy guide
          </Link>{' '}
          covers DNS validation, certificate management and expected status
          indicators.
        </div>
      </section>

      <section className="pt-8 space-y-6 border-t border-border">
        <h2 className="text-2xl font-semibold">Operational best practices</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Schedule a daily backup even if you use version control—snapshots
            simplify disaster recovery.
          </li>
          <li>
            Audit user access monthly and remove former collaborators right
            away.
          </li>
          <li>
            Tag subdomains with the environment name (e.g.,{' '}
            <code>prod-lobby</code>) so the team recognizes them instantly.
          </li>
          <li>
            Document every automated schedule in your internal runbook and link
            back to this guide for screenshots.
          </li>
        </ul>
      </section>
    </div>
  );
}
