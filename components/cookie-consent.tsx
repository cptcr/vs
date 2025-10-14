'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
    // Here you would initialize analytics and other cookie-dependent services
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p>
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              Please read our{' '}
              <a href="/privacy" className="text-foreground hover:underline">
                Privacy Policy
              </a>{' '}
              for more information.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
            >
              Reject All
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}