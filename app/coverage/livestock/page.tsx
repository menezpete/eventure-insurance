import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Livestock Event Insurance | County Fairs, Auctions & 4-H Shows",
  description:
    "Comprehensive livestock event insurance for county fairs, livestock auctions, 4-H shows, FFA events, and agricultural exhibitions. Protect your event with specialized coverage.",
  keywords: [
    "livestock event insurance",
    "county fair insurance",
    "4-H show insurance",
    "FFA event insurance",
    "livestock auction insurance",
    "agricultural event coverage",
  ],
  openGraph: {
    title: "Livestock Event Insurance | Eventure Insurance",
    description: "Specialized coverage for county fairs, livestock auctions, 4-H shows, and agricultural events.",
  },
}

export default function LivestockInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Livestock Event Insurance"
      subtitle="Protecting Agricultural Events & Exhibitions"
      description="From county fairs to 4-H competitions, livestock events bring communities together while presenting unique risks. Eventure provides specialized insurance designed for the agricultural event industry, protecting organizers, participants, and spectators alike."
      coverageIncludes={[
        "General liability for event organizers",
        "Participant and exhibitor coverage",
        "Animal-related incident protection",
        "Property damage coverage",
        "Food vendor liability",
        "Carnival and ride coverage options",
        "Event cancellation protection",
        "Prize and auction coverage",
        "Premises liability",
        "Youth program coverage (4-H, FFA)",
      ]}
      commonRisks={[
        "Animal bites, kicks, or escapes",
        "Spectator injuries from livestock interaction",
        "Property damage from animals",
        "Foodborne illness claims",
        "Carnival ride accidents",
        "Weather-related event cancellation",
        "Youth participant injuries",
      ]}
      whyChooseUs={[
        "Expertise in agricultural event insurance",
        "Understanding of 4-H, FFA, and youth program needs",
        "Coverage for all livestock types",
        "Experience with county and state fairs",
        "Flexible multi-day event policies",
        "Quick turnaround on certificates",
      ]}
      faqs={[
        {
          question: "What types of livestock events do you cover?",
          answer:
            "We cover county and state fairs, livestock auctions, 4-H and FFA shows, breeding exhibitions, petting zoos, agricultural education events, and farm tours.",
        },
        {
          question: "Does coverage include carnival rides and games?",
          answer:
            "Carnival and amusement coverage can be added to your policy. We can also require certificates from ride operators to ensure proper coverage is in place.",
        },
        {
          question: "Are food vendors covered under the event policy?",
          answer:
            "Event organizer liability provides some protection, but we recommend requiring food vendors to carry their own liability insurance and name you as additional insured.",
        },
        {
          question: "Do you cover youth livestock programs?",
          answer:
            "Yes, we have extensive experience insuring 4-H, FFA, and other youth agricultural programs. We understand the specific needs and risks of youth participation.",
        },
      ]}
      relatedCoverages={[
        { title: "Rodeo Insurance", href: "/coverage/rodeo" },
        { title: "Equestrian Events", href: "/coverage/equestrian" },
        { title: "Festival Insurance", href: "/coverage/festival" },
        { title: "Western Events", href: "/coverage/western" },
      ]}
    />
  )
}
