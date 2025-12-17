import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            Ready to get protected?
          </h2>
          <p className="mb-10 text-pretty text-lg text-primary-foreground/90 md:text-xl">
            Join over 500,000 customers who trust Eventure Insurance to protect what matters most. Get your free quote
            in less than 5 minutes.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Phone className="h-5 w-5" />
              Call (800) 555-0123
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
