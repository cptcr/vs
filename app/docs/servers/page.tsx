import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Server Operations — VaultScope Docs",
  description:
    "Plan server lifecycles on VaultScope: provisioning, scaling, maintenance windows, migrations and operational best practices.",
  path: "/docs/servers",
})

export default function ServersPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Operational playbook</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Server lifecycle management</h1>
        <p className="text-lg text-muted-foreground">
          Treat each server as cattle, not pets. This guide covers the routine workflows our reliability team follows to
          keep VaultScope deployments stable from day one through retirement.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Provision with a repeatable template</h2>
        <p className="text-muted-foreground">
          Use the billing storefront to select CPU, RAM and storage profiles. Save plan notes in your internal runbook so
          future environments reuse the same baseline. After checkout, verify provisioning by following the{" "}
          <Link href="/docs/quickstart" className="font-medium text-primary underline underline-offset-4">
            quickstart guide
          </Link>
          .
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Tag new servers in the panel with the environment and ticket number responsible for the deployment.</li>
          <li>Document custom configuration scripts in version control. Re-run them during disaster recovery.</li>
          <li>Keep at least one clean backup immediately after provisioning so you can roll back to a known-good state.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Scale resources deliberately</h2>
        <p className="text-muted-foreground">
          VaultScope supports vertical scaling (more CPU, RAM, disk) with minimal downtime. Open a billing ticket for
          upgrades or downgrades—changes apply within the same day and you only pay the pro-rated difference.
        </p>
        <div className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm text-muted-foreground">
          Before scaling down, snapshot the server and verify the workload fits inside the reduced limits. We recommend
          running staging load tests under the target resources.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Schedule maintenance windows</h2>
        <p className="text-muted-foreground">
          Use the schedules feature to bundle restarts, command execution and backup generation. Stagger restarts between
          clusters so you always have at least one healthy lobby.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Run pre-maintenance scripts that broadcast to players five minutes before downtime.</li>
          <li>Capture a backup before patching binaries or updating plugins.</li>
          <li>Document the maintenance checklist in your internal wiki and link to the{" "}
            <Link href="/docs/control-panel" className="font-medium text-primary underline underline-offset-4">
              control panel reference
            </Link>{" "}
            for screenshots.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Move fast with clones and migrations</h2>
        <p className="text-muted-foreground">
          Cloning is as simple as restoring a backup to a fresh server. For zero-downtime migrations, run both servers in
          parallel and shift traffic using DNS or proxies.
        </p>
        <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
          <li>Provision a new target server and note its allocations.</li>
          <li>Restore the latest backup from the source server to the target.</li>
          <li>Update subdomain or proxy rules to point players at the new endpoint.</li>
          <li>Monitor for errors, then retire the old server by cancelling it from the billing portal.</li>
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Delegate ownership safely</h2>
        <p className="text-muted-foreground">
          Invite collaborators through the <em>Users</em> tab, but keep least privilege in mind. Grant console and SFTP
          access sparingly and review user lists after each season or team change.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Separate billing access from operational access—only finance needs the billing portal.</li>
          <li>Enable two-factor authentication for everyone with elevated permissions (see{" "}
            <Link href="/docs/security" className="font-medium text-primary underline underline-offset-4">
              account security
            </Link>
            ).</li>
          <li>Log significant changes in your #operations channel so the rest of the team stays informed.</li>
        </ul>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-semibold">Decommission gracefully</h2>
        <p className="text-muted-foreground">
          When a server reaches end-of-life, shut it down cleanly to avoid data loss or surprise invoices.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Announce the retirement date internally and to affected communities.</li>
          <li>Export the final backup and verify you can restore it in a different region.</li>
          <li>Delete credentials from password managers and revoke panel access for users tied to the project.</li>
          <li>Cancel the service from the billing portal and confirm the invoice status reads <em>Cancelled</em>.</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Need to resurrect a retired server? Contact{" "}
          <a href="mailto:support@vaultscope.dev" className="font-medium text-primary underline underline-offset-4">
            support@vaultscope.dev
          </a>{" "}
          with the original order ID—we retain backups for seven days post-cancellation.
        </p>
      </section>
    </div>
  )
}
