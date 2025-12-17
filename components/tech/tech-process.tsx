import { Zap, FileCheck, Shield, CheckCircle } from "lucide-react"

export function TechProcess() {
  const steps = [
    {
      icon: Zap,
      title: "Tell Us About Your Event",
      description:
        "Share event details like type, date, location, and number of attendees through our simple online form.",
    },
    {
      icon: FileCheck,
      title: "Get Your Quote",
      description:
        "Receive a personalized quote within 24-48 hours. Quick Quote Program available for qualifying events.",
    },
    {
      icon: Shield,
      title: "Customize Coverage",
      description:
        "Work with our team to tailor your policy with the right coverage limits and additional protections.",
    },
    {
      icon: CheckCircle,
      title: "You're Protected",
      description: "Receive your certificate of insurance and enjoy peace of mind knowing your event is fully covered.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How it
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting event insurance has never been easier. Our simple process gets your event protected quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-xl" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
