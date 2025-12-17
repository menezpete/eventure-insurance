import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trade Show & Expo Insurance | Eventure Insurance",
  description:
    "Comprehensive insurance for trade shows, expos, and exhibitions. Protect exhibitors, organizers, and attendees with Eventure.",
  keywords: [
    "trade show insurance",
    "expo insurance",
    "exhibition insurance",
    "convention insurance",
    "exhibitor insurance",
  ],
}

export default function TradeShowInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Trade Show & Expo Insurance"
      subtitle="Professional Coverage for Industry Events"
      description="From small local expos to major industry conventions, Eventure provides comprehensive trade show insurance. We protect organizers, exhibitors, and attendees with tailored coverage solutions."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability for organizers",
        "Exhibitor liability packages",
        "Property and booth coverage",
        "Event cancellation protection",
        "Equipment and display coverage",
        "Product liability for exhibitors",
        "Additional insured certificates",
        "Workers compensation options",
      ]}
      commonRisks={[
        "Attendee injuries in exhibit halls",
        "Booth and display damage",
        "Equipment theft or damage",
        "Exhibitor product liability",
        "Venue property damage",
        "Last-minute exhibitor cancellations",
        "Technology and AV failures",
      ]}
      whyChooseUs={[
        "Experience with major industry expos",
        "Bulk exhibitor coverage programs",
        "Fast certificates for exhibitors",
        "Multi-show annual policies",
        "Understanding of convention center requirements",
        "Dedicated trade show specialists",
      ]}
      faqs={[
        {
          question: "Can you provide coverage for all our exhibitors?",
          answer:
            "Yes, we offer exhibitor insurance programs where you can provide coverage to all exhibitors, simplifying compliance and ensuring everyone is protected.",
        },
        {
          question: "What about coverage for product demonstrations?",
          answer:
            "We can include product liability coverage for exhibitors demonstrating products, including food sampling and interactive displays.",
        },
        {
          question: "Do you cover international trade shows?",
          answer:
            "Yes, we provide coverage for trade shows and expos held internationally. Contact us for specific country requirements and coverage details.",
        },
        {
          question: "Can exhibitors purchase their own coverage through you?",
          answer:
            "Absolutely. We can set up a system where individual exhibitors can purchase coverage that meets your requirements as an organizer.",
        },
      ]}
      eventType="trade-show"
    />
  )
}
