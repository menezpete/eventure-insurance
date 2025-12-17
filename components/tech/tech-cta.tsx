import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function TechCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Ready to save
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              up to 40%?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join 500,000+ customers who trust Eventure for their insurance needs. Get your quote in 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-16 px-10 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-semibold bg-transparent">
              Talk to an Expert
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Instant approval • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
