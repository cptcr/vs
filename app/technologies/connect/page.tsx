/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from "@/lib/seo"
import { ConnectPageContent } from "@/components/connect-page-content"

export const metadata = buildMetadata({
  title: "Connect",
  description:
    "Deploy to Pterodactyl game servers with a single command. VaultScope Connect automates compression, uploads, extraction, and restarts for streamlined deployments.",
  path: "/technologies/connect",
})

export default function ConnectPage() {
  return <ConnectPageContent />
}