import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fundraiser & Charity Event Insurance | Eventure Insurance",
  description:
    "Comprehensive insurance for charity events, galas, walkathons, and nonprofit fundraisers. Protect your organization and donors with Eventure.",
  keywords: [
    "charity event insurance",
    "fundraiser insurance",
    "nonprofit event insurance",
    "gala insurance",
    "walkathon insurance",
  ],
}

export default function FundraiserInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Fundraiser & Charity Event Insurance"
      subtitle="Protection for Events That Make a Difference"
      description="From galas to walkathons, Eventure provides comprehensive coverage for nonprofit and charity events. Protect your organization, donors, and participants while focusing on your mission."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability coverage",
        "Participant accident insurance",
        "Directors & officers liability",
        "Event cancellation protection",
        "Liquor liability for galas",
        "Volunteer accident coverage",
        "Equipment and auction item coverage",
        "Additional insured certificates",
      ]}
      commonRisks={[
        "Participant injuries at walkathons/runs",
        "Slip and fall incidents at galas",
        "Auction item damage or theft",
        "Weather cancellations",
        "Vendor no-shows",
        "Food safety incidents",
        "Property damage at venues",
      ]}
      whyChooseUs={[
        "Experience with major nonprofit events",
        "Affordable rates for charity organizations",
        "Understanding of nonprofit requirements",
        "Multi-event annual policies available",
        "Quick certificate turnaround",
        "Dedicated nonprofit specialists",
      ]}
      faqs={[
        {
          question: "Do you offer discounts for nonprofit organizations?",
          answer:
            "We work with nonprofits of all sizes and offer competitive rates. Contact us to discuss your organization's specific needs and budget.",
        },
        {
          question: "Can volunteers be covered under our policy?",
          answer:
            "Yes, we can include volunteer accident coverage to protect the dedicated individuals who make your events possible.",
        },
        {
          question: "What about covering auction items?",
          answer:
            "We can provide coverage for auction items including artwork, donated goods, and other high-value items at your fundraising event.",
        },
        {
          question: "Do you cover multi-event fundraising campaigns?",
          answer:
            "Absolutely. We offer annual policies for organizations with multiple events throughout the year, often at reduced rates compared to individual event policies.",
        },
      ]}
      eventType="fundraiser"
    />
  )
}
