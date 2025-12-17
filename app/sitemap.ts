import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eventureinsurance.com"
  const currentDate = new Date()

  return [
    // Main pages - highest priority
    { url: baseUrl, lastModified: currentDate, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/quote`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/coverage`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },

    // Core pages
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/claims`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },

    // Hub pages
    { url: `${baseUrl}/venues`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vendors`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/brokers`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/resources`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/case-studies`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: "daily", priority: 0.8 },

    // Coverage pages - High priority (top event types)
    { url: `${baseUrl}/coverage/wedding`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/coverage/corporate`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/coverage/festival`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/coverage/concert`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/coverage/sports`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },

    // Rodeo & Equestrian - Priority vertical
    { url: `${baseUrl}/coverage/rodeo`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/coverage/equestrian`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/coverage/livestock`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/coverage/western`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },

    // Specialty coverage
    { url: `${baseUrl}/coverage/cannabis`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/coverage/film`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/coverage/vendor`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/coverage/fundraiser`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/coverage/private-party`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/coverage/trade-show`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/coverage/edm`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/coverage/cultural`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },

    // Legal pages - Low priority
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/licenses`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/accessibility`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
  ]
}
