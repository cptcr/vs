"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight, Menu, X } from "lucide-react"
import DocsSearch from "@/components/docs-search"
import { docsNavigation, type DocsNavChild, type DocsNavItem } from "@/config/docs-navigation"
import { getChildHref } from "@/lib/docs-helpers"
import { cn } from "@/lib/utils"

function DocsSidebarContents({
  onNavigate,
  activeHash,
  pathname,
}: {
  onNavigate?: () => void
  activeHash: string
  pathname: string
}) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(docsNavigation.map(section => [section.title, true]))
  )

  useEffect(() => {
    const activeSection = docsNavigation.find(section =>
      section.items.some(item => pathname === item.href || pathname.startsWith(`${item.href}/`))
    )

    if (activeSection) {
      setOpenSections(prev => ({
        ...prev,
        [activeSection.title]: true,
      }))
    }
  }, [pathname])

  const isItemActive = (item: DocsNavItem) =>
    pathname === item.href || (item.href !== "/docs" && pathname.startsWith(`${item.href}/`))

  const isChildActive = (item: DocsNavItem, child: DocsNavChild) => {
    const href = getChildHref(item, child)
    const hash = href.split("#")[1]
    if (!hash) return false
    return activeHash === `#${hash}`
  }

  return (
    <nav aria-label="Documentation navigation" className="space-y-8">
      {docsNavigation.map(section => {
        const sectionOpen = openSections[section.title]
        return (
          <div key={section.title}>
            <button
              type="button"
              onClick={() => setOpenSections(prev => ({ ...prev, [section.title]: !sectionOpen }))}
              className="flex w-full items-center justify-between gap-2 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground"
              aria-expanded={sectionOpen}
            >
              <span>{section.title}</span>
              <ChevronRight
                className={cn(
                  "h-3 w-3 transition-transform",
                  sectionOpen ? "rotate-90 text-foreground" : "text-muted-foreground"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {sectionOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-3 space-y-2 overflow-hidden"
                >
                  {section.items.map(item => {
                    const Icon = item.icon
                    const active = isItemActive(item)
                    return (
                      <div key={item.href} className="space-y-2">
                        <Link
                          href={item.href}
                          onClick={onNavigate}
                          className={cn(
                            "group flex items-start gap-3 rounded-md border border-transparent px-3 py-2 text-sm transition-colors hover:border-border hover:bg-background/60",
                            active ? "border-border bg-background/70 text-foreground shadow-sm" : "text-muted-foreground"
                          )}
                        >
                          {Icon ? (
                            <span
                              className={cn(
                                "mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded border border-border/40 text-muted-foreground transition-colors group-hover:border-border",
                                active && "border-border text-foreground"
                              )}
                            >
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                          ) : null}
                          <span className="flex-1">
                            <span className={cn("block font-medium", active && "text-foreground")}>{item.title}</span>
                            {item.description ? (
                              <span className="mt-1 block text-xs leading-relaxed text-muted-foreground/70">
                                {item.description}
                              </span>
                            ) : null}
                          </span>
                        </Link>

                        {item.children && item.children.length > 0 && active ? (
                          <div className="ml-6 space-y-1 border-l border-border/60 pl-3 text-sm">
                            {item.children.map(child => {
                              const childHref = getChildHref(item, child)
                              const childActive = isChildActive(item, child)
                              return (
                                <Link
                                  key={childHref}
                                  href={childHref}
                                  onClick={onNavigate}
                                  className={cn(
                                    "block rounded px-2 py-1 text-sm transition-colors hover:bg-background/60",
                                    childActive
                                      ? "bg-primary/10 font-medium text-primary"
                                      : "text-muted-foreground hover:text-foreground"
                                  )}
                                >
                                  {child.title}
                                </Link>
                              )
                            })}
                          </div>
                        ) : null}
                      </div>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </nav>
  )
}

export default function DocsSidebar({ onSearchOpenChange }: { onSearchOpenChange?: (open: boolean) => void }) {
  const pathname = usePathname() || ""
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHash, setActiveHash] = useState<string>("")

  useEffect(() => {
    if (typeof window === "undefined") return
    const updateHash = () => {
      setActiveHash(window.location.hash)
    }
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    setActiveHash(window.location.hash)
  }, [pathname])

  const desktopContent = useMemo(
    () => <DocsSidebarContents activeHash={activeHash} pathname={pathname} />,
    [activeHash, pathname]
  )

  return (
    <>
      <div className="hidden lg:block lg:w-72 xl:w-80">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto border-r border-border/60 px-4 py-6">
          <div className="mb-6 space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">VaultScope</p>
              <h2 className="text-lg font-semibold text-foreground">Documentation</h2>
              <p className="text-xs text-muted-foreground">
                Browse playbooks, reference guides and operational procedures.
              </p>
            </div>
            <DocsSearch onOpenChange={onSearchOpenChange} />
          </div>
          {desktopContent}
        </div>
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-3 py-2 text-sm font-medium shadow-sm"
          aria-expanded={mobileOpen}
          aria-controls="docs-mobile-menu"
        >
          <Menu className="h-4 w-4" />
          Docs menu
        </button>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              className="fixed inset-0 z-50 flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
              <motion.aside
                id="docs-mobile-menu"
                initial={{ x: -320 }}
                animate={{ x: 0 }}
                exit={{ x: -320 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative h-full w-80 max-w-full overflow-y-auto border-r border-border bg-background px-4 pb-8 pt-6 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">VaultScope</p>
                    <h2 className="text-lg font-semibold text-foreground">Documentation</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground"
                    aria-label="Close documentation navigation"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-6">
                  <DocsSidebarContents
                    activeHash={activeHash}
                    pathname={pathname}
                    onNavigate={() => setMobileOpen(false)}
                  />
                </div>
              </motion.aside>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  )
}
