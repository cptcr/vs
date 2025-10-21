// layout is a server component; keep client-only UI inside client components
import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieConsent } from "@/components/cookie-consent"
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data"
import "./globals.css"
export { metadata } from "./layout-meta"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = getOrganizationSchema()
  const websiteSchema = getWebsiteSchema()

  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          key="organization-schema"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          key="website-schema"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-black font-sans antialiased text-foreground">
        <Suspense fallback={<div>Loading...</div>}>
          <a
            href="#content"
            className="absolute -top-20 left-4 z-50 rounded bg-foreground text-background px-3 py-2 text-sm focus:top-20 focus:outline-none focus:ring-2 focus:ring-foreground/60"
          >
            Skip to content
          </a>

          <Header />

          <div id="content" className="min-h-screen pt-16">
            {children}
          </div>

          <Footer />

          <Analytics />
          <CookieConsent />
        </Suspense>
      </body>
    </html>
  )
}
