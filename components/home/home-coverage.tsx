import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
} from "@/components/icons"
import Link from "next/link"

export function HomeCoverage() {
  const coverageTypes = [
    {
      icon: HeartIcon,
      title: "Wedding Insurance",
      description: "Protect your special day from unexpected cancellations, vendor no-shows, and more.",
      href: "/coverage/wedding",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: BuildingIcon,
      title: "Corporate Events",
      description: "Comprehensive coverage for conferences, seminars, trade shows, and business gatherings.",
      href: "/coverage/corporate",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: MusicIcon,
      title: "Festival & Concert",
      description: "Full protection for music festivals, concerts, EDM events, and live performances.",
      href: "/coverage/festival",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: TrophyIcon,
      title: "Sports Events",
      description: "Coverage for athletic competitions, tournaments, marathons, and sporting events.",
      href: "/coverage/sports",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: HorseIcon,
      title: "Rodeo & Equestrian",
      description: "Specialized coverage for rodeos, horse shows, trail rides, and equestrian events.",
      href: "/coverage/rodeo",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: LeafIcon,
      title: "Cannabis Events",
      description: "Specialized insurance for cannabis industry events, expos, and trade shows.",
      href: "/coverage/cannabis",
      color: "from-green-600 to-teal-500",
    },
    {
      icon: SparklesIcon,
      title: "Private Parties",
      description: "Coverage for birthdays, anniversaries, holiday parties, and private celebrations.",
      href: "/coverage/private-party",
      color: "from-secondary to-yellow-500",
    },
    {
      icon: UsersIcon,
      title: "Community Events",
      description: "Protection for block parties, parades, fundraisers, and community gatherings.",
      href: "/coverage/community",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section className="py-20 md:py-32" id="coverage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Coverage for
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {" "}
              Every Event Type
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate weddings to large-scale festivals, we provide tailored insurance solutions for over 30
            different event types.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coverageTypes.map((coverage, index) => (
            <Link href={coverage.href} key={index}>
              <Card className="p-6 h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${coverage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <coverage.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{coverage.title}</h3>
                <p className="text-sm text-muted-foreground">{coverage.description}</p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/coverage">
            <Button variant="outline" size="lg" className="font-semibold bg-transparent">
              View All 30+ Coverage Types
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
