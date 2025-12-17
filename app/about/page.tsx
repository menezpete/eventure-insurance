import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShieldCheckIcon, UsersIcon, CheckIcon, ArrowRightIcon } from "@/components/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Eventure Insurance - 15+ years of experience protecting events nationwide. Discover our mission, values, and commitment to event organizers.",
}

export default function AboutPage() {
  const values = [
    {
      title: "Client-First Approach",
      description:
        "Your event's success is our priority. We work closely with you to understand your unique needs and provide tailored coverage solutions.",
    },
    {
      title: "Expertise & Experience",
      description:
        "With 15+ years in event insurance, we've seen it all. Our team brings deep industry knowledge to every policy we write.",
    },
    {
      title: "Transparency",
      description:
        "No hidden fees or confusing jargon. We explain your coverage clearly so you know exactly what you're getting.",
    },
    {
      title: "Responsive Service",
      description: "When you need us, we're here. Our team responds quickly to questions, quote requests, and claims.",
    },
  ]

  const team = [
    { name: "Leadership Team", description: "Industry veterans with 50+ combined years in insurance" },
    { name: "Claims Specialists", description: "Dedicated professionals to guide you through any claim" },
    { name: "Coverage Experts", description: "Specialists in every event type we cover" },
    { name: "Client Success", description: "Your partners from quote to certificate" },
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
              <ShieldCheckIcon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">About Eventure Insurance</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protecting Events
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {" "}
                Since 2010
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over 15 years, Eventure Insurance has been the trusted partner for event organizers nationwide. We
              specialize in comprehensive coverage for every type of event.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Eventure Insurance, we believe every event deserves protection. Whether it's a once-in-a-lifetime
                  wedding, a major corporate conference, or a community festival, we're here to ensure your investment
                  is safeguarded.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our mission is to provide accessible, comprehensive event insurance with exceptional service. We take
                  the complexity out of insurance so you can focus on what matters most—creating memorable experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">10,000+ Events Protected</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">30+ Event Types</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-card rounded-xl">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl">
                    <div className="text-4xl font-bold text-primary mb-2">50</div>
                    <div className="text-sm text-muted-foreground">States Licensed</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl">
                    <div className="text-4xl font-bold text-primary mb-2">A+</div>
                    <div className="text-sm text-muted-foreground">Carrier Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Eventure Insurance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50">
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A dedicated team of insurance professionals committed to protecting your events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-xl border border-border/50">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a personalized quote for your event and experience the Eventure difference.
            </p>
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
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
