"use client"

import { useState } from "react"
import { ChevronDownIcon } from "@/components/icons"

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly can I get a quote?",
      answer:
        "Most quotes are delivered within 24-48 hours. If your event qualifies for our Quick Quote Program, you may receive a quote the same day. Complex events or those requiring special coverage may take slightly longer.",
    },
    {
      question: "What types of events do you cover?",
      answer:
        "We cover over 30 event types including weddings, corporate events, festivals, concerts, sports events, rodeos, private parties, fundraisers, trade shows, cannabis events, and more. If you don't see your event type listed, contact us—we likely can help.",
    },
    {
      question: "What does event insurance typically cover?",
      answer:
        "Event insurance typically includes general liability coverage, which protects against third-party bodily injury and property damage claims. Additional coverage options include event cancellation, liquor liability, equipment coverage, and weather insurance.",
    },
    {
      question: "How much does event insurance cost?",
      answer:
        "Costs vary based on event type, size, location, and coverage needs. Small private parties may start around $150-300, while larger festivals and corporate events may range from $500-5,000+. Contact us for a personalized quote.",
    },
    {
      question: "Can I get a certificate of insurance for my venue?",
      answer:
        "Yes! We provide certificates of insurance that meet venue requirements. Many certificates can be issued same-day after your policy is finalized. We can also add additional insureds to your policy as needed.",
    },
    {
      question: "When should I purchase event insurance?",
      answer:
        "We recommend purchasing event insurance as soon as you start putting down deposits. For cancellation coverage, earlier is better. Liability coverage can typically be purchased up to a few days before your event, but we recommend at least 2-4 weeks in advance.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Get answers to common questions about event insurance.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
  )
}
