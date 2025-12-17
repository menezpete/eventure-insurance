import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ZapIcon } from "@/components/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vendor Insurance | Food Trucks, Photographers, DJs & More | Eventure",
  description:
    "Affordable short-term vendor insurance for food trucks, photographers, DJs, craft vendors, and event service providers. Get covered for single events or annual policies.",
  keywords: [
    "vendor insurance",
    "food truck insurance",
    "event vendor liability",
    "photographer insurance",
    "DJ insurance",
    "craft vendor insurance",
  ],
}

export default function VendorsPage() {
  const vendorTypes = [
    {
      name: "Food Vendors & Food Trucks",
      description: "General liability + product liability for food service",
      price: "From $75/event",
    },
    {
      name: "Photographers & Videographers",
      description: "Liability coverage for capturing your clients' events",
      price: "From $50/event",
    },
    {
      name: "DJs & Musicians",
      description: "Equipment and liability protection for performers",
      price: "From $45/event",
    },
    { name: "Craft & Artisan Vendors", description: "Product liability for handmade goods", price: "From $40/event" },
    {
      name: "Caterers & Bartenders",
      description: "Food service and liquor liability combined",
      price: "From $100/event",
    },
    {
      name: "Event Decorators & Florists",
      description: "Coverage for setup, installation, and products",
      price: "From $55/event",
    },
  ]

  const features = [
    "Single-event or annual policies available",
    "Same-day certificates for last-minute gigs",
    "Venue automatically added as additional insured",
    "Product liability included for food vendors",
    "Equipment coverage add-on available",
    "Multi-vendor discounts for event companies",
  ]

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-background to-teal-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <ZapIcon className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-green-600">Quick Coverage for Event Vendors</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vendor Insurance
              <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                {" "}
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Whether you're serving tacos at a festival or photographing a wedding, get the coverage venues require in
              minutes—not days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/quote?type=vendor">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white"
                >
                  Get Vendor Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {["From $40/event", "Same-day certificates", "A+ rated coverage"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
                  <CheckIcon className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Types */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Coverage by Vendor Type</h2>
            <p className="text-xl text-muted-foreground">Tailored protection for every type of event vendor</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {vendorTypes.map((vendor, index) => (
              <Card key={index} className="p-6 border-border/50 bg-card/50 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2">{vendor.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{vendor.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">{vendor.price}</span>
                  <Link href="/quote?type=vendor">
                    <Button size="sm" variant="outline">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Vendors Choose Eventure</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Vendor Certificate Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't lose a gig because you don't have insurance. Get covered in minutes.
          </p>
          <Link href="/quote?type=vendor">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-green-600 hover:bg-gray-100">
              Start Your Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
