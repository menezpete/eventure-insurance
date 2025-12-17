import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { QuoteForm } from "@/components/quote-form"
import { Card } from "@/components/ui/card"
import { CheckIcon, ClockIcon, ShieldCheckIcon, PhoneIcon } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free event insurance quote from Eventure Insurance. Get personalized coverage for weddings, corporate events, festivals, and more within 24-48 hours.",
}

export default function QuotePage() {
  const benefits = [
    {
      icon: ClockIcon,
      title: "Quick Turnaround",
      description: "Receive your personalized quote within 24-48 hours",
    },
    {
      icon: ShieldCheckIcon,
      title: "Comprehensive Coverage",
      description: "Tailored protection for your specific event needs",
    },
    {
      icon: CheckIcon,
      title: "No Obligation",
      description: "Free quotes with no commitment required",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Your
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {" "}
                Free Quote
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your event and receive a personalized insurance quote within 24-48 hours. No obligation, no
              pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-12 border-border/50 bg-card/80 shadow-2xl">
                <h2 className="text-2xl font-bold mb-2">Event Details</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will prepare your personalized quote.
                </p>
                <QuoteForm />
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 border-border/50 bg-card/50">
                <h3 className="font-bold text-lg mb-4">Prefer to Talk?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our specialists are ready to help you find the right coverage.
                </p>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/10">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-bold">1-800-EVENTURE</div>
                    <div className="text-xs text-muted-foreground">Mon-Fri 8am-6pm CST</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-card/50">
                <h3 className="font-bold text-lg mb-4">Quick Quote Program</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Events that meet certain criteria may qualify for same-day quotes:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    <span>Standard liability coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    <span>Under 500 attendees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    <span>Traditional venue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    <span>No high-risk activities</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-border/50 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
