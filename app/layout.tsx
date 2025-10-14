"use client"

import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"
import { metadata } from "./layout-meta"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
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
