import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, FileTextIcon, ClockIcon, UsersIcon, BuildingIcon } from "@/components/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "For Venues | Certificate Management & Event Insurance | Eventure",
  description:
    "Streamline your venue's insurance requirements. Instant certificates, additional insured endorsements, and blanket coverage for recurring events. Partner with Eventure for worry-free event hosting.",
  keywords: [
    "venue insurance",
    "additional insured certificate",
    "venue liability",
    "event venue coverage",
    "certificate of insurance",
  ],
}

export default function VenuesPage() {
  const benefits = [
    {
      icon: FileTextIcon,
      title: "Instant Certificates",
      description:
        "Issue certificates of insurance in minutes, not days. Your event planners get venue-ready documentation immediately.",
    },
    {
      icon: UsersIcon,
      title: "Additional Insured Made Easy",
      description: "We add your venue as additional insured on every policy. No chasing down endorsements.",
    },
    {
      icon: ClockIcon,
      title: "24/7 Certificate Portal",
      description: "Access and verify certificates anytime. Real-time validation for your peace of mind.",
    },
    {
      icon: BuildingIcon,
      title: "Blanket Venue Coverage",
      description:
        "For venues with recurring events, get blanket endorsements that cover all qualified events automatically.",
    },
  ]

  const venueTypes = [
    "Wedding venues & banquet halls",
    "Convention centers",
    "Hotels & resorts",
    "Country clubs & golf courses",
    "Fairgrounds & arenas",
    "Restaurants & event spaces",
    "Museums & galleries",
    "Outdoor amphitheaters",
    "Wineries & breweries",
    "Historic estates",
    "Rooftop venues",
    "Parks & recreation facilities",
  ]

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <BuildingIcon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">For Venue Partners</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Streamline Your Venue's
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {" "}
                Insurance Requirements
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop chasing certificates. Eventure makes it easy for your event clients to get proper coverage with your
              venue automatically added as additional insured.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/venues/partner">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 text-white"
                >
                  Become a Venue Partner
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-background/80">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Venues Partner With Eventure</h2>
            <p className="text-xl text-muted-foreground">Insurance certificate management, simplified.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center border-border/50 bg-card/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Certificate Issuance Works</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Client Gets Quote",
                  description:
                    "Your event client requests a quote through Eventure. They enter your venue information.",
                },
                {
                  step: "2",
                  title: "Auto-Add Venue",
                  description: "Your venue is automatically added as additional insured. No extra steps needed.",
                },
                {
                  step: "3",
                  title: "Instant Certificate",
                  description: "Certificate is issued immediately and sent to both client and venue for records.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue Types */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Venue Types We Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {venueTypes.map((venue, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border/50">
                  <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{venue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Insurance Process?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of venues who trust Eventure for hassle-free certificate management.
          </p>
          <Link href="/venues/partner">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-primary hover:bg-gray-100">
              Become a Venue Partner
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
