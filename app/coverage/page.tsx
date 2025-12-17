import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  HeartIcon,
  BuildingIcon,
  MusicIcon,
  SparklesIcon,
  TrophyIcon,
  UsersIcon,
  ArrowRightIcon,
  HorseIcon,
  LeafIcon,
  CalendarIcon,
  CameraIcon,
  ShieldCheckIcon,
} from "@/components/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Event Insurance Coverage Types",
  description:
    "Explore 30+ event insurance coverage options from Eventure Insurance. Wedding, corporate, festival, concert, sports, rodeo, cannabis events, and more.",
}

export default function CoveragePage() {
  const categories = [
    {
      name: "Popular Events",
      coverages: [
        { icon: HeartIcon, title: "Wedding Insurance", href: "/coverage/wedding", color: "from-pink-500 to-rose-500" },
        {
          icon: BuildingIcon,
          title: "Corporate Events",
          href: "/coverage/corporate",
          color: "from-blue-500 to-indigo-500",
        },
        {
          icon: MusicIcon,
          title: "Festival Insurance",
          href: "/coverage/festival",
          color: "from-purple-500 to-violet-500",
        },
        {
          icon: MusicIcon,
          title: "Concert Insurance",
          href: "/coverage/concert",
          color: "from-indigo-500 to-purple-500",
        },
        { icon: TrophyIcon, title: "Sports Events", href: "/coverage/sports", color: "from-green-500 to-emerald-500" },
        {
          icon: SparklesIcon,
          title: "Private Parties",
          href: "/coverage/private-party",
          color: "from-yellow-500 to-orange-500",
        },
      ],
    },
    {
      name: "Specialty Events",
      coverages: [
        { icon: HorseIcon, title: "Rodeo Insurance", href: "/coverage/rodeo", color: "from-amber-500 to-orange-500" },
        {
          icon: HorseIcon,
          title: "Equestrian Events",
          href: "/coverage/equestrian",
          color: "from-amber-600 to-yellow-500",
        },
        { icon: LeafIcon, title: "Cannabis Events", href: "/coverage/cannabis", color: "from-green-600 to-teal-500" },
        { icon: MusicIcon, title: "EDM Events", href: "/coverage/edm", color: "from-purple-600 to-pink-500" },
        { icon: MusicIcon, title: "Hip-Hop Events", href: "/coverage/hip-hop", color: "from-slate-600 to-zinc-500" },
        { icon: CameraIcon, title: "Film Production", href: "/coverage/film", color: "from-red-500 to-orange-500" },
      ],
    },
    {
      name: "Business & Corporate",
      coverages: [
        { icon: BuildingIcon, title: "Trade Shows", href: "/coverage/trade-show", color: "from-blue-600 to-cyan-500" },
        { icon: BuildingIcon, title: "Conferences", href: "/coverage/conference", color: "from-slate-500 to-blue-500" },
        { icon: UsersIcon, title: "Seminars", href: "/coverage/seminar", color: "from-indigo-500 to-blue-500" },
        {
          icon: ShieldCheckIcon,
          title: "Vendor Insurance",
          href: "/coverage/vendor",
          color: "from-teal-500 to-cyan-500",
        },
      ],
    },
    {
      name: "Community & Cultural",
      coverages: [
        { icon: UsersIcon, title: "Community Events", href: "/coverage/community", color: "from-cyan-500 to-blue-500" },
        { icon: CalendarIcon, title: "Fundraisers", href: "/coverage/fundraiser", color: "from-rose-500 to-pink-500" },
        {
          icon: SparklesIcon,
          title: "Religious Events",
          href: "/coverage/religious",
          color: "from-violet-500 to-purple-500",
        },
        { icon: HorseIcon, title: "Jaripeo Events", href: "/coverage/jaripeo", color: "from-red-500 to-orange-500" },
        { icon: UsersIcon, title: "Parades", href: "/coverage/parade", color: "from-blue-500 to-purple-500" },
        {
          icon: SparklesIcon,
          title: "Carnivals & Fairs",
          href: "/coverage/carnival",
          color: "from-pink-500 to-yellow-500",
        },
      ],
    },
    {
      name: "Specialty Coverage",
      coverages: [
        {
          icon: CalendarIcon,
          title: "Overnight Events",
          href: "/coverage/overnight",
          color: "from-indigo-600 to-blue-500",
        },
        {
          icon: ShieldCheckIcon,
          title: "Trail Rides",
          href: "/coverage/trail-ride",
          color: "from-green-600 to-emerald-500",
        },
        {
          icon: UsersIcon,
          title: "Petting Zoos",
          href: "/coverage/petting-zoo",
          color: "from-amber-500 to-yellow-500",
        },
        {
          icon: ShieldCheckIcon,
          title: "Foreign Events",
          href: "/coverage/international",
          color: "from-blue-600 to-indigo-500",
        },
        {
          icon: ShieldCheckIcon,
          title: "Equipment Coverage",
          href: "/coverage/equipment",
          color: "from-slate-500 to-zinc-500",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <ShieldCheckIcon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">30+ Event Types Covered</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Event Insurance
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Coverage</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              From intimate weddings to large-scale festivals, we provide comprehensive insurance coverage for every
              type of event.
            </p>

            <Link href="/quote">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
              >
                Get Your Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Categories */}
      {categories.map((category, categoryIndex) => (
        <section key={category.name} className={`py-16 md:py-24 ${categoryIndex % 2 === 1 ? "bg-card/30" : ""}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.coverages.map((coverage, index) => (
                <Link href={coverage.href} key={index}>
                  <Card className="p-6 h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${coverage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <coverage.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{coverage.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">Learn more about coverage options</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See Your Event Type?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We cover many more event types not listed here. Contact us to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
                >
                  Request a Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
