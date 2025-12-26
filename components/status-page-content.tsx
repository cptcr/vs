"use client"

import { useEffect, useState } from "react"
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  Activity,
  ArrowUpRight,
  Loader2,
  AlertOctagon,
} from "lucide-react"

import { BackgroundWave } from "@/components/BackgroundWave"
import { Button } from "@/components/ui/button"

// --- Types based on Instatus API ---
type Incident = {
  name: string
  started: string
  status: string
  impact: "MAJOROUTAGE" | "PARTIALOUTAGE" | "DEGRADEDPERFORMANCE" | "MAINTENANCE"
  url: string
}

type Maintenance = {
  name: string
  start: string
  status: string
  duration: string
  url: string
}

type StatusSummary = {
  page: {
    name: string
    url: string
    status: "UP" | "HASISSUES" | "UNDERMAINTENANCE"
  }
  activeIncidents?: Incident[] // Marked as optional
  activeMaintenances?: Maintenance[] // Marked as optional
}

export function StatusPageContent() {
  const [data, setData] = useState<StatusSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch("https://vaultscope.instatus.com/summary.json")
        if (!res.ok) throw new Error("Failed to fetch status")
        const json = await res.json()
        setData(json)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()
  }, [])

  // --- Helper to determine overall theme based on status ---
  const getStatusTheme = (status: string | undefined) => {
    switch (status) {
      case "UP":
        return {
          color: "text-green-400",
          bg: "bg-green-500/10",
          border: "border-green-500/20",
          icon: <CheckCircle2 className="w-12 h-12" />,
          label: "All Systems Operational",
        }
      case "HASISSUES":
        return {
          color: "text-orange-400",
          bg: "bg-orange-500/10",
          border: "border-orange-500/20",
          icon: <AlertTriangle className="w-12 h-12" />,
          label: "Active Issues Detected",
        }
      case "UNDERMAINTENANCE":
        return {
          color: "text-blue-400",
          bg: "bg-blue-500/10",
          border: "border-blue-500/20",
          icon: <Clock className="w-12 h-12" />,
          label: "Maintenance in Progress",
        }
      default:
        return {
          color: "text-gray-400",
          bg: "bg-gray-500/10",
          border: "border-gray-500/20",
          icon: <Activity className="w-12 h-12" />,
          label: "Checking Status...",
        }
    }
  }

  const theme = getStatusTheme(data?.page?.status)

  // Safe accessors for arrays
  const incidents = data?.activeIncidents || []
  const maintenances = data?.activeMaintenances || []

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundWave />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />

      <main className="relative z-10 pb-32 space-y-16">
        
        {/* Header Section */}
        <section className="relative pt-20 sm:pt-28">
          <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/60 mb-8">
              Live Status
            </span>
            
            <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              <span className="text-transparent bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text">
                System Health
              </span>
            </h1>
          </div>
        </section>

        {/* Main Status Indicator */}
        <section className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-48 border rounded-3xl border-white/10 bg-white/5 animate-pulse">
                 <Loader2 className="w-8 h-8 mb-4 text-white/40 animate-spin" />
                 <span className="text-white/40">Connecting to status API...</span>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center h-48 p-6 text-center border rounded-3xl border-red-500/20 bg-red-500/5">
                 <XCircle className="w-10 h-10 mb-4 text-red-400" />
                 <h2 className="mb-2 text-xl font-semibold text-white">Unable to load status</h2>
                 <p className="mb-6 text-white/60">We couldn't reach our status provider. Please check the external page.</p>
                 <Button asChild variant="outline" className="text-red-200 border-red-500/30 hover:bg-red-500/10">
                    <a href="https://vaultscope.instatus.com" target="_blank" rel="noreferrer">
                        Open Status Page <ArrowUpRight className="w-4 h-4 ml-2" />
                    </a>
                 </Button>
              </div>
            ) : (
              <div className={`relative p-8 sm:p-12 rounded-[2.5rem] border ${theme.border} ${theme.bg} text-center backdrop-blur-md overflow-hidden transition-colors duration-500`}>
                {/* Glow Effect */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 ${theme.bg.replace('/10', '/20')} blur-[80px] -z-10 rounded-full`} />
                
                <div className={`inline-flex p-4 rounded-full bg-black/20 mb-6 ${theme.color} border border-white/5`}>
                  {theme.icon}
                </div>
                
                <h2 className={`text-3xl font-bold sm:text-4xl text-white mb-2`}>
                  {theme.label}
                </h2>
                
                <p className="text-white/60">
                   Last updated: {new Date().toLocaleTimeString()}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Active Incidents & Maintenance */}
        {!loading && !error && data && (
            <section className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-12">
                    
                    {/* Incidents */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                            <AlertOctagon className="w-5 h-5 text-white/60" />
                            <h3 className="text-xl font-semibold text-white">Active Incidents</h3>
                        </div>
                        
                        {/* FIX: Use the safe 'incidents' variable defined above */}
                        {incidents.length === 0 ? (
                            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-center">
                                <p className="text-white/40">No active incidents reported.</p>
                            </div>
                        ) : (
                            incidents.map((incident, i) => (
                                <IncidentCard key={i} incident={incident} />
                            ))
                        )}
                    </div>

                    {/* Scheduled Maintenance */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                            <Clock className="w-5 h-5 text-white/60" />
                            <h3 className="text-xl font-semibold text-white">Scheduled Maintenance</h3>
                        </div>
                        
                        {/* FIX: Use the safe 'maintenances' variable defined above */}
                        {maintenances.length === 0 ? (
                             <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-center">
                                <p className="text-white/40">No maintenance scheduled.</p>
                            </div>
                        ) : (
                            maintenances.map((maint, i) => (
                                <MaintenanceCard key={i} maintenance={maint} />
                            ))
                        )}
                    </div>

                    <div className="flex justify-center pt-8">
                         <Button asChild variant="link" className="text-white/50 hover:text-white">
                            <a href={data.page.url} target="_blank" rel="noreferrer">
                                View History & Subscribe to Updates <ArrowUpRight className="w-4 h-4 ml-2" />
                            </a>
                         </Button>
                    </div>

                </div>
            </section>
        )}
      </main>
    </div>
  )
}

// --- Sub-components for Cards ---

function IncidentCard({ incident }: { incident: Incident }) {
    // Map impact to colors
    const getColor = (impact: string) => {
        if (impact === "MAJOROUTAGE") return "text-red-400 border-red-500/30 bg-red-500/10"
        if (impact === "PARTIALOUTAGE") return "text-orange-400 border-orange-500/30 bg-orange-500/10"
        return "text-yellow-400 border-yellow-500/30 bg-yellow-500/10"
    }
    
    const style = getColor(incident.impact)

    return (
        <div className={`p-6 rounded-2xl border bg-black/40 backdrop-blur-sm transition-all hover:border-white/20 border-white/10`}>
            <div className="flex flex-col justify-between gap-4 mb-4 sm:flex-row">
                <h4 className="text-lg font-bold text-white">{incident.name}</h4>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border h-fit w-fit ${style}`}>
                    {incident.status}
                </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/40">
                <span>Started: {new Date(incident.started).toLocaleString()}</span>
                {incident.url && (
                    <a href={incident.url} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                        View Details
                    </a>
                )}
            </div>
        </div>
    )
}

function MaintenanceCard({ maintenance }: { maintenance: Maintenance }) {
    return (
        <div className="p-6 border rounded-2xl border-blue-500/20 bg-blue-900/10 backdrop-blur-sm">
             <div className="flex flex-col justify-between gap-4 mb-4 sm:flex-row">
                <h4 className="text-lg font-bold text-white">{maintenance.name}</h4>
                <span className="inline-flex items-center px-3 py-1 text-xs font-bold tracking-wider text-blue-300 uppercase border rounded-full border-blue-400/30 bg-blue-400/10 h-fit w-fit">
                    {maintenance.status}
                </span>
            </div>
             <div className="flex flex-col gap-4 text-xs sm:flex-row text-white/40">
                <span>Scheduled: {new Date(maintenance.start).toLocaleString()}</span>
                <span>Duration: {maintenance.duration} min</span>
            </div>
        </div>
    )
}