import { Button } from "@/components/ui/button"
import { ArrowRightIcon, PhoneIcon } from "@/components/icons"
import Link from "next/link"

export function HomeCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Protect
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Your Event?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of event planners who trust Eventure Insurance. Get your personalized quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="h-16 px-10 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
              >
                Get Your Free Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-semibold bg-transparent">
                <PhoneIcon className="mr-2 h-5 w-5" />
                Talk to an Expert
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No obligation • Free consultation • Response within 24-48 hours
          </p>
        </div>
      </div>
    </section>
  )
}
