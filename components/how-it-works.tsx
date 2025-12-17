import { FileText, Search, Shield, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Tell us about yourself",
      description: "Answer a few quick questions about your coverage needs and preferences",
      step: "01",
    },
    {
      icon: Search,
      title: "Compare personalized quotes",
      description: "Review customized quotes from top-rated insurance providers instantly",
      step: "02",
    },
    {
      icon: Shield,
      title: "Choose your coverage",
      description: "Select the plan that fits your needs and budget perfectly",
      step: "03",
    },
    {
      icon: CheckCircle,
      title: "Get protected today",
      description: "Activate your coverage immediately and enjoy peace of mind",
      step: "04",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            How Eventure works
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Getting the right insurance coverage has never been easier. Follow these simple steps to get protected.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                    {step.step}
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-6 hidden h-0.5 w-8 bg-border lg:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
