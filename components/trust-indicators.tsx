import { Award, Shield, Users, Zap } from "lucide-react"

export function TrustIndicators() {
  const stats = [
    {
      icon: Users,
      value: "500K+",
      label: "Happy Customers",
    },
    {
      icon: Shield,
      value: "99.8%",
      label: "Claims Approved",
    },
    {
      icon: Zap,
      value: "< 5 min",
      label: "Average Quote Time",
    },
    {
      icon: Award,
      value: "A+ Rated",
      label: "BBB Accredited",
    },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
