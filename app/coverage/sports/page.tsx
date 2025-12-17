import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sports Event Insurance | Eventure Insurance",
  description:
    "Comprehensive sports event insurance for tournaments, races, games, and athletic competitions. Protect participants and spectators with Eventure.",
  keywords: [
    "sports event insurance",
    "tournament insurance",
    "athletic event insurance",
    "race insurance",
    "sports liability",
  ],
}

export default function SportsInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Sports Event Insurance"
      subtitle="Champion-Level Protection for Athletic Events"
      description="From local tournaments to professional competitions, Eventure provides comprehensive sports event insurance. We cover participant injuries, spectator safety, and everything in between."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "Participant accident insurance",
        "Spectator liability coverage",
        "Sports equipment coverage",
        "Event cancellation protection",
        "Medical payments coverage",
        "Directors & officers liability",
        "Abuse and molestation coverage",
        "Prize indemnity insurance",
      ]}
      commonRisks={[
        "Participant injuries during competition",
        "Spectator injuries",
        "Equipment damage or theft",
        "Weather cancellations",
        "Venue property damage",
        "Medical emergencies",
        "Transportation incidents",
      ]}
      whyChooseUs={[
        "Experience with all major sports",
        "Understanding of league requirements",
        "Participant waiver integration",
        "Youth sports expertise",
        "Multi-event season policies",
        "Fast certificate delivery",
      ]}
      faqs={[
        {
          question: "Do you cover youth sports events?",
          answer:
            "Yes, we specialize in youth sports coverage including abuse and molestation liability, which many youth organizations require.",
        },
        {
          question: "What sports do you cover?",
          answer:
            "We cover virtually all sports including football, basketball, soccer, baseball, hockey, swimming, martial arts, motorsports, extreme sports, and more.",
        },
        {
          question: "Can participants sign waivers instead of getting insurance?",
          answer:
            "Waivers help but don't replace insurance. We can help structure your coverage to work alongside participant waivers for maximum protection.",
        },
        {
          question: "Do you offer season-long policies?",
          answer:
            "Yes, we offer annual policies for leagues, clubs, and organizations with recurring events throughout the season.",
        },
      ]}
      eventType="sports"
    />
  )
}
