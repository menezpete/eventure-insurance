import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "EDM & Electronic Music Event Insurance | Eventure Insurance",
  description:
    "Specialized insurance for EDM events, raves, electronic music festivals, and club nights. Expert coverage for the electronic music industry.",
  keywords: [
    "EDM event insurance",
    "rave insurance",
    "electronic music festival insurance",
    "club night insurance",
    "DJ event insurance",
  ],
}

export default function EDMInsurancePage() {
  return (
    <CoveragePageTemplate
      title="EDM & Electronic Music Insurance"
      subtitle="Coverage That Keeps the Beat Going"
      description="From underground club nights to massive EDM festivals, Eventure specializes in insurance for electronic music events. We understand the unique production requirements and crowd dynamics of the EDM scene."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability up to $10M+",
        "Sound and lighting equipment",
        "DJ and production equipment",
        "Crowd management liability",
        "Event cancellation coverage",
        "Liquor liability",
        "Security coverage",
        "Pyrotechnics and special effects",
      ]}
      commonRisks={[
        "Sound equipment damage or theft",
        "Crowd surge incidents",
        "Hearing damage claims",
        "Lighting rig accidents",
        "Artist cancellations",
        "Venue noise violations",
        "Weather impacts on outdoor events",
      ]}
      whyChooseUs={[
        "Deep understanding of EDM culture",
        "Experience with major festivals",
        "Relationships with EDM venues",
        "Coverage for unique production elements",
        "24/7 support during events",
        "Quick turnaround for touring DJs",
      ]}
      faqs={[
        {
          question: "Do you cover pyrotechnics and CO2 effects?",
          answer:
            "Yes, with proper safety documentation and licensed operators, we can cover pyrotechnics, CO2 cannons, lasers, and other special effects common in EDM events.",
        },
        {
          question: "What about coverage for DJ equipment?",
          answer:
            "We offer equipment coverage for DJ gear, controllers, mixers, and production equipment both at the venue and in transit.",
        },
        {
          question: "Can you insure multi-night events?",
          answer:
            "Absolutely. We regularly cover multi-day festivals and ongoing club residencies with appropriate coverage for extended durations.",
        },
        {
          question: "Do you understand the unique aspects of EDM events?",
          answer:
            "Yes! Our team includes specialists familiar with EDM production, venue requirements, and the specific risks associated with electronic music events.",
        },
      ]}
      eventType="edm"
    />
  )
}
