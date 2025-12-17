"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { EventureLogo } from "@/components/eventure-logo"
import { MenuIcon, XIcon, ChevronDownIcon, PhoneIcon } from "@/components/icons"
import Link from "next/link"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const specialEventsLinks = [
    { name: "Weddings", href: "/coverage/wedding", description: "Ceremonies, receptions & rehearsal dinners" },
    {
      name: "Festivals & Concerts",
      href: "/coverage/festival",
      description: "Music festivals, concerts & live events",
    },
    { name: "Corporate Events", href: "/coverage/corporate", description: "Conferences, meetings & company events" },
    { name: "Charity & Fundraisers", href: "/coverage/fundraiser", description: "Galas, auctions & benefit events" },
    { name: "Trade Shows", href: "/coverage/trade-show", description: "Exhibitions, conventions & expos" },
    { name: "Sporting Events", href: "/coverage/sports", description: "Tournaments, races & athletic competitions" },
    {
      name: "Private Parties",
      href: "/coverage/private-party",
      description: "Birthdays, anniversaries & celebrations",
    },
    { name: "Cultural Events", href: "/coverage/cultural", description: "Parades, religious & community events" },
    { name: "View All Events", href: "/coverage", description: "Browse all 30+ event types" },
  ]

  const rodeoEquineLinks = [
    { name: "Rodeo Events", href: "/coverage/rodeo", description: "Bull riding, roping & barrel racing" },
    { name: "Equestrian Shows", href: "/coverage/equestrian", description: "Horse shows, dressage & jumping" },
    { name: "Livestock Events", href: "/coverage/livestock", description: "County fairs, auctions & 4-H shows" },
    { name: "Western Events", href: "/coverage/western", description: "Ranch rodeos & western heritage" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/40">
      <div className="bg-primary text-primary-foreground py-1.5 text-center text-sm">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <span className="font-medium">A+ Rated Carriers</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Instant Certificates Available</span>
          <span className="hidden sm:inline">•</span>
          <a href="tel:1-800-EVENTURE" className="hidden sm:flex items-center gap-1 font-semibold hover:underline">
            <PhoneIcon className="w-3.5 h-3.5" />
            1-800-EVENTURE
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 py-2">
          <div className="flex items-center">
            <Link href="/">
              <EventureLogo className="h-16" />
            </Link>
          </div>

          {/* Desktop Navigation - New nav structure */}
          <nav className="hidden xl:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/coverage" className="text-sm font-medium hover:text-primary transition-colors">
              Coverage
            </Link>

            {/* Special Events Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("events")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Special Events
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              {activeDropdown === "events" && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-xl shadow-2xl py-3 px-2">
                  {specialEventsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="font-medium text-sm">{link.name}</div>
                      <div className="text-xs text-muted-foreground">{link.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Rodeos & Equine Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("rodeo")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Rodeos & Equine
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              {activeDropdown === "rodeo" && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-xl shadow-2xl py-3 px-2">
                  {rodeoEquineLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="font-medium text-sm">{link.name}</div>
                      <div className="text-xs text-muted-foreground">{link.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/venues" className="text-sm font-medium hover:text-primary transition-colors">
              For Venues
            </Link>
            <Link href="/vendors" className="text-sm font-medium hover:text-primary transition-colors">
              For Vendors
            </Link>
            <Link href="/claims" className="text-sm font-medium hover:text-primary transition-colors">
              Claims
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/brokers" className="text-sm font-medium hover:text-primary transition-colors">
              Brokers
            </Link>
            <Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors">
              Resources
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center gap-3">
            <Link href="/quote">
              <Button
                size="default"
                className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white font-semibold px-6"
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-border/40 max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="py-2 font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/coverage"
                className="py-2 font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Coverage
              </Link>

              <div className="py-2 font-semibold text-muted-foreground text-sm uppercase tracking-wide mt-2">
                Special Events
              </div>
              {specialEventsLinks.slice(0, -1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 pl-4 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="py-2 font-semibold text-muted-foreground text-sm uppercase tracking-wide mt-2">
                Rodeos & Equine
              </div>
              {rodeoEquineLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 pl-4 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="py-2 font-semibold text-muted-foreground text-sm uppercase tracking-wide mt-2">More</div>
              <Link
                href="/venues"
                className="py-2 pl-4 text-sm hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Venues
              </Link>
              <Link
                href="/vendors"
                className="py-2 pl-4 text-sm hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Vendors
              </Link>
              <Link
                href="/claims"
                className="py-2 pl-4 text-sm hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Claims
              </Link>
              <Link
                href="/brokers"
                className="py-2 pl-4 text-sm hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Brokers
              </Link>
              <Link
                href="/resources"
                className="py-2 pl-4 text-sm hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="py-2 pl-4 text-sm hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <div className="pt-4 mt-2 border-t border-border">
                <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-blue-600">
                    Get a Quote
                  </Button>
                </Link>
                <a
                  href="tel:1-800-EVENTURE"
                  className="flex items-center justify-center gap-2 mt-3 py-2 text-primary font-medium"
                >
                  <PhoneIcon className="w-4 h-4" />
                  1-800-EVENTURE
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
