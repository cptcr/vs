/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import DocsSidebar from "@/components/docs-sidebar"
import DocsTableOfContents from "@/components/docs-table-of-contents"

export default function DocsLayout({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <div
        className={cn(
          "relative flex min-h-screen w-full flex-col transition duration-200 ease-out lg:flex-row",
          searchOpen && "blur-sm sm:blur md:blur-[6px] lg:blur-[8px]"
        )}
      >
        <DocsSidebar onSearchOpenChange={setSearchOpen} />

        <div className="flex-1 px-4 py-10 sm:px-6 lg:px-12 xl:px-16">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 pb-10 pt-20">
            <article data-docs-content className="space-y-10 text-foreground">
              {children}
            </article>
          </div>
        </div>

        <DocsTableOfContents />
      </div>
    </div>
  )
}
