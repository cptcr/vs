/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useMemo, useRef, useState } from "react"
import { useI18n } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import Image from "next/image"

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
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const navRef = useRef<HTMLElement | null>(null)

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
    // Avoid inline style mutations on body to prevent SSR/CSR mismatch warnings.
    // Toggle a class instead; defined in globals.css as `.vsc-scroll-locked`.
    if (mobileMenuOpen) {
      document.body.classList.add("vsc-scroll-locked")
      console.debug("Header: added vsc-scroll-locked")
    } else {
      document.body.classList.remove("vsc-scroll-locked")
      console.debug("Header: removed vsc-scroll-locked")
    }
    return () => {
      document.body.classList.remove("vsc-scroll-locked")
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
      setTimeout(() => {
        firstLinkRef.current?.focus()
      }, 50)
    }
  }, [mobileMenuOpen])

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (!navRef.current) return
    const { left, width } = e.currentTarget.getBoundingClientRect()
    const navLeft = navRef.current.getBoundingClientRect().left
    setIndicatorStyle({
      width: `${width}px`,
      left: `${left - navLeft}px`,
      opacity: 1
    })
  }

  const handleNavMouseLeave = () => {
    setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
  }

  return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/75 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-xl">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:h-16 md:py-0">
            <Link href="/" className="flex items-center gap-2 flex-1" aria-label={t("header.brand")}>
              <Image
                  src="/favicon.ico"
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded"
                  priority
              />
              <span aria-hidden className="text-xl font-bold text-foreground">
              {t("header.brand")}
            </span>
            </Link>

            <nav
                ref={navRef}
                className="items-center hidden gap-2 md:flex lg:gap-3 relative justify-center flex-1"
                onMouseLeave={handleNavMouseLeave}
            >
              {/* Hover indicator */}
              <div
                  className="absolute h-8 bg-white/15 rounded-md pointer-events-none transition-all duration-200 ease-out"
                  style={indicatorStyle}
              />

              {navItems.map((item, idx) => {
                const baseClasses =
                    "relative inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-white/85 transition-colors focus-within:text-white hover:text-white z-10"

                const commonLinkProps = {
                  className: baseClasses + " outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  onMouseEnter: handleMouseEnter,
                  ref: idx === 0 ? firstLinkRef : undefined,
                } as const

                if (item.external) {
                  return (
                      <a
                          key={item.id}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...commonLinkProps}
                      >
                        {item.label}
                      </a>
                  )
                }

                return (
                    <Link
                        key={item.id}
                        href={item.href}
                        {...commonLinkProps}
                    >
                      {item.label}
                    </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
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
                  className="text-white transition border rounded-full h-11 w-11 border-white/15 bg-white/10 hover:bg-white/20 focus-visible:ring-offset-background md:hidden"
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
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  className="flex items-center justify-between px-6 py-5 border-b border-white/10 sm:px-10"
                  style={{ backgroundColor: "#000" }}
              >
            <span className="text-base font-semibold tracking-wide uppercase text-white/50">
              {t("header.actions.menuTitle", { fallback: "Menu" })}
            </span>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-white transition border rounded-full h-11 w-11 border-white/10 bg-white/10 hover:bg-white/20 focus-visible:ring-offset-black"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={t("header.actions.closeMenu", { fallback: "Close menu" })}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <nav
                  id="mobile-navigation"
                  aria-modal="true"
                  role="dialog"
                  className="flex flex-col flex-1 px-6 py-8 sm:px-10 sm:py-12"
                  style={{ backgroundColor: "#000" }}
              >
                <ul className="flex flex-col flex-1 gap-4 overflow-y-auto">
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

                <div className="flex flex-col gap-3 mt-6">
                  <Button
                      asChild
                      variant="outline"
                      className="justify-center w-full text-white border-white/20 bg-white/5 hover:bg-white/15"
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
                      className="justify-center w-full text-black bg-white hover:bg-white/90"
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

                <div className="flex items-center justify-between pt-6 mt-auto text-sm border-t border-white/10 text-white/40">
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