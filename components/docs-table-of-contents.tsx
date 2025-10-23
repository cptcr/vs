"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { slugify } from "@/lib/slugify"
import { cn } from "@/lib/utils"

type TocHeading = {
  id: string
  text: string
  level: number
}

const SCROLL_OFFSET = 120

export default function DocsTableOfContents() {
  const pathname = usePathname()
  const [headings, setHeadings] = useState<TocHeading[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    if (typeof document === "undefined") return
    const content = document.querySelector("[data-docs-content]")
    if (!content) {
      setHeadings([])
      return
    }

    const nodes = Array.from(content.querySelectorAll("h2, h3")) as HTMLHeadingElement[]
    const mapped = nodes
      .map(node => {
        const text = node.textContent?.trim()
        if (!text) return null
        const level = Number(node.tagName.replace("H", ""))
        const id = node.id || slugify(text)
        if (!node.id) {
          node.id = id
        }
        return { id, text, level }
      })
      .filter(Boolean) as TocHeading[]

    setHeadings(mapped)
    setActiveId(mapped[0]?.id ?? "")
  }, [pathname])

  useEffect(() => {
    if (headings.length === 0) return
    const handleScroll = () => {
      let currentId = headings[0]?.id ?? ""
      for (const heading of headings) {
        const node = document.getElementById(heading.id)
        if (!node) continue
        const { top } = node.getBoundingClientRect()
        if (top - SCROLL_OFFSET <= 0) {
          currentId = heading.id
        } else {
          break
        }
      }
      setActiveId(currentId)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [headings])

  if (headings.length === 0) {
    return (
      <aside className="hidden xl:block xl:w-64">
        <div className="sticky top-24 rounded-md border border-border/60 bg-background/80 px-4 py-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">On this page</p>
          <p className="mt-2 text-xs text-muted-foreground/80">Sections will appear here as you scroll.</p>
        </div>
      </aside>
    )
  }

  return (
    <aside className="hidden xl:block xl:w-64">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-md border border-border/60 bg-background/80 px-4 py-4">
        <p className="text-sm font-semibold text-foreground">On this page</p>
        <nav className="mt-4 space-y-1 text-sm">
          {headings.map(heading => (
            <Link
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "relative block rounded px-2 py-1 transition-colors hover:bg-background/70",
                heading.level > 2 ? "ml-4 text-xs text-muted-foreground" : "text-sm text-muted-foreground",
                activeId === heading.id &&
                  "font-semibold text-sky-100 shadow-[0_0_30px_-10px_rgba(56,189,248,0.75)] before:absolute before:-inset-1 before:-z-10 before:rounded-lg before:bg-sky-400/40 before:blur-lg before:content-[''] after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-sky-400/10"
              )}
            >
              {heading.text}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
