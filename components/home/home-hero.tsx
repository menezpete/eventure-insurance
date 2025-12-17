import { Button } from "@/components/ui/button"
import { ArrowRightIcon, ShieldCheckIcon, ClockIcon, CheckIcon, StarIcon } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

export function HomeHero() {
  const carriers = [{ name: "AM Best A+ Rated", logo: null }]

  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background with event imagery */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Event celebration"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/15 to-primary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            Event Insurance That
            <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              {" "}
              Actually Understands{" "}
            </span>
            Your Event
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Fast quotes, instant certificates, and coverage tailored for weddings, rodeos, festivals, vendors, and
            corporate events. Get covered in minutes.
          </p>

          <div className="max-w-2xl mx-auto mb-10">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-2 shadow-xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <select className="flex-1 h-14 px-4 rounded-xl bg-background border border-border/50 text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">What type of event are you insuring?</option>
                  <option value="wedding">Wedding / Reception</option>
                  <option value="rodeo">Rodeo / Equestrian Event</option>
                  <option value="festival">Festival / Concert</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="vendor">Vendor / Food Truck</option>
                  <option value="sports">Sporting Event</option>
                  <option value="fundraiser">Charity / Fundraiser</option>
                  <option value="other">Other Event Type</option>
                </select>
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white w-full sm:w-auto"
                  >
                    Get Quote
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border/50 shadow-sm">
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Instant Certificates</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border/50 shadow-sm">
              <ClockIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Quick Quote in 3 Steps</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border/50 shadow-sm">
              <ShieldCheckIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">A+ Rated Carriers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border/50 shadow-sm">
              <StarIcon className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">30+ Event Types</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
              >
                Get Your Free Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/certificate">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-semibold bg-background/80 backdrop-blur-sm"
              >
                Need a Certificate Fast?
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No obligation • Venue-ready certificates • Licensed in all 50 states
          </p>
        </div>
      </div>
    </section>
  )
}
