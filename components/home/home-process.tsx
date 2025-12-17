import { FileTextIcon, ClockIcon, ShieldCheckIcon, CheckIcon } from "@/components/icons"

export function HomeProcess() {
  const steps = [
    {
      icon: FileTextIcon,
      step: "01",
      title: "Tell Us About Your Event",
      description: "Fill out our simple form with your event details, date, and coverage needs.",
    },
    {
      icon: ClockIcon,
      step: "02",
      title: "Receive Your Quote",
      description: "Get a personalized quote within 24-48 hours. Quick Quote Program may provide same-day quotes.",
    },
    {
      icon: ShieldCheckIcon,
      step: "03",
      title: "Review & Customize",
      description: "Work with our specialists to tailor coverage to your specific event requirements.",
    },
    {
      icon: CheckIcon,
      step: "04",
      title: "Get Covered",
      description: "Finalize your policy and receive your certificate of insurance for your event.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card/30" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting event insurance with Eventure is simple. Our streamlined process gets you covered quickly so you can
            focus on your event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
