import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Festival Insurance | Eventure Insurance",
  description:
    "Comprehensive festival insurance for music festivals, food festivals, cultural celebrations, and community events. Protect your festival with Eventure.",
  keywords: ["festival insurance", "music festival insurance", "food festival insurance", "community event insurance"],
}

export default function FestivalInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Festival Insurance"
      subtitle="Complete Protection for Every Festival"
      description="Whether you're organizing a music festival, food festival, or cultural celebration, Eventure provides the comprehensive coverage you need. We understand the unique risks of large-scale outdoor events."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability up to $10M+",
        "Weather cancellation coverage",
        "Participant accident insurance",
        "Vendor and exhibitor coverage",
        "Equipment and stage coverage",
        "Liquor liability",
        "Security and crowd control coverage",
        "Pyrotechnics and special effects coverage",
      ]}
      commonRisks={[
        "Severe weather cancellations",
        "Crowd injuries or incidents",
        "Vendor equipment damage",
        "Artist/performer cancellations",
        "Food safety incidents",
        "Sound and noise complaints",
        "Property damage to venue grounds",
      ]}
      whyChooseUs={[
        "Experience with festivals of all sizes",
        "Specialized knowledge of outdoor event risks",
        "Fast certificate issuance for vendors",
        "Multi-day event expertise",
        "24/7 claims support during events",
        "Relationships with major venues nationwide",
      ]}
      faqs={[
        {
          question: "What size festivals do you insure?",
          answer:
            "We insure festivals from small community gatherings of 100 people to major events with 100,000+ attendees over multiple days.",
        },
        {
          question: "Do you cover weather-related cancellations?",
          answer:
            "Yes, we offer comprehensive weather cancellation coverage including rain, extreme heat, hurricanes, and other adverse conditions.",
        },
        {
          question: "Can vendors get their own coverage through our policy?",
          answer:
            "We can structure policies to include vendor coverage, or help vendors obtain their own policies that meet your requirements.",
        },
        {
          question: "What about coverage for camping festivals?",
          answer:
            "Yes, we provide specialized coverage for camping festivals including overnight attendee coverage and extended liability periods.",
        },
      ]}
      eventType="festival"
    />
  )
}
