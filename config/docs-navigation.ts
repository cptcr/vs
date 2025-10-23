import type { LucideIcon } from "lucide-react"
import {
  Activity,
  AlertTriangle,
  BookOpenCheck,
  Boxes,
  ClipboardList,
  Compass,
  Cpu,
  CreditCard,
  Database,
  FileWarning,
  LifeBuoy,
  Lock,
  MonitorCog,
  Rocket,
  ShieldCheck,
  Shuffle,
} from "lucide-react"

export type DocsNavChild = {
  title: string
  href?: string
}

export type DocsNavItem = {
  title: string
  href: string
  description?: string
  icon?: LucideIcon
  keywords?: string[]
  children?: DocsNavChild[]
}

export type DocsNavSection = {
  title: string
  items: DocsNavItem[]
}

export const docsNavigation: DocsNavSection[] = [
  {
    title: "Start here",
    items: [
      {
        title: "Documentation home",
        href: "/docs",
        description: "Overview of VaultScope docs, curated entry points and recommended guides.",
        icon: Compass,
        keywords: ["overview", "docs home", "introduction"],
      },
      {
        title: "Quickstart playbook",
        href: "/docs/quickstart",
        description: "Get running in minutes with provisioning, configuration and launch checklists.",
        icon: Rocket,
        keywords: ["quickstart", "setup", "first server", "provision"],
      },
      {
        title: "Getting started",
        href: "/docs/getting-started",
        description: "Control panel tour, console usage and first troubleshooting steps.",
        icon: ClipboardList,
        keywords: ["introduction", "control panel", "files", "console"],
        children: [
          { title: "Introduction" },
          { title: "Control Panel Overview" },
          { title: "Accessing the Console & Files" },
          { title: "Basic Troubleshooting" },
        ],
      },
    ],
  },
  {
    title: "Operate & scale",
    items: [
      {
        title: "Control panel",
        href: "/docs/control-panel",
        description: "Deep dive into server management, networking and resource usage dashboards.",
        icon: MonitorCog,
        keywords: ["panel", "servers", "networking", "resources"],
        children: [
          { title: "Creating & Managing Servers" },
          { title: "Ports & Networking" },
          { title: "SFTP File Access" },
          { title: "Resource Usage" },
          { title: "Server Backups" },
        ],
      },
      {
        title: "Server operations",
        href: "/docs/servers",
        description: "Provisioning, lifecycle workflows and day-to-day operational best practices.",
        icon: Boxes,
        keywords: ["servers", "provisioning", "operations"],
      },
      {
        title: "Performance optimization",
        href: "/docs/optimization",
        description: "Tuning guidance for CPU, memory, networking and game-specific workloads.",
        icon: Cpu,
        keywords: ["performance", "optimization", "tuning"],
      },
      {
        title: "Monitoring & alerts",
        href: "/docs/monitoring",
        description: "Instrument VaultScope workloads with dashboards, alerts and escalation paths.",
        icon: Activity,
        keywords: ["monitoring", "alerts", "observability"],
      },
    ],
  },
  {
    title: "Policies & billing",
    items: [
      {
        title: "Billing & plans",
        href: "/docs/billing",
        description: "Learn how invoicing, upgrades and the free tier work inside VaultScope.",
        icon: CreditCard,
        keywords: ["billing", "plans", "paymenter", "pricing"],
        children: [
          { title: "How Paymenter Works" },
          { title: "Free Tier Information" },
          { title: "Upgrading & Downgrading" },
          { title: "Premium Plans" },
          { title: "Payment Policies" },
        ],
      },
      {
        title: "Acceptable use",
        href: "/docs/acceptable-use",
        description: "Understand service boundaries, prohibited content and fair-use expectations.",
        icon: ShieldCheck,
        keywords: ["policy", "use", "prohibited"],
        children: [
          { title: "Fair-Use Policy" },
          { title: "Prohibited Content" },
          { title: "Inactivity Policy" },
          { title: "Abuse Reporting" },
        ],
      },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      {
        title: "Incident runbook",
        href: "/docs/troubleshooting",
        description: "Diagnose common errors, panel issues and when to escalate to support.",
        icon: FileWarning,
        keywords: ["troubleshoot", "errors", "incident"],
        children: [
          { title: "Common Errors" },
          { title: "Console Logs" },
          { title: "Panel Issues" },
          { title: "Server Issues" },
          { title: "Getting Support" },
        ],
      },
      {
        title: "Frequently asked questions",
        href: "/docs/faq",
        description: "Answers to billing, platform and operational questions from the community.",
        icon: LifeBuoy,
        keywords: ["faq", "questions", "help"],
      },
    ],
  },
  {
    title: "Advanced & security",
    items: [
      {
        title: "Advanced guides",
        href: "/docs/advanced",
        description: "Automation, custom ports, database management and advanced performance tips.",
        icon: Shuffle,
        keywords: ["advanced", "sftp", "databases", "performance"],
        children: [
          { title: "SFTP Guide" },
          { title: "Custom Ports" },
          { title: "Databases" },
          { title: "Performance" },
        ],
      },
      {
        title: "Database operations",
        href: "/docs/databases",
        description: "Provision dedicated databases, manage credentials and scale replicas.",
        icon: Database,
        keywords: ["databases", "mysql", "postgres"],
      },
      {
        title: "Security practices",
        href: "/docs/security",
        description: "Protect accounts, enforce strong auth and mitigate DDoS or file risks.",
        icon: Lock,
        keywords: ["security", "ddos", "password", "file"],
        children: [
          { title: "Account Security" },
          { title: "Passwords" },
          { title: "DDoS Protection" },
          { title: "Safe File Upload" },
        ],
      },
      {
        title: "Compliance incidents",
        href: "/docs/acceptable-use#abuse",
        description: "How to report abuse, escalation timelines and forensic expectations.",
        icon: AlertTriangle,
        keywords: ["abuse", "compliance", "report"],
      },
    ],
  },
]
