/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { Shield, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useMemo, useRef, useState } from "react"
import { useI18n } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

type NavItem = {
  id: "home" | "about" | "services" | "partners" | "docs"
  href: string
  label: string
  external?: boolean
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)
  const { t } = useI18n()

  const navItems = useMemo<NavItem[]>(
    () => [
      { id: "home", href: "/", label: t("header.nav.home", { fallback: "VaultScope" }) },
      { id: "about", href: "/about", label: t("header.nav.about", { fallback: "About" }) },
      { id: "services", href: "/services", label: t("header.nav.services", { fallback: "Services" }) },
      { id: "partners", href: "/partners", label: t("header.nav.partners", { fallback: "Partners" }) },
      { id: "docs", href: "/docs", label: t("header.nav.documentation", { fallback: "Documentation" }) },
    ],
    [t]
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/75 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:h-16 md:py-0">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-foreground" aria-hidden="true" />
            <span className="text-xl font-bold text-foreground">{t("header.brand")}</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => {
              const className =
                "text-sm font-medium text-white/85 transition-colors hover:text-white focus-visible:text-white"
              if (item.external) {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {item.label}
                  </a>
                )
              }
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={className}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSwitcher className="hidden md:block" align="right" />
            <Button variant="ghost" className="hidden md:inline-flex text-foreground" asChild>
              <a href="https://panel.vaultscope.dev" target="_blank" rel="noopener noreferrer">
                {t("header.actions.signIn")}
              </a>
            </Button>
            <Button
              className="hidden bg-foreground text-background hover:bg-foreground/90 md:inline-flex"
              asChild
            >
              <a href="https://pay.vaultscope.dev" target="_blank" rel="noopener noreferrer">
                {t("header.actions.getStarted")}
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus-visible:ring-offset-background md:hidden"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                mobileMenuOpen
                  ? t("header.actions.closeMenu", { fallback: "Close menu" })
                  : t("header.actions.openMenu", { fallback: "Open menu" })
              }
              id="mobile-open-button"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen ? (
        <div
          className="fixed inset-0 z-[99999] flex flex-col text-white md:hidden"
          style={{
            backgroundColor: "#000",
            minHeight: "100dvh",
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <div
            className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-10"
            style={{ backgroundColor: "#000" }}
          >
            <span className="text-base font-semibold uppercase tracking-wide text-white/50">
              {t("header.actions.menuTitle", { fallback: "Menu" })}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 focus-visible:ring-offset-black"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t("header.actions.closeMenu", { fallback: "Close menu" })}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav
            id="mobile-navigation"
            aria-modal="true"
            role="dialog"
            className="flex flex-1 flex-col px-6 py-8 sm:px-10 sm:py-12"
            style={{ backgroundColor: "#000" }}
          >
            <ul className="flex flex-1 flex-col gap-4 overflow-y-auto">
              {navItems.map((item, index) => {
                const commonClass =
                  "block w-full rounded-lg px-4 py-4 text-xl font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"

                if (item.external) {
                  return (
                    <li key={item.id}>
                      <a
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commonClass}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                }

                return (
                  <li key={item.id}>
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      className={commonClass}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Button
                asChild
                variant="outline"
                className="w-full justify-center border-white/20 bg-white/5 text-white hover:bg-white/15"
              >
                <a
                  href="https://panel.vaultscope.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("header.actions.signIn")}
                </a>
              </Button>
              <Button
                asChild
                className="w-full justify-center bg-white text-black hover:bg-white/90"
              >
                <a
                  href="https://pay.vaultscope.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("header.actions.getStarted")}
                </a>
              </Button>
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6 text-sm text-white/40">
              <span>VaultScope</span>
              <LanguageSwitcher
                className="w-auto"
                buttonClassName="justify-between gap-2 rounded-lg border border-white/10 bg-white/10 text-white hover:bg-white/20"
                align="left"
                dropdownPlacement="up"
              />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
