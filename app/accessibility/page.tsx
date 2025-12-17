import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Eventure Insurance is committed to making our website accessible to all users. Read our accessibility statement.",
}

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Accessibility Statement</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                  <p className="text-muted-foreground">
                    Eventure Insurance is committed to ensuring digital accessibility for people with disabilities. We
                    are continually improving the user experience for everyone and applying the relevant accessibility
                    standards.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Conformance Status</h2>
                  <p className="text-muted-foreground">
                    We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These
                    guidelines explain how to make web content more accessible for people with disabilities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
                  <p className="text-muted-foreground mb-4">
                    Our website includes the following accessibility features:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Keyboard navigation support throughout the site</li>
                    <li>Alternative text for images</li>
                    <li>Proper heading structure for screen readers</li>
                    <li>Sufficient color contrast for text readability</li>
                    <li>Resizable text without loss of functionality</li>
                    <li>Clear and consistent navigation</li>
                    <li>Form labels and error messages</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Feedback</h2>
                  <p className="text-muted-foreground">
                    We welcome your feedback on the accessibility of our website. If you encounter any barriers or have
                    suggestions for improvement, please contact us:
                    <br />
                    <br />
                    Email: accessibility@eventureinsurance.com
                    <br />
                    Phone: 1-800-EVENTURE
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Alternative Formats</h2>
                  <p className="text-muted-foreground">
                    If you need information from our website in an alternative format, please contact us and we will
                    work to provide it in a format that meets your needs.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
