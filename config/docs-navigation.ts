/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import type { LucideIcon } from "lucide-react"
import {
  Activity,
  AlertTriangle,
  BookOpenCheck,
  Boxes,
  ClipboardList,
  Command,
  Compass,
  Cpu,
  CreditCard,
  Database,
  FileWarning,
  Globe,
  LifeBuoy,
  Lock,
  MonitorCog,
  Network,
  Rocket,
  ShieldCheck,
  Shuffle,
  Package,
  Plug,
  Users,
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
        description: "First-session checklist: console, files, backups, credentials and support escalation.",
        icon: ClipboardList,
        keywords: ["introduction", "control panel", "files", "console"],
        children: [
          { title: "1. Meet the server view" },
          { title: "2. Upload configuration files" },
          { title: "3. Capture a safety backup" },
          { title: "4. Know where to find credentials" },
          { title: "5. Escalate the right way" },
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
        description: "Deep dive into backups, schedules, delegated access, networking and subdomains.",
        icon: MonitorCog,
        keywords: ["panel", "servers", "networking", "resources"],
        children: [
          { title: "1. Orient yourself" },
          { title: "2. Manage backups and restores" },
          { title: "3. Automate maintenance with schedules" },
          { title: "4. Delegate access with user roles" },
          { title: "5. Customize startup commands" },
          { title: "6. Expose services via networking and subdomains" },
          { title: "7. Publish reverse proxies for custom domains" },
          { title: "Operational best practices" },
        ],
      },
      {
        title: "Startup commands",
        href: "/docs/startup-commands",
        description: "Edit launch templates, apply JVM flags and restore defaults safely.",
        icon: Command,
        keywords: ["startup", "launch", "flags"],
      },
      {
        title: "Subdomains",
        href: "/docs/subdomains",
        description: "Assign VaultScope-managed hostnames to allocations and plan DNS usage.",
        icon: Globe,
        keywords: ["subdomain", "dns", "hostname"],
      },
      {
        title: "Reverse proxy",
        href: "/docs/reverse-proxy",
        description: "Terminate SSL and connect custom domains with VaultScope reverse proxies.",
        icon: Network,
        keywords: ["reverse proxy", "ssl", "custom domain"],
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
        description: "Set up Paymenter, verify emails, handle renewals, refunds and payment methods.",
        icon: CreditCard,
        keywords: ["billing", "plans", "paymenter", "pricing"],
        children: [
          { title: "1. Register your billing account" },
          { title: "2. Confirm the verification email" },
          { title: "3. Understand invoices and renewals" },
          { title: "4. Manage payment methods" },
          { title: "5. Refunds, cancellations and proration" },
          { title: "Need help?" },
        ],
      },
      {
        title: "Acceptable use",
        href: "/docs/acceptable-use",
        description: "Understand resource limits, prohibited content, enforcement and how to report abuse.",
        icon: ShieldCheck,
        keywords: ["policy", "use", "prohibited"],
        children: [
          { title: "Resource fair use" },
          { title: "Prohibited content" },
          { title: "Automatic enforcement" },
          { title: "Report abuse" },
          { title: "Appeals process" },
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
        description: "Follow the on-call playbook for startup failures, connection issues and escalations.",
        icon: FileWarning,
        keywords: ["troubleshoot", "errors", "incident"],
        children: [
          { title: "1. Server fails to start" },
          { title: "2. Players cannot connect" },
          { title: "3. Panel or file manager errors" },
          { title: "4. Performance degradation" },
          { title: "5. Database problems" },
          { title: "6. Escalating to VaultScope support" },
          { title: "Post-incident checklist" },
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
        description: "Automation, GitOps pipelines, custom networking and security hardening techniques.",
        icon: Shuffle,
        keywords: ["advanced", "sftp", "databases", "performance"],
        children: [
          { title: "GitOps for configuration" },
          { title: "SFTP automation patterns" },
          { title: "Custom ports and proxies" },
          { title: "Blue/green deployments" },
          { title: "Observability-driven scaling" },
          { title: "Security-hardening checklist" },
          { title: "Share your automation" },
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
        description: "Enable 2FA, rotate credentials, limit privileged access and prepare incident response.",
        icon: Lock,
        keywords: ["security", "ddos", "password", "file"],
        children: [
          { title: "1. Enable two-factor authentication" },
          { title: "2. Rotate passwords and email" },
          { title: "3. Limit privileged access" },
          { title: "4. Secure billing" },
          { title: "5. Incident response" },
          { title: "Compliance checklist" },
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
  {
    title: "Minecraft",
    items: [
      {
        title: "Mod installer",
        href: "/docs/minecraft/mod-installer",
        description: "Browse curated mods, filter by loader or version and install them directly from the panel.",
        icon: Package,
        keywords: ["minecraft", "mods", "installer", "modrinth"],
      },
      {
        title: "Plugin installer",
        href: "/docs/minecraft/plugin-installer",
        description: "Search trusted Minecraft plugins, review versions and deploy with a single click.",
        icon: Plug,
        keywords: ["minecraft", "plugins", "installer", "modrinth"],
      },
      {
        title: "Player management",
        href: "/docs/minecraft/players",
        description: "Monitor active, offline, banned and whitelisted players and run moderation actions.",
        icon: Users,
        keywords: ["minecraft", "players", "moderation", "management"],
      },
    ],
  },
]
