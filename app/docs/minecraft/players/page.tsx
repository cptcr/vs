/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { DocsScreenshot } from "@/components/docs-screenshot"
import mcMoreThenPlayers from "@/app/assets/docs/minecraft/players/mc-more-then-players.png"
import playerManagementPage from "@/app/assets/docs/minecraft/players/player_management_page.png"
import playerManagerWindow from "@/app/assets/docs/minecraft/players/player_manager_window.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Minecraft Player Management — Docs",
  description:
    "Monitor and manage players on your VaultScope Minecraft server, including bans, whitelists and live actions.",
  path: "/docs/minecraft/players",
})

export default function MinecraftPlayersPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Minecraft tooling</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Manage players from the VaultScope console</h1>
        <p className="text-lg text-muted-foreground">
          The Players view surfaces every account connected to your Minecraft server—active, offline, banned and
          whitelisted—so you can take action in seconds.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Open the Players view</h2>
        <p className="text-muted-foreground">
          Click <em>More</em> in the server sidebar and choose <em>Players</em> to access the live roster.
        </p>
        <DocsScreenshot
          image={mcMoreThenPlayers}
          alt="VaultScope server sidebar highlighting the Players option within the More menu."
          caption="The Players view sits under More, alongside other Minecraft-specific tooling."
          priority
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Review player segments</h2>
        <p className="text-muted-foreground">
          The roster groups players by status: active, offline, whitelisted, opped and banned. Scan summaries at a
          glance or drill into details for any player row.
        </p>
        <DocsScreenshot
          image={playerManagementPage}
          alt="VaultScope Players dashboard listing active, whitelisted, opped, banned and offline users."
          caption="Each segment gives you quick visibility into how players are interacting with the server."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Take action on individual players</h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Click a player to open the action drawer and confirm you&apos;re targeting the correct account.</li>
          <li>Run moderation steps like <em>Ban</em>, <em>Kick</em>, <em>Clear Inventory</em>, <em>Kill</em> or{" "}
            <em>Wipe</em>.</li>
          <li>Adjust access instantly with <em>Unwhitelist</em> or <em>Ban IP</em>, and review stats before you close.</li>
        </ul>
        <DocsScreenshot
          image={playerManagerWindow}
          alt="VaultScope player detail modal showing avatar preview and moderation controls like ban, kick and clear inventory."
          caption="Use the action drawer to moderate players without touching in-game commands."
        />
      </section>
    </div>
  )
}

