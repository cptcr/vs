/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from "next/link"
import { DocsScreenshot } from "@/components/docs-screenshot"
import changeStartupCommandButton from "@/app/assets/docs/manage-server/startup/change_startup_command_button.png"
import editStartupCommandModal from "@/app/assets/docs/manage-server/startup/change_startup_command_marked_text_field.png"
import saveStartupCommandButton from "@/app/assets/docs/manage-server/startup/change_startup_command_save_button.png"
import restoreStartupDefaultButton from "@/app/assets/docs/manage-server/startup/restore_to_default_button.png"
import confirmStartupResetModal from "@/app/assets/docs/manage-server/startup/reset_button.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Startup Commands — VaultScope Docs",
  description:
    "Use the VaultScope Startup tab to edit launch commands, apply JVM flags, and roll back to the default template safely.",
  path: "/docs/startup-commands",
})

export default function StartupCommandsPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Launch tuning</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Tailor your startup command</h1>
        <p className="text-lg text-muted-foreground">
          Adjust launch arguments directly from the control panel. The Startup tab lets you roll out memory tweaks,
          environment variables and plugin bootstrap flags without touching the filesystem.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Open the Startup tab</h2>
        <p className="text-muted-foreground">
          Navigate to your server, open the <em>Startup</em> tab and click <em>Change Startup Command</em> in the upper
          right corner.
        </p>
        <DocsScreenshot
          image={changeStartupCommandButton}
          alt="VaultScope Startup tab highlighting the Change Startup Command button."
          caption="Locate Change Startup Command to launch the editor."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Edit the command inline</h2>
        <p className="text-muted-foreground">
          The modal exposes the full launch template. Update JVM flags, memory limits or environment variables while the
          server is offline.
        </p>
        <DocsScreenshot
          image={editStartupCommandModal}
          alt="Startup command modal with editable command text field highlighted."
          caption="Modify the command safely—VaultScope preserves the previous version in the activity log."
        />
        <DocsScreenshot
          image={saveStartupCommandButton}
          alt="Save button highlighted inside the Startup command modal."
          caption="Click Save to persist changes. Restart the server to apply the new command."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Restore defaults when needed</h2>
        <p className="text-muted-foreground">
          VaultScope stores the plan&apos;s default command. If a change fails, use <em>Restore to Default</em> to roll
          back instantly.
        </p>
        <DocsScreenshot
          image={restoreStartupDefaultButton}
          alt="Restore to Default button highlighted inside the Startup command modal."
          caption="Use Restore to Default to bring back the original launch template."
        />
        <DocsScreenshot
          image={confirmStartupResetModal}
          alt="Confirmation dialog showing the Reset button after choosing Restore to Default."
          caption="Confirm with Reset to finalize the rollback."
        />
        <div className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm text-muted-foreground">
          Need automation? Pair startup command tweaks with the{" "}
          <Link
            href="/docs/control-panel#3-automate-maintenance-with-schedules"
            className="font-medium text-primary underline underline-offset-4"
          >
            control panel schedules workflow
          </Link>{" "}
          so restarts land in planned maintenance windows.
        </div>
      </section>
    </div>
  )
}
