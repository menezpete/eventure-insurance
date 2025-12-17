import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private Party Insurance | Eventure Insurance",
  description:
    "Event insurance for birthday parties, anniversaries, reunions, and private celebrations. Protect your special occasions with Eventure.",
  keywords: [
    "private party insurance",
    "birthday party insurance",
    "anniversary insurance",
    "family reunion insurance",
    "celebration insurance",
  ],
}

export default function PrivatePartyInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Private Party Insurance"
      subtitle="Celebrate with Confidence"
      description="Whether it's a milestone birthday, anniversary celebration, or family reunion, Eventure provides affordable event insurance to protect your private gatherings and give you peace of mind."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability coverage",
        "Property damage protection",
        "Liquor liability",
        "Host liquor liability",
        "Event cancellation coverage",
        "Medical payments coverage",
        "Hired vendor coverage",
        "Additional insured for venues",
      ]}
      commonRisks={[
        "Guest injuries at the party",
        "Property damage to rental venue",
        "Alcohol-related incidents",
        "Catering or food issues",
        "Weather cancellations for outdoor events",
        "DJ or entertainment no-shows",
        "Decoration or rental damage",
      ]}
      whyChooseUs={[
        "Affordable coverage starting under $200",
        "Same-day quotes for simple events",
        "Easy online application",
        "Certificates issued quickly",
        "Coverage for backyard parties to venue rentals",
        "Friendly, helpful service",
      ]}
      faqs={[
        {
          question: "Do I really need insurance for a private party?",
          answer:
            "Many venues require it, but even home parties can benefit from liability coverage. If a guest is injured or property is damaged, you could be personally liable without insurance.",
        },
        {
          question: "Does my homeowners insurance cover private parties?",
          answer:
            "Homeowners policies have limitations, especially for large gatherings or events with alcohol. Event insurance provides dedicated coverage specifically for your party.",
        },
        {
          question: "How much does private party insurance cost?",
          answer:
            "Costs vary based on guest count, alcohol service, and activities, but many private party policies start around $150-300 for basic coverage.",
        },
        {
          question: "Can I get coverage if I'm renting a venue?",
          answer:
            "In fact, most venues require event insurance. We can add the venue as an additional insured to meet their requirements.",
        },
      ]}
      eventType="private-party"
    />
  )
}
