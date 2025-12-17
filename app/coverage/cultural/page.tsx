import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cultural Event Insurance | Eventure Insurance",
  description:
    "Insurance for cultural celebrations, heritage festivals, ethnic events, and community gatherings. Celebrate your culture with comprehensive protection.",
  keywords: [
    "cultural event insurance",
    "heritage festival insurance",
    "ethnic celebration insurance",
    "community event insurance",
    "multicultural event insurance",
  ],
}

export default function CulturalInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Cultural Event Insurance"
      subtitle="Celebrating Heritage with Protection"
      description="From Diwali celebrations to Cinco de Mayo festivals, Eventure provides comprehensive insurance for cultural events and heritage celebrations. We respect and understand the unique aspects of diverse cultural gatherings."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability coverage",
        "Food vendor coverage",
        "Traditional performance coverage",
        "Cultural artifact protection",
        "Event cancellation insurance",
        "Participant accident coverage",
        "Fireworks and special effects",
        "Additional insured certificates",
      ]}
      commonRisks={[
        "Food preparation incidents",
        "Traditional dance or performance injuries",
        "Crowd management at large gatherings",
        "Cultural item damage",
        "Weather impacts on outdoor celebrations",
        "Fire risks from traditional elements",
        "Parking and traffic issues",
      ]}
      whyChooseUs={[
        "Experience with diverse cultural events",
        "Understanding of unique traditions",
        "Multilingual support available",
        "Coverage for traditional activities",
        "Community event expertise",
        "Respectful and inclusive service",
      ]}
      faqs={[
        {
          question: "Do you cover events with traditional fire elements?",
          answer:
            "Yes, we can cover events featuring traditional fire elements like bonfires, fire dancing, or ceremonial flames with appropriate safety measures in place.",
        },
        {
          question: "What about coverage for traditional food preparation?",
          answer:
            "We provide coverage for events with traditional food service, including outdoor cooking and preparation methods common in cultural celebrations.",
        },
        {
          question: "Can you insure religious or spiritual gatherings?",
          answer:
            "Yes, we provide coverage for religious and spiritual events, ceremonies, and gatherings with appropriate respect for the traditions involved.",
        },
        {
          question: "Do you offer coverage for cultural parades?",
          answer:
            "Absolutely. We cover cultural parades, processions, and street festivals with appropriate liability protection for participants and spectators.",
        },
      ]}
      eventType="cultural"
    />
  )
}
