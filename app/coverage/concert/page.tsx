import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Concert Insurance | Eventure Insurance",
  description:
    "Professional concert and live music event insurance. Protect performers, venues, and audiences with comprehensive concert coverage from Eventure.",
  keywords: ["concert insurance", "live music insurance", "performer insurance", "music event liability"],
}

export default function ConcertInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Concert Insurance"
      subtitle="Rock-Solid Protection for Live Music"
      description="From intimate club shows to stadium tours, Eventure provides comprehensive concert insurance. We protect promoters, venues, and artists with coverage designed for the unique risks of live music events."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability for audience safety",
        "Performer cancellation coverage",
        "Equipment and instrument coverage",
        "Stage and rigging liability",
        "Sound and lighting equipment",
        "Liquor liability",
        "Security coverage",
        "Tour liability for multi-venue shows",
      ]}
      commonRisks={[
        "Artist illness or cancellation",
        "Equipment theft or damage",
        "Crowd surge incidents",
        "Sound equipment failures",
        "Venue damage from setup",
        "Weather delays or cancellations",
        "Transportation of equipment",
      ]}
      whyChooseUs={[
        "Deep relationships with major venues",
        "Experience with tours and multi-city shows",
        "Quick turnaround for last-minute bookings",
        "Understanding of rider requirements",
        "Coverage for emerging and established artists",
        "24/7 support for tour emergencies",
      ]}
      faqs={[
        {
          question: "Do you cover equipment during transport?",
          answer:
            "Yes, we offer inland marine coverage for equipment in transit between venues, including theft and damage protection.",
        },
        {
          question: "What if our headliner cancels last minute?",
          answer:
            "Our performer cancellation coverage can reimburse non-recoverable expenses if your headliner cancels due to covered reasons like illness or travel issues.",
        },
        {
          question: "Can you insure a multi-city tour?",
          answer:
            "Absolutely. We specialize in tour policies that cover multiple venues and dates under a single policy for simplified administration.",
        },
        {
          question: "Do you cover EDM and electronic music events?",
          answer:
            "Yes, we have extensive experience with EDM events and understand the unique production and crowd management considerations.",
        },
      ]}
      eventType="concert"
    />
  )
}
