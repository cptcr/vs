"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { AlertTriangle, CheckCircle2, Loader2 } from "lucide-react"
import { useI18n } from "@/components/language-provider"

type StatusResponse = {
  checks: Array<{
    label: string
    ok: boolean
    latencyMs?: number
  }>
  generatedAt: string
}

type StatusState =
  | { state: "loading" }
  | { state: "error" }
  | { state: "ready"; checks: StatusResponse["checks"]; generatedAt: string }

const REFRESH_INTERVAL = 60_000

export function StatusBadge() {
  const [status, setStatus] = useState<StatusState>({ state: "loading" })
  const idleCallbackRef = useRef<number | null>(null)
  const { t } = useI18n()

  useEffect(() => {
    let cancelled = false
    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/status", { cache: "no-store" })
        if (!res.ok) {
          throw new Error(`Status ${res.status}`)
        }
        const json = (await res.json()) as StatusResponse
        if (!cancelled) {
          setStatus({ state: "ready", checks: json.checks, generatedAt: json.generatedAt })
        }
      } catch {
        if (!cancelled) {
          setStatus({ state: "error" })
        }
      }
    }

    const scheduleFetch = () => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        const win = window as typeof window & {
          requestIdleCallback?: (cb: IdleRequestCallback, options?: IdleRequestOptions) => number
          cancelIdleCallback?: (id: number) => void
        }
        const callbackId = win.requestIdleCallback?.(
          () => {
            if (!cancelled) {
              void fetchStatus()
            }
          },
          { timeout: 2000 }
        )
        idleCallbackRef.current = callbackId ?? null
      } else {
        void fetchStatus()
      }
    }

    scheduleFetch()
    const interval = setInterval(scheduleFetch, REFRESH_INTERVAL)

    return () => {
      cancelled = true
      clearInterval(interval)
      if (idleCallbackRef.current !== null && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        const win = window as typeof window & { cancelIdleCallback?: (id: number) => void }
        win.cancelIdleCallback?.(idleCallbackRef.current)
      }
    }
  }, [])

  const summary = useMemo(() => {
    if (status.state !== "ready") {
      return null
    }
    const allHealthy = status.checks.every((check) => check.ok)
    const medianLatency = median(status.checks.map((check) => check.latencyMs ?? 0))
    return { allHealthy, medianLatency }
  }, [status])

  if (status.state === "loading") {
    return (
      <span
        role="status"
        aria-live="polite"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
      >
        <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
        {t("status.loading")}
      </span>
    )
  }

  if (status.state === "error") {
    return (
      <span
        role="status"
        aria-live="polite"
        className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs text-amber-200"
      >
        <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
        {t("status.error")}
      </span>
    )
  }

  if (!summary) {
    return null
  }

  return (
    <span
      role="status"
      aria-live="polite"
      className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-200"
      title={t("status.tooltip", {
        values: {
          time: new Date(status.generatedAt).toLocaleTimeString(),
          latency: summary.medianLatency.toFixed(0),
        },
      })}
    >
      {summary.allHealthy ? (
        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      {summary.allHealthy ? t("status.healthy") : t("status.degraded")}
    </span>
  )
}

function median(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  if (sorted.length === 0) return 0
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2
  }
  return sorted[mid]
}
