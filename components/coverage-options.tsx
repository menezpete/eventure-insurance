import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Car, Heart, Briefcase, Umbrella, Building2 } from "lucide-react"

export function CoverageOptions() {
  const coverageTypes = [
    {
      icon: Home,
      title: "Home Insurance",
      description: "Protect your home and belongings from unexpected events",
      features: ["Property damage", "Personal liability", "Additional living expenses"],
      popular: false,
    },
    {
      icon: Car,
      title: "Auto Insurance",
      description: "Comprehensive coverage for your vehicle and peace of mind on the road",
      features: ["Collision coverage", "Liability protection", "Roadside assistance"],
      popular: true,
    },
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Secure your family's financial future with flexible life insurance plans",
      features: ["Term & whole life", "Income replacement", "Estate planning"],
      popular: false,
    },
    {
      icon: Briefcase,
      title: "Business Insurance",
      description: "Comprehensive protection for your business and employees",
      features: ["General liability", "Property coverage", "Workers compensation"],
      popular: false,
    },
    {
      icon: Umbrella,
      title: "Umbrella Insurance",
      description: "Extra liability protection beyond your standard policies",
      features: ["Extended coverage", "Legal defense", "Asset protection"],
      popular: false,
    },
    {
      icon: Building2,
      title: "Renters Insurance",
      description: "Affordable protection for your personal property and liability",
      features: ["Personal property", "Liability coverage", "Temporary housing"],
      popular: false,
    },
  ]

  return (
    <section id="coverage" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Coverage for every stage of life
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Choose from our comprehensive range of insurance products designed to protect what matters most to you
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coverageTypes.map((coverage, index) => {
            const Icon = coverage.icon
            return (
              <Card key={index} className={coverage.popular ? "border-primary shadow-lg" : ""}>
                {coverage.popular && (
                  <div className="bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{coverage.title}</CardTitle>
                  <CardDescription className="text-base">{coverage.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2">
                    {coverage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={coverage.popular ? "default" : "outline"} className="w-full">
                    Get a Quote
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
