import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Eventure Insurance privacy policy. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground">
                    Eventure Insurance ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                    Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                    website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">We may collect information about you in various ways:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Personal data you provide when requesting quotes (name, email, phone, event details)</li>
                    <li>Information necessary to process insurance applications</li>
                    <li>Payment information for policy purchases</li>
                    <li>Communications you send to us</li>
                    <li>Website usage data through cookies and analytics</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Provide insurance quotes and process applications</li>
                    <li>Communicate with you about your policy or inquiry</li>
                    <li>Process claims and provide customer service</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell your personal information. We may share information with insurance carriers to
                    process your policy, service providers who assist our operations, and as required by law. All third
                    parties are required to maintain the confidentiality of your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information. However, no electronic transmission over the internet can be guaranteed to be 100%
                    secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground">
                    Depending on your location, you may have rights regarding your personal information, including the
                    right to access, correct, or delete your data. Contact us at privacy@eventureinsurance.com to
                    exercise these rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have questions about this Privacy Policy, please contact us at:
                    <br />
                    Email: privacy@eventureinsurance.com
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
