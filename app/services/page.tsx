/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { ServicesPageContent } from "@/components/services-page-content"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Services — VaultScope",
  description:
    "Explore VaultScope’s managed services: supported languages, tooling, infrastructure features, and the free tier that powers every deployment.",
  path: "/services",
})

export default function ServicesPage() {
  return <ServicesPageContent />
}

