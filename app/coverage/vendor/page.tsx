import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vendor Insurance | Eventure Insurance",
  description:
    "Event vendor insurance for food vendors, exhibitors, and marketplace sellers. Get the coverage you need to participate in events.",
  keywords: [
    "vendor insurance",
    "food vendor insurance",
    "exhibitor insurance",
    "craft fair insurance",
    "farmers market insurance",
  ],
}

export default function VendorInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Vendor Insurance"
      subtitle="Protection for Event Vendors & Exhibitors"
      description="Whether you're a food vendor, craft seller, or trade show exhibitor, Eventure provides the vendor insurance you need to participate in events. Get affordable coverage that meets event organizer requirements."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability coverage",
        "Product liability",
        "Property coverage for inventory",
        "Equipment protection",
        "Business interruption",
        "Food vendor specific coverage",
        "Temporary structure coverage",
        "Additional insured certificates",
      ]}
      commonRisks={[
        "Customer injuries at your booth",
        "Product liability claims",
        "Equipment theft or damage",
        "Weather damage to inventory",
        "Fire from cooking equipment",
        "Slip and fall incidents",
        "Property damage to venue",
      ]}
      whyChooseUs={[
        "Policies starting same-day",
        "Meets most event requirements",
        "Single event or annual options",
        "Food vendor specialists",
        "Certificates issued in hours",
        "Affordable rates for small vendors",
      ]}
      faqs={[
        {
          question: "How quickly can I get coverage?",
          answer:
            "We can often issue vendor policies same-day, with certificates of insurance delivered within hours of binding.",
        },
        {
          question: "Do you cover food vendors specifically?",
          answer:
            "Yes, we have specialized food vendor coverage including product liability for foodborne illness claims.",
        },
        {
          question: "What if I do multiple events per year?",
          answer:
            "We offer annual vendor policies that cover you for unlimited events, often more cost-effective than per-event coverage.",
        },
        {
          question: "Can you add the event organizer as additional insured?",
          answer:
            "Absolutely. Most event organizers require this, and we include it with all vendor policies at no extra charge.",
        },
      ]}
      eventType="vendor"
    />
  )
}
