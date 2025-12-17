import { ShieldCheckIcon, CheckIcon } from "@/components/icons"

export function HomeTrust() {
  const features = [
    "A+ Rated Insurance Carriers",
    "Licensed in All 50 States",
    "15+ Years of Experience",
    "24/7 Claims Support",
    "Same-Day Certificates Available",
    "Bilingual Support (English/Spanish)",
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Why Choose Eventure</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Event Insurance
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Experts
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8">
                With over 15 years of experience and 10,000+ events protected, Eventure Insurance is the trusted choice
                for event organizers nationwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                    A+
                  </div>
                  <div className="text-lg font-semibold">Rating</div>
                  <div className="text-sm text-muted-foreground">From AM Best Rated Carriers</div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                    <div className="text-sm text-muted-foreground">Events Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">50</div>
                    <div className="text-sm text-muted-foreground">States Licensed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
