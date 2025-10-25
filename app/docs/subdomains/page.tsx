/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from "next/link"
import { DocsScreenshot } from "@/components/docs-screenshot"
import subdomainMenu from "@/app/assets/docs/manage-server/subdomain/click-on-more-then-subdomain-on-left-sidebar.png"
import createSubdomain from "@/app/assets/docs/manage-server/subdomain/create-new-subdomain-window-set-allocation-set-subdomain-name-and-set-the-domain-no-ssl-no-custom-domains.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Subdomains — VaultScope Docs",
  description:
    "Map VaultScope-managed subdomains to your server allocations and understand how they differ from reverse proxies.",
  path: "/docs/subdomains",
})

export default function SubdomainsPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Managed hostnames</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Configure VaultScope subdomains</h1>
        <p className="text-lg text-muted-foreground">
          VaultScope subdomains provide quick hostnames under <code>vaultscope.dev</code> or <code>cptcr.dev</code>. Point
          them at panel allocations to share friendly URLs with your community.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Open the subdomain manager</h2>
        <p className="text-muted-foreground">
          Inside your server view, click <em>More</em> → <em>Subdomains</em>. Each server can own one active subdomain at a
          time.
        </p>
        <DocsScreenshot
          image={subdomainMenu}
          alt="VaultScope server sidebar highlighting the Subdomain option under the More menu."
          caption="Access the Subdomains option from the sidebar menu."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Choose the hostname and allocation</h2>
        <p className="text-muted-foreground">
          Pick a unique subdomain, select the allocation (internal port) that serves your workload and confirm the
          assignment. Changes propagate within minutes.
        </p>
        <DocsScreenshot
          image={createSubdomain}
          alt="VaultScope subdomain creation modal with allocation selector."
          caption="Set the subdomain slug and map it to the correct allocation."
        />
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Remove an existing subdomain before claiming a new one—one hostname per server.</li>
          <li>Tag subdomains with environment names (e.g., <code>prod-lobby</code>, <code>staging-api</code>) for clarity.</li>
          <li>Need extra ports? Request them under the <em>Network</em> tab before assigning the subdomain.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Bring your own SSL via reverse proxy</h2>
        <p className="text-muted-foreground">
          Subdomains are HTTP-only pointers. For HTTPS certificates or custom domains, route traffic through a reverse
          proxy instead.
        </p>
        <div className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm text-muted-foreground">
          Looking for SSL? Follow the{" "}
          <Link href="/docs/reverse-proxy" className="font-medium text-primary underline underline-offset-4">
            reverse proxy guide
          </Link>{" "}
          to terminate TLS and reuse your VaultScope allocations securely.
        </div>
      </section>
    </div>
  )
}
