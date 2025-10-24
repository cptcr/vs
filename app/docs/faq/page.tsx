import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "FAQ — VaultScope Docs",
  description:
    "Answers to common VaultScope questions covering billing, server provisioning, networking, backups and support policies.",
  path: "/docs/faq",
})

const faqs = [
  {
    category: "Getting started",
    items: [
      {
        question: "How long does a new server take to deploy?",
        answer:
          "Most servers provision in under two minutes. Heavy modpacks or large game templates can take up to five minutes while dependencies install. You will receive a password reset email once the server is ready.",
      },
      {
        question: "Where do I manage my billing details?",
        answer:
          "All invoices, payment methods and subscriptions live at pay.vaultscope.dev. Use the billing guide if you need a walkthrough.",
        link: { href: "/docs/billing", label: "Billing guide" },
      },
      {
        question: "Do I need separate logins for billing and the control panel?",
        answer:
          "No. VaultScope links billing and operational access via the same email address. Set a unique password for each system and enable two-factor authentication on the control panel.",
        link: { href: "/docs/security", label: "Security practices" },
      },
    ],
  },
  {
    category: "Operations",
    items: [
      {
        question: "Can I invite teammates to manage a server?",
        answer:
          "Yes. Add them under the Users tab inside the control panel. You can grant granular permissions for console, SFTP, schedules and power actions.",
        link: { href: "/docs/control-panel", label: "Control panel reference" },
      },
      {
        question: "How often should I create backups?",
        answer:
          "We recommend a nightly automated backup plus an extra snapshot before major updates. Manual backups only count toward retention after they finish uploading.",
        link: { href: "/docs/getting-started", label: "Getting started checklist" },
      },
      {
        question: "Does VaultScope support custom domains?",
        answer:
          "Each server can claim one subdomain under vaultscope.dev or cptcr.dev. For custom domains, place a reverse proxy in front of your server or use Cloudflare Tunnel.",
      },
    ],
  },
  {
    category: "Performance",
    items: [
      {
        question: "What plan should I choose for 200 concurrent players?",
        answer:
          "Start with a plan offering at least 6 dedicated cores and 12 GB of RAM. Monitor metrics and upgrade before you sustain 80% utilization.",
        link: { href: "/docs/optimization", label: "Optimization guide" },
      },
      {
        question: "Can I run external exporters or monitoring agents?",
        answer:
          "Absolutely. Drop exporters onto the server via SFTP, expose them on a dedicated port and secure them with basic auth or mTLS.",
        link: { href: "/docs/monitoring", label: "Monitoring strategy" },
      },
    ],
  },
  {
    category: "Support & policies",
    items: [
      {
        question: "How do I contact support?",
        answer:
          "Open a ticket from the control panel or email support@vaultscope.dev. For emergencies, ping the #incidents channel in Discord after submitting a ticket.",
        link: { href: "/docs/troubleshooting", label: "Troubleshooting guide" },
      },
      {
        question: "What happens if my payment fails?",
        answer:
          "We send reminders at 24 and 72 hours. Services suspend on day four. Data stays intact for seven days after suspension so you can resolve billing issues without losing progress.",
        link: { href: "/docs/billing", label: "Billing policies" },
      },
      {
        question: "What content is prohibited?",
        answer:
          "VaultScope prohibits malware, illegal content and abusive behaviour. Review the acceptable use policy for the full list before hosting community servers.",
        link: { href: "/docs/acceptable-use", label: "Acceptable use policy" },
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Answers on demand</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently asked questions</h1>
        <p className="text-lg text-muted-foreground">
          Quick answers to the topics we see most often in tickets, live chat and Discord. Each answer links to a deeper
          guide when you want the full playbook.
        </p>
      </header>

      <div className="space-y-8">
        {faqs.map(section => (
          <section key={section.category} className="space-y-6">
            <h2 className="text-2xl font-semibold">{section.category}</h2>
            <div className="space-y-4">
              {section.items.map(item => (
                <article
                  key={item.question}
                  className="rounded-lg border border-border/60 bg-background/60 p-4 shadow-sm transition hover:border-primary/60 hover:bg-primary/5"
                >
                  <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                  <p className="mt-2 text-muted-foreground">{item.answer}</p>
                  {item.link ? (
                    <p className="mt-3 text-sm">
                      <Link href={item.link.href} className="font-medium text-primary underline underline-offset-4">
                        {item.link.label}
                      </Link>
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-2xl font-semibold">Still need help?</h2>
        <p className="text-muted-foreground">
          Email <a href="mailto:support@vaultscope.dev" className="font-medium text-primary underline underline-offset-4">support@vaultscope.dev</a>, open a control panel ticket or join the{" "}
          <a href="https://discord.gg/vaultscope" className="font-medium text-primary underline underline-offset-4">
            VaultScope Discord
          </a>{" "}
          for real-time answers.
        </p>
      </section>
    </div>
  )
}
