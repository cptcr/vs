/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import type { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-provider"
import type { Language } from "@/types/i18n"

export function Providers({ children, language }: { children: ReactNode; language: Language }) {
  return <LanguageProvider initialLanguage={language}>{children}</LanguageProvider>
}
