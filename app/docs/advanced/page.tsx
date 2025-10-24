import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Advanced Guides — VaultScope Docs",
  description:
    "Automate VaultScope servers with GitOps, SFTP pipelines, custom ports, blue/green deploys and advanced performance tooling.",
  path: "/docs/advanced",
})

export default function AdvancedPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Level up</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Advanced VaultScope playbooks</h1>
        <p className="text-lg text-muted-foreground">
          Once you have the basics down, automate everything. These recipes combine the panel with CI/CD pipelines,
          infrastructure as code and reliability practices the VaultScope team uses internally.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">GitOps for configuration</h2>
        <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
          <li>Store panel configuration files (plugins, properties, scripts) in Git.</li>
          <li>Use GitHub Actions or GitLab CI to build and package artifacts into ZIP files.</li>
          <li>Upload artifacts using SFTP or the panel API, then trigger reloads via scheduled commands.</li>
          <li>Rollback by restoring the previous release tag and redeploying.</li>
        </ol>
        <p className="text-muted-foreground">
          Need API automation? Request API tokens from support@vaultscope.dev—public documentation is in the works.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">SFTP automation patterns</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Use SSH keys stored in your CI secret store to authenticate without passwords.</li>
          <li>Deploy with rsync or lftp for delta uploads so you only transfer changed files.</li>
          <li>Trigger post-upload hooks (like restarting a service) with scheduled tasks that run after deployment windows.</li>
        </ul>
        <div className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm text-muted-foreground">
          Rotate SFTP keys quarterly and revoke unused accounts under the <em>Users</em> tab to keep your pipeline secure.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Custom ports and proxies</h2>
        <p className="text-muted-foreground">
          Many production environments run behind an edge proxy. Combine VaultScope with Cloudflare Tunnel, Nginx or Traefik.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Request additional allocations from the <em>Network</em> tab for dedicated proxy endpoints.</li>
          <li>Run a reverse proxy on the same server or a dedicated relay VM to multiplex traffic.</li>
          <li>Terminate SSL at the proxy and forward traffic internally over private allocations.</li>
        </ul>
        <p className="text-muted-foreground">
          Reach out to <a href="mailto:neteng@vaultscope.dev" className="font-medium text-primary underline underline-offset-4">neteng@vaultscope.dev</a> for help designing multi-region network topologies.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Blue/green deployments</h2>
        <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
          <li>Clone production to a staging server using backups.</li>
          <li>Deploy changes to staging and run load tests.</li>
          <li>Cut traffic over by updating DNS or proxy routes.</li>
          <li>Monitor metrics for one full cycle before deleting the old environment.</li>
        </ol>
        <p className="text-muted-foreground">
          This approach pairs well with the{" "}
          <Link href="/docs/monitoring" className="font-medium text-primary underline underline-offset-4">
            monitoring guide
          </Link>{" "}
          to confirm nothing regresses during cutover.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Observability-driven scaling</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Feed metrics into automation (e.g., trigger a larger plan when TPS drops under target thresholds).</li>
          <li>Schedule scripts that call the VaultScope API to spin up standby servers ahead of major events.</li>
          <li>Use Canary scripts that join the server and report latency and join success rates.</li>
        </ul>
        <p className="text-muted-foreground">
          Combine automation with human checks. Even advanced pipelines should require an operator sign-off before scaling
          production.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Security-hardening checklist</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Enable two-factor authentication for every operator (see{" "}
            <Link href="/docs/security" className="font-medium text-primary underline underline-offset-4">
              security practices
            </Link>
            ).</li>
          <li>Rotate secrets via schedules rather than manual updates so you can audit changes in version control.</li>
          <li>Enforce signed commits or PR approvals before configuration files deploy to production.</li>
          <li>Mirror backups to an external storage provider for defence in depth.</li>
        </ul>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-semibold">Share your automation</h2>
        <p className="text-muted-foreground">
          VaultScope thrives on community innovation. Publish your scripts and workflows in the{" "}
          <span className="font-semibold text-foreground">#showcase</span> Discord channel or tag{" "}
          <a href="https://twitter.com/vaultscope" className="font-medium text-primary underline underline-offset-4">
            @vaultscope
          </a>{" "}
          on social media. We frequently highlight automation guides in new releases.
        </p>
        <p className="text-sm text-muted-foreground">
          Looking for API access or deeper integration support? Email{" "}
          <a href="mailto:solutions@vaultscope.dev" className="font-medium text-primary underline underline-offset-4">
            solutions@vaultscope.dev
          </a>{" "}
          with your use case.
        </p>
      </section>
    </div>
  )
}
