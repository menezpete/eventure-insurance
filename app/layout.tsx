import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Eventure Insurance | Event Insurance for Weddings, Festivals, Corporate Events & More",
    template: "%s | Eventure Insurance",
  },
  description:
    "Protect your special events with comprehensive event insurance from Eventure. Coverage for weddings, corporate events, festivals, concerts, rodeos, and 30+ event types. Get a quote in 24-48 hours.",
  keywords: [
    "event insurance",
    "wedding insurance",
    "festival insurance",
    "concert insurance",
    "corporate event insurance",
    "special event insurance",
    "liability insurance for events",
    "vendor insurance",
    "rodeo insurance",
    "equestrian insurance",
    "cannabis event insurance",
    "event cancellation insurance",
    "venue insurance",
  ],
  authors: [{ name: "Eventure Insurance" }],
  creator: "Eventure Insurance",
  publisher: "Eventure Insurance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://eventureinsurance.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eventureinsurance.com",
    title: "Eventure Insurance | Comprehensive Event Insurance Coverage",
    description:
      "Protect your special events with comprehensive coverage. Weddings, festivals, corporate events, rodeos, and more. A+ rated carriers, instant certificates available.",
    siteName: "Eventure Insurance",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eventure Insurance - Event Insurance Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventure Insurance | Event Insurance Experts",
    description: "Comprehensive event insurance for weddings, festivals, corporate events, rodeos, and more.",
    images: ["/og-image.png"],
    creator: "@eventureins",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/eventure-logo.png",
    shortcut: "/eventure-logo.png",
    apple: "/eventure-logo.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Insurance",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1E90FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://eventureinsurance.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "InsuranceAgency",
                  "@id": "https://eventureinsurance.com/#organization",
                  name: "Eventure Insurance",
                  description:
                    "Comprehensive event insurance coverage for weddings, festivals, corporate events, rodeos, and 30+ event types",
                  url: "https://eventureinsurance.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://eventureinsurance.com/eventure-logo.png",
                  },
                  image: "https://eventureinsurance.com/eventure-logo.png",
                  sameAs: [
                    "https://www.facebook.com/eventureinsurance",
                    "https://www.twitter.com/eventureins",
                    "https://www.instagram.com/eventureinsurance",
                    "https://www.linkedin.com/company/eventureinsurance",
                  ],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+1-800-EVENTURE",
                      contactType: "customer service",
                      availableLanguage: ["English", "Spanish"],
                      areaServed: "US",
                    },
                    {
                      "@type": "ContactPoint",
                      telephone: "+1-800-EVENTURE",
                      contactType: "sales",
                      availableLanguage: ["English", "Spanish"],
                      areaServed: "US",
                    },
                  ],
                  areaServed: {
                    "@type": "Country",
                    name: "United States",
                  },
                  priceRange: "$$",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "2847",
                    bestRating: "5",
                    worstRating: "1",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Event Insurance Products",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Wedding Insurance",
                          description:
                            "Comprehensive coverage for weddings including cancellation, liability, and vendor protection",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Festival Insurance",
                          description: "Coverage for music festivals, concerts, and large-scale events",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Corporate Event Insurance",
                          description: "Protection for business conferences, retreats, and company events",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Rodeo & Equestrian Insurance",
                          description: "Specialized coverage for rodeos, horse shows, and livestock events",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://eventureinsurance.com/#website",
                  url: "https://eventureinsurance.com",
                  name: "Eventure Insurance",
                  publisher: {
                    "@id": "https://eventureinsurance.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://eventureinsurance.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://eventureinsurance.com/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://eventureinsurance.com",
                    },
                  ],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Eventure Insurance",
              image: "https://eventureinsurance.com/eventure-logo.png",
              telephone: "+1-800-EVENTURE",
              email: "info@eventureinsurance.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "39.8283",
                longitude: "-98.5795",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
