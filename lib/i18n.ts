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
        ],
      },
      freePlan: {
        title: "Free hosting plan",
        description: "Start on our free tier, powered by enterprise hardware and protected by Cloudflare.",
        features: [
          { key: "cpuShare", label: "40% CPU share" },
          { key: "memory", label: "512 MB RAM" },
          { key: "storage", label: "5 GB storage" },
          { key: "ipv4", label: "Shared IPv4" },
          { key: "ddos", label: "DDoS protection" },
          { key: "traffic", label: "Unmetered traffic" },
        ],
        price: "$0",
        priceCaption: "Forever free",
        cta: "Start for free",
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
      description: "Free enterprise hosting engineered for security, performance, and scale.",
      statusLink: "Check detailed status",
      stats: {
        cpu: "40% CPU",
        ram: "512 MB RAM",
        storage: "5120 MB storage",
        network: "1 Gbps network",
      },
      sections: {
        resources: {
          title: "Resources",
          links: {
            documentation: "Documentation",
            community: "Community",
            controlPanel: "Control Panel",
            payment: "Billing Portal / Register",
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
            acceptableUse: "Acceptable Use Policy",
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
        ],
      },
      freePlan: {
        title: "Kostenloser Hosting-Tarif",
        description: "Starte im Free Tier – Enterprise-Hardware mit Cloudflare-Schutz.",
        features: [
          { key: "cpuShare", label: "40 % CPU-Anteil" },
          { key: "memory", label: "512 MB RAM" },
          { key: "storage", label: "5 GB Storage" },
          { key: "ipv4", label: "Geteilte IPv4" },
          { key: "ddos", label: "DDoS-Schutz" },
          { key: "traffic", label: "Unmetered Traffic" },
        ],
        price: "0 €",
        priceCaption: "Für immer kostenlos",
        cta: "Kostenlos starten",
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
      description: "Kostenloses Enterprise-Hosting, entwickelt für Sicherheit, Performance und Skalierung.",
      statusLink: "Detaillierten Status prüfen",
      stats: {
        cpu: "40 % CPU",
        ram: "512 MB RAM",
        storage: "5120 MB Storage",
        network: "1 Gbit/s Netzwerk",
      },
      sections: {
        resources: {
          title: "Ressourcen",
          links: {
            documentation: "Dokumentation",
            community: "Community",
            controlPanel: "Control Panel",
            payment: "Billing-Portal / Registrierung",
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
            acceptableUse: "Richtlinie zur zulässigen Nutzung",
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
        description: "Commencez sur notre free tier, propulsé par du matériel enterprise et protégé par Cloudflare.",
        features: [
          { key: "cpuShare", label: "40 % de CPU partagée" },
          { key: "memory", label: "512 Mo de RAM" },
          { key: "storage", label: "5 Go de stockage" },
          { key: "ipv4", label: "IPv4 mutualisée" },
          { key: "ddos", label: "Protection DDoS" },
          { key: "traffic", label: "Trafic illimité" },
        ],
        price: "0 €",
        priceCaption: "Gratuit pour toujours",
        cta: "Commencer gratuitement",
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
      description: "Hébergement d'entreprise gratuit pensé pour la sécurité, la performance et l'évolutivité.",
      statusLink: "Consulter le statut détaillé",
      stats: {
        cpu: "40 % CPU",
        ram: "512 Mo de RAM",
        storage: "5120 Mo de stockage",
        network: "Réseau 1 Gbit/s",
      },
      sections: {
        resources: {
          title: "Ressources",
          links: {
            documentation: "Documentation",
            community: "Communauté",
            controlPanel: "Tableau de bord",
            payment: "Portail de facturation / Inscription",
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
            privacy: "Politique de confidentialité",
            terms: "Conditions d'utilisation",
            acceptableUse: "Politique d'utilisation acceptable",
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
