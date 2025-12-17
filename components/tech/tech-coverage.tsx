import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TechCoverage() {
  const coverageOptions = [
    {
      title: "Wedding Insurance",
      description: "Protect your special day from unexpected cancellations and liability",
      features: ["Venue damage", "Vendor no-shows", "Weather cancellation", "Liability coverage"],
    },
    {
      title: "Corporate Event Insurance",
      description: "Comprehensive protection for business conferences and meetings",
      features: ["General liability", "Property damage", "Equipment protection", "Cancellation coverage"],
    },
    {
      title: "Festival & Concert Insurance",
      description: "Coverage for large-scale music and entertainment events",
      features: ["Crowd liability", "Equipment damage", "Weather protection", "Liquor liability"],
    },
    {
      title: "Sports Event Insurance",
      description: "Protection for athletic competitions and sporting events",
      features: ["Participant liability", "Property damage", "Equipment coverage", "Weather cancellation"],
    },
    {
      title: "Fundraiser & Nonprofit Insurance",
      description: "Affordable coverage for charitable events and fundraisers",
      features: ["General liability", "Volunteer coverage", "Property protection", "Food liability"],
    },
    {
      title: "Private Party Insurance",
      description: "Coverage for birthdays, graduations, and family celebrations",
      features: ["Host liability", "Property damage", "Liquor liability", "Medical payments"],
    },
    {
      title: "Trade Show & Expo Insurance",
      description: "Protect your booth, products, and exhibition investments",
      features: ["Vendor liability", "Product damage", "Equipment protection", "Booth coverage"],
    },
    {
      title: "Cultural Event Insurance",
      description: "Coverage for religious, cultural celebrations and traditional events",
      features: ["Ceremony protection", "Property damage", "Liability coverage", "Cancellation protection"],
    },
    {
      title: "Specialty Events",
      description: "Cannabis events, EDM shows, rodeos, and unique gatherings",
      features: ["Custom coverage", "High-risk protection", "Equipment insurance", "Participant liability"],
    },
  ]

  return (
    <section id="coverage" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Coverage for
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              every event
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to large-scale festivals—we provide tailored insurance solutions for 30+ event
            types.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageOptions.map((option, index) => {
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>

                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Get Quote
                </Button>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">More Event Types We Cover</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[
              "Equestrian & Rodeo",
              "Parade & Public Gathering",
              "Political Campaign Events",
              "Holiday Parties",
              "Vendor & Exhibitor",
              "Conference & Seminar",
              "Carnival & Fair",
              "Jaripeo Insurance",
              "EDM & Hip-Hop Events",
              "Trail Rides",
              "Petting Zoo",
              "Overnight Events",
              "Foreign Events",
              "Carriage Rides",
              "Film Production",
              "Rented Equipment",
            ].map((type, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
