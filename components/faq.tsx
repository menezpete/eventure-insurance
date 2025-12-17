import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How quickly can I get coverage?",
      answer:
        "Most policies can be activated immediately after purchase. For auto insurance, coverage typically begins the same day. Home and life insurance may require a brief underwriting process, usually completed within 24-48 hours.",
    },
    {
      question: "Can I bundle multiple insurance policies?",
      answer:
        "Yes! Bundling multiple policies like home and auto insurance can save you up to 25% on your premiums. Contact our team to create a customized bundle that fits your needs.",
    },
    {
      question: "What factors affect my insurance rates?",
      answer:
        "Rates are determined by various factors including your location, coverage amount, deductible, claims history, credit score, and specific risk factors related to what you're insuring. We work to find you the best rates based on your unique situation.",
    },
    {
      question: "How do I file a claim?",
      answer:
        "Filing a claim is simple. You can submit claims 24/7 through our mobile app, website, or by calling our claims hotline. Our team will guide you through the process and keep you updated every step of the way.",
    },
    {
      question: "Can I cancel my policy anytime?",
      answer:
        "Yes, you can cancel your policy at any time. Depending on your policy type and when you cancel, you may be eligible for a prorated refund. There are no cancellation fees with Eventure Insurance.",
    },
    {
      question: "Do you offer discounts?",
      answer:
        "We offer various discounts including multi-policy bundling, safe driver discounts, home security system discounts, good student discounts, and more. Our quote tool automatically applies all eligible discounts to give you the best rate.",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Have questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
