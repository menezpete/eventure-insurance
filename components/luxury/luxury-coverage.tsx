import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const coverageTypes = [
  {
    title: "Auto",
    price: "From $89/mo",
    features: ["Comprehensive coverage", "Roadside assistance", "Rental car coverage", "Accident forgiveness"],
    image: "/luxury-car-on-open-road.jpg",
  },
  {
    title: "Home",
    price: "From $129/mo",
    features: ["Property protection", "Liability coverage", "Personal belongings", "Natural disaster coverage"],
    image: "/modern-luxury-home.png",
  },
  {
    title: "Life",
    price: "From $49/mo",
    features: ["Term & whole life options", "Living benefits", "No medical exam options", "Flexible coverage amounts"],
    image: "/happy-family-outdoors.jpg",
  },
]

export function LuxuryCoverage() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Coverage that
            <br />
            <span className="text-primary">fits your life</span>
          </h2>
          <p className="text-xl text-foreground/60 text-balance">
            Choose from our comprehensive range of insurance products, each designed with your needs in mind.
          </p>
        </div>

        {/* Coverage Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {coverageTypes.map((coverage, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={coverage.image || "/placeholder.svg"}
                  alt={coverage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{coverage.title} Insurance</h3>
                  <p className="text-2xl font-semibold text-primary">{coverage.price}</p>
                </div>
                <ul className="space-y-3">
                  {coverage.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Get Quote</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
