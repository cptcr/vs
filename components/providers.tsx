"use client"

import type { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-provider"
import type { Language } from "@/types/i18n"

export function Providers({ children, language }: { children: ReactNode; language: Language }) {
  return <LanguageProvider initialLanguage={language}>{children}</LanguageProvider>
}
