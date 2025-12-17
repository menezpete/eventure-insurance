import { EventureLogo } from "@/components/eventure-logo"
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      {/* <CHANGE> Added contact info bar above main footer */}
      <div className="bg-primary/5 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Call Us</p>
                <a href="tel:1-800-EVENTURE" className="font-semibold hover:text-primary transition-colors">1-800-EVENTURE</a>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MailIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Us</p>
                <a href="mailto:info@eventureinsurance.com" className="font-semibold hover:text-primary transition-colors">info@eventureinsurance.com</a>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPinIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Coverage</p>
                <p className="font-semibold">All 50 States</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <EventureLogo className="h-16" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Comprehensive event insurance coverage for weddings, festivals, corporate events, rodeos, and 30+ event types.
              Protecting your special moments with A+ rated carriers.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/eventureinsurance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/eventureins"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/eventureinsurance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/eventureinsurance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Event Coverage */}
          <div>
            <h3 className="font-bold mb-4">Event Coverage</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/coverage/wedding" className="hover:text-primary transition-colors">
                  Wedding Insurance
                </Link>
              </li>
              <li>
                <Link href="/coverage/corporate" className="hover:text-primary transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/coverage/festival" className="hover:text-primary transition-colors">
                  Festival Insurance
                </Link>
              </li>
              <li>
                <Link href="/coverage/rodeo" className="hover:text-primary transition-colors">
                  Rodeo Insurance
                </Link>
              </li>
              <li>
                <Link href="/coverage/concert" className="hover:text-primary transition-colors">
                  Concert Insurance
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="hover:text-primary transition-colors font-medium text-primary">
                  View All Coverage →
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialty */}
          <div>
            <h3 className="font-bold mb-4">Specialty</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/coverage/equestrian" className="hover:text-primary transition-colors">
                  Equestrian Events
                </Link>
              </li>
              <li>
                <Link href="/coverage/cannabis" className="hover:text-primary transition-colors">
                  Cannabis Events
                </Link>
              </li>
              <li>
                <Link href="/coverage/film" className="hover:text-primary transition-colors">
                  Film Production
                </Link>
              </li>
              <li>
                <Link href="/venues" className="hover:text-primary transition-colors">
                  For Venues
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="hover:text-primary transition-colors">
                  For Vendors
                </Link>
              </li>
              <li>
                <Link href="/brokers" className="hover:text-primary transition-colors">
                  For Brokers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">\
