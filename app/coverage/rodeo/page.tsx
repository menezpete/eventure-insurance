import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ShieldCheckIcon,
  CheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  FileTextIcon,
  StarIcon,
  HorseIcon,
} from "@/components/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rodeo & Equestrian Event Insurance | Expert Underwriters | Eventure",
  description:
    "Specialized rodeo and equestrian event insurance from underwriters who know livestock, riders, and arenas. Animal liability endorsements, chute & arena exposures, spectator protection. Get your rodeo quote today.",
  keywords: [
    "rodeo insurance",
    "equestrian event insurance",
    "horse show insurance",
    "bull riding insurance",
    "livestock event insurance",
    "rodeo liability insurance",
    "equine event coverage",
    "western event insurance",
  ],
}

export default function RodeoInsurancePage() {
  const coverageTypes = [
    {
      title: "General Liability",
      description: "Protection against third-party bodily injury and property damage claims",
      items: ["Spectator injuries", "Property damage", "Advertising injury", "Personal injury"],
    },
    {
      title: "Participant Accident",
      description: "Medical coverage for riders and contestants",
      items: [
        "Accident medical expense",
        "Accidental death & dismemberment",
        "Rider injury coverage",
        "Contestant protection",
      ],
    },
    {
      title: "Animal Liability",
      description: "Specialized coverage for livestock-related incidents",
      items: [
        "Escaped animal injuries",
        "Animal bites/kicks",
        "Livestock handler protection",
        "Spectator animal incidents",
      ],
    },
    {
      title: "Event Cancellation",
      description: "Financial protection when events can't proceed",
      items: ["Weather cancellation", "Venue unavailability", "Key participant illness", "Government restrictions"],
    },
  ]

  const rodeoExposures = [
    "Bull riding events",
    "Bronc riding (saddle & bareback)",
    "Barrel racing",
    "Roping events (team & calf)",
    "Steer wrestling",
    "Breakaway roping",
    "Mutton busting",
    "Chute operations",
    "Arena & grandstand safety",
    "Livestock pens & holding areas",
    "Mounted patrol & outriders",
    "Rodeo clowns & bullfighters",
  ]

  const testimonials = [
    {
      quote:
        "Eventure understood our rodeo operations from day one. They didn't need a crash course in what a chute gate is or why we need coverage for escaped bulls. Best partner we've had.",
      author: "Mike Thompson",
      title: "Director, Western States Rodeo Association",
      rating: 5,
    },
    {
      quote:
        "When a storm forced us to cancel our county fair rodeo, Eventure had our claim processed in under two weeks. That's unheard of in this industry.",
      author: "Sarah Martinez",
      title: "Event Coordinator, Tri-County Fair",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "Do you cover PRCA-sanctioned professional rodeos?",
      answer:
        "Yes, we provide coverage for all levels of rodeo competition including PRCA Professional Rodeo, WPRA, NLBRA, and amateur associations. Our underwriters have specific experience with sanctioned event requirements.",
    },
    {
      question: "What about livestock in transit to the event?",
      answer:
        "We offer inland marine coverage for livestock during transport to and from events, including mortality and injury coverage. This can be added to your event policy or written separately for stock contractors.",
    },
    {
      question: "Are spectators covered if an animal escapes the arena?",
      answer:
        "Absolutely. Our general liability coverage includes comprehensive protection for spectator injuries from escaped livestock, animal bites/kicks, and other animal-related incidents both inside and outside the arena.",
    },
    {
      question: "Do you cover high-risk events like bull riding and bronc riding?",
      answer:
        "Yes, we specialize in coverage for high-risk rodeo events. We understand the unique exposures of roughstock events and price accordingly without unnecessary exclusions that leave you exposed.",
    },
    {
      question: "What limits are available for rodeo events?",
      answer:
        "We offer general liability limits from $1M to $10M per occurrence, with aggregate limits tailored to your event size. Participant accident coverage is available with medical limits up to $100,000.",
    },
    {
      question: "Can you provide certificates for multiple venues on one policy?",
      answer:
        "Yes, for traveling rodeos and multi-venue circuits, we can issue a single policy covering all locations with venue-specific certificates as needed. This is ideal for rodeo associations and stock contractors.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden bg-gradient-to-br from-amber-900/20 via-background to-orange-900/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-8">
              <HorseIcon className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-amber-600">Expert Underwriters for Rodeo & Equine Events</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Rodeo & Equestrian Event Insurance</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Expert underwriters who know livestock, riders, and arenas.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg text-muted-foreground mb-8">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-amber-500" />
                Animal liability endorsements
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-amber-500" />
                Chute & arena exposures
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-amber-500" />
                Spectator protection
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-amber-500" />
                Custom applications
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote?type=rodeo">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90 text-white"
                >
                  Request Rodeo Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="/rodeo-application.pdf" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-background/80">
                  <FileTextIcon className="mr-2 h-5 w-5" />
                  Download Rodeo Application
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/30">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-amber-500" />
                <span className="font-medium">Speak to an Equine Specialist:</span>
                <a href="tel:1-800-EVENTURE" className="font-bold text-amber-600 hover:underline">
                  1-800-EVENTURE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is Your Event Covered Checklist */}
      <section className="py-16 bg-amber-500/5 border-y border-amber-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Is Your Rodeo Event Covered?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {rodeoExposures.map((exposure, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border/50"
                >
                  <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{exposure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Rodeo Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From participant accidents to escaped livestock, we understand the unique exposures of rodeo and
              equestrian events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coverageTypes.map((coverage, index) => (
              <Card key={index} className="p-8 border-border/50 bg-card/50">
                <h3 className="text-xl font-bold mb-2">{coverage.title}</h3>
                <p className="text-muted-foreground mb-4">{coverage.description}</p>
                <ul className="space-y-2">
                  {coverage.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckIcon className="w-4 h-4 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-amber-500/5 via-background to-orange-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Rodeo Professionals Choose Eventure</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our underwriters have walked the dirt. We understand the difference between a flank strap and a breast
                  collar, and we know why that matters for your coverage.
                </p>
                <div className="space-y-4">
                  {[
                    "Deep understanding of rodeo operations and terminology",
                    "Relationships with PRCA, WPRA, and regional associations",
                    "Experience with both pro circuits and amateur events",
                    "Quick turnaround for traveling rodeos and circuits",
                    "Stock contractor-specific coverage options",
                    "Rural venue and fairgrounds expertise",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card border border-border/50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <ShieldCheckIcon className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">A+ Rated Carriers</h3>
                  <p className="text-muted-foreground">Backed by AM Best A+ rated insurance companies</p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Rodeos Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">48hr</div>
                    <div className="text-sm text-muted-foreground">Typical Quote Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">Claims Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Rodeo Professionals Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-border/50 bg-card/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-amber-500" filled />
                  ))}
                </div>
                <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Rodeo Insurance FAQs</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border/50 rounded-xl p-6 bg-background">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Rodeo?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a quote from underwriters who actually understand rodeo operations. No explaining what a barrel pattern
            is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?type=rodeo">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-amber-600 hover:bg-gray-100">
                Request Rodeo Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:1-800-EVENTURE">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-semibold border-white text-white hover:bg-white/10 bg-transparent"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call an Equine Specialist
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
