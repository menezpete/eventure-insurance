import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CheckIcon, QuoteIcon, ArrowRightIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Case Studies & Success Stories | Event Insurance Examples",
  description:
    "Real stories from event organizers who protected their events with Eventure Insurance. See how we've helped weddings, festivals, corporate events, and more.",
  keywords: ["event insurance case studies", "insurance success stories", "event protection examples"],
}

const caseStudies = [
  {
    id: "wedding-storm",
    category: "Wedding",
    title: "When a Hurricane Threatened Their Dream Wedding",
    summary:
      "A coastal Florida wedding faced Hurricane Ian just days before the ceremony. Eventure's cancellation coverage saved their $85,000 investment.",
    challenge:
      "Sarah and Michael had planned their dream beach wedding in Naples, FL for over 18 months. Just 5 days before, Hurricane Ian was projected to make landfall in their area.",
    solution:
      "Their Eventure wedding insurance policy included comprehensive weather cancellation coverage. Our claims team worked with them immediately to document the situation and begin the claims process.",
    outcome:
      "The wedding was postponed 3 months. Eventure covered $67,000 in non-recoverable deposits and additional costs for rebooking. The couple had their dream wedding in January with no financial stress.",
    testimonial:
      "When we saw the hurricane forecast, we were devastated. Our Eventure policy literally saved our wedding and our savings. The claims process was smooth and compassionate.",
    client: "Sarah & Michael T., Naples, FL",
    stats: { covered: "$67,000", timeline: "14 days to claim approval", satisfaction: "5/5" },
  },
  {
    id: "festival-vendor",
    category: "Festival",
    title: "Major Vendor Bankruptcy Nearly Derailed a 10,000-Person Festival",
    summary:
      "A regional music festival lost their main stage provider to bankruptcy 3 weeks before gates opened. Event cancellation coverage provided emergency funding.",
    challenge:
      "The Rivertown Music Festival had contracted with a stage company for their main and secondary stages. Three weeks before the event, the company declared bankruptcy and couldn't fulfill the contract.",
    solution:
      "Eventure's vendor default coverage kicked in immediately. Our team helped source replacement staging and covered the emergency premium pricing required for last-minute booking.",
    outcome:
      "The festival went on as planned with 12,000 attendees. Eventure covered $145,000 in additional costs beyond the original deposit, plus $38,000 in the lost deposit to the bankrupt vendor.",
    testimonial:
      "Without Eventure, we would have had to cancel. They didn't just pay the claim—they helped us find solutions. That's a partner, not just an insurance company.",
    client: "Jennifer M., Festival Director",
    stats: { covered: "$183,000", timeline: "Emergency approval in 48 hours", satisfaction: "5/5" },
  },
  {
    id: "corporate-injury",
    category: "Corporate",
    title: "Slip-and-Fall at Annual Conference Results in Major Claim",
    summary:
      "An attendee at a tech company's annual conference suffered a serious injury. Eventure's liability coverage protected the company from a $500,000 lawsuit.",
    challenge:
      "During a corporate conference at a convention center, an attendee slipped on a wet floor near the registration area and suffered a broken hip requiring surgery. They filed a lawsuit against the event organizer.",
    solution:
      "Eventure's general liability coverage immediately assigned legal defense and began working with the claimant. Our policy covered both defense costs and the eventual settlement.",
    outcome:
      "The case settled for $340,000 plus $85,000 in legal fees—all covered by the Eventure policy. The company's operations and reputation remained intact.",
    testimonial:
      "Our CFO was skeptical about event insurance for a 'simple conference.' After this experience, it's now mandatory for every company event we host.",
    client: "Tech Company (Name withheld), San Francisco",
    stats: { covered: "$425,000", timeline: "Full legal defense provided", satisfaction: "5/5" },
  },
  {
    id: "rodeo-livestock",
    category: "Rodeo",
    title: "Bull Escapes Arena at County Rodeo",
    summary:
      "When a bull escaped during a rodeo performance and damaged vehicles in the parking lot, Eventure's specialized rodeo coverage protected the organizers.",
    challenge:
      "During the bull riding competition at the Westfield County Rodeo, a bull broke through a gate and escaped into the parking area. Before being safely captured, it damaged 6 vehicles and a food vendor trailer.",
    solution:
      "Eventure's rodeo-specific policy included coverage for animal escape incidents. Our claims team was on-site within 24 hours to assess damage and begin the claims process.",
    outcome:
      "All vehicle damage ($47,000), vendor trailer repairs ($12,000), and additional security costs ($5,000) were covered. No injuries occurred, but the rapid response maintained community trust.",
    testimonial:
      "Eventure understands rodeo. They knew exactly what we needed and how to handle the situation. Other insurers don't get the unique risks of livestock events.",
    client: "Westfield County Fair Association",
    stats: { covered: "$64,000", timeline: "On-site assessment in 24 hours", satisfaction: "5/5" },
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Real Stories, Real Protection
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Case Studies & <span className="text-primary">Success Stories</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                See how Eventure Insurance has protected event organizers when the unexpected happened. These real
                stories demonstrate why comprehensive event insurance matters.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                      {study.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h2>
                    <p className="text-muted-foreground mb-6">{study.summary}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                          The Challenge
                        </h3>
                        <p className="text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                          Our Solution
                        </h3>
                        <p className="text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                          The Outcome
                        </h3>
                        <p className="text-sm">{study.outcome}</p>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6 mb-6">
                      <QuoteIcon className="w-8 h-8 text-primary/40 mb-3" />
                      <p className="italic text-muted-foreground mb-3">{study.testimonial}</p>
                      <p className="font-medium text-sm">— {study.client}</p>
                    </div>
                  </div>

                  <div
                    className={`bg-card rounded-2xl border border-border p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <h3 className="font-bold text-lg mb-6">Results at a Glance</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckIcon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">{study.stats.covered}</p>
                          <p className="text-sm text-muted-foreground">Total Covered</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <CheckIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold">{study.stats.timeline}</p>
                          <p className="text-sm text-muted-foreground">Response Time</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                          <CheckIcon className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold">{study.stats.satisfaction}</p>
                          <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Event Like They Did</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Don't wait until something goes wrong. Get comprehensive event insurance and join thousands of protected
              event organizers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" variant="secondary" className="text-primary font-semibold">
                  Get Your Free Quote
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
