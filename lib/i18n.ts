/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import type { Language, TranslationRecord } from "@/types/i18n"

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
] as const

export const DEFAULT_LANGUAGE: Language = "en"
export const LANGUAGE_COOKIE = "vaultscope_lang"
export const LANGUAGE_STORAGE_KEY = "vaultscope_language"

const SUPPORTED_LANGUAGE_SET = new Set<Language>(SUPPORTED_LANGUAGES.map(({ code }) => code as Language))

export const translations: Record<Language, TranslationRecord> = {
  en: {
    common: {
      skipToContent: "Skip to content",
      loading: "Loading…",
      backToTop: "Back to top",
    },
    header: {
      brand: "VaultScope",
      language: {
        label: "Language",
      },
      nav: {
        home: "VaultScope",
        features: "Features",
        testimonials: "Testimonials",
        pricing: "Pricing",
        community: "Community",
        documentation: "Documentation",
        about: "About",
        services: "Services",
        status: "Status",
        signup: "Sign Up",
        login: "Log In",
      },
      actions: {
        signIn: "Sign In",
        getStarted: "Get Started",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        menuTitle: "Menu",
      },
    },
    servicesPage: {
      hero: {
        badge: "Managed services",
        title: "A services platform handcrafted for your workloads",
        description:
          "Orchestrate your entire stack on VaultScope’s automation-first infrastructure—hardened Docker hosts, Cloudflare ingress, and observability by default.",
        ctas: {
          primary: { label: "View deployment playbooks", href: "/docs/getting-started" },
          secondary: { label: "Chat with our team", href: "https://discord.gg/wK8UZ7AAmc" },
        },
        metrics: [
          {
            label: "Languages",
            value: "9 runtimes",
            description: "Node.js, Python, Rust, Java, Go, C#, Elixir, Lua, and Dart ready to ship.",
          },
          {
            label: "Databases",
            value: "3 engines",
            description: "Managed MongoDB, PostgreSQL, and MariaDB clusters included.",
          },
          {
            label: "Deploy time",
            value: "< 5 minutes",
            description: "From panel login to a monitored container behind Cloudflare.",
          },
        ],
        preview: {
          eyebrow: "What you get",
          title: "Orchestration built for velocity",
          description:
            "Our SRE team keeps every host patched, observed, and ready to burst—so you stay focused on building.",
          points: [
            "Opinionated Docker profiles tuned for application, game, and automation workloads",
            "Cloudflare-backed routing with reverse proxy templates ready to deploy",
            "Real-time telemetry streaming into Loki and Prometheus out of the box",
          ],
        },
      },
      highlights: {
        title: "Beyond simple hosting",
        description:
          "VaultScope services blend infrastructure, automation, and observability into a single premium experience.",
        items: [
          {
            key: "orchestratedPlaybooks",
            title: "Orchestrated playbooks",
            description: "Provision servers with Git-powered blueprints and lifecycle automation dialled in.",
            icon: "orchestration",
          },
          {
            key: "resilience",
            title: "Reliability culture",
            description: "Cloudflare ingress, patch automation, and incident runbooks keep uptime transparent.",
            icon: "reliability",
          },
          {
            key: "velocity",
            title: "Velocity unlocked",
            description: "One-click installers and Git auto-sync keep launches under five minutes.",
            icon: "velocity",
          },
          {
            key: "observability",
            title: "Observability first",
            description: "Dashboards, logs, and alerts land in Loki and Prometheus without extra wiring.",
            icon: "observability",
          },
        ],
      },
      stack: {
        title: "Stack coverage that matches how you build",
        description:
          "Provision containers tuned for your favourite runtimes, IDE tooling, data stores, and telemetry pipelines.",
        categories: [
          {
            key: "languages",
            title: "Languages & runtimes",
            description: "Launch environments with modern language support and curated framework presets.",
            items: ["Node.js", "Python", "Java", "Go", "Rust", "C#", "Elixir", "Lua", "Dart"],
          },
          {
            key: "tools",
            title: "Tooling",
            description: "Operate inside hosted developer workspaces without leaving your browser.",
            items: ["Visual Studio Code Server"],
          },
          {
            key: "databases",
            title: "Databases",
            description: "Pair services with fully managed data stores ready for production.",
            items: ["MongoDB", "PostgreSQL", "MariaDB"],
          },
          {
            key: "monitoring",
            title: "Monitoring & tracing",
            description: "Collect telemetry aligned with alerting, on-call, and SLO reviews.",
            items: ["Loki", "Prometheus"],
          },
        ],
      },
      features: {
        title: "Platform capabilities included with every service",
        description:
          "Every workload inherits our automation-first playbooks so you can deploy faster and operate with confidence.",
        items: [
          {
            key: "reverseProxy",
            title: "Managed reverse proxies",
            description: "Ship production ingress patterns with automatic TLS and traffic shaping baked in.",
            icon: "reverseProxy",
            href: "/docs/reverse-proxy",
            linkLabel: "Review the reverse proxy guide",
          },
          {
            key: "subdomains",
            title: "Instant subdomain routing",
            description: "Assign branded subdomains to new services without touching DNS or waiting on support tickets.",
            icon: "subdomains",
            href: "/docs/subdomains",
            linkLabel: "Configure subdomain routing",
          },
          {
            key: "cloudflareDdos",
            title: "Cloudflare-backed DDoS protection",
            description: "Inbound traffic stays shielded behind Cloudflare’s global anycast network and smart routing.",
            icon: "cloudflareDdos",
          },
          {
            key: "docker",
            title: "Docker-managed servers",
            description: "Every workload runs inside hardened Docker profiles for predictable scaling and recovery.",
            icon: "docker",
          },
          {
            key: "oneClickInstall",
            title: "One-click installs",
            description: "Stand up popular stacks in minutes with curated templates and sequenced automation tasks.",
            icon: "oneClickInstall",
          },
          {
            key: "freeTier",
            title: "Free tier across the board",
            description: "All services launch on the enterprise-grade free tier featured on our homepage—no paid plan required.",
            icon: "freeTier",
          },
          {
            key: "gigabitUplink",
            title: "1 Gbps shared uplink",
            description: "Consistent networking with one gigabit uplink capacity tuned for low-latency concurrency.",
            icon: "gigabitUplink",
          },
          {
            key: "autoUpdates",
            title: "Git-powered updates",
            description: "Automatically pull and deploy the latest commits from your GitHub repository without manual sync.",
            icon: "autoUpdates",
          },
        ],
      },
      workflow: {
        title: "How managed services roll out",
        description: "A three-step motion keeps every deployment fast, observable, and ready for scale.",
        steps: [
          {
            key: "design",
            title: "Design & blueprint",
            description: "We capture your workload requirements, target users, scaling triggers, and security posture.",
            result: "Receive a service blueprint with infrastructure, networking, and automation mapped out.",
          },
          {
            key: "launch",
            title: "Launch in minutes",
            description: "Provision Docker nodes, attach databases, and wire Cloudflare ingress with opinionated templates.",
            result: "Container image running with reverse proxy, subdomain, and monitoring enabled.",
          },
          {
            key: "operate",
            title: "Operate & evolve",
            description: "Continuous Git sync, proactive patching, and telemetry keep production resilient.",
            result: "Automated updates and insight loops so you can iterate without firefighting.",
          },
        ],
      },
      freeTier: {
        title: "Start free, stay production-ready",
        description:
          "Every environment runs on enterprise hardware with observability and security guardrails preconfigured. As paid tiers launch, your free deployments will keep running unchanged.",
        note: "Paid plans are not available yet—build confidently on the free platform while we gather production feedback.",
      },
    },
    servicesPageV2: {
      hero: {
        badge: "Services lineup",
        title: "Managed infrastructure for builders and communities",
        description:
          "Ship applications, databases, and automation workloads on infrastructure that bakes in observability and Cloudflare protection. Start free with coding servers and expand when you need more headroom.",
        highlights: ["Free coding servers", "Cloudflare DDoS protection", "1 Gbps network"],
        ctas: {
          primary: { label: "Launch a free coding server", href: "https://pay.vaultscope.dev/products/free-server" },
          secondary: { label: "Explore documentation", href: "/docs" },
        },
      },
      coding: {
        badge: "Free tier",
        title: "Coding Servers — free forever",
        description:
          "Spin up language-specific containers, managed databases, and observability stacks without a credit card. Each workspace inherits our Cloudflare ingress, backups, and monitoring.",
        specsTitle: "Included resources",
        featuresTitle: "Why teams choose our coding servers",
        features: [
          "40% shared vCPU, 512 MiB RAM, and 5 GiB SSD storage per workspace",
          "Curated templates for popular languages, databases, and developer tooling",
          "Cloudflare-backed networking with shared IPv4 and unmetered traffic",
          "Observability baked in with Prometheus and Loki dashboards",
        ],
        serverTypesTitle: "Launch-ready templates",
        serverTypes: [
          {
            title: "Languages & runtimes",
            items: ["Java", "Node.js", "C / C#", "Lua", "Python", "Elixir", "Go", "Rust", "Dart"],
          },
          {
            title: "Databases",
            items: ["MongoDB", "PostgreSQL", "MariaDB"],
          },
          {
            title: "Developer tooling",
            items: ["Visual Studio Code Web"],
          },
          {
            title: "Observability",
            items: ["Prometheus", "Loki"],
          },
        ],
        note: "Every container includes shared IPv4 connectivity, Cloudflare DDoS protection, and unmetered bandwidth.",
        ctas: {
          primary: { label: "Claim your free container", href: "https://pay.vaultscope.dev/products/free-server" },
          secondary: { label: "Read the coding server guide", href: "/docs/coding-servers" },
        },
      },
      contact: {
        title: "Need something more bespoke?",
        description:
          "We design custom environments for game studios, platform teams, and community projects. Reach out and we’ll help scope the right infrastructure.",
        items: [
          {
            label: "Talk with our team on Discord",
            description: "Join the community and get architecture guidance in #infrastructure.",
            href: "https://discord.gg/wK8UZ7AAmc",
          },
          {
            label: "Request tailored infrastructure",
            description: "Email support@vaultscope.dev for dedicated, GPU, or compliance workloads.",
            href: "mailto:support@vaultscope.dev",
          },
          {
            label: "Browse automation playbooks",
            description: "Review deployment guides, reverse proxy templates, and lifecycle automation.",
            href: "/docs",
          },
        ],
      },
    },
    hero: {
      badge: "Enterprise-grade infrastructure on us",
      title: "Enterprise Power, Ready for Every Builder",
      description:
        "Launch on our free enterprise hosting or partner with our architects to craft VPS and bare-metal environments tuned to your workloads.",
      highlights: [
        "Always-on free tier",
        "1 Gbps global network",
        "Cloudflare DDoS shield",
      ],
      ctas: {
        primary: "Design Your Server",
        secondary: "Explore Documentation",
      },
      bottomHighlights: [
        "Enterprise hardware",
        "DDoS protected",
        "99.9% uptime SLA",
      ],
    },
    features: {
      title: "Features",
      description:
        "Everything you need to deliver resilient game and application servers—fast, automated, and powered by community feedback.",
      items: [
        { key: "freeTierHosting", title: "Free tier hosting", description: "Spin up production-grade resources without a credit card." },
        { key: "oneClickInstall", title: "One-click server installs", description: "Deploy in minutes with curated installers." },
        { key: "ddosProtection", title: "Cloudflare DDoS protection", description: "Edge mitigation backed by Cloudflare's global network." },
        { key: "dailyBackups", title: "Automated daily backups", description: "Safeguard data with hands-off snapshots." },
        { key: "instantScaling", title: "Instant scaling", description: "Increase CPU, RAM, or storage the moment you need it." },
        { key: "apiAccess", title: "API access & keys", description: "Control every environment programmatically with secure tokens." },
        { key: "sshAccess", title: "SSH access (paid)", description: "Unlock shell access on paid tiers." },
        { key: "ipv4", title: "Dedicated IPv4 options", description: "Add dedicated addresses whenever compliance demands it." },
        { key: "network", title: "1 Gbps network", description: "Consistent low-latency connectivity worldwide." },
        { key: "monitoring", title: "Resource monitoring dashboard", description: "Track CPU, memory, and bandwidth in real time." },
        { key: "logs", title: "Live console logs", description: "Stream server output without refreshing." },
        { key: "rbac", title: "Role-based access control", description: "Invite teammates with least-privilege access." },
        { key: "cron", title: "Scheduled tasks & cron", description: "Automate recurring jobs with flexible timing." },
        { key: "fileManager", title: "File manager UI", description: "Upload, edit, and organize files from the control panel." },
        { key: "gitDeploy", title: "Git-powered deploys", description: "Sync every push straight to your server." },
        { key: "templates", title: "Server templates & presets", description: "Start from proven blueprints for any workload." },
        { key: "marketplace", title: "Plugin & mod marketplace", description: "Discover community add-ons in a click." },
        { key: "uptime", title: "Public status page", description: "Share real-time uptime and historical incidents." },
        { key: "support", title: "Integrated support desk", description: "Create and track tickets without leaving the panel." },
        { key: "community", title: "Community Discord", description: "Collaborate with builders shipping on VaultScope." },
        { key: "referrals", title: "Referral rewards", description: "Earn platform credits for every successful invite." },
        { key: "promoCodes", title: "Promotions & discounts", description: "Redeem promo codes right at checkout." },
        { key: "sla", title: "99.0% uptime SLA", description: "Enterprise commitment to availability." },
      ],
    },
    testimonials: {
      title: "Why teams choose VaultScope",
      description:
        "Hear from the leadership group that rebuilt VaultScope to celebrate resilience, velocity, and shared wins with our community.",
      items: [
        {
          key: "anton",
          quote:
            "VaultScope's infrastructure roadmap keeps us launching new workloads without renegotiating capacity every month.",
          name: "Anton Schmidt",
          role: "CEO, VaultScope",
        },
        {
          key: "ruben",
          quote:
            "Their automation-first mindset turns bespoke environments around in hours instead of weeks—a massive unlock for our platform group.",
          name: "Rúben Fernandes",
          role: "Head of Infrastructure, VaultScope",
        },
        {
          key: "jason",
          quote:
            "From observability to incident response, the team brings enterprise rigor to builders everywhere.",
          name: "Jason",
          role: "CTO, VaultScope",
        },
      ],
    },
    solutions: {
      nodes: {
        title: "Infrastructure node specs",
        description: "Every service runs on our enterprise-grade infrastructure nodes.",
        specs: [
          { key: "processor", name: "Processor", spec: "Intel Xeon W-2295", detail: "18 cores / 36 threads" },
          { key: "memory", name: "Memory", spec: "128 GB DDR4 ECC", detail: "4× 32 GB Registered ECC" },
          { key: "storage", name: "Storage", spec: "2 TB enterprise HDD", detail: "High-performance SATA" },
          { key: "network", name: "Network", spec: "1 Gbps unmetered", detail: "Consistent high-speed connectivity" },
          { key: "processor", name: "Processor", spec: "AMD Epyc 7401P", detail: "24 cores / 48 threads" },
          { key: "memory", name: "Memory", spec: "128 GB DDR4 ECC", detail: "4× 32 GB Registered ECC" },
          { key: "storage", name: "Storage", spec: "2x 2TB Datacenter SSD (RAID 1)", detail: "High-performance SATA" },
          { key: "network", name: "Network", spec: "1 Gbps unmetered", detail: "Consistent high-speed connectivity" }
        ],
      },
      freePlan: {
        title: "Free hosting plan",
        description: "Completely free containers with Cloudflare protection, automated backups, and observability baked in.",
        features: [
          { key: "cpuShare", label: "40% CPU • 0.4 vCores" },
          { key: "memory", label: "512 MiB RAM" },
          { key: "storage", label: "5120 MiB SSD storage" },
          { key: "ipv4", label: "Shared IPv4" },
          { key: "ddos", label: "DDoS protection included" },
          { key: "traffic", label: "Unmetered traffic" },
          { key: "uplink", label: "Shared 1 Gbps uplink" },
        ],
        price: "€0",
        priceCaption: "Completely free",
        ctaLabel: "Claim your free server",
        ctaHref: "https://pay.vaultscope.dev/products/free-server",
      },
      custom: {
        title: "Custom infrastructure solutions",
        description: "Partner with our architects to design the exact infrastructure your workloads demand.",
        cards: [
          {
            key: "vps",
            title: "Virtual private servers",
            description: "Customizable VPS with dedicated resources",
            features: [
              "Configurable CPU allocations",
              "Flexible RAM profiles",
              "Tailored storage layouts",
              "Full root access",
              "Choice of operating system",
              "24/7 expert support",
            ],
          },
          {
            key: "dedicated",
            title: "Dedicated servers",
            description: "Enterprise-grade bare metal with complete control",
            features: [
              "Custom hardware selection",
              "Exclusive resource control",
              "Flexible configuration options",
              "Premium network routes",
              "Advanced security add-ons",
              "Priority response SLAs",
            ],
          },
        ],
        notAvailable: "COMING SOON",
      },
    },
    footer: {
      sections: {
        resources: {
          title: "Resources",
          links: {
            documentation: "Documentation",
            controlPanel: "Control Panel",
            payment: "Billing Portal / Register",
            status: "Status",
            features: "Features",
          },
        },
        socials: {
          title: "Socials",
          links: {
            mainServer: "Discord",
            github: "GitHub",
          },
        },
        software: {
          title: "Technologies",
          links: {
            syncor: "Syncor",
          },
        },
        infrastructure: {
          title: "Infrastructure",
          links: {
            pricing: "Pricing",
            security: "Security",
            minecraft: "Minecraft",
            services: "Services",
          },
        },
        legal: {
          title: "Legal",
          links: {
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            acceptableUse: "Acceptable Use Policy",
            fairUsage: "Fair Usage Policy",
            sla: "Service Level Agreement",
            cookiePolicy: "Cookie Policy",
          },
        },
      },
      copyright:
        "© 2025 VaultScope. All rights reserved. Free hosting powered by enterprise infrastructure.",
    },
    status: {
      loading: "Checking system status…",
      error: "Status unavailable",
      healthy: "Systems operational",
      degraded: "Performance degraded",
      tooltip: "Updated {time} · Median latency {latency} ms",
    },
    cookieConsent: {
      body: {
        intro:
          "We use cookies to enhance your experience, personalize content, and analyze our traffic.",
        readMore: {
          beforeLink: "Review our",
          afterLink: "to learn more.",
        },
        linkText: "Privacy Policy",
      },
      actions: {
        reject: "Reject all",
        accept: "Accept all",
      },
    },
  },
  de: {
    common: {
      skipToContent: "Zum Inhalt springen",
      loading: "Wird geladen…",
      backToTop: "Nach oben",
    },
    header: {
      brand: "VaultScope",
      language: {
        label: "Sprache",
      },
      nav: {
        home: "VaultScope",
        features: "Features",
        testimonials: "Referenzen",
        pricing: "Preise",
        community: "Community",
        documentation: "Dokumentation",
        about: "Über uns",
        services: "Services",
        status: "Status",
        signup: "Registrieren",
        login: "Anmelden",
      },
      actions: {
        signIn: "Anmelden",
        getStarted: "Loslegen",
        openMenu: "Menü öffnen",
        closeMenu: "Menü schließen",
        menuTitle: "Menü",
      },
    },
    servicesPage: {
      hero: {
        badge: "Managed Services",
        title: "Eine Services-Plattform, die sich wie Maßarbeit anfühlt",
        description:
          "Orchestriere deinen gesamten Stack auf der Automation-first-Infrastruktur von VaultScope – mit gehärteten Docker-Hosts, Cloudflare-Eingang und Observability ab Werk.",
        ctas: {
          primary: { label: "Deploy-Playbooks ansehen", href: "/docs/getting-started" },
          secondary: { label: "Mit unserem Team chatten", href: "https://discord.gg/wK8UZ7AAmc" },
        },
        metrics: [
          {
            label: "Sprachen",
            value: "9 Runtimes",
            description: "Node.js, Python, Rust, Java, Go, C#, Elixir, Lua und Dart sind sofort startklar.",
          },
          {
            label: "Datenbanken",
            value: "3 Engines",
            description: "Managed-Cluster für MongoDB, PostgreSQL und MariaDB sind inklusive.",
          },
          {
            label: "Bereitstellungszeit",
            value: "< 5 Minuten",
            description: "Vom ersten Login bis zum überwachten Container hinter Cloudflare.",
          },
        ],
        preview: {
          eyebrow: "Das bekommst du",
          title: "Orchestrierung für Tempo",
          description:
            "Unser SRE-Team hält jeden Host gepatcht, überwacht und skalierungsbereit – du konzentrierst dich aufs Shipping.",
          points: [
            "Meinungsstarke Docker-Profile für Anwendungs-, Spiele- und Automatisierungs-Workloads",
            "Cloudflare-gestütztes Routing mit einsatzbereiten Reverse-Proxy-Templates",
            "Echtzeit-Telemetrie landet ohne Zusatzaufwand in Loki und Prometheus",
          ],
        },
      },
      highlights: {
        title: "Mehr als simples Hosting",
        description:
          "VaultScope Services verbindet Infrastruktur, Automatisierung und Observability zu einem durchgängigen Premium-Erlebnis.",
        items: [
          {
            key: "orchestratedPlaybooks",
            title: "Orchestrierte Playbooks",
            description: "Provisioniere Server mit Git-gestützten Blueprints und abgestimmter Lifecycle-Automatisierung.",
            icon: "orchestration",
          },
          {
            key: "resilience",
            title: "Reliability-Kultur",
            description: "Cloudflare-Eingang, Patch-Automatisierung und Incident-Runbooks halten die Uptime transparent.",
            icon: "reliability",
          },
          {
            key: "velocity",
            title: "Tempo entfesselt",
            description: "One-Click-Installer und Git-Auto-Sync drücken die Time-to-Live auf unter fünf Minuten.",
            icon: "velocity",
          },
          {
            key: "observability",
            title: "Observability zuerst",
            description: "Dashboards, Logs und Alerts landen ohne Zusatzaufwand in Loki und Prometheus.",
            icon: "observability",
          },
        ],
      },
      stack: {
        title: "Stack-Abdeckung, die zu deinem Workflow passt",
        description:
          "Provisioniere Container, die auf deine bevorzugten Runtimes, IDE-Tools, Datenbanken und Telemetrie-Pipelines abgestimmt sind.",
        categories: [
          {
            key: "languages",
            title: "Sprachen & Runtimes",
            description: "Starte Umgebungen mit moderner Sprachunterstützung und kuratierten Framework-Presets.",
            items: ["Node.js", "Python", "Java", "Go", "Rust", "C#", "Elixir", "Lua", "Dart"],
          },
          {
            key: "tools",
            title: "Tooling",
            description: "Arbeite in gehosteten Entwickler-Workspaces direkt im Browser.",
            items: ["Visual Studio Code Server"],
          },
          {
            key: "databases",
            title: "Datenbanken",
            description: "Kopple deine Services mit vollständig verwalteten Datenspeichern.",
            items: ["MongoDB", "PostgreSQL", "MariaDB"],
          },
          {
            key: "monitoring",
            title: "Monitoring & Tracing",
            description: "Sammle Telemetrie für Alerts, Incident Response und SLO-Reviews.",
            items: ["Loki", "Prometheus"],
          },
        ],
      },
      features: {
        title: "Plattformfunktionen, die bei jedem Service enthalten sind",
        description:
          "Jeder Workload profitiert von unseren Automation-Playbooks, damit du schneller deployst und souverän betreibst.",
        items: [
          {
            key: "reverseProxy",
            title: "Gemanagerte Reverse Proxies",
            description: "Produktionsreife Ingress-Muster mit automatischem TLS und integriertem Traffic-Shaping ausliefern.",
            icon: "reverseProxy",
            href: "/docs/reverse-proxy",
            linkLabel: "Reverse-Proxy-Guide ansehen",
          },
          {
            key: "subdomains",
            title: "Sofortiges Subdomain-Routing",
            description:
              "Weise neuen Services gebrandete Subdomains zu, ohne DNS anzufassen oder auf Tickets zu warten.",
            icon: "subdomains",
            href: "/docs/subdomains",
            linkLabel: "Subdomain-Routing konfigurieren",
          },
          {
            key: "cloudflareDdos",
            title: "Cloudflare-gestützter DDoS-Schutz",
            description: "Eingehender Traffic bleibt hinter dem globalen Anycast-Netzwerk von Cloudflare geschützt.",
            icon: "cloudflareDdos",
          },
          {
            key: "docker",
            title: "Docker-gemanagte Server",
            description: "Jeder Workload läuft in gehärteten Docker-Profilen - Skalierung, Rollbacks und Recovery bleiben planbar.",
            icon: "docker",
          },
          {
            key: "oneClickInstall",
            title: "Installationen per Klick",
            description: "Beliebte Stacks in Minuten mit kuratierten Templates und automatisierten Tasks bereitstellen.",
            icon: "oneClickInstall",
          },
          {
            key: "freeTier",
            title: "Free Tier für alle Angebote",
            description:
              "Alle Services starten auf dem Enterprise-Free-Tier der Homepage - kein kostenpflichtiger Plan erforderlich.",
            icon: "freeTier",
          },
          {
            key: "gigabitUplink",
            title: "Geteilter 1-Gbit/s-Uplink",
            description: "Konstante Netzwerkkapazität mit Gigabit-Uplink, optimiert für latenzarme Parallelität.",
            icon: "gigabitUplink",
          },
          {
            key: "autoUpdates",
            title: "Git-gesteuerte Updates",
            description: "Ziehe automatisch die neuesten Commits aus deinem GitHub-Repository und deploye ohne manuelle Synchronisation.",
            icon: "autoUpdates",
          },
        ],
      },
      workflow: {
        title: "So rollen Managed Services aus",
        description: "Drei Schritte halten jede Bereitstellung schnell, beobachtbar und skalierungsbereit.",
        steps: [
          {
            key: "design",
            title: "Design & Blueprint",
            description: "Wir erfassen Workload-Anforderungen, Nutzerprofile, Skalierungstrigger und Sicherheitsvorgaben.",
            result: "Du erhältst ein Service-Blueprint mit Infrastruktur-, Netzwerk- und Automationsplan.",
          },
          {
            key: "launch",
            title: "Launch in Minuten",
            description: "Docker-Nodes, Datenbanken und Cloudflare-Eingang werden mit kuratierten Templates bereitgestellt.",
            result: "Das Container-Image läuft mit Reverse Proxy, Subdomain und aktivem Monitoring.",
          },
          {
            key: "operate",
            title: "Betrieb & Weiterentwicklung",
            description: "Kontinuierlicher Git-Sync, proaktive Patches und Telemetrie halten die Produktion resilient.",
            result: "Automatisierte Updates und Insight-Loops, damit du ohne Feuerwehr-Einsätze iterieren kannst.",
          },
        ],
      },
      freeTier: {
        title: "Kostenlos starten, produktionsreif bleiben",
        description:
          "Jede Umgebung läuft auf Enterprise-Hardware mit vorkonfigurierter Observability und Security. Sobald kostenpflichtige Tarife starten, bleiben deine Free-Deployments unverändert online.",
        note: "Kostenpflichtige Pläne gibt es noch nicht – nutze die kostenlose Plattform, während wir Produktionsfeedback einsammeln.",
      },
    },
    servicesPageV2: {
      hero: {
        badge: "Service-Portfolio",
        title: "Managed-Infrastruktur für Builder und Communities",
        description:
          "Betreibe Anwendungen, Datenbanken und Automations-Workloads auf unserer Automation-first-Infrastruktur. Starte kostenlos mit Coding-Servern und skaliere bei Bedarf mit Cloudflare-geschütztem Networking.",
        highlights: ["Kostenlose Coding-Server", "Cloudflare-DDoS-Schutz", "1 Gbit/s-Netzwerk"],
        ctas: {
          primary: { label: "Kostenlosen Coding-Server starten", href: "https://pay.vaultscope.dev/products/free-server" },
          secondary: { label: "Dokumentation erkunden", href: "/docs" },
        },
      },
      coding: {
        badge: "Free Tier",
        title: "Coding-Server – dauerhaft kostenlos",
        description:
          "Starte sprachspezifische Container, verwaltete Datenbanken und Observability-Stacks ohne Kreditkarte. Jeder Workspace erbt unseren Cloudflare-Eingang, Backups und Monitoring.",
        specsTitle: "Enthaltene Ressourcen",
        featuresTitle: "Warum Teams unsere Coding-Server nutzen",
        features: [
          "40 % geteilte vCPU, 512 MiB RAM und 5 GiB SSD-Speicher pro Workspace",
          "Kuratiere Templates für beliebte Sprachen, Datenbanken und Entwickler-Tooling",
          "Cloudflare-gestütztes Netzwerk mit geteilter IPv4 und unlimitiertem Traffic",
          "Observability inklusive Prometheus- und Loki-Dashboards",
        ],
        serverTypesTitle: "Startbereite Templates",
        serverTypes: [
          {
            title: "Sprachen & Runtimes",
            items: ["Java", "Node.js", "C / C#", "Lua", "Python", "Elixir", "Go", "Rust", "Dart"],
          },
          {
            title: "Datenbanken",
            items: ["MongoDB", "PostgreSQL", "MariaDB"],
          },
          {
            title: "Developer-Tooling",
            items: ["Visual Studio Code Web"],
          },
          {
            title: "Observability",
            items: ["Prometheus", "Loki"],
          },
        ],
        note: "Jeder Container liefert geteilte IPv4-Konnektivität, Cloudflare-DDoS-Schutz und unlimitierten Traffic mit.",
        ctas: {
          primary: { label: "Kostenlosen Container sichern", href: "https://pay.vaultscope.dev/products/free-server" },
          secondary: { label: "Coding-Server-Guide lesen", href: "/docs/coding-servers" },
        },
      },
      contact: {
        title: "Du brauchst mehr als das Free Tier?",
        description:
          "Wir entwerfen maßgeschneiderte Umgebungen für Game-Studios, Plattform-Teams und Community-Projekte. Melde dich – wir helfen beim Scoping der passenden Infrastruktur.",
        items: [
          {
            label: "Mit unserem Team auf Discord sprechen",
            description: "Tritt der Community bei und erhalte Architektur-Guidance im Channel #infrastructure.",
            href: "https://discord.gg/wK8UZ7AAmc",
          },
          {
            label: "Maßgeschneiderte Infrastruktur anfragen",
            description: "Schreibe an support@vaultscope.dev für dedizierte, GPU- oder Compliance-Workloads.",
            href: "mailto:support@vaultscope.dev",
          },
          {
            label: "Automation-Playbooks durchsuchen",
            description: "Deployment-Guides, Reverse-Proxy-Templates und Lifecycle-Automation im Überblick.",
            href: "/docs",
          },
        ],
      },
    },
    hero: {
      badge: "Enterprise-Infrastruktur – kostenlos",
      title: "Enterprise-Power für jedes Team",
      description:
        "Starte auf unserem kostenlosen Enterprise-Hosting oder arbeite mit unserem Architekturteam an maßgeschneiderten VPS- und Bare-Metal-Umgebungen für deine Workloads.",
      highlights: [
        "Dauerhaftes Free Tier",
        "Globales 1-Gbit/s-Netzwerk",
        "Cloudflare-DDoS-Schutz",
      ],
      ctas: {
        primary: "Server entwerfen",
        secondary: "Dokumentation entdecken",
      },
      bottomHighlights: [
        "Enterprise-Hardware",
        "DDoS-geschützt",
        "99,9 %-Uptime-SLA",
      ],
    },
    features: {
      title: "Features",
      description:
        "Alles, was du für resiliente Game- und Application-Server brauchst – schnell, automatisiert und durch Community-Feedback geprägt.",
      items: [
        { key: "freeTierHosting", title: "Free-Tier-Hosting", description: "Produktionsreife Ressourcen ohne Kreditkarte bereitstellen." },
        { key: "oneClickInstall", title: "One-Click-Installationen", description: "In Minuten mit kuratierten Installern deployen." },
        { key: "ddosProtection", title: "Cloudflare-DDoS-Schutz", description: "Edge-Mitigation über das globale Cloudflare-Netzwerk." },
        { key: "dailyBackups", title: "Automatisierte Tages-Backups", description: "Daten mit automatischen Snapshots absichern." },
        { key: "instantScaling", title: "Sofortige Skalierung", description: "CPU, RAM oder Storage bei Bedarf unmittelbar erhöhen." },
        { key: "apiAccess", title: "API-Zugriff & Keys", description: "Jede Umgebung prozesssicher per Token steuern." },
        { key: "sshAccess", title: "SSH-Zugriff (Premium)", description: "Shell-Zugriff auf kostenpflichtigen Tarifen freischalten." },
        { key: "ipv4", title: "Dedizierte IPv4-Optionen", description: "Dedizierte Adressen für Compliance-Anforderungen hinzubuchen." },
        { key: "network", title: "1-Gbit/s-Netzwerk", description: "Stabile Low-Latency-Anbindung weltweit." },
        { key: "monitoring", title: "Monitoring-Dashboard", description: "CPU, RAM und Bandbreite in Echtzeit verfolgen." },
        { key: "logs", title: "Live-Konsolenlogs", description: "Serverausgaben ohne Reload streamen." },
        { key: "rbac", title: "Rollenbasierte Zugriffskontrolle", description: "Teammitglieder mit Least-Privilege-Rechten einladen." },
        { key: "cron", title: "Geplante Tasks & Cron", description: "Wiederkehrende Jobs flexibel automatisieren." },
        { key: "fileManager", title: "Dateimanager-UI", description: "Dateien direkt im Control Panel verwalten." },
        { key: "gitDeploy", title: "Git-gestützte Deployments", description: "Jeden Push automatisch auf den Server bringen." },
        { key: "templates", title: "Server-Templates & Presets", description: "Mit erprobten Blaupausen jeden Workload starten." },
        { key: "marketplace", title: "Plugin- & Mod-Marktplatz", description: "Community-Add-ons mit einem Klick entdecken." },
        { key: "uptime", title: "Öffentliche Statusseite", description: "Uptime und Historie transparent teilen." },
        { key: "support", title: "Integrierter Support-Desk", description: "Tickets ohne Systemwechsel erstellen und verfolgen." },
        { key: "community", title: "Discord-Community", description: "Mit Buildern auf VaultScope zusammenarbeiten." },
        { key: "referrals", title: "Empfehlungsprämien", description: "Für erfolgreiche Einladungen Plattform-Credits erhalten." },
        { key: "promoCodes", title: "Aktionen & Rabatte", description: "Promo-Codes direkt beim Checkout einlösen." },
        { key: "sla", title: "99,0 %-Uptime-SLA", description: "Verbindliche Zusage zur Verfügbarkeit." },
      ],
    },
    testimonials: {
      title: "Warum Teams sich für VaultScope entscheiden",
      description:
        "Stimmen aus dem Leadership-Team, das VaultScope neu aufgestellt hat – mit Fokus auf Resilienz, Tempo und gemeinsame Erfolge der Community.",
      items: [
        {
          key: "anton",
          quote:
            "Die Infrastruktur-Roadmap von VaultScope lässt uns neue Workloads starten, ohne monatlich Kapazitäten neu zu verhandeln.",
          name: "Anton Schmidt",
          role: "CEO, VaultScope",
        },
        {
          key: "ruben",
          quote:
            "Ihr Automation-First-Mindset macht maßgeschneiderte Umgebungen innerhalb von Stunden statt Wochen möglich – ein riesiger Gewinn für unser Plattformteam.",
          name: "Rúben Fernandes",
          role: "Head of Infrastructure, VaultScope",
        },
        {
          key: "jason",
          quote:
            "Von Observability bis Incident-Response liefert das Team Enterprise-Präzision für Builder überall.",
          name: "Jason",
          role: "CTO, VaultScope",
        },
      ],
    },
    solutions: {
      nodes: {
        title: "Infrastruktur-Spezifikationen",
        description: "Alle Services laufen auf unseren Enterprise-Grade-Nodes.",
        specs: [
          { key: "processor", name: "Prozessor", spec: "Intel Xeon W-2295", detail: "18 Kerne / 36 Threads" },
          { key: "memory", name: "Arbeitsspeicher", spec: "128 GB DDR4 ECC", detail: "4× 32 GB Registered ECC" },
          { key: "storage", name: "Speicher", spec: "2 TB Enterprise-HDD", detail: "High-Performance-SATA" },
          { key: "network", name: "Netzwerk", spec: "1 Gbit/s unlimitiert", detail: "Konstante Hochgeschwindigkeits-Anbindung" },         
          { key: "processor", name: "Prozessor", spec: "AMD Epyc 7401P", detail: "24 cores / 48 threads" },
          { key: "memory", name: "RAM", spec: "128 GB DDR4 ECC", detail: "4× 32 GB Registered ECC" },
          { key: "storage", name: "Speicher", spec: "2x 2TB Datacenter SSD (RAID 1)", detail: "High-performance SATA" },
          { key: "network", name: "Netzwerk", spec: "1 Gbit/s unlimitiert", detail: "Konstante Hochgeschwindigkeits-Anbindung" }
        ],
      },
      freePlan: {
        title: "Kostenloser Hosting-Tarif",
        description: "Vollständig kostenloses Containertier mit Cloudflare-Schutz, Backups und Observability out of the box.",
        features: [
          { key: "cpuShare", label: "40 % CPU • 0,4 vCores" },
          { key: "memory", label: "512 MiB RAM" },
          { key: "storage", label: "5120 MiB SSD-Speicher" },
          { key: "ipv4", label: "Geteilte IPv4" },
          { key: "ddos", label: "DDoS-Schutz inklusive" },
          { key: "traffic", label: "Unmetered Traffic" },
          { key: "uplink", label: "Geteilter 1-Gbit/s-Uplink" },
        ],
        price: "0 €",
        priceCaption: "Vollständig kostenlos",
        ctaLabel: "Kostenlosen Server sichern",
        ctaHref: "https://pay.vaultscope.dev/products/free-server",
      },
      custom: {
        title: "Individuelle Infrastruktur-Lösungen",
        description: "Arbeite mit unserem Team zusammen, um exakt die Infrastruktur zu entwickeln, die deine Workloads benötigen.",
        cards: [
          {
            key: "vps",
            title: "Virtual Private Server",
            description: "Anpassbare VPS mit dedizierten Ressourcen",
            features: [
              "Konfigurierbare CPU-Zuteilungen",
              "Flexible RAM-Profile",
              "Individuelle Storage-Layouts",
              "Voller Root-Zugriff",
              "Freie Betriebssystemwahl",
              "24/7-Experten-Support",
            ],
          },
          {
            key: "dedicated",
            title: "Dedicated Server",
            description: "Enterprise-Bare-Metal mit voller Kontrolle",
            features: [
              "Individuelle Hardware-Auswahl",
              "Exklusive Ressourcenkontrolle",
              "Flexible Konfigurationsoptionen",
              "Premium-Netzwerkrouten",
              "Erweiterte Security-Add-ons",
              "Priorisierte SLAs",
            ],
          },
        ],
        notAvailable: "BALD VERFÜGBAR",
      },
    },
    footer: {
      sections: {
        resources: {
          title: "Ressourcen",
          links: {
            documentation: "Dokumentation",
            controlPanel: "Control Panel",
            payment: "Billing-Portal / Registrierung",
            status: "Status",
            features: "Features",
          },
        },
        socials: {
          title: "Soziale Kanäle",
          links: {
            mainServer: "Discord",
            github: "GitHub",
          },
        },
        software: {
          title: "Technologien",
          links: {
            syncor: "Syncor",
          },
        },
        infrastructure: {
          title: "Infrastruktur",
          links: {
            pricing: "Preise",
            security: "Sicherheit",
            minecraft: "Minecraft",
            services: "Services",
          },
        },
        legal: {
          title: "Rechtliches",
          links: {
            privacy: "Datenschutz",
            terms: "Nutzungsbedingungen",
            acceptableUse: "Richtlinie zur zulässigen Nutzung",
            fairUsage: "Fair-Usage-Richtlinie",
            sla: "Service Level Agreement",
            cookiePolicy: "Cookie-Richtlinie",
          },
        },
      },
      copyright:
        "© 2025 VaultScope. Alle Rechte vorbehalten. Kostenloses Hosting auf Enterprise-Infrastruktur.",
    },
    status: {
      loading: "Systemstatus wird geprüft…",
      error: "Status nicht verfügbar",
      healthy: "Alle Systeme betriebsbereit",
      degraded: "Leistung eingeschränkt",
      tooltip: "Aktualisiert {time} · Median-Latenz {latency} ms",
    },
    cookieConsent: {
      body: {
        intro:
          "Wir verwenden Cookies, um dein Erlebnis zu verbessern, Inhalte zu personalisieren und unseren Traffic zu analysieren.",
        readMore: {
          beforeLink: "Mehr dazu findest du in unserer",
          afterLink: ".",
        },
        linkText: "Datenschutzerklärung",
      },
      actions: {
        reject: "Alle ablehnen",
        accept: "Alle akzeptieren",
      },
    },
  },
  fr: {
    common: {
      skipToContent: "Aller au contenu principal",
      loading: "Chargement…",
      backToTop: "Retour en haut",
    },
    header: {
      brand: "VaultScope",
      language: {
        label: "Langue",
      },
      nav: {
        home: "VaultScope",
        features: "Fonctionnalités",
        testimonials: "Témoignages",
        pricing: "Tarifs",
        community: "Communauté",
        documentation: "Documentation",
        about: "À propos",
        services: "Services",
        status: "Statut",
        signup: "Inscription",
        login: "Connexion",
      },
      actions: {
        signIn: "Se connecter",
        getStarted: "Commencer",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
        menuTitle: "Menu",
      },
    },
    servicesPage: {
      hero: {
        badge: "Services gérés",
        title: "Une plateforme de services taillée sur mesure",
        description:
          "Orchestrez votre stack sur l'infrastructure automation-first de VaultScope : hôtes Docker renforcés, ingress Cloudflare et observabilité native.",
        ctas: {
          primary: { label: "Consulter les playbooks de déploiement", href: "/docs/getting-started" },
          secondary: { label: "Discuter avec notre équipe", href: "https://discord.gg/wK8UZ7AAmc" },
        },
        metrics: [
          {
            label: "Langages",
            value: "9 runtimes",
            description: "Node.js, Python, Rust, Java, Go, C#, Elixir, Lua et Dart prêts à être déployés.",
          },
          {
            label: "Bases de données",
            value: "3 moteurs",
            description: "Clusters gérés pour MongoDB, PostgreSQL et MariaDB inclus.",
          },
          {
            label: "Temps de déploiement",
            value: "< 5 minutes",
            description: "Du premier accès au panneau à un conteneur monitoré derrière Cloudflare.",
          },
        ],
        preview: {
          eyebrow: "Ce que vous obtenez",
          title: "Orchestration pensée pour la vélocité",
          description:
            "Notre équipe SRE maintient chaque hôte patché, observé et prêt à monter en charge – vous restez concentré sur la livraison.",
          points: [
            "Profils Docker opiniâtres pour workloads applicatifs, jeux et automatisation",
            "Routage propulsé par Cloudflare avec templates de reverse proxy prêts à l'emploi",
            "Télémétrie temps réel vers Loki et Prometheus sans câblage supplémentaire",
          ],
        },
      },
      highlights: {
        title: "Au-delà d'un simple hébergement",
        description:
          "Les services VaultScope réunissent infrastructure, automatisation et observabilité dans une expérience premium.",
        items: [
          {
            key: "orchestratedPlaybooks",
            title: "Playbooks orchestrés",
            description: "Provisionnez des serveurs avec des blueprints Git et une automatisation du cycle de vie maîtrisée.",
            icon: "orchestration",
          },
          {
            key: "resilience",
            title: "Culture fiabilité",
            description: "Ingress Cloudflare, patchs automatisés et runbooks d'incident assurent une disponibilité transparente.",
            icon: "reliability",
          },
          {
            key: "velocity",
            title: "Vélocité débloquée",
            description: "Installateurs en un clic et synchronisation Git automatique maintiennent les lancements sous cinq minutes.",
            icon: "velocity",
          },
          {
            key: "observability",
            title: "Observabilité native",
            description: "Tableaux de bord, logs et alertes aboutissent à Loki et Prometheus sans câblage supplémentaire.",
            icon: "observability",
          },
        ],
      },
      stack: {
        title: "Une couverture stack alignée sur vos pratiques",
        description:
          "Provisionnez des conteneurs adaptés à vos runtimes, outils IDE, bases de données et pipelines de télémétrie favoris.",
        categories: [
          {
            key: "languages",
            title: "Langages & runtimes",
            description: "Lancez des environnements avec support moderne et presets de frameworks sélectionnés.",
            items: ["Node.js", "Python", "Java", "Go", "Rust", "C#", "Elixir", "Lua", "Dart"],
          },
          {
            key: "tools",
            title: "Outils",
            description: "Travaillez dans des espaces de développement hébergés directement depuis le navigateur.",
            items: ["Visual Studio Code Server"],
          },
          {
            key: "databases",
            title: "Bases de données",
            description: "Associez vos services à des bases entièrement gérées.",
            items: ["MongoDB", "PostgreSQL", "MariaDB"],
          },
          {
            key: "monitoring",
            title: "Monitoring & tracing",
            description: "Collectez la télémétrie prête pour l'alerte, la réponse incident et les revues de SLO.",
            items: ["Loki", "Prometheus"],
          },
        ],
      },
      features: {
        title: "Capacités de plateforme incluses avec chaque service",
        description:
          "Chaque workload profite de nos playbooks orientés automatisation pour déployer plus vite et opérer sereinement.",
        items: [
          {
            key: "reverseProxy",
            title: "Reverse proxies managés",
            description: "Publiez des schémas d'ingress prêts pour la production avec TLS automatique et gestion du trafic intégrée.",
            icon: "reverseProxy",
            href: "/docs/reverse-proxy",
            linkLabel: "Consulter le guide reverse proxy",
          },
          {
            key: "subdomains",
            title: "Routage des sous-domaines instantané",
            description:
              "Attribuez des sous-domaines brandés aux nouveaux services sans toucher au DNS ni ouvrir de ticket.",
            icon: "subdomains",
            href: "/docs/subdomains",
            linkLabel: "Configurer le routage des sous-domaines",
          },
          {
            key: "cloudflareDdos",
            title: "Protection DDoS via Cloudflare",
            description: "Le trafic entrant reste protégé derrière le réseau anycast mondial de Cloudflare et son routage intelligent.",
            icon: "cloudflareDdos",
          },
          {
            key: "docker",
            title: "Serveurs pilotés par Docker",
            description: "Chaque workload tourne dans des profils Docker durcis pour des montées en charge, retours arrière et reprises prévisibles.",
            icon: "docker",
          },
          {
            key: "oneClickInstall",
            title: "Installations en un clic",
            description: "Déployez les stacks populaires en quelques minutes grâce à des templates et tâches automatisées.",
            icon: "oneClickInstall",
          },
          {
            key: "freeTier",
            title: "Free tier pour tous les services",
            description:
              "Tous les services démarrent sur le free tier de niveau entreprise présenté sur notre page d'accueil — aucun plan payant requis.",
            icon: "freeTier",
          },
          {
            key: "gigabitUplink",
            title: "Uplink partagé 1 Gbit/s",
            description: "Réseau constant avec uplink gigabit optimisé pour la faible latence et la concurrence.",
            icon: "gigabitUplink",
          },
          {
            key: "autoUpdates",
            title: "Mises à jour pilotées par Git",
            description:
              "Récupérez et déployez automatiquement les derniers commits de votre dépôt GitHub sans synchronisation manuelle.",
            icon: "autoUpdates",
          },
        ],
      },
      workflow: {
        title: "Déroulement des services gérés",
        description: "Trois étapes pour des déploiements rapides, observables et prêts à monter en charge.",
        steps: [
          {
            key: "design",
            title: "Design & blueprint",
            description: "Nous recueillons vos contraintes workload, profils utilisateurs, déclencheurs de montée en charge et posture de sécurité.",
            result: "Recevez un blueprint de service détaillant infrastructure, réseau et automatisation.",
          },
          {
            key: "launch",
            title: "Lancement en quelques minutes",
            description: "Provisionnement des nœuds Docker, bases de données et ingress Cloudflare via templates opinionés.",
            result: "Image conteneur en ligne avec reverse proxy, sous-domaine et monitoring activés.",
          },
          {
            key: "operate",
            title: "Opérer et faire évoluer",
            description: "Sync Git continu, patchs proactifs et télémétrie maintiennent la production résiliente.",
            result: "Mises à jour automatisées et boucles d'insights pour itérer sans pompiers.",
          },
        ],
      },
      freeTier: {
        title: "Commencez gratuitement, restez prêts pour la production",
        description:
          "Chaque environnement tourne sur du matériel enterprise avec observabilité et sécurité préconfigurées. Quand les offres payantes arriveront, vos déploiements gratuits resteront en ligne sans changement.",
        note: "Les plans payants ne sont pas encore disponibles – profitez de la plateforme gratuite pendant que nous collectons des retours terrain.",
      },
    },
    servicesPageV2: {
      hero: {
        badge: "Offre de services",
        title: "Infrastructure managée pour les builders et leurs communautés",
        description:
          "Déployez applications, bases de données et workloads automatisés sur notre infrastructure orientée automatisation. Commencez gratuitement avec les serveurs de code et évoluez avec un réseau protégé par Cloudflare quand vous en avez besoin.",
        highlights: ["Serveurs de code gratuits", "Protection DDoS Cloudflare", "Réseau 1 Gbit/s"],
        ctas: {
          primary: { label: "Lancer un serveur de code gratuit", href: "https://pay.vaultscope.dev/products/free-server" },
          secondary: { label: "Explorer la documentation", href: "/docs" },
        },
      },
      coding: {
        badge: "Free Tier",
        title: "Serveurs de code — gratuits pour toujours",
        description:
          "Démarrez des conteneurs dédiés à vos langages, des bases de données managées et une observabilité intégrée sans carte bancaire. Chaque workspace bénéficie de l'ingress Cloudflare, de sauvegardes et du monitoring.",
        specsTitle: "Ressources incluses",
        featuresTitle: "Pourquoi choisir nos serveurs de code",
        features: [
          "40 % de vCPU partagée, 512 MiB de RAM et 5 GiB de SSD par workspace",
          "Templates prêts à l'emploi pour les langages, bases de données et outils développeur populaires",
          "Réseau protégé par Cloudflare avec IPv4 mutualisée et trafic illimité",
          "Observabilité prête à l'emploi grâce à Prometheus et Loki",
        ],
        serverTypesTitle: "Templates prêts à lancer",
        serverTypes: [
          {
            title: "Langages & runtimes",
            items: ["Java", "Node.js", "C / C#", "Lua", "Python", "Elixir", "Go", "Rust", "Dart"],
          },
          {
            title: "Bases de données",
            items: ["MongoDB", "PostgreSQL", "MariaDB"],
          },
          {
            title: "Outils développeur",
            items: ["Visual Studio Code Web"],
          },
          {
            title: "Observabilité",
            items: ["Prometheus", "Loki"],
          },
        ],
        note: "Chaque conteneur inclut une IPv4 mutualisée, la protection DDoS Cloudflare et un trafic illimité.",
        ctas: {
          primary: { label: "Obtenir votre conteneur gratuit", href: "https://pay.vaultscope.dev/products/free-server" },
          secondary: { label: "Lire le guide des serveurs de code", href: "/docs/coding-servers" },
        },
      },
      contact: {
        title: "Besoin d'une solution sur mesure ?",
        description:
          "Nous concevons des environnements personnalisés pour studios de jeux, équipes plateforme et projets communautaires. Contactez-nous pour dimensionner la bonne infrastructure.",
        items: [
          {
            label: "Discuter avec notre équipe sur Discord",
            description: "Rejoignez la communauté et obtenez des conseils d'architecture sur #infrastructure.",
            href: "https://discord.gg/wK8UZ7AAmc",
          },
          {
            label: "Demander une infrastructure dédiée",
            description: "Écrivez à support@vaultscope.dev pour des besoins dédiés, GPU ou conformes.",
            href: "mailto:support@vaultscope.dev",
          },
          {
            label: "Consulter les playbooks d'automatisation",
            description: "Guides de déploiement, modèles de reverse proxy et automatisation du cycle de vie.",
            href: "/docs",
          },
        ],
      },
    },
    hero: {
      badge: "Infrastructure d'entreprise offerte",
      title: "La puissance d'entreprise pour chaque équipe",
      description:
        "Lancez-vous sur notre hébergement d'entreprise gratuit ou collaborez avec nos architectes pour concevoir des environnements VPS et bare metal taillés pour vos charges de travail.",
      highlights: [
        "Free tier permanent",
        "Réseau mondial 1 Gbit/s",
        "Bouclier DDoS Cloudflare",
      ],
      ctas: {
        primary: "Créer mon serveur",
        secondary: "Explorer la documentation",
      },
      bottomHighlights: [
        "Matériel de niveau entreprise",
        "Protection DDoS",
        "SLA disponibilité 99,9 %",
      ],
    },
    features: {
      title: "Fonctionnalités",
      description:
        "Tout ce qu'il faut pour délivrer des serveurs de jeux et d'applications résilients : rapidité, automatisation et retours de la communauté.",
      items: [
        { key: "freeTierHosting", title: "Hébergement free tier", description: "Déployez des ressources prêtes pour la production sans carte bancaire." },
        { key: "oneClickInstall", title: "Installations en un clic", description: "Mettez en ligne en quelques minutes grâce à nos installateurs sélectionnés." },
        { key: "ddosProtection", title: "Protection DDoS Cloudflare", description: "Atténuation en périphérie via le réseau Cloudflare." },
        { key: "dailyBackups", title: "Sauvegardes quotidiennes automatisées", description: "Sécurisez vos données avec des instantanés sans intervention." },
        { key: "instantScaling", title: "Scalabilité instantanée", description: "Augmentez CPU, RAM ou stockage dès que nécessaire." },
        { key: "apiAccess", title: "Accès API & clés", description: "Pilotez chaque environnement via des tokens sécurisés." },
        { key: "sshAccess", title: "Accès SSH (offre payante)", description: "Débloquez le shell sur les offres payantes." },
        { key: "ipv4", title: "Options IPv4 dédiées", description: "Ajoutez des adresses dédiées lorsque la conformité l'exige." },
        { key: "network", title: "Réseau 1 Gbit/s", description: "Connectivité basse latence partout." },
        { key: "monitoring", title: "Tableau de bord de supervision", description: "Suivez CPU, mémoire et bande passante en temps réel." },
        { key: "logs", title: "Journaux en direct", description: "Streamez la console sans rafraîchir." },
        { key: "rbac", title: "Contrôle d'accès basé sur les rôles", description: "Invitez vos équipes avec le principe du moindre privilège." },
        { key: "cron", title: "Tâches planifiées & cron", description: "Automatisez vos jobs récurrents en toute souplesse." },
        { key: "fileManager", title: "Interface de gestion de fichiers", description: "Téléchargez, modifiez et organisez vos fichiers depuis le panneau." },
        { key: "gitDeploy", title: "Déploiements pilotés par Git", description: "Synchronisez chaque push directement sur votre serveur." },
        { key: "templates", title: "Modèles et presets de serveurs", description: "Démarrez avec des plans éprouvés pour chaque workload." },
        { key: "marketplace", title: "Marketplace de plugins & mods", description: "Découvrez les extensions de la communauté en un clic." },
        { key: "uptime", title: "Page de statut publique", description: "Partagez la disponibilité en temps réel et l'historique des incidents." },
        { key: "support", title: "Support intégré", description: "Créez et suivez vos tickets sans quitter le panneau." },
        { key: "community", title: "Communauté Discord", description: "Échangez avec les builders qui utilisent VaultScope." },
        { key: "referrals", title: "Récompenses de parrainage", description: "Gagnez des crédits pour chaque invitation réussie." },
        { key: "promoCodes", title: "Promotions & remises", description: "Appliquez vos codes promo directement au paiement." },
        { key: "sla", title: "SLA 99,0 % de disponibilité", description: "Engagement entreprise sur la disponibilité." },
      ],
    },
    testimonials: {
      title: "Pourquoi les équipes choisissent VaultScope",
      description:
        "La parole au leadership qui a refondé VaultScope pour célébrer la résilience, la rapidité et les succès partagés avec la communauté.",
      items: [
        {
          key: "anton",
          quote:
            "La feuille de route infrastructure de VaultScope nous permet de lancer de nouvelles charges sans renégocier les capacités chaque mois.",
          name: "Anton Schmidt",
          role: "CEO, VaultScope",
        },
        {
          key: "ruben",
          quote:
            "Leur culture automation-first nous livre des environnements sur mesure en quelques heures plutôt qu'en semaines : un véritable accélérateur pour notre équipe plateforme.",
          name: "Rúben Fernandes",
          role: "Head of Infrastructure, VaultScope",
        },
        {
          key: "jason",
          quote:
            "De l'observabilité à la réponse aux incidents, l'équipe apporte la rigueur des fournisseurs enterprise aux builders du monde entier.",
          name: "Jason",
          role: "CTO, VaultScope",
        },
      ],
    },
    solutions: {
      nodes: {
        title: "Spécifications des nœuds d'infrastructure",
        description: "Chaque service s'exécute sur nos nœuds d'infrastructure de niveau entreprise.",
        specs: [
          { key: "processor", name: "Processeur", spec: "Intel Xeon W-2295", detail: "18 cœurs / 36 threads" },
          { key: "memory", name: "Mémoire", spec: "128 Go DDR4 ECC", detail: "4× 32 Go Registered ECC" },
          { key: "storage", name: "Stockage", spec: "2 To HDD enterprise", detail: "SATA haute performance" },
          { key: "network", name: "Réseau", spec: "1 Gbit/s illimité", detail: "Connectivité haut débit constante" },
        ],
      },
      freePlan: {
        title: "Offre d'hébergement gratuite",
        description: "Offre entièrement gratuite avec protection Cloudflare, sauvegardes et observabilité intégrées.",
        features: [
          { key: "cpuShare", label: "40 % de CPU • 0,4 vCores" },
          { key: "memory", label: "512 MiB de RAM" },
          { key: "storage", label: "5120 MiB de stockage SSD" },
          { key: "ipv4", label: "IPv4 mutualisée" },
          { key: "ddos", label: "Protection DDoS incluse" },
          { key: "traffic", label: "Trafic illimité" },
          { key: "uplink", label: "Uplink partagé 1 Gbit/s" },
        ],
        price: "0 €",
        priceCaption: "Entièrement gratuit",
        ctaLabel: "Obtenir votre serveur gratuit",
        ctaHref: "https://pay.vaultscope.dev/products/free-server",
      },
      custom: {
        title: "Solutions d'infrastructure sur mesure",
        description: "Collaborez avec nos architectes pour concevoir exactement l'infrastructure qu'exigent vos workloads.",
        cards: [
          {
            key: "vps",
            title: "Serveurs privés virtuels",
            description: "Solutions VPS personnalisables avec ressources dédiées",
            features: [
              "Allocations CPU configurables",
              "Profils de RAM flexibles",
              "Plans de stockage sur mesure",
              "Accès root complet",
              "Choix du système d'exploitation",
              "Support expert 24h/24 7j/7",
            ],
          },
          {
            key: "dedicated",
            title: "Serveurs dédiés",
            description: "Infrastructure bare metal de niveau entreprise",
            features: [
              "Sélection matérielle personnalisée",
              "Contrôle exclusif des ressources",
              "Options de configuration flexibles",
              "Routes réseau premium",
              "Modules de sécurité avancés",
              "SLAs de réponse prioritaires",
            ],
          },
        ],
        notAvailable: "PROCHAINEMENT",
      },
    },
    footer: {
      sections: {
        resources: {
          title: "Ressources",
          links: {
            documentation: "Documentation",
            controlPanel: "Tableau de bord",
            payment: "Portail de facturation / Inscription",
            status: "Statut",
            features: "Fonctionnalités",
          },
        },
        socials: {
          title: "Réseaux sociaux",
          links: {
            mainServer: "Discord",
            github: "GitHub",
          },
        },
        software: {
          title: "Technologies",
          links: {
            syncor: "Syncor",
          },
        },
        infrastructure: {
          title: "Infrastructure",
          links: {
            pricing: "Tarifs",
            security: "Sécurité",
            minecraft: "Minecraft",
            services: "Services",
          },
        },
        legal: {
          title: "Légal",
          links: {
            privacy: "Politique de confidentialité",
            terms: "Conditions d'utilisation",
            acceptableUse: "Politique d'utilisation acceptable",
            fairUsage: "Politique d'usage équitable",
            sla: "Service Level Agreement",
            cookiePolicy: "Politique relative aux cookies",
          },
        },
      },
      copyright:
        "© 2025 VaultScope. Tous droits réservés. Hébergement gratuit propulsé par une infrastructure d'entreprise.",
    },
    status: {
      loading: "Vérification du statut du système…",
      error: "Statut indisponible",
      healthy: "Tous les systèmes sont opérationnels",
      degraded: "Performances dégradées",
      tooltip: "Mis à jour à {time} · Latence médiane {latency} ms",
    },
    cookieConsent: {
      body: {
        intro:
          "Nous utilisons des cookies pour enrichir votre expérience, personnaliser le contenu et analyser notre trafic.",
        readMore: {
          beforeLink: "Consultez notre",
          afterLink: "pour en savoir plus.",
        },
        linkText: "Politique de confidentialité",
      },
      actions: {
        reject: "Tout refuser",
        accept: "Tout accepter",
      },
    },
  }
};

export function isLanguage(value: string | null | undefined): value is Language {
  return typeof value === "string" && (SUPPORTED_LANGUAGE_SET.has(value as Language) as boolean)
}

function getNestedValue(record: TranslationRecord | undefined, key: string) {
  if (!record) return undefined
  return key.split(".").reduce<unknown>((acc, current) => {
    if (acc === undefined || acc === null) return undefined
    if (typeof acc !== "object") return undefined
    if (!(current in acc)) return undefined
    return (acc as Record<string, unknown>)[current]
  }, record)
}

export function resolveTranslation(language: Language, key: string) {
  const attempt = getNestedValue(translations[language], key)
  if (attempt !== undefined) {
    return attempt
  }
  return getNestedValue(translations[DEFAULT_LANGUAGE], key)
}

export function formatMessage(template: string, values: Record<string, string | number> = {}) {
  return template.replace(/\{(\w+)\}/g, (match, token) => {
    if (token in values) {
      return String(values[token])
    }
    return match
  })
}
