import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShieldCheckIcon, CheckIcon, ArrowRightIcon, UsersIcon, ZapIcon, FileTextIcon } from "@/components/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Broker & Wholesale Partners | Eventure Insurance",
  description:
    "Partner with Eventure for event insurance wholesale solutions. Competitive commissions, fast quotes, API access, and white-label certificate options for insurance brokers.",
  keywords: ["event insurance wholesale", "insurance broker partnership", "wholesale event coverage", "broker portal"],
}

export default function BrokersPage() {
  const benefits = [
    {
      icon: ZapIcon,
      title: "Fast Turnaround",
      description: "24-48 hour quotes on standard risks, same-day for simple events",
    },
    {
      icon: FileTextIcon,
      title: "API Integration",
      description: "Connect your systems directly to our quote and certificate platform",
    },
    { icon: UsersIcon, title: "Dedicated Support", description: "Named underwriter for your book of business" },
    {
      icon: ShieldCheckIcon,
      title: "Competitive Commissions",
      description: "Industry-leading commission structure with volume bonuses",
    },
  ]

  const features = [
    "Access to 30+ event types without additional appointments",
    "White-label certificate options available",
    "Multi-policy management dashboard",
    "Bulk certificate issuance for large accounts",
    "Co-branded marketing materials",
    "Training and product education",
    "Claims advocacy for your clients",
    "Flexible payment terms",
  ]

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-background to-purple-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
              <UsersIcon className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-medium text-indigo-600">Broker & Wholesale Partners</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Your Event Insurance
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Book of Business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Partner with Eventure for fast quotes, competitive commissions, and access to 30+ event types. Your
              clients get A+ rated coverage; you get a reliable market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/brokers/apply">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                >
                  Apply for Partnership
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/brokers/login">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-background/80">
                  Broker Portal Login
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Brokers Choose Eventure</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center border-border/50 bg-card/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-indigo-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Program Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50"
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our network of successful brokers and start writing event insurance today.
          </p>
          <Link href="/brokers/apply">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-indigo-600 hover:bg-gray-100">
              Apply for Partnership
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
