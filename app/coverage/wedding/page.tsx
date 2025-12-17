import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wedding Insurance",
  description:
    "Protect your special day with comprehensive wedding insurance from Eventure. Coverage for cancellation, liability, vendor no-shows, and more.",
  keywords: ["wedding insurance", "wedding liability insurance", "wedding cancellation insurance", "bridal insurance"],
}

export default function WeddingInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Wedding Insurance"
      subtitle="Protect Your Perfect Day"
      description="Your wedding is one of the most important days of your life. Eventure's wedding insurance protects your investment from unexpected cancellations, vendor issues, liability claims, and more—so you can focus on celebrating."
      coverageIncludes={[
        "General liability coverage for guest injuries",
        "Property damage protection at the venue",
        "Event cancellation or postponement coverage",
        "Vendor no-show protection",
        "Liquor liability (if alcohol is served)",
        "Wedding gift coverage",
        "Wedding attire and jewelry coverage",
        "Photography/videography coverage",
        "Additional insured certificates for venues",
      ]}
      commonRisks={[
        "Venue cancellation or closure",
        "Vendor bankruptcy or no-shows",
        "Extreme weather events",
        "Illness of bride, groom, or key family members",
        "Military deployment",
        "Guest injury or property damage claims",
        "Damaged or lost wedding attire",
      ]}
      whyChooseUs={[
        "Specialized wedding insurance expertise",
        "Flexible coverage options for any budget",
        "Same-day certificates available",
        "Coverage for destination weddings",
        "Easy online quote process",
        "Dedicated support throughout your planning",
      ]}
      faqs={[
        {
          question: "When should I purchase wedding insurance?",
          answer:
            "We recommend purchasing wedding insurance as soon as you start making deposits—ideally 12-18 months before your wedding. This ensures you're protected from the start of your planning process.",
        },
        {
          question: "Does wedding insurance cover vendor no-shows?",
          answer:
            "Yes, our cancellation coverage can include protection if a key vendor (photographer, caterer, florist, etc.) fails to show up or goes out of business, helping you recover deposits and book replacements.",
        },
        {
          question: "Is liquor liability included?",
          answer:
            "Liquor liability is available as an add-on to your policy. If alcohol will be served at your wedding, we strongly recommend this coverage, and many venues require it.",
        },
        {
          question: "Can I add my venue as an additional insured?",
          answer:
            "Most venues require this, and we can add additional insureds to your certificate of insurance. This is typically included at no extra cost.",
        },
      ]}
      relatedCoverages={[
        { title: "Private Party Insurance", href: "/coverage/private-party" },
        { title: "Venue Insurance", href: "/coverage/vendor" },
        { title: "Event Cancellation", href: "/coverage/cancellation" },
        { title: "Corporate Events", href: "/coverage/corporate" },
      ]}
    />
  )
}
