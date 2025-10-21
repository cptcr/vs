"use client"

import { Shield, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useI18n } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

type NavItem = {
  key: "features" | "testimonials" | "pricing" | "community" | "documentation" | "about" | "status"
  href: string
  external?: boolean
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)
  const { t } = useI18n()

  const navItems = useMemo<NavItem[]>(
    () => [
      { key: "features", href: "/#features" },
      { key: "testimonials", href: "/#testimonials" },
      { key: "pricing", href: "/#pricing" },
      { key: "community", href: "https://discord.gg/sRj3uPPpme", external: true },
      { key: "documentation", href: "/docs" },
      { key: "about", href: "/about" },
      { key: "status", href: "https://status.vaultscope.dev", external: true },
    ],
    []
  )

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    // Prevent background scroll when menu is open
    const prev = document.body.style.overflow
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = prev || ""
    }
    return () => {
      document.body.style.overflow = prev || ""
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const content = document.getElementById("content")
    if (!content) return
    if (mobileMenuOpen) {
      content.setAttribute("aria-hidden", "true")
    } else {
      content.removeAttribute("aria-hidden")
    }
    return () => content.removeAttribute("aria-hidden")
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
            <Shield className="h-8 w-8 text-foreground" aria-hidden="true" />
            <span className="text-xl font-bold text-foreground">{t("header.brand")}</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const label = t(`header.nav.${item.key}`)
              const className = "text-sm text-muted-foreground hover:text-foreground transition-colors"
              if (item.external) {
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {label}
                  </a>
                )
              }
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={className}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher className="hidden md:block" align="right" />
            <Button variant="ghost" className="hidden md:inline-flex text-foreground" asChild>
              <a href="https://panel.vaultscope.dev" target="_blank" rel="noopener noreferrer">
                {t("header.actions.signIn")}
              </a>
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="https://pay.vaultscope.dev" target="_blank" rel="noopener noreferrer">
                {t("header.actions.getStarted")}
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
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

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
                {navItems.map((item, index) => {
                  const label = t(`header.nav.${item.key}`)
                  const commonClass =
                    "text-sm text-muted-foreground hover:text-foreground transition-colors px-2"
                  if (item.external) {
                    return (
                      <a
                        key={item.key}
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commonClass}
                      >
                        {label}
                      </a>
                    )
                  }
                  return (
                    <Link
                      key={item.key}
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      className={commonClass}
                    >
                      {label}
                    </Link>
                  )
                })}
                <div className="pt-2">
                  <LanguageSwitcher
                    className="w-full"
                    buttonClassName="w-full justify-between border-white/20 bg-white/[0.06] hover:bg-white/[0.1]"
                    align="left"
                  />
                </div>
                <a
                  href="https://panel.vaultscope.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2"
                >
                  {t("header.actions.signIn")}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
