import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PhoneIcon, FileTextIcon, ClockIcon, ShieldCheckIcon, CheckIcon, ArrowRightIcon } from "@/components/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "File a Claim",
  description:
    "File an event insurance claim with Eventure Insurance. Our claims team is here to help you through the process quickly and efficiently.",
}

export default function ClaimsPage() {
  const steps = [
    {
      step: "1",
      title: "Report the Incident",
      description:
        "Contact us as soon as possible after an incident occurs. You can call our claims hotline or submit a claim online.",
    },
    {
      step: "2",
      title: "Document Everything",
      description:
        "Gather all relevant documentation including photos, receipts, contracts, and any witness information.",
    },
    {
      step: "3",
      title: "Submit Your Claim",
      description:
        "Complete the claims form with all details about the incident and attach your supporting documentation.",
    },
    {
      step: "4",
      title: "Claims Review",
      description: "Our claims team will review your submission and may contact you for additional information.",
    },
    {
      step: "5",
      title: "Resolution",
      description: "Once approved, you'll receive payment according to your policy terms.",
    },
  ]

  const tips = [
    "Report incidents as soon as possible",
    "Take photos and videos of any damage",
    "Keep all receipts and contracts",
    "Get contact information from witnesses",
    "Document the timeline of events",
    "Keep copies of all correspondence",
  ]

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <FileTextIcon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Claims Support</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              File a
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Claim</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We're here to help when you need us most. Our claims team will guide you through every step of the
              process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call Claims: 1-800-EVENTURE
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-transparent">
                Submit Claim Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <PhoneIcon className="w-8 h-8" />
              <div>
                <div className="font-bold text-lg">24/7 Emergency Claims Hotline</div>
                <div className="text-white/80">For urgent matters outside business hours</div>
              </div>
            </div>
            <div className="text-2xl font-bold">1-800-EVENTURE</div>
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Claims Process</h2>
              <p className="text-xl text-muted-foreground">
                Our streamlined claims process gets you the support you need quickly.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pb-6 border-b border-border/50 last:border-0">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Tips for a Smooth Claim</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Following these tips will help expedite your claim and ensure you receive the coverage you're entitled
                  to.
                </p>
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="font-medium">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-8 border-border/50 bg-card/80">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <ClockIcon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">Claims acknowledged within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <ShieldCheckIcon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Expert Support</h3>
                    <p className="text-sm text-muted-foreground">Dedicated claims specialist assigned</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <FileTextIcon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Clear Communication</h3>
                    <p className="text-sm text-muted-foreground">Regular updates throughout the process</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Claims?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is here to help answer any questions about the claims process.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
              >
                Contact Our Claims Team
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
