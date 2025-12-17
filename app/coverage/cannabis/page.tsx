import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cannabis Event Insurance | Eventure Insurance",
  description:
    "Specialized cannabis event insurance for trade shows, expos, and industry gatherings. Navigate complex regulations with Eventure's expert coverage.",
  keywords: ["cannabis event insurance", "hemp expo insurance", "cannabis trade show insurance", "420 event insurance"],
}

export default function CannabisInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Cannabis Event Insurance"
      subtitle="Specialized Coverage for an Emerging Industry"
      description="Eventure is one of the few insurers offering comprehensive coverage for cannabis industry events. We understand the unique regulatory landscape and provide compliant coverage for trade shows, expos, and industry gatherings."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability for attendees",
        "Product sampling liability",
        "Vendor and exhibitor coverage",
        "Property damage protection",
        "Event cancellation coverage",
        "Regulatory compliance support",
        "Security requirements coverage",
        "Additional insured certificates",
      ]}
      commonRisks={[
        "Regulatory compliance issues",
        "Product liability concerns",
        "Venue cancellations",
        "Security incidents",
        "Attendee safety",
        "Vendor disputes",
        "Last-minute regulation changes",
      ]}
      whyChooseUs={[
        "One of few carriers covering cannabis events",
        "Deep understanding of state regulations",
        "Experience with major cannabis expos",
        "Relationships with cannabis-friendly venues",
        "Quick adaptation to regulatory changes",
        "Confidential and professional service",
      ]}
      faqs={[
        {
          question: "Can you really insure cannabis events?",
          answer:
            "Yes, Eventure is one of the few insurance providers offering comprehensive coverage for cannabis industry events in states where it's legal.",
        },
        {
          question: "What about product sampling at events?",
          answer:
            "We can provide coverage for events with product sampling where legally permitted, including appropriate liability protections.",
        },
        {
          question: "Do you cover hemp and CBD events too?",
          answer:
            "Absolutely. We cover the full spectrum of cannabis, hemp, and CBD industry events including trade shows, educational seminars, and networking events.",
        },
        {
          question: "What states do you cover?",
          answer:
            "We provide coverage in all states where cannabis events are legally permitted. Contact us for specific state requirements and coverage details.",
        },
      ]}
      eventType="cannabis"
    />
  )
}
