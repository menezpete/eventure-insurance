import { CoveragePageTemplate } from "@/components/coverage-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Film Production Insurance | Eventure Insurance",
  description:
    "Comprehensive film and video production insurance. Protect your cast, crew, equipment, and production with specialized coverage from Eventure.",
  keywords: ["film production insurance", "movie insurance", "video production insurance", "entertainment insurance"],
}

export default function FilmInsurancePage() {
  return (
    <CoveragePageTemplate
      title="Film Production Insurance"
      subtitle="Lights, Camera, Coverage!"
      description="From indie shorts to major productions, Eventure provides comprehensive film production insurance. We protect your cast, crew, equipment, and investment with coverage designed for the entertainment industry."
      heroImage="/placeholder.svg?height=600&width=800"
      coverageIncludes={[
        "General liability coverage",
        "Equipment and camera coverage",
        "Cast insurance",
        "Errors and omissions (E&O)",
        "Workers compensation",
        "Props and sets coverage",
        "Negative film/media coverage",
        "Extra expense coverage",
      ]}
      commonRisks={[
        "Equipment damage or theft",
        "Cast illness or injury",
        "Location property damage",
        "Weather delays",
        "Post-production data loss",
        "Copyright and clearance issues",
        "Stunt and special effects accidents",
      ]}
      whyChooseUs={[
        "Experience with all production sizes",
        "Understanding of union requirements",
        "Fast certificates for location permits",
        "Relationships with equipment rental houses",
        "Short-term and annual policies",
        "Documentary and commercial expertise",
      ]}
      faqs={[
        {
          question: "Do you cover student films?",
          answer:
            "Yes, we offer affordable coverage for student and indie productions, often at reduced rates compared to commercial productions.",
        },
        {
          question: "What about drone footage?",
          answer:
            "We provide coverage for drone operations including the aircraft, camera equipment, and third-party liability.",
        },
        {
          question: "Can you help with location permit requirements?",
          answer:
            "Absolutely. We regularly provide certificates of insurance for location permits and can add property owners as additional insureds.",
        },
        {
          question: "Do you cover stunts and special effects?",
          answer:
            "Yes, with appropriate disclosure and safety measures, we can cover stunt work, pyrotechnics, and special effects.",
        },
      ]}
      eventType="film"
    />
  )
}
