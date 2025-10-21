export function Stats() {
  const stats = [
    { value: "99.9%", label: "Uptime SLA", sublabel: "Guaranteed reliability" },
    { value: "Free", label: "Forever", sublabel: "No hidden costs" },
    { value: "24/7", label: "Community", sublabel: "Discord support" },
    { value: "1 Gbit", label: "Network", sublabel: "High-speed connectivity" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 font-mono tracking-tight group-hover:text-foreground/80 transition-colors">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
