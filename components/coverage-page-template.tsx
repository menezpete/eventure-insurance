import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, ClockIcon, PhoneIcon } from "@/components/icons"
import Link from "next/link"

interface CoveragePageProps {
  title: string
  subtitle: string
  description: string
  heroImage?: string
  coverageIncludes: string[]
  commonRisks: string[]
  whyChooseUs: string[]
  faqs: { question: string; answer: string }[]
  relatedCoverages: { title: string; href: string }[]
}

export function CoveragePageTemplate({
  title,
  subtitle,
  description,
  coverageIncludes,
  commonRisks,
  whyChooseUs,
  faqs,
  relatedCoverages,
}: CoveragePageProps) {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Event Insurance Coverage</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
              <p className="text-xl md:text-2xl text-primary font-medium mb-6">{subtitle}</p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
                >
                  Get Your Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-transparent">
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  Talk to an Expert
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-green-500" />
                <span className="text-sm">A+ Rated Carriers</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-primary" />
                <span className="text-sm">Quotes in 24-48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-secondary" />
                <span className="text-sm">Comprehensive Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Covered</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our comprehensive coverage protects you from a wide range of risks associated with your event.
                </p>
                <div className="space-y-4">
                  {coverageIncludes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Common Risks We Cover</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Events can face unexpected challenges. We help protect you from:
                </p>
                <div className="space-y-4">
                  {commonRisks.map((risk, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ShieldCheckIcon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Eventure Insurance</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference of working with event insurance specialists.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                    <CheckIcon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">{reason}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border/50">
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Coverage */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Coverage Options</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedCoverages.map((coverage, index) => (
                <Link key={index} href={coverage.href}>
                  <Card className="p-4 text-center hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer">
                    <span className="font-medium">{coverage.title}</span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Event?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a personalized quote and secure coverage for your event today.
            </p>
            <Link href="/quote">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
              >
                Get Your Free Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
