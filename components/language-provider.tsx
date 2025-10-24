/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"
import {
  DEFAULT_LANGUAGE,
  formatMessage,
  isLanguage,
  LANGUAGE_COOKIE,
  LANGUAGE_STORAGE_KEY,
  resolveTranslation,
  SUPPORTED_LANGUAGES,
} from "@/lib/i18n"
import type { Language } from "@/types/i18n"

type TranslateOptions = {
  fallback?: string
  values?: Record<string, string | number>
}

type LanguageContextValue = {
  language: Language
  languages: typeof SUPPORTED_LANGUAGES
  setLanguage: (language: Language) => void
  t: (key: string, options?: TranslateOptions) => string
  getValue: <T = unknown>(key: string) => T
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const ONE_YEAR_SECONDS = 365 * 24 * 60 * 60

export function LanguageProvider({
  initialLanguage,
  children,
}: {
  initialLanguage?: Language
  children: ReactNode
}) {
  const [language, setLanguageState] = useState<Language>(
    initialLanguage && isLanguage(initialLanguage) ? initialLanguage : DEFAULT_LANGUAGE
  )

  const applyLanguage = useCallback((next: Language) => {
    setLanguageState(next)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (isLanguage(stored) && stored !== language) {
      setLanguageState(stored)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", language)
      document.cookie = `${LANGUAGE_COOKIE}=${language}; path=/; max-age=${ONE_YEAR_SECONDS}; SameSite=Lax`
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    }
  }, [language])

  const contextValue = useMemo<LanguageContextValue>(() => {
    const translate = (key: string, options?: TranslateOptions) => {
      const result = resolveTranslation(language, key)
      if (typeof result === "string") {
        return options?.values ? formatMessage(result, options.values) : result
      }
      if (options?.fallback) {
        return options.fallback
      }
      return key
    }

    const getValue = <T,>(key: string) => {
      return (resolveTranslation(language, key) as T) ?? (resolveTranslation(DEFAULT_LANGUAGE, key) as T)
    }

    return {
      language,
      languages: SUPPORTED_LANGUAGES,
      setLanguage: applyLanguage,
      t: translate,
      getValue,
    }
  }, [applyLanguage, language])

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useI18n must be used within a LanguageProvider")
  }
  return context
}

export function useTranslate() {
  const { t } = useI18n()
  return t
}
