"use client"

import { useI18n } from "@/components/language-provider"

export function SkipLink() {
  const { t } = useI18n()

  return (
    <a
      href="#content"
      className="absolute -top-20 left-4 z-50 rounded bg-foreground text-background px-3 py-2 text-sm focus:top-20 focus:outline-none focus:ring-2 focus:ring-foreground/60"
    >
      {t("common.skipToContent")}
    </a>
  )
}
