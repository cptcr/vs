/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { DocsScreenshot } from "@/components/docs-screenshot"
import moreThenPluginInstaller from "@/app/assets/docs/minecraft/plugin-installer/more_then_plugin_installer.png"
import pluginInstallerPage from "@/app/assets/docs/minecraft/plugin-installer/plugin_installer_page.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Minecraft Plugin Installer — Docs",
  description:
    "Discover and deploy Minecraft server plugins through the VaultScope Plugin Installer with version-aware filters and one-click installs.",
  path: "/docs/minecraft/plugin-installer",
})

export default function MinecraftPluginInstallerPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Minecraft tooling</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Deploy Minecraft plugins from the panel</h1>
        <p className="text-lg text-muted-foreground">
          The Plugin Installer delivers curated plugins from providers like Modrinth. Filter by loader, version or
          provider and install straight to your VaultScope server.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Launch the Plugin Installer</h2>
        <p className="text-muted-foreground">
          Inside your server view, open the <em>More</em> menu and pick <em>Plugins Installer</em>. You&apos;ll land on
          the searchable plugin catalog.
        </p>
        <DocsScreenshot
          image={moreThenPluginInstaller}
          alt="VaultScope server sidebar highlighting the Plugins Installer entry beneath the More section."
          caption="Access the Plugin Installer from the More section of your server sidebar."
          priority
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Evaluate plugins quickly</h2>
        <p className="text-muted-foreground">
          Search by name or browse trending options, then filter by Minecraft version, server loader or source. Each
          result surfaces descriptions, release cadence and outbound links.
        </p>
        <DocsScreenshot
          image={pluginInstallerPage}
          alt="VaultScope Plugin Installer catalog showing filters and Install buttons for each plugin."
          caption="Filters make it easy to match plugins with your current server stack before you deploy."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Install and confirm</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Select a plugin to review versions and changelog notes prior to installation.</li>
          <li>Click <strong>Install</strong> and VaultScope downloads the chosen release directly to your server.</li>
          <li>Restart the server so the plugin initializes alongside the rest of your mods.</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Need to roll back? Use the same view to install an earlier version or remove the plugin from the file manager.
        </p>
      </section>
    </div>
  )
}

