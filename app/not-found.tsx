/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from "@/lib/seo"
import NotFoundClient from "@/components/not-found-client"

export const metadata = buildMetadata({
  title: "404 — Page Not Found",
  description: "The requested page could not be found on VaultScope.",
  path: "/404",
})

export default function NotFoundPage() {
  // Server component wrapper — interactive UI is provided by the client-only
  // component `NotFoundClient` to avoid importing client-side hooks into a
  // server render (which causes prerender errors).
  return <NotFoundClient />
}
