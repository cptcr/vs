/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { useI18n } from "@/components/language-provider"

type CookieCopy = {
  body: {
    intro: string
    readMore: {
      beforeLink: string
      afterLink: string
    }
    linkText: string
  }
  actions: {
    reject: string
    accept: string
  }
}

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const { getValue } = useI18n()
  const copy = getValue<CookieCopy>("cookieConsent")

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
    // Here you would initialize analytics and other cookie-dependent services
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p>
              {copy.body.intro}{" "}
              <span>
                {copy.body.readMore.beforeLink}{" "}
                <a href="/privacy" className="text-foreground hover:underline">
                  {copy.body.linkText}
                </a>{" "}
                {copy.body.readMore.afterLink}
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" onClick={handleReject}>
              {copy.actions.reject}
            </Button>
            <Button size="sm" onClick={handleAccept}>
              {copy.actions.accept}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
