"use client"

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check, ChevronDown, Globe } from "lucide-react"
import { useI18n } from "@/components/language-provider"
import type { Language } from "@/types/i18n"
import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  className?: string
  buttonClassName?: string
  align?: "left" | "right"
  dropdownPlacement?: "up" | "down"
}

export function LanguageSwitcher({
  className,
  buttonClassName,
  align = "right",
  dropdownPlacement = "down",
}: LanguageSwitcherProps) {
  const { language, languages, setLanguage, t } = useI18n()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const listboxId = useId()

  const currentLanguage = useMemo(() => {
    return languages.find((item) => item.code === language) ?? languages[0]
  }, [language, languages])

  const closeMenu = useCallback(() => {
    setOpen(false)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation()
        closeMenu()
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("touchstart", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("touchstart", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [closeMenu, open])

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const handleSelect = useCallback(
    (code: Language) => {
      if (code !== language) {
        setLanguage(code)
      }
      closeMenu()
    },
    [closeMenu, language, setLanguage]
  )

  const menuAlignmentClass = align === "left" ? "left-0" : "right-0"

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        ref={triggerRef}
        className={cn(
          "flex w-full min-w-[9rem] items-center justify-between gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-white/80 transition hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
          buttonClassName
        )}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={t("header.language.label")}
      >
        <span className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-white/70" aria-hidden="true" />
          <span className="text-xs font-semibold text-white/90">{currentLanguage.label}</span>
        </span>
        <ChevronDown
          className={cn("h-4 w-4 text-white/60 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="language-switcher-menu"
            initial={{ opacity: 0, y: dropdownPlacement === "up" ? 4 : -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: dropdownPlacement === "up" ? 4 : -4 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute min-w-[10rem] rounded-xl border border-white/12 bg-black p-1 shadow-xl",
              dropdownPlacement === "up" ? "bottom-full mb-2" : "top-full mt-2",
              menuAlignmentClass
            )}
          >
            <ul
              id={listboxId}
              role="listbox"
              aria-label={t("header.language.label")}
              className="flex flex-col gap-1"
            >
              {languages.map(({ code, label }) => {
                const selected = code === language
                return (
                  <li key={code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected}
                      className={cn(
                        "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
                        selected && "bg-white/[0.08] text-white"
                      )}
                      onClick={() => handleSelect(code)}
                    >
                      <span>{label}</span>
                      {selected ? <Check className="h-4 w-4 text-white" aria-hidden="true" /> : null}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
