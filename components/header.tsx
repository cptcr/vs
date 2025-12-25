/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useMemo, useRef, useState } from "react"
import { useI18n } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import Image from "next/image"
import { cn } from "@/lib/utils"

type NavItem = {
  id: "home" | "about" | "services" | "partners" | "docs"
  href: string
  label: string
  external?: boolean
}

// Define the sub-links for the services dropdown
const SERVICE_LINKS = [
  { href: "/services/vps", label: "Cloud VPS", description: "High-performance KVM" },
  { href: "/services/minecraft", label: "Minecraft Hosting", description: "Modpack optimized" },
  { href: "/services/databases", label: "Managed Databases", description: "Mongo, Postgres, MariaDB" },
  { href: "/services/coding", label: "Dev Containers", description: "Free coding environments" },
  { href: "/services/dedicated", label: "Dedicated Servers", description: "Single-tenant hardware" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true) // Default open on mobile or false, up to preference
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
    if (mobileMenuOpen) {
      document.body.classList.add("vsc-scroll-locked")
    } else {
      document.body.classList.remove("vsc-scroll-locked")
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
            <Link href="/" className="flex items-center flex-1 gap-2" aria-label={t("header.brand")}>
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

            {/* Desktop Navigation */}
            <nav
                ref={navRef}
                className="relative items-center justify-center flex-1 hidden gap-1 md:flex"
                onMouseLeave={handleNavMouseLeave}
            >
              {/* Hover indicator */}
              <div
                  className="absolute h-8 transition-all duration-200 ease-out rounded-md pointer-events-none bg-white/15"
                  style={indicatorStyle}
              />

              {navItems.map((item, idx) => {
                const baseClasses =
                    "relative inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-white/85 transition-colors focus-within:text-white hover:text-white z-10 outline-none focus-visible:ring-2 focus-visible:ring-white/70"

                // Specific rendering for Services Dropdown
                if (item.id === "services") {
                  return (
                    <div key={item.id} className="relative group">
                      <Link
                        href={item.href}
                        className={cn(baseClasses, "gap-1")}
                        onMouseEnter={handleMouseEnter}
                      >
                        {item.label}
                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-white/50" />
                      </Link>

                      {/* Dropdown Menu */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                         <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl overflow-hidden">
                            <div className="flex flex-col gap-1">
                              {SERVICE_LINKS.map((subItem) => (
                                <Link 
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="flex flex-col px-3 py-2 transition-colors rounded-lg group/item hover:bg-white/10"
                                >
                                  <span className="text-sm font-medium text-white">{subItem.label}</span>
                                  <span className="text-xs text-white/50 group-hover/item:text-white/70">{subItem.description}</span>
                                </Link>
                              ))}
                              <div className="h-px my-1 bg-white/10" />
                              <Link 
                                href="/services"
                                className="px-3 py-2 text-xs font-medium text-center transition-colors rounded-lg hover:bg-white/10 text-white/60 hover:text-white"
                              >
                                View All Services
                              </Link>
                            </div>
                         </div>
                      </div>
                    </div>
                  )
                }

                // Standard Links
                if (item.external) {
                  return (
                      <a
                          key={item.id}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={baseClasses}
                          onMouseEnter={handleMouseEnter}
                          ref={idx === 0 ? firstLinkRef : undefined}
                      >
                        {item.label}
                      </a>
                  )
                }

                return (
                    <Link
                        key={item.id}
                        href={item.href}
                        className={baseClasses}
                        onMouseEnter={handleMouseEnter}
                        ref={idx === 0 ? firstLinkRef : undefined}
                    >
                      {item.label}
                    </Link>
                )
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center justify-end flex-1 gap-2 md:gap-4">
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
              
              {/* Mobile Menu Toggle */}
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

                    // Mobile Dropdown Logic for Services
                    if (item.id === "services") {
                       return (
                         <li key={item.id} className="flex flex-col">
                           <button 
                              className={cn(commonClass, "flex items-center justify-between")}
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                           >
                              {item.label}
                              <ChevronDown className={cn("w-5 h-5 transition-transform", mobileServicesOpen && "rotate-180")} />
                           </button>
                           
                           {/* Mobile Submenu */}
                           {mobileServicesOpen && (
                             <ul className="flex flex-col gap-2 pl-4 pr-2 mt-2 ml-4 border-l border-white/10">
                               {SERVICE_LINKS.map(subItem => (
                                 <li key={subItem.href}>
                                   <Link
                                     href={subItem.href}
                                     className="block w-full px-4 py-3 text-base transition-colors rounded-lg text-white/70 hover:text-white hover:bg-white/5"
                                     onClick={() => setMobileMenuOpen(false)}
                                   >
                                     {subItem.label}
                                   </Link>
                                 </li>
                               ))}
                               <li>
                                   <Link
                                     href="/services"
                                     className="block w-full px-4 py-3 text-base text-blue-400 transition-colors rounded-lg hover:text-blue-300 hover:bg-white/5"
                                     onClick={() => setMobileMenuOpen(false)}
                                   >
                                     View All Services
                                   </Link>
                               </li>
                             </ul>
                           )}
                         </li>
                       )
                    }

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