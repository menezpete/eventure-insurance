export function HomeStats() {
  const stats = [
    { value: "10,000+", label: "Events Protected" },
    { value: "30+", label: "Event Types Covered" },
    { value: "24-48hrs", label: "Quote Turnaround" },
    { value: "98%", label: "Client Satisfaction" },
  ]

  return (
    <section className="py-16 border-y border-border/40 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
