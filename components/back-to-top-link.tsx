"use client"

import { useI18n } from "@/components/language-provider"

export function BackToTopLink() {
  const { t } = useI18n()

  return (
    <a
      href="#top"
      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      {t("common.backToTop")}
      <span aria-hidden="true" className="text-xs">
        ↑
      </span>
    </a>
  )
}
