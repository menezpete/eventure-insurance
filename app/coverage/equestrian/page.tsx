import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Equestrian Event Insurance | Horse Shows, Dressage & Jumping",
  description:
    "Specialized equestrian event insurance for horse shows, dressage competitions, jumping events, and equine exhibitions. Comprehensive liability and participant coverage.",
  keywords: [
    "equestrian insurance",
    "horse show insurance",
    "dressage event insurance",
    "jumping competition insurance",
    "equine event coverage",
    "horse event liability",
  ],
  openGraph: {
    title: "Equestrian Event Insurance | Eventure Insurance",
    description: "Comprehensive coverage for horse shows, dressage, jumping competitions, and equine events.",
  },
}

export default function EquestrianInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Equestrian Event Insurance"
      subtitle="Expert Coverage for Horse Shows & Competitions"
      description="From elegant dressage competitions to thrilling jumping events, Eventure provides specialized equestrian insurance designed for the unique risks of horse-related events. Our team understands the equine industry and delivers tailored protection."
      coverageIncludes={[
        "General liability for spectators and participants",
        "Participant accident coverage",
        "Horse injury and mortality coverage options",
        "Property damage protection",
        "Premises liability for venues",
        "Equipment and tack coverage",
        "Event cancellation protection",
        "Veterinary expense coverage",
        "Additional insured certificates",
        "Prize money protection",
      ]}
      commonRisks={[
        "Horse-related injuries to participants or spectators",
        "Horse escape or unpredictable behavior",
        "Property damage from horses or equipment",
        "Weather-related cancellations",
        "Veterinary emergencies during events",
        "Equipment theft or damage",
        "Participant accidents during competition",
      ]}
      whyChooseUs={[
        "Deep expertise in equestrian event insurance",
        "Understanding of horse show and competition requirements",
        "Flexible coverage for events of all sizes",
        "Quick certificate delivery for venue requirements",
        "Relationships with top-rated equine carriers",
        "Coverage for both indoor and outdoor events",
      ]}
      faqs={[
        {
          question: "Does equestrian insurance cover horse injuries?",
          answer:
            "Our standard event liability covers injuries to spectators and participants. Horse mortality and injury coverage can be added as an option, protecting against veterinary expenses and loss of the animal.",
        },
        {
          question: "What types of equestrian events do you cover?",
          answer:
            "We cover all types of equestrian events including dressage, show jumping, hunter/jumper, eventing, western pleasure, reining, barrel racing, polo, and therapeutic riding demonstrations.",
        },
        {
          question: "Do participants need their own insurance?",
          answer:
            "While event insurance provides liability coverage, we recommend participants carry their own personal equine insurance. We can include participant accident coverage in your event policy for additional protection.",
        },
        {
          question: "Can you cover multi-day horse shows?",
          answer:
            "Absolutely. We regularly insure multi-day shows, circuits, and series events. We can provide single-event or annual policies depending on your needs.",
        },
      ]}
      relatedCoverages={[
        { title: "Rodeo Insurance", href: "/coverage/rodeo" },
        { title: "Livestock Events", href: "/coverage/livestock" },
        { title: "Sporting Events", href: "/coverage/sports" },
        { title: "Western Events", href: "/coverage/western" },
      ]}
    />
  )
}
