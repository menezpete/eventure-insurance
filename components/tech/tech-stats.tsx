export function TechStats() {
  const stats = [
    { value: "50,000+", label: "Events Protected" },
    { value: "4.9/5", label: "Customer Rating" },
    { value: "24/7", label: "Support Available" },
    { value: "30+", label: "Event Types Covered" },
  ]

  return (
    <section className="py-16 border-y border-border/40 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
