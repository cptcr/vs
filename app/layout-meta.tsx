import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://vaultscope.com'),
  title: "VaultScope - Custom Infrastructure Solutions",
  description: "Enterprise-grade VPS and dedicated servers with customizable configurations. High-performance infrastructure tailored to your specific requirements.",
  generator: "Next.js",
  keywords: [
    "custom VPS",
    "dedicated servers",
    "enterprise hosting",
    "scalable infrastructure",
    "custom server configuration",
    "high performance hosting",
    "enterprise infrastructure",
    "managed hosting"
  ],
  authors: [{ name: 'VaultScope' }],
  creator: 'VaultScope',
  publisher: 'VaultScope',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaultscope.com',
    title: 'VaultScope - Enterprise Infrastructure Solutions',
    description: 'Enterprise-grade VPS and Dedicated Server solutions with customizable hardware configurations.',
    siteName: 'VaultScope',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VaultScope - Enterprise Infrastructure Solutions',
    description: 'Enterprise-grade VPS and Dedicated Server solutions with customizable hardware configurations.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}