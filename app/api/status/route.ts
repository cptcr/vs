/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { NextResponse } from 'next/server'

// For projects configured with `output: 'export'`, routes must be static.
// Use 'force-static' so Next's static HTML export doesn't error during build/dev.
export const dynamic = 'force-static'

// Simple fetch with timeout helper
async function fetchWithTimeout(resource: string, options: RequestInit = {}, timeout = 5000) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  try {
    const res = await fetch(resource, { ...options, signal: controller.signal })
    return res
  } finally {
    clearTimeout(id)
  }
}

type CheckResult = {
  label: string
  host: string
  ok: boolean
  status?: number
  error?: string
  latencyMs?: number
  timestamp: string
}

const HOSTS: Array<{ label: string; host: string }> = [
  { label: 'Node 1 [NOVEL] (Helsinki)', host: '65.108.36.54' },
  { label: 'Node 2 [KILO] (Helsinki)', host: "95.216.69.111"},
  { label: 'Payment Area', host: 'https://pay.vaultscope.dev' },
  { label: 'Server Area', host: 'https://panel.vaultscope.dev' },
]

type HostCheck = {
  ok: boolean
  status?: number
  error?: string
  latencyMs?: number
}

async function checkHost(host: string): Promise<HostCheck> {
  const start = Date.now()
  try {
    const res = await fetchWithTimeout(host, { method: 'GET', cache: 'no-store' }, 6000)
    const latencyMs = Date.now() - start
    return { ok: res.ok, status: res.status, latencyMs }
  } catch (error: unknown) {
    const latencyMs = Date.now() - start
    // Normalize AbortError message when fetch times out
    const err = error as { name?: string; message?: string }
    const msg = err?.name === 'AbortError' ? 'timeout' : err?.message ?? String(error)
    return { ok: false, error: msg, latencyMs }
  }
}

export async function GET() {
  const checks = await Promise.all(
    HOSTS.map(async (h) => {
      const result = await checkHost(h.host)
      const out: CheckResult = {
        label: h.label,
        host: h.host,
        ok: result.ok,
        status: result.status,
        error: result.error,
        latencyMs: result.latencyMs,
        timestamp: new Date().toISOString(),
      }
      return out
    })
  )

  return NextResponse.json({ checks, generatedAt: new Date().toISOString() })
}
