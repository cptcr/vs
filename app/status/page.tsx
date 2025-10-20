"use client"

import React, { useEffect, useState } from 'react'

type CheckResult = {
  label: string
  host: string
  ok: boolean
  status?: number
  error?: string
  latencyMs?: number
  timestamp: string
}

export default function StatusPage() {
  const [checks, setChecks] = useState<CheckResult[]>([])
  const [loading, setLoading] = useState(false)
  const [autoRefresh, setAutoRefresh] = useState(false)

  async function fetchStatus() {
    setLoading(true)
    try {
      const res = await fetch('/api/status')
      const data = await res.json()
      setChecks(data.checks ?? [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStatus()
  }, [])

  useEffect(() => {
    if (!autoRefresh) return
    const id = setInterval(fetchStatus, 15000)
    return () => clearInterval(id)
  }, [autoRefresh])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Site status</h1>
        <div className="flex items-center gap-3">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
            <span className="text-sm">Auto-refresh (15s)</span>
          </label>
          <button className="btn" onClick={fetchStatus} disabled={loading}>
            {loading ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {checks.map((c) => (
          <div key={c.host} className="p-4 border rounded-md flex items-center justify-between">
            <div>
              <div className="font-medium">{c.label}</div>
              <div className="text-sm text-muted-foreground">{c.host}</div>
            </div>

            <div className="text-right">
              <div>
                {c.ok ? (
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-sm">UP</span>
                ) : (
                  <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-sm">DOWN</span>
                )}
              </div>
              <div className="text-sm mt-1">
                {c.ok && c.status ? <span>HTTP {c.status} · </span> : null}
                {c.latencyMs != null ? <span>{c.latencyMs} ms · </span> : null}
                <span className="text-xs text-gray-500">{new Date(c.timestamp).toLocaleString()}</span>
              </div>
              {c.error ? <div className="text-xs text-red-600 mt-1">{c.error}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
