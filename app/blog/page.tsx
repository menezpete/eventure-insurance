import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CalendarIcon, ClockIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Event Insurance Blog | Tips, Guides & Industry News",
  description:
    "Expert insights on event insurance, risk management, and event planning. Learn how to protect your events with guides, tips, and industry news from Eventure Insurance.",
  keywords: ["event insurance blog", "event planning tips", "risk management", "event insurance guide"],
}

const blogPosts = [
  {
    slug: "complete-guide-wedding-insurance",
    title: "The Complete Guide to Wedding Insurance: What Every Couple Needs to Know",
    excerpt:
      "Planning a wedding involves significant investments. Learn everything about wedding insurance—what it covers, when to buy, and how to choose the right policy.",
    category: "Wedding",
    date: "December 1, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "festival-insurance-checklist",
    title: "Festival Insurance Checklist: 15 Things Every Organizer Must Consider",
    excerpt:
      "From liability coverage to weather cancellation, here's your comprehensive checklist for insuring music festivals and large-scale events.",
    category: "Festival",
    date: "November 28, 2025",
    readTime: "10 min read",
    featured: true,
  },
  {
    slug: "corporate-event-liability",
    title: "Understanding Corporate Event Liability: Protect Your Company",
    excerpt:
      "Corporate events carry unique risks. Learn how to protect your organization from liability claims at conferences, retreats, and company parties.",
    category: "Corporate",
    date: "November 22, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "rodeo-insurance-requirements",
    title: "Rodeo Insurance Requirements: What Venues and Organizers Need",
    excerpt:
      "Rodeos involve high-risk activities with livestock. Understand the specific insurance requirements and coverage options for rodeo events.",
    category: "Rodeo",
    date: "November 18, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "event-cancellation-coverage-explained",
    title: "Event Cancellation Coverage Explained: When and Why You Need It",
    excerpt:
      "Weather, vendor failures, illness—events get cancelled for many reasons. Learn how cancellation insurance protects your investment.",
    category: "Insurance Basics",
    date: "November 12, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "cannabis-event-insurance-guide",
    title: "Navigating Cannabis Event Insurance: A State-by-State Guide",
    excerpt:
      "Cannabis events have unique insurance challenges. This guide covers what organizers need to know about coverage in different states.",
    category: "Cannabis",
    date: "November 5, 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "vendor-certificate-requirements",
    title: "Certificate of Insurance for Vendors: What You Need to Know",
    excerpt:
      "Venues often require proof of insurance. Learn about certificates of insurance, additional insureds, and how to get covered quickly.",
    category: "Vendors",
    date: "October 30, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "outdoor-event-weather-risks",
    title: "Managing Weather Risks for Outdoor Events: Insurance and Planning",
    excerpt:
      "Outdoor events face weather uncertainties. Discover how to plan for weather risks and ensure you have proper insurance coverage.",
    category: "Planning",
    date: "October 24, 2025",
    readTime: "6 min read",
    featured: false,
  },
]

const featuredPosts = blogPosts.filter((post) => post.featured)
const recentPosts = blogPosts.filter((post) => !post.featured)

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Eventure Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Event Insurance <span className="text-primary">Insights</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert guides, industry news, and practical tips to help you protect your events and make informed
                insurance decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all hover:shadow-md"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-white/80 mb-6">
                Get the latest event insurance tips, industry updates, and exclusive guides delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground"
                />
                <Button variant="secondary" className="text-primary font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
