"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon, ArrowRightIcon } from "@/components/icons"
import Link from "next/link"

const faqCategories = [
  {
    name: "General",
    faqs: [
      {
        question: "What is event insurance?",
        answer:
          "Event insurance is a type of coverage designed to protect event organizers from financial losses due to unforeseen circumstances. This can include general liability coverage for third-party injuries or property damage, event cancellation coverage, and other specialized protections depending on your event type.",
      },
      {
        question: "Who needs event insurance?",
        answer:
          "Anyone organizing an event should consider event insurance. This includes wedding couples, corporate event planners, festival organizers, nonprofit fundraiser coordinators, venue owners, and more. Many venues also require proof of insurance before allowing events.",
      },
      {
        question: "What types of events do you cover?",
        answer:
          "We cover over 30 event types including weddings, corporate events, festivals, concerts, sports events, rodeos, private parties, fundraisers, trade shows, conferences, community events, cannabis events, film productions, and more. Contact us if you don't see your event type listed.",
      },
      {
        question: "How quickly can I get coverage?",
        answer:
          "Most quotes are delivered within 24-48 hours. Events that qualify for our Quick Quote Program may receive same-day quotes. Once you approve your quote, certificates can often be issued the same day.",
      },
    ],
  },
  {
    name: "Coverage",
    faqs: [
      {
        question: "What does general liability cover?",
        answer:
          "General liability insurance protects you against claims of bodily injury and property damage caused by your event. For example, if a guest trips and falls at your event, or if event activities damage the venue's property, general liability coverage would help cover the associated costs.",
      },
      {
        question: "What is event cancellation insurance?",
        answer:
          "Event cancellation insurance reimburses you for deposits and expenses you can't recover if you must cancel, postpone, or relocate your event due to covered reasons. This can include vendor no-shows, extreme weather, venue issues, or illness of key participants.",
      },
      {
        question: "Do I need liquor liability insurance?",
        answer:
          "If alcohol will be served at your event, liquor liability insurance is strongly recommended and often required by venues. It covers claims arising from alcohol-related incidents, such as injuries caused by an intoxicated guest.",
      },
      {
        question: "Can I add additional insureds to my policy?",
        answer:
          "Yes! Many venues, vendors, and sponsors require being listed as additional insureds on your policy. We can add additional insureds to your certificate of insurance to meet these requirements.",
      },
    ],
  },
  {
    name: "Quotes & Pricing",
    faqs: [
      {
        question: "How much does event insurance cost?",
        answer:
          "Costs vary based on event type, size, location, coverage limits, and other factors. Small private parties may start around $150-300, while larger festivals and corporate events may range from $500-5,000+. Contact us for a personalized quote based on your specific needs.",
      },
      {
        question: "How do I request a quote?",
        answer:
          "You can request a quote by filling out our online quote form, calling us at 1-800-EVENTURE, or emailing info@eventureinsurance.com. We'll ask about your event details and provide a customized quote within 24-48 hours.",
      },
      {
        question: "Is there a minimum premium?",
        answer:
          "Minimum premiums vary by coverage type and event. Most policies have a minimum premium starting around $150-200. Contact us for specific minimums based on your coverage needs.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "For larger policies, we may offer payment options. Contact us to discuss payment arrangements for your specific situation.",
      },
    ],
  },
  {
    name: "Claims",
    faqs: [
      {
        question: "How do I file a claim?",
        answer:
          "You can file a claim by calling our claims hotline at 1-800-EVENTURE, submitting a claim through our website, or emailing our claims department. Report incidents as soon as possible and have documentation ready.",
      },
      {
        question: "What documentation do I need for a claim?",
        answer:
          "Helpful documentation includes photos/videos of any damage, receipts and contracts, police reports (if applicable), witness contact information, timeline of events, and any correspondence related to the incident.",
      },
      {
        question: "How long does the claims process take?",
        answer:
          "Claims are acknowledged within 24 hours of submission. The overall timeline depends on the complexity of the claim and completeness of documentation. Simple claims may be resolved in days, while complex claims may take longer.",
      },
      {
        question: "What happens after I submit a claim?",
        answer:
          "After submitting a claim, you'll receive acknowledgment within 24 hours. A claims specialist will be assigned to your case and will contact you to review details and guide you through the process.",
      },
    ],
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General")
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const currentFaqs = faqCategories.find((cat) => cat.name === activeCategory)?.faqs || []

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about event insurance, coverage options, quotes, and claims.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {faqCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name)
                    setOpenIndex(0)
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category.name
                      ? "bg-gradient-to-r from-primary to-blue-600 text-white"
                      : "bg-card border border-border hover:border-primary/50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {currentFaqs.map((faq, index) => (
                <div key={index} className="border border-border/50 rounded-xl overflow-hidden bg-card/50">
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && <div className="px-6 pb-5 text-muted-foreground">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
                >
                  Contact Us
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/quote">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-transparent">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
