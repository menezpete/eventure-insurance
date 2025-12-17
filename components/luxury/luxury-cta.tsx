import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function LuxuryCTA() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Ready to experience
            <br />
            <span className="text-primary">better insurance?</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've made the switch to Eventure.
          </p>
          <Button size="lg" className="text-base px-8 h-14 bg-primary hover:bg-primary/90 group">
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
