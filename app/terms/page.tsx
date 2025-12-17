import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Eventure Insurance terms of service. Read our terms and conditions for using our website and services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using the Eventure Insurance website and services, you agree to be bound by these
                    Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Services Description</h2>
                  <p className="text-muted-foreground">
                    Eventure Insurance provides event insurance brokerage services. We connect event organizers with
                    insurance carriers to provide coverage for various types of events. We are a licensed insurance
                    agency acting on behalf of our clients.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Quote Requests</h2>
                  <p className="text-muted-foreground">
                    Quote requests submitted through our website are not binding insurance contracts. Coverage is only
                    effective when a policy is issued by an insurance carrier and premium payment is received. All
                    quotes are subject to underwriting approval.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Accuracy of Information</h2>
                  <p className="text-muted-foreground">
                    You agree to provide accurate and complete information when requesting quotes or applying for
                    coverage. Inaccurate information may result in denial of coverage or claim disputes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content on this website, including text, graphics, logos, and software, is the property of
                    Eventure Insurance or its licensors and is protected by copyright and trademark laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    Eventure Insurance shall not be liable for any indirect, incidental, special, or consequential
                    damages arising from your use of our website or services. Our liability is limited to the amount of
                    fees paid for our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms of Service shall be governed by and construed in accordance with the laws of the State
                    of Texas, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have questions about these Terms of Service, please contact us at:
                    <br />
                    Email: legal@eventureinsurance.com
                    <br />
                    Phone: 1-800-EVENTURE
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
