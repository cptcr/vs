/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

// layout is a server component; keep client-only UI inside client components
import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieConsent } from "@/components/cookie-consent"
import { Providers } from "@/components/providers"
import { SkipLink } from "@/components/skip-link"
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data"
import { DEFAULT_LANGUAGE, resolveTranslation } from "@/lib/i18n"
import "./globals.css"
export { metadata } from "./layout-meta"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = getOrganizationSchema()
  const websiteSchema = getWebsiteSchema()
  const fallbackLoading = resolveTranslation(DEFAULT_LANGUAGE, "common.loading")

  return (
    <html lang={DEFAULT_LANGUAGE} className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
        <Suspense fallback={<div>{typeof fallbackLoading === "string" ? fallbackLoading : "Loading..."}</div>}>
          <Providers language={DEFAULT_LANGUAGE}>
            <SkipLink />
            <Header />

            <div id="content" className="min-h-screen pt-16">
              {children}
            </div>

            <Footer />

            <Analytics />
            <CookieConsent />
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
