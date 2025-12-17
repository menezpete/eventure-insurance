import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Western Event Insurance | Ranch Rodeos & Heritage Events",
  description:
    "Specialized western event insurance for ranch rodeos, cowboy gatherings, western heritage festivals, and country western events. Comprehensive liability and participant coverage.",
  keywords: [
    "western event insurance",
    "ranch rodeo insurance",
    "cowboy event insurance",
    "western heritage insurance",
    "country western event coverage",
  ],
  openGraph: {
    title: "Western Event Insurance | Eventure Insurance",
    description: "Comprehensive coverage for ranch rodeos, cowboy gatherings, and western heritage events.",
  },
}

export default function WesternInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Western Event Insurance"
      subtitle="Celebrating Western Heritage with Confidence"
      description="Western culture events—from ranch rodeos to heritage festivals—require specialized insurance that understands the unique traditions and risks involved. Eventure provides comprehensive coverage designed specifically for the western event industry."
      coverageIncludes={[
        "General liability coverage",
        "Participant accident protection",
        "Livestock and animal coverage",
        "Property damage protection",
        "Event cancellation coverage",
        "Premises liability",
        "Food and beverage liability",
        "Entertainment and performer coverage",
        "Additional insured certificates",
        "Prize money protection",
      ]}
      commonRisks={[
        "Participant injuries during competitions",
        "Animal-related incidents",
        "Spectator injuries",
        "Property damage at venues",
        "Weather cancellations",
        "Equipment accidents",
        "Food service claims",
      ]}
      whyChooseUs={[
        "Deep understanding of western event culture",
        "Experience with ranch rodeos and heritage events",
        "Coverage for working ranch demonstrations",
        "Flexible policies for events of all sizes",
        "Quick certificate delivery",
        "Relationships with specialized carriers",
      ]}
      faqs={[
        {
          question: "What western events do you cover?",
          answer:
            "We cover ranch rodeos, cowboy poetry gatherings, western heritage festivals, chuck wagon events, ranch sorting competitions, team penning, western dances, and country music festivals.",
        },
        {
          question: "Is coverage available for working ranch demonstrations?",
          answer:
            "Yes, we can provide coverage for working ranch demonstrations including branding, roping, and cattle work exhibitions with appropriate participant waivers and safety protocols.",
        },
        {
          question: "Do you cover western-themed corporate events?",
          answer:
            "Absolutely. We regularly insure corporate western events, team-building ranch experiences, and themed parties with western activities.",
        },
        {
          question: "Can you cover multi-day western festivals?",
          answer:
            "Yes, we provide coverage for multi-day events including western heritage weeks, frontier days celebrations, and extended festival formats.",
        },
      ]}
      relatedCoverages={[
        { title: "Rodeo Insurance", href: "/coverage/rodeo" },
        { title: "Equestrian Events", href: "/coverage/equestrian" },
        { title: "Livestock Events", href: "/coverage/livestock" },
        { title: "Festival Insurance", href: "/coverage/festival" },
      ]}
    />
  )
}
