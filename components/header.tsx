"use client"

import { Shield, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  useEffect(() => {
    // Prevent background scroll when menu is open
    const prev = document.body.style.overflow
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prev || ''
    }
    return () => {
      document.body.style.overflow = prev || ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const content = document.getElementById('content')
    if (!content) return
    if (mobileMenuOpen) {
      content.setAttribute('aria-hidden', 'true')
    } else {
      content.removeAttribute('aria-hidden')
    }
    return () => content.removeAttribute('aria-hidden')
  }, [mobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen) {
      // autofocus the first link for keyboard users
      setTimeout(() => {
        firstLinkRef.current?.focus()
      }, 50)
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-foreground" />
            <span className="text-xl font-bold text-foreground">VaultScope</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex text-foreground" asChild>
              <a href="https://panel.vaultscope.dev" target="_blank" rel="noopener noreferrer">
                Sign In
              </a>
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              id="mobile-open-button"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            aria-hidden={!mobileMenuOpen}
          >
            <div className="absolute inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} />

            <motion.nav
              id="mobile-navigation"
              aria-modal="true"
              role="dialog"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              className="absolute left-0 right-0 top-16 bg-background/95 border-t border-border p-4 shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <a ref={firstLinkRef} href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
                  Features
                </a>
                <a href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
                  Pricing
                </a>
                <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
                  Community
                </a>
                <a href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
                  Documentation
                </a>
                <a href="https://panel.vaultscope.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
                  Sign In
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
