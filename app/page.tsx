import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HomeHero } from "@/components/home/home-hero"
import { HomeStats } from "@/components/home/home-stats"
import { HomeCoverage } from "@/components/home/home-coverage"
import { HomeQuoteForm } from "@/components/home/home-quote-form"
import { HomeProcess } from "@/components/home/home-process"
import { HomeTestimonials } from "@/components/home/home-testimonials"
import { HomeTrust } from "@/components/home/home-trust"
import { HomeCTA } from "@/components/home/home-cta"
import { HomeFAQ } from "@/components/home/home-faq"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HomeHero />
      <HomeStats />
      <HomeCoverage />
      <HomeQuoteForm />
      <HomeProcess />
      <HomeTestimonials />
      <HomeTrust />
      <HomeFAQ />
      <HomeCTA />
      <SiteFooter />
    </main>
  )
}
