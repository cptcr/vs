"use client"

import React, { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, ChevronDown, Search, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SidebarItem = {
  title: string
  href: string
  items?: { title: string; href: string }[]
}

export default function DocsSidebar({ items }: { items: SidebarItem[] }) {
  const pathname = usePathname() || ""
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const [search, setSearch] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    // auto-open section that matches current pathname
    const updated: Record<string, boolean> = {}
    for (const s of items) {
      const base = s.href.split("#")[0]
      if (base && (pathname === base || pathname.startsWith(base + "/") || pathname.startsWith(base))) {
        updated[s.title] = true
      }
    }
    setOpenSections(prev => ({ ...prev, ...updated }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const filtered = useMemo(() => {
    if (!search) return items
    const q = search.toLowerCase()
    return items
      .map(s => {
        const matchesSection = s.title.toLowerCase().includes(q)
        const filteredItems = s.items?.filter(
          it => it.title.toLowerCase().includes(q) || it.href.toLowerCase().includes(q)
        )
        if (matchesSection) return { ...s }
        if (filteredItems && filteredItems.length) return { ...s, items: filteredItems }
        return null
      })
      .filter(Boolean) as SidebarItem[]
  }, [items, search])

  const toggle = (title: string) => {
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }))
  }

  const isActive = (href: string) => {
    const baseHref = href.split("#")[0]
    return pathname === baseHref || pathname.startsWith(baseHref + "/")
  }

  return (
    <>
      {/* Desktop / Tablet */}
      <div className="md:sticky md:top-16">
        <div className="hidden md:block w-60 lg:w-64 overflow-auto py-6 px-3">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-foreground" />
              <h3 className="text-sm font-semibold">Documentation</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOpenSections(Object.fromEntries(items.map(i => [i.title, true])))}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Expand all
              </button>
              <button
                onClick={() => setOpenSections({})}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Collapse
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="relative block">
              <span className="sr-only">Search docs</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search documentation..."
                className="w-full rounded-md border px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </label>
          </div>

          <nav aria-label="Documentation navigation" className="space-y-3 text-sm">
            {filtered.map(section => {
              const open = !!openSections[section.title]
              return (
                <div key={section.title} className="group">
                  <button
                    onClick={() => toggle(section.title)}
                    aria-expanded={open}
                    aria-controls={`section-${section.title.replace(/\s+/g, "-")}`}
                    className="flex w-full items-center justify-between gap-2 rounded px-2 py-1 text-left hover:bg-background/50"
                  >
                    <span className="font-medium text-foreground">{section.title}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-muted-foreground transition-transform",
                        open ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {open && section.items && (
                      <motion.div
                        id={`section-${section.title.replace(/\s+/g, "-")}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 ml-1 space-y-1 overflow-hidden"
                      >
                        {section.items.map(it => (
                          <Link
                            key={it.href}
                            href={it.href}
                            className={cn(
                              "block w-full rounded px-3 py-1 text-sm",
                              isActive(it.href)
                                ? "bg-foreground/10 font-medium text-foreground"
                                : "text-muted-foreground hover:text-foreground hover:underline"
                            )}
                          >
                            {it.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          <div className="mt-6 border-t pt-4 text-xs text-muted-foreground">
            Tips: Use search to quickly find sections. Click a section to expand subpages.
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center gap-2 py-3 px-2">
          <button
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm bg-background/60 border border-border"
            aria-expanded={mobileOpen}
            aria-controls="mobile-docs-drawer"
          >
            <BookOpen className="h-4 w-4 text-foreground" />
            Docs
          </button>
          <div className="flex-1" />
          <div className="text-sm text-muted-foreground">Quick navigation</div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
              <motion.aside
                id="mobile-docs-drawer"
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                className="absolute left-0 top-0 bottom-0 w-80 bg-background p-4 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-foreground" />
                    <span className="font-bold">Documentation</span>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="rounded p-1">
                    <X className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>

                <div className="mb-4">
                  <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search documentation..."
                    className="w-full rounded-md border px-3 py-2 text-sm bg-background text-foreground"
                  />
                </div>

                <nav className="space-y-3 text-sm overflow-auto h-[calc(100vh-10rem)]">
                  {filtered.map(section => {
                    const open = !!openSections[section.title]
                    return (
                      <div key={section.title}>
                        <button
                          onClick={() => toggle(section.title)}
                          className="flex w-full items-center justify-between gap-2 rounded px-2 py-1 text-left hover:bg-background/50"
                        >
                          <span className="font-medium text-foreground">{section.title}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-muted-foreground transition-transform",
                              open ? "rotate-180" : "rotate-0"
                            )}
                          />
                        </button>

                        {open && section.items && (
                          <div className="mt-2 ml-1 space-y-1">
                            {section.items.map(it => (
                              <Link
                                key={it.href}
                                href={it.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                  "block w-full rounded px-3 py-1 text-sm",
                                  isActive(it.href)
                                    ? "bg-foreground/10 font-medium text-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:underline"
                                )}
                              >
                                {it.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </nav>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
