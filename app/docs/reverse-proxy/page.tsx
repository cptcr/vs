/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from "next/link"
import { DocsScreenshot } from "@/components/docs-screenshot"
import openProxyMenu from "@/app/assets/docs/manage-server/reverse-proxy/click_more_then_proxy_button.png"
import createProxyButton from "@/app/assets/docs/manage-server/reverse-proxy/click_create_proxy_button.png"
import createProxyModal from "@/app/assets/docs/manage-server/reverse-proxy/create_new_reverse_proxy_window.png"
import cloudflareProxyExample from "@/app/assets/docs/manage-server/reverse-proxy/example_configuration_in_cloudflare_dont_use_proxy.png"
import proxyFinalResult from "@/app/assets/docs/manage-server/reverse-proxy/final_result.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Reverse Proxy — VaultScope Docs",
  description:
    "Provision reverse proxies to terminate SSL, connect custom domains, and forward traffic to VaultScope allocations.",
  path: "/docs/reverse-proxy",
})

export default function ReverseProxyPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Edge routing</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Publish a reverse proxy</h1>
        <p className="text-lg text-muted-foreground">
          Reverse proxies terminate TLS and forward traffic to the internal port your workload listens on. Pair them with
          custom domains to provide HTTPS endpoints for players and automation.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Open the proxy panel</h2>
        <p className="text-muted-foreground">
          From your server sidebar, choose <em>More</em> → <em>Proxy</em>. This view lists existing proxies and their SSL
          status.
        </p>
        <DocsScreenshot
          image={openProxyMenu}
          alt="VaultScope server sidebar showing the Proxy option under the More menu."
          caption="Use the Proxy option to manage edge routing for the server."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Launch the creation wizard</h2>
        <p className="text-muted-foreground">
          Click <em>Create Proxy</em> to open the configuration modal. Have your domain ready and make sure it resolves to
          the server IPv4 via an A record.
        </p>
        <DocsScreenshot
          image={createProxyButton}
          alt="Create Proxy button highlighted inside the reverse proxy tab."
          caption="Start the wizard with Create Proxy."
        />
        <DocsScreenshot
          image={createProxyModal}
          alt="Reverse proxy creation modal with domain, allocation and SSL options."
          caption="Set the domain, choose the allocation (internal port) and decide whether to enable SSL and Let&apos;s Encrypt."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Configure DNS and SSL</h2>
        <p className="text-muted-foreground">
          Point your A record directly at the server IP. Disable third-party proxy toggles (like Cloudflare&apos;s orange
          cloud) while the certificate is being issued.
        </p>
        <DocsScreenshot
          image={cloudflareProxyExample}
          alt="Cloudflare DNS configuration showing an A record without the proxy (gray cloud)."
          caption="Set the Cloudflare record to DNS only so VaultScope can validate SSL."
        />
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Toggle <em>Let&apos;s Encrypt</em> for automatic certificate issuance and renewals.</li>
          <li>Uploading your own certificate? Provide the full chain and private key in PEM format.</li>
          <li>Re-enable upstream CDNs after SSL verification succeeds if you need additional protection.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">4. Verify the proxy</h2>
        <p className="text-muted-foreground">
          After creation, the proxy appears in the list with real-time status indicators. Test HTTPS from a browser or curl
          to confirm the certificate and allocation forwarding work as expected.
        </p>
        <DocsScreenshot
          image={proxyFinalResult}
          alt="Reverse proxy list showing an active proxy with SSL enabled."
          caption="Provisioned proxies display SSL and Let&apos;s Encrypt status at a glance."
        />
        <div className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm text-muted-foreground">
          Need a hostname without SSL? Use a{" "}
          <Link href="/docs/subdomains" className="font-medium text-primary underline underline-offset-4">
            VaultScope subdomain
          </Link>{" "}
          instead—they&apos;re lightweight pointers for internal traffic.
        </div>
      </section>
    </div>
  )
}
