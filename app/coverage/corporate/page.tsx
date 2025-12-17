import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Event Insurance | Eventure Insurance",
  description:
    "Comprehensive corporate event insurance for conferences, meetings, and business gatherings. Protect your company's investment with Eventure Insurance.",
  keywords: [
    "corporate event insurance",
    "conference insurance",
    "business event insurance",
    "company event liability",
  ],
}

export default function CorporateInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Corporate Event Insurance"
      subtitle="Professional Protection for Business Events"
      description="From small team meetings to large conferences, Eventure provides comprehensive coverage for corporate events. Protect your company's reputation and investment with tailored business event insurance."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability for attendee injuries",
        "Property damage at the venue",
        "Event cancellation/postponement",
        "Equipment and technology coverage",
        "Speaker/presenter no-show coverage",
        "Liquor liability for hosted bars",
        "Professional liability options",
        "Additional insured certificates",
      ]}
      commonRisks={[
        "Venue issues or cancellations",
        "Speaker or keynote cancellations",
        "Technology or equipment failures",
        "Attendee injuries during the event",
        "Property damage to venue",
        "Weather-related cancellations",
        "Transportation disruptions",
      ]}
      whyChooseUs={[
        "Experience with Fortune 500 companies",
        "Quick turnaround for last-minute events",
        "Flexible coverage limits",
        "Multi-event policies available",
        "Dedicated corporate account managers",
        "Comprehensive documentation for compliance",
      ]}
      faqs={[
        {
          question: "Do you offer coverage for recurring corporate events?",
          answer:
            "Yes, we offer annual policies for companies with multiple events throughout the year, often at reduced rates compared to individual event policies.",
        },
        {
          question: "What size corporate events do you cover?",
          answer:
            "We cover everything from small team meetings of 10 people to large conferences with 50,000+ attendees.",
        },
        {
          question: "Can you provide certificates of insurance for venues?",
          answer:
            "Absolutely. We provide certificates of insurance and can add venues as additional insureds within 24 hours of policy binding.",
        },
        {
          question: "Is coverage available for international corporate events?",
          answer:
            "Yes, we offer coverage for corporate events held internationally. Contact us for specific country requirements and coverage details.",
        },
      ]}
      eventType="corporate"
    />
  )
}
