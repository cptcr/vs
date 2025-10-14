import DocsSidebar from '@/components/docs-sidebar'

const sidebarItems = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    items: [
      { title: "Introduction", href: "/docs/getting-started#introduction" },
      { title: "Control Panel Overview", href: "/docs/getting-started#control-panel" },
      { title: "Console & Files", href: "/docs/getting-started#console-files" },
      { title: "Basic Troubleshooting", href: "/docs/getting-started#troubleshooting" },
    ],
  },
  {
    title: "Control Panel",
    href: "/docs/control-panel",
    items: [
      { title: "Managing Servers", href: "/docs/control-panel#managing-servers" },
      { title: "Ports & Networking", href: "/docs/control-panel#ports" },
      { title: "SFTP Access", href: "/docs/control-panel#sftp" },
      { title: "Resource Usage", href: "/docs/control-panel#resources" },
      { title: "Server Backups", href: "/docs/control-panel#backups" },
    ],
  },
  {
    title: "Billing & Plans",
    href: "/docs/billing",
    items: [
      { title: "Paymenter Guide", href: "/docs/billing#paymenter" },
      { title: "Free Tier", href: "/docs/billing#free-tier" },
      { title: "Plan Changes", href: "/docs/billing#plan-changes" },
    ],
  },
  {
    title: "Acceptable Use",
    href: "/docs/acceptable-use",
    items: [
      { title: "Fair-Use Policy", href: "/docs/acceptable-use#fair-use" },
      { title: "Prohibited Content", href: "/docs/acceptable-use#prohibited" },
      { title: "Inactivity Policy", href: "/docs/acceptable-use#inactivity" },
      { title: "Abuse Reporting", href: "/docs/acceptable-use#abuse" },
    ],
  },
  {
    title: "Troubleshooting",
    href: "/docs/troubleshooting",
    items: [
      { title: "Common Errors", href: "/docs/troubleshooting#common-errors" },
      { title: "Console Logs", href: "/docs/troubleshooting#console-logs" },
      { title: "Panel Issues", href: "/docs/troubleshooting#panel-issues" },
      { title: "Server Issues", href: "/docs/troubleshooting#server-issues" },
      { title: "Getting Support", href: "/docs/troubleshooting#support" },
    ],
  },
  {
    title: "Advanced Guides",
    href: "/docs/advanced",
    items: [
      { title: "SFTP Guide", href: "/docs/advanced#sftp" },
      { title: "Custom Ports", href: "/docs/advanced#ports" },
      { title: "Databases", href: "/docs/advanced#databases" },
      { title: "Performance", href: "/docs/advanced#performance" },
    ],
  },
  {
    title: "Security",
    href: "/docs/security",
    items: [
      { title: "Account Security", href: "/docs/security#account" },
      { title: "Passwords", href: "/docs/security#passwords" },
      { title: "DDoS Protection", href: "/docs/security#ddos" },
      { title: "Safe File Upload", href: "/docs/security#file-upload" },
    ],
  },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
        <aside className="hidden md:block">
          <DocsSidebar items={sidebarItems} />
        </aside>

        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">{children}</div>
        </main>
      </div>
    </div>
  )
}