import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Eventure Insurance. Our team is ready to answer your questions and help you find the right event insurance coverage.",
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "1-800-EVENTURE",
      subtext: "Mon-Fri 8am-6pm CST",
    },
    {
      icon: MailIcon,
      title: "Email",
      value: "info@eventureinsurance.com",
      subtext: "Response within 24 hours",
    },
    {
      icon: MapPinIcon,
      title: "Office",
      value: "Dallas, Texas",
      subtext: "Serving all 50 states",
    },
    {
      icon: ClockIcon,
      title: "Quote Turnaround",
      value: "24-48 Hours",
      subtext: "Quick Quote same-day available",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about event insurance? Our team is here to help. Reach out and we'll respond within 24
              hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center border-border/50 bg-card/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-1">{info.title}</h3>
                <div className="font-bold text-lg mb-1">{info.value}</div>
                <div className="text-sm text-muted-foreground">{info.subtext}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 border-border/50 bg-card/80 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Send Us a Message</h2>
              <p className="text-muted-foreground text-center mb-8">
                Fill out the form below and we'll get back to you promptly.
              </p>
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
