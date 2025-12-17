import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { CheckIcon } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insurance Licenses",
  description:
    "Eventure Insurance is licensed to provide event insurance in all 50 states. View our licensing information.",
}

export default function LicensesPage() {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ]

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insurance Licenses</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Eventure Insurance is a licensed insurance agency authorized to conduct business in all 50 states.
            </p>

            <Card className="p-8 mb-12 border-border/50 bg-card/50">
              <h2 className="text-2xl font-bold mb-4">Agency Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground">Agency Name</p>
                  <p className="font-semibold">Eventure Insurance Agency, LLC</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">National Producer Number</p>
                  <p className="font-semibold">NPN: 00000000</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Home State</p>
                  <p className="font-semibold">Texas</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">License Type</p>
                  <p className="font-semibold">Property & Casualty</p>
                </div>
              </div>
            </Card>

            <h2 className="text-2xl font-bold mb-6">Licensed States</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {states.map((state) => (
                <div key={state} className="flex items-center gap-2 p-3 rounded-lg bg-card/50 border border-border/50">
                  <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{state}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                For specific license numbers or to verify our licensing status, please contact your state's Department
                of Insurance or reach out to us at licenses@eventureinsurance.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
