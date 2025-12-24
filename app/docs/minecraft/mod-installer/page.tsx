/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { DocsScreenshot } from '@/components/docs-screenshot';
import modsPage from '@/app/assets/docs/minecraft/mod-installer/mods_page.png';
import moreThenModsInstaller from '@/app/assets/docs/minecraft/mod-installer/more_then_mods_installer.png';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Minecraft Mod Installer — Docs',
  description:
    'Install Minecraft mods in seconds with VaultScope’s Mod Installer, filter by version or loader, and review release details before deploying.',
  path: '/docs/minecraft/mod-installer',
});

export default function MinecraftModInstallerPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Minecraft tooling
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Install Minecraft mods with confidence
        </h1>
        <p className="text-lg text-muted-foreground">
          VaultScope’s Mod Installer connects directly to popular providers like
          Modrinth so you can discover, filter and deploy mods without leaving
          the panel.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Open the Mod Installer</h2>
        <p className="text-muted-foreground">
          From the server sidebar, click <em>More</em> and choose{' '}
          <em>Mods Installer</em>. The panel opens the curated catalog for your
          instance.
        </p>
        <DocsScreenshot
          image={moreThenModsInstaller}
          alt="VaultScope control panel showing the Mods Installer option inside the More menu."
          caption="The Mods Installer lives under the More section of the server sidebar."
          priority
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Search and filter</h2>
        <p className="text-muted-foreground">
          Use the search bar or apply filters for game version, server loader
          (PaperMC, Forge and more) and provider. The list updates instantly so
          you can preview compatible releases.
        </p>
        <DocsScreenshot
          image={modsPage}
          alt="VaultScope Mods Installer results showing filters for loader, provider and version."
          caption="Combine filters to narrow the catalog to only mods that work with your current server build."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Review and install</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Click any mod to inspect its release history, changelog and outbound
            links to the official project page.
          </li>
          <li>
            Pick the version you want to deploy—VaultScope highlights the builds
            matching your server loader.
          </li>
          <li>
            Hit <strong>Install</strong> to queue a deployment. The panel
            confirms when the files are on disk.
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">
          After the installer finishes, restart the server so the new mod loads
          with the rest of your plugins.
        </p>
      </section>
    </div>
  );
}
