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
      loading: "Loading...",
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
        status: "Status",
        signup: "Sign Up",
        login: "Login",
      },
      actions: {
        signIn: "Sign In",
        getStarted: "Get Started",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        menuTitle: "Menu",
      },
    },
    hero: {
      badge: "Free Enterprise-Grade Infrastructure",
      title: "Enterprise Infrastructure For Everyone",
      description:
        "Start with our free enterprise-grade hosting solution, or work with our team to design custom VPS and dedicated server configurations tailored to your needs.",
      highlights: [
        "Free Tier Available",
        "1 Gbps Network",
        "Cloudflare DDoS",
      ],
      ctas: {
        primary: "Configure Your Server",
        secondary: "Browse Documentation",
      },
      bottomHighlights: [
        "Enterprise Hardware",
        "DDoS Protected",
        "99.9% Uptime",
      ],
    },
    features: {
      title: "Features",
      description: "Everything you need to run reliable game and application servers — simple, fast, and community-driven.",
      items: [
        { key: "freeTierHosting", title: "Free tier hosting", description: "Start for free with our entry level plan." },
        { key: "oneClickInstall", title: "One-click server install", description: "Deploy servers quickly with prebuilt installers." },
        { key: "ddosProtection", title: "DDoS protection", description: "Edge protection powered by Cloudflare." },
        { key: "dailyBackups", title: "Daily automated backups", description: "Automatic daily snapshots to protect your data." },
        { key: "instantScaling", title: "Instant server scaling", description: "Scale resources instantly when you need them." },
        { key: "apiAccess", title: "API access / API keys", description: "Programmatic control with secure API tokens." },
        { key: "sshAccess", title: "SSH access (paid)", description: "SSH access available on paid plans." },
        { key: "ipv4", title: "IPv4 / Dedicated IP", description: "Optional dedicated IPv4 addresses." },
        { key: "network", title: "1 Gbps network", description: "Fast network connectivity for low-latency services." },
        { key: "monitoring", title: "Resource monitoring dashboard", description: "Track CPU, RAM and network in real time." },
        { key: "logs", title: "Real-time logs (console)", description: "View server console outputs instantly." },
        { key: "rbac", title: "Role-based access control", description: "Team accounts with role-based permissions." },
        { key: "cron", title: "Scheduled tasks / cron jobs", description: "Schedule recurring tasks with ease." },
        { key: "fileManager", title: "File manager UI", description: "Manage files directly from the panel." },
        { key: "gitDeploy", title: "Git deploy / auto-deploy", description: "Deploy from your repository automatically." },
        { key: "templates", title: "Server templates / presets", description: "Quickly create servers from templates." },
        { key: "marketplace", title: "Marketplace for mods/plugins", description: "Find and install community plugins." },
        { key: "uptime", title: "Uptime status page", description: "Public status with incident history." },
        { key: "support", title: "Integrated support / ticketing", description: "Open and track support tickets." },
        { key: "community", title: "Community Discord", description: "Join our Discord community." },
        { key: "referrals", title: "Referral program / credits", description: "Earn credits by referring friends." },
        { key: "promoCodes", title: "Promo codes & discounts", description: "Apply promo codes at checkout." },
        { key: "sla", title: "SLA: 99.0% uptime", description: "Service-level commitment for uptime." },
      ],
    },
    testimonials: {
      title: "Why teams stay with VaultScope",
      description:
        "Real stories from the leadership group who rebuilt the platform to champion reliability, speed, and shared success with our community.",
      items: [
        {
          key: "anton",
          quote:
            "VaultScope's infrastructure roadmap gives us the confidence to ship new workloads without renegotiating capacity every month.",
          name: "Anton Schmidt",
          role: "CEO, VaultScope",
        },
        {
          key: "ruben",
          quote:
            "Their automation-first mentality means standing up bespoke environments happens in hours, not weeks. It's been a huge unlock for the platform team.",
          name: "Rúben Fernandes",
          role: "Head of Infrastructure, VaultScope",
        },
        {
          key: "jason",
          quote:
            "From observability to incident readiness, the team operates with the rigor you expect from enterprise providers—now accessible to builders everywhere.",
          name: "Jason",
          role: "CTO, VaultScope",
        },
      ],
    },
    solutions: {
      nodes: {
        title: "Infrastructure Node Specifications",
        description: "All services are powered by our enterprise-grade infrastructure nodes",
        specs: [
          { key: "processor", name: "Processor", spec: "Intel Xeon W-2295", detail: "18 Cores / 36 Threads" },
          { key: "memory", name: "Memory", spec: "128GB DDR4 ECC", detail: "4x 32GB Registered ECC" },
          { key: "storage", name: "Storage", spec: "2TB Enterprise HDD", detail: "High-Performance SATA" },
          { key: "network", name: "Network", spec: "1 Gbps Unmetered", detail: "High-Speed Connection" },
        ],
      },
      freePlan: {
        title: "Free Hosting Plan",
        description: "Start with our free tier, powered by enterprise infrastructure and protected by Cloudflare",
        features: [
          { key: "cpuShare", label: "40% CPU Share" },
          { key: "memory", label: "512MB RAM" },
          { key: "storage", label: "5GB Storage" },
          { key: "ipv4", label: "Shared IPv4" },
          { key: "ddos", label: "DDoS Protection" },
          { key: "traffic", label: "Unmetered Traffic" },
        ],
        price: "$0",
        priceCaption: "Forever",
        cta: "Get Started Free",
      },
      custom: {
        title: "Custom Infrastructure Solutions",
        description: "Work with our team to design the perfect infrastructure solution for your needs",
        cards: [
          {
            key: "vps",
            title: "Virtual Private Servers",
            description: "Customizable VPS solutions with dedicated resources",
            features: [
              "Configurable CPU Allocation",
              "Flexible RAM Options",
              "Custom Storage Configuration",
              "Root Access",
              "Choice of Operating System",
              "24/7 Support",
            ],
          },
          {
            key: "dedicated",
            title: "Dedicated Servers",
            description: "Enterprise-grade dedicated infrastructure",
            features: [
              "Custom Hardware Selection",
              "Full Resource Control",
              "Flexible Configuration",
              "Premium Network Access",
              "Enhanced Security Options",
              "Priority Support",
            ],
          },
        ],
        notAvailable: "NOT AVAILABLE YET",
      },
    },
    footer: {
      description: "Free enterprise hosting solutions built for security, performance, and scale.",
      statusLink: "View detailed status",
      stats: {
        cpu: "40% CPU",
        ram: "512MB RAM",
        storage: "5120MB ROM",
        network: "1Gbps Network",
      },
      sections: {
        resources: {
          title: "Resources",
          links: {
            documentation: "Documentation",
            community: "Community",
            controlPanel: "Control Panel",
            payment: "Payment Panel / Register",
            status: "Status",
            features: "Features",
          },
        },
        infrastructure: {
          title: "Infrastructure",
          links: {
            pricing: "Pricing",
            security: "Security",
          },
        },
        legal: {
          title: "Legal",
          links: {
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            acceptableUse: "Acceptable Use",
          },
        },
      },
      copyright: "© 2025 VaultScope. All rights reserved. Free hosting powered by enterprise infrastructure.",
    },
    status: {
      loading: "Checking system status…",
      error: "Status offline",
      healthy: "Systems operational",
      degraded: "Degraded performance",
      tooltip: "Updated {time} · Median latency {latency}ms",
    },
    cookieConsent: {
      body: {
        intro: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.",
        readMore: {
          beforeLink: "Please read our",
          afterLink: "for more information.",
        },
        linkText: "Privacy Policy",
      },
      actions: {
        reject: "Reject All",
        accept: "Accept All",
      },
    },
  },
  de: {
    common: {
      skipToContent: "Zum Inhalt springen",
      loading: "Lädt…",
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
        documentation: "Docs",
        about: "Über uns",
        status: "Status",
        signup: "Registrieren",
        login: "Login",
      },
      actions: {
        signIn: "Anmelden",
        getStarted: "Loslegen",
        openMenu: "Menü öffnen",
        closeMenu: "Menü schließen",
        menuTitle: "Menü",
      },
    },
    hero: {
      badge: "Kostenlose Enterprise-Infrastruktur",
      title: "Enterprise-Infrastruktur für jeden",
      description:
        "Starte kostenlos mit unserer Enterprise-Hosting-Lösung oder lass dir von unserem Team eine maßgeschneiderte VPS- oder Dedicated-Server-Konfiguration erstellen.",
      highlights: [
        "Kostenlos verfügbar",
        "1-Gbit/s-Netzwerk",
        "Cloudflare-DDoS-Schutz",
      ],
      ctas: {
        primary: "Server konfigurieren",
        secondary: "Dokumentation ansehen",
      },
      bottomHighlights: [
        "Enterprise-Hardware",
        "DDoS-geschützt",
        "99,9 % Uptime",
      ],
    },
    features: {
      title: "Features",
      description: "Alles für zuverlässige Game- und Application-Server – einfach, schnell und Community-getrieben.",
      items: [
        { key: "freeTierHosting", title: "Kostenloses Hosting", description: "Starte kostenlos mit unserem Einstiegstarif." },
        { key: "oneClickInstall", title: "One-Click-Installation", description: "Server mit vorgefertigten Installern schnell deployen." },
        { key: "ddosProtection", title: "DDoS-Schutz", description: "Edge-Protection powered by Cloudflare." },
        { key: "dailyBackups", title: "Tägliche Backups", description: "Automatische Snapshots schützen deine Daten." },
        { key: "instantScaling", title: "Sofortiges Scaling", description: "Ressourcen on-demand skalieren." },
        { key: "apiAccess", title: "API-Zugriff", description: "Programmgesteuerte Kontrolle mit sicheren API-Keys." },
        { key: "sshAccess", title: "SSH-Zugriff (Premium)", description: "SSH-Zugriff in Premium-Tarifen verfügbar." },
        { key: "ipv4", title: "Dedizierte IPv4", description: "Optional dedizierte IPv4-Adressen hinzubuchen." },
        { key: "network", title: "1-Gbit/s-Netzwerk", description: "Schnelle Anbindung für niedrige Latenzen." },
        { key: "monitoring", title: "Monitoring-Dashboard", description: "CPU, RAM und Netzwerk in Echtzeit überwachen." },
        { key: "logs", title: "Echtzeit-Logs", description: "Server-Console-Outputs direkt einsehen." },
        { key: "rbac", title: "Rollenbasierte Zugriffskontrolle", description: "Team-Accounts mit granularen Berechtigungen." },
        { key: "cron", title: "Cronjobs", description: "Wiederkehrende Tasks einfach planen." },
        { key: "fileManager", title: "Dateimanager", description: "Dateien direkt im Panel verwalten." },
        { key: "gitDeploy", title: "Git-Deployment", description: "Automatisches Deployment aus deinem Repository." },
        { key: "templates", title: "Server-Templates", description: "Server blitzschnell aus Vorlagen erstellen." },
        { key: "marketplace", title: "Mod- & Plugin-Marktplatz", description: "Community-Plugins finden und installieren." },
        { key: "uptime", title: "Status-Seite", description: "Öffentlicher Status mit Incident-Historie." },
        { key: "support", title: "Ticket-System", description: "Support-Tickets direkt im Panel erstellen." },
        { key: "community", title: "Discord-Community", description: "Teil unserer Discord-Community werden." },
        { key: "referrals", title: "Empfehlungsprogramm", description: "Credits durch Weiterempfehlungen verdienen." },
        { key: "promoCodes", title: "Promo-Codes", description: "Rabattcodes beim Checkout einlösen." },
        { key: "sla", title: "99 % Uptime-SLA", description: "Verbindliche Verfügbarkeitsgarantie." },
      ],
    },
    testimonials: {
      title: "Warum Teams auf VaultScope setzen",
      description:
        "Echte Einblicke vom Leadership-Team, das die Plattform für Zuverlässigkeit, Performance und gemeinsamen Erfolg neu aufgebaut hat.",
      items: [
        {
          key: "anton",
          quote:
            "Die Infrastructure-Roadmap von VaultScope gibt uns die Sicherheit, neue Workloads auszurollen, ohne monatlich über Kapazitäten zu verhandeln.",
          name: "Anton Schmidt",
          role: "CEO, VaultScope",
        },
        {
          key: "ruben",
          quote:
            "Ihr Automation-First-Ansatz bedeutet, dass maßgeschneiderte Environments in Stunden statt Wochen stehen. Ein Game-Changer für unser Platform-Team.",
          name: "Rúben Fernandes",
          role: "Head of Infrastructure, VaultScope",
        },
        {
          key: "jason",
          quote:
            "Von Observability bis Incident-Management arbeitet das Team mit der Präzision klassischer Enterprise-Provider – jetzt für alle zugänglich.",
          name: "Jason",
          role: "CTO, VaultScope",
        },
      ],
    },
    solutions: {
      nodes: {
        title: "Infrastruktur-Specs",
        description: "Alle Services laufen auf unseren Enterprise-Grade-Nodes",
        specs: [
          { key: "processor", name: "Prozessor", spec: "Intel Xeon W-2295", detail: "18 Kerne / 36 Threads" },
          { key: "memory", name: "RAM", spec: "128 GB DDR4 ECC", detail: "4× 32 GB Registered ECC" },
          { key: "storage", name: "Storage", spec: "2 TB Enterprise HDD", detail: "High-Performance SATA" },
          { key: "network", name: "Netzwerk", spec: "1 Gbit/s Flat", detail: "Hochgeschwindigkeits-Anbindung" },
        ],
      },
      freePlan: {
        title: "Kostenloser Tarif",
        description: "Starte mit unserem Free Tier – Enterprise-Infrastruktur, geschützt durch Cloudflare",
        features: [
          { key: "cpuShare", label: "40 % CPU-Anteil" },
          { key: "memory", label: "512 MB RAM" },
          { key: "storage", label: "5 GB Storage" },
          { key: "ipv4", label: "Shared IPv4" },
          { key: "ddos", label: "DDoS-Schutz" },
          { key: "traffic", label: "Unmetered Traffic" },
        ],
        price: "0 €",
        priceCaption: "Für immer",
        cta: "Kostenlos starten",
      },
      custom: {
        title: "Custom Infrastructure",
        description: "Arbeite mit unserem Team an der perfekten Infrastruktur-Lösung für deine Anforderungen",
        cards: [
          {
            key: "vps",
            title: "Virtual Private Server",
            description: "Anpassbare VPS-Lösungen mit dedizierten Ressourcen",
            features: [
              "Konfigurierbare CPU-Zuteilung",
              "Flexible RAM-Optionen",
              "Individuelles Storage-Setup",
              "Root-Zugriff",
              "Freie OS-Wahl",
              "24/7-Support",
            ],
          },
          {
            key: "dedicated",
            title: "Dedicated Server",
            description: "Enterprise-Dedicated-Infrastruktur mit voller Kontrolle",
            features: [
              "Individuelle Hardware-Auswahl",
              "Vollständige Ressourcenkontrolle",
              "Flexible Konfiguration",
              "Premium-Netzwerk-Anbindung",
              "Erweiterte Security-Optionen",
              "Priority-Support",
            ],
          },
        ],
        notAvailable: "NOCH NICHT VERFÜGBAR",
      },
    },
    footer: {
      description: "Kostenloses Enterprise-Hosting für Sicherheit, Performance und Skalierung.",
      statusLink: "Status ansehen",
      stats: {
        cpu: "40 % CPU",
        ram: "512 MB RAM",
        storage: "5120 MB Storage",
        network: "1-Gbit/s-Netzwerk",
      },
      sections: {
        resources: {
          title: "Ressourcen",
          links: {
            documentation: "Dokumentation",
            community: "Community",
            controlPanel: "Control Panel",
            payment: "Payment Portal / Registrierung",
            status: "Status",
            features: "Features",
          },
        },
        infrastructure: {
          title: "Infrastruktur",
          links: {
            pricing: "Preise",
            security: "Sicherheit",
          },
        },
        legal: {
          title: "Rechtliches",
          links: {
            privacy: "Datenschutz",
            terms: "Nutzungsbedingungen",
            acceptableUse: "Acceptable Use",
          },
        },
      },
      copyright:
        "© 2025 VaultScope. Alle Rechte vorbehalten. Kostenloses Hosting auf Enterprise-Infrastruktur.",
    },
    status: {
      loading: "Systemstatus wird geprüft…",
      error: "Status nicht erreichbar",
      healthy: "Alle Systeme betriebsbereit",
      degraded: "Eingeschränkte Performance",
      tooltip: "Aktualisiert {time} · Median-Latenz {latency} ms",
    },
    cookieConsent: {
      body: {
        intro:
          "Wir nutzen Cookies, um dein Nutzererlebnis zu verbessern, personalisierte Inhalte anzubieten und unseren Traffic zu analysieren.",
        readMore: {
          beforeLink: "Mehr dazu in unserer",
          afterLink: "",
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
      skipToContent: "Aller au contenu",
      loading: "Chargement…",
      backToTop: "Haut de page",
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
        documentation: "Docs",
        about: "À propos",
        status: "Statut",
        signup: "Inscription",
        login: "Connexion",
      },
      actions: {
        signIn: "Connexion",
        getStarted: "Commencer",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
        menuTitle: "Menu",
      },
    },
    hero: {
      badge: "Infrastructure d'entreprise gratuite",
      title: "Une infrastructure d'entreprise pour tous",
      description:
        "Commencez gratuitement avec notre solution d'hébergement professionnel ou travaillez avec notre équipe pour concevoir une configuration VPS ou serveur dédié sur mesure.",
      highlights: [
        "Offre gratuite disponible",
        "Réseau 1 Gbit/s",
        "Protection DDoS Cloudflare",
      ],
      ctas: {
        primary: "Configurer mon serveur",
        secondary: "Consulter la doc",
      },
      bottomHighlights: [
        "Matériel entreprise",
        "Protection anti-DDoS",
        "Disponibilité 99,9 %",
      ],
    },
    features: {
      title: "Fonctionnalités",
      description: "Tout ce qu'il faut pour héberger des serveurs de jeux et d'applications fiables – simple, rapide et porté par la communauté.",
      items: [
        { key: "freeTierHosting", title: "Hébergement gratuit", description: "Démarrez gratuitement avec notre offre d'entrée." },
        { key: "oneClickInstall", title: "Installation en un clic", description: "Déployez vos serveurs rapidement avec nos installeurs prêts à l'emploi." },
        { key: "ddosProtection", title: "Protection anti-DDoS", description: "Protection en périphérie propulsée par Cloudflare." },
        { key: "dailyBackups", title: "Sauvegardes quotidiennes", description: "Snapshots automatiques pour protéger vos données." },
        { key: "instantScaling", title: "Mise à l'échelle instantanée", description: "Ajustez vos ressources à la demande." },
        { key: "apiAccess", title: "Accès API", description: "Contrôle programmatique via des tokens sécurisés." },
        { key: "sshAccess", title: "Accès SSH (payant)", description: "SSH disponible sur les offres payantes." },
        { key: "ipv4", title: "IPv4 dédiée", description: "Adresses IPv4 dédiées en option." },
        { key: "network", title: "Réseau 1 Gbit/s", description: "Connexion rapide pour des services à faible latence." },
        { key: "monitoring", title: "Tableau de bord de monitoring", description: "Suivez CPU, RAM et réseau en temps réel." },
        { key: "logs", title: "Logs en temps réel", description: "Consultez les sorties de console instantanément." },
        { key: "rbac", title: "Contrôle d'accès par rôles", description: "Comptes d'équipe avec permissions granulaires." },
        { key: "cron", title: "Tâches planifiées", description: "Planifiez des tâches récurrentes facilement." },
        { key: "fileManager", title: "Gestionnaire de fichiers", description: "Gérez vos fichiers directement depuis le panel." },
        { key: "gitDeploy", title: "Déploiement Git", description: "Déploiement automatique depuis votre dépôt." },
        { key: "templates", title: "Templates de serveur", description: "Créez des serveurs rapidement à partir de modèles." },
        { key: "marketplace", title: "Marketplace de mods et plugins", description: "Installez des plugins communautaires." },
        { key: "uptime", title: "Page de statut", description: "Statut public avec historique des incidents." },
        { key: "support", title: "Système de tickets", description: "Créez et suivez vos tickets de support." },
        { key: "community", title: "Discord communautaire", description: "Rejoignez notre communauté Discord." },
        { key: "referrals", title: "Programme de parrainage", description: "Gagnez des crédits en parrainant vos proches." },
        { key: "promoCodes", title: "Codes promo", description: "Profitez de réductions au paiement." },
        { key: "sla", title: "SLA 99 % disponibilité", description: "Engagement contractuel de disponibilité." },
      ],
    },
    testimonials: {
      title: "Pourquoi les équipes choisissent VaultScope",
      description:
        "Témoignages de l'équipe dirigeante qui a reconstruit la plateforme pour garantir fiabilité, rapidité et succès partagé avec notre communauté.",
      items: [
        {
          key: "anton",
          quote:
            "La roadmap infrastructure de VaultScope nous permet de déployer de nouvelles charges de travail sans renégocier la capacité tous les mois.",
          name: "Anton Schmidt",
          role: "CEO, VaultScope",
        },
        {
          key: "ruben",
          quote:
            "Leur approche automation-first nous permet de déployer des environnements sur mesure en quelques heures, pas en semaines. Un vrai game-changer pour l'équipe plateforme.",
          name: "Rúben Fernandes",
          role: "Head of Infrastructure, VaultScope",
        },
        {
          key: "jason",
          quote:
            "De l'observabilité à la gestion des incidents, l'équipe travaille avec la rigueur qu'on attend des fournisseurs enterprise – désormais accessible à tous.",
          name: "Jason",
          role: "CTO, VaultScope",
        },
      ],
    },
    solutions: {
      nodes: {
        title: "Spécifications des nœuds",
        description: "Tous nos services fonctionnent sur des nœuds infrastructure de niveau entreprise",
        specs: [
          { key: "processor", name: "Processeur", spec: "Intel Xeon W-2295", detail: "18 cœurs / 36 threads" },
          { key: "memory", name: "RAM", spec: "128 Go DDR4 ECC", detail: "4× 32 Go ECC enregistrée" },
          { key: "storage", name: "Stockage", spec: "2 To HDD entreprise", detail: "SATA haute performance" },
          { key: "network", name: "Réseau", spec: "1 Gbit/s illimité", detail: "Connexion haut débit" },
        ],
      },
      freePlan: {
        title: "Offre gratuite",
        description: "Démarrez avec notre offre gratuite, propulsée par une infrastructure d'entreprise et protégée par Cloudflare",
        features: [
          { key: "cpuShare", label: "40 % de CPU" },
          { key: "memory", label: "512 Mo de RAM" },
          { key: "storage", label: "5 Go de stockage" },
          { key: "ipv4", label: "IPv4 partagée" },
          { key: "ddos", label: "Protection anti-DDoS" },
          { key: "traffic", label: "Trafic illimité" },
        ],
        price: "0 €",
        priceCaption: "À vie",
        cta: "Commencer gratuitement",
      },
      custom: {
        title: "Infrastructure sur mesure",
        description: "Travaillez avec notre équipe pour concevoir l'infrastructure idéale pour vos besoins",
        cards: [
          {
            key: "vps",
            title: "Serveurs privés virtuels",
            description: "Solutions VPS personnalisables avec ressources dédiées",
            features: [
              "Allocation CPU configurable",
              "Options de RAM flexibles",
              "Configuration de stockage sur mesure",
              "Accès root complet",
              "Choix du système d'exploitation",
              "Support 24h/24 7j/7",
            ],
          },
          {
            key: "dedicated",
            title: "Serveurs dédiés",
            description: "Infrastructure dédiée de niveau entreprise",
            features: [
              "Sélection matérielle personnalisée",
              "Contrôle total des ressources",
              "Configuration flexible",
              "Accès réseau premium",
              "Options de sécurité avancées",
              "Support prioritaire",
            ],
          },
        ],
        notAvailable: "BIENTÔT DISPONIBLE",
      },
    },
    footer: {
      description: "Hébergement d'entreprise gratuit conçu pour la sécurité, la performance et l'évolutivité.",
      statusLink: "Voir le statut détaillé",
      stats: {
        cpu: "40 % CPU",
        ram: "512 Mo RAM",
        storage: "5120 Mo stockage",
        network: "Réseau 1 Gbit/s",
      },
      sections: {
        resources: {
          title: "Ressources",
          links: {
            documentation: "Documentation",
            community: "Communauté",
            controlPanel: "Panneau de contrôle",
            payment: "Portail paiement / Inscription",
            status: "Statut",
            features: "Fonctionnalités",
          },
        },
        infrastructure: {
          title: "Infrastructure",
          links: {
            pricing: "Tarifs",
            security: "Sécurité",
          },
        },
        legal: {
          title: "Légal",
          links: {
            privacy: "Confidentialité",
            terms: "Conditions d'utilisation",
            acceptableUse: "Acceptable Use",
          },
        },
      },
      copyright:
        "© 2025 VaultScope. Tous droits réservés. Hébergement gratuit propulsé par une infrastructure d'entreprise.",
    },
    status: {
      loading: "Vérification du statut…",
      error: "Statut indisponible",
      healthy: "Tous les systèmes opérationnels",
      degraded: "Performances dégradées",
      tooltip: "Mis à jour à {time} · Latence médiane {latency} ms",
    },
    cookieConsent: {
      body: {
        intro:
          "Nous utilisons des cookies pour améliorer votre expérience, proposer du contenu personnalisé et analyser notre trafic.",
        readMore: {
          beforeLink: "Consultez notre",
          afterLink: "pour en savoir plus.",
        },
        linkText: "politique de confidentialité",
      },
      actions: {
        reject: "Tout refuser",
        accept: "Tout accepter",
      },
    },
  },
}

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
