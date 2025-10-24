/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { createPortal } from "react-dom"
import { Command } from "cmdk"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Search } from "lucide-react"
import { docsNavigation, type DocsNavItem } from "@/config/docs-navigation"
import { getChildHref } from "@/lib/docs-helpers"
import { useIsMac } from "@/lib/use-is-mac"

type SearchEntry = {
  id: string
  title: string
  href: string
  description?: string
  sectionTitle: string
  parent?: string
  icon?: DocsNavItem["icon"]
}

type DocsSearchProps = {
  onOpenChange?: (open: boolean) => void
}

export default function DocsSearch({ onOpenChange }: DocsSearchProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const isMac = useIsMac()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.key === "k" || event.key === "K") && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen(prev => !prev)
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handler)
      return () => window.removeEventListener("keydown", handler)
    }
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    onOpenChange?.(open)
    if (!mounted) return
    const originalOverflow = document.body.style.overflow
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = originalOverflow
    }
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [mounted, onOpenChange, open])

  const entriesBySection = useMemo(() => {
    return docsNavigation.map(section => {
      const items: SearchEntry[] = []
      section.items.forEach(item => {
        items.push({
          id: item.href,
          title: item.title,
          href: item.href,
          description: item.description,
          sectionTitle: section.title,
          icon: item.icon,
        })
        if (item.children) {
          item.children.forEach(child => {
            const href = getChildHref(item, child)
            items.push({
              id: href,
              title: child.title,
              href,
              description: item.description,
              sectionTitle: section.title,
              parent: item.title,
              icon: item.icon,
            })
          })
        }
      })
      return {
        section: section.title,
        items,
      }
    })
  }, [])

  const navigateTo = (href: string) => {
    setOpen(false)
    router.push(href)
    // ensure hash anchors scroll to top if same page
    if (href.includes("#")) {
      const [path, hash] = href.split("#")
      if (typeof window !== "undefined" && path === window.location.pathname) {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  const modal =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-start justify-center px-4 pb-8 pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <motion.button
              type="button"
              className="absolute inset-0 bg-black/65 backdrop-blur-[30px] backdrop-saturate-150 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
            >
              <Command
                className="h-full w-full"
                onKeyDown={event => {
                  if (event.key === "Escape") {
                    event.preventDefault()
                    setOpen(false)
                  }
                }}
              >
                <div className="flex items-center gap-2 border-b border-border bg-background/90 px-4 py-3 text-sm text-muted-foreground">
                  <Search className="h-4 w-4" />
                  <Command.Input
                    autoFocus
                    placeholder="Search guides, policies, troubleshooting…"
                    className="flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/70"
                  />
                </div>
                <Command.List className="max-h-[420px] overflow-y-auto p-2">
                  <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
                    No matching docs. Try different keywords.
                  </Command.Empty>
                  {entriesBySection.map(({ section, items }) => (
                    <Command.Group key={section} heading={section} className="px-2">
                      {items.map(entry => {
                        const value = [entry.title, entry.description].filter(Boolean).join(" ").toLowerCase()
                        const Icon = entry.icon
                        const hash = entry.href.split("#")[1]

                        return (
                          <Command.Item
                            key={entry.id}
                            value={value}
                            onSelect={() => navigateTo(entry.href)}
                            className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground aria-selected:bg-primary/10 aria-selected:text-foreground"
                          >
                            <div className="flex items-center gap-3">
                              {Icon ? (
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background">
                                  <Icon className="h-4 w-4 text-muted-foreground" />
                                </span>
                              ) : null}
                              <div>
                                <div className="font-medium text-foreground">{entry.title}</div>
                                <div className="text-xs text-muted-foreground">
                                  {entry.parent ? `${entry.parent} • ` : ""}
                                  {hash ? `#${hash}` : entry.sectionTitle}
                                </div>
                              </div>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground/70" />
                          </Command.Item>
                        )
                      })}
                    </Command.Group>
                  ))}
                </Command.List>
              </Command>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body
    )

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex w-full items-center justify-between gap-3 rounded-md border border-border bg-background/80 px-3 py-2 text-left text-sm shadow-sm transition hover:border-primary/60 hover:bg-background"
        aria-label="Search documentation"
      >
        <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground">
          <Search className="h-4 w-4" />
          <span>Search documentation…</span>
        </div>
        <kbd className="hidden items-center gap-1 rounded border border-border bg-muted px-2 py-1 text-[10px] font-semibold uppercase text-muted-foreground sm:flex">
          {isMac ? "⌘" : "Ctrl"}K
        </kbd>
      </button>
      {modal}
    </>
  )
}
