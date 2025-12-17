"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function LuxuryHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-minimalist-architecture-with-blue-sky.jpg" alt="Hero background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-foreground/70">Redefining Insurance</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
            Insurance
            <br />
            <span className="text-primary">Reimagined</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto text-balance leading-relaxed">
            Experience insurance designed for the modern world. Instant coverage, transparent pricing, exceptional
            service.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-base px-8 h-14 bg-primary hover:bg-primary/90 group">
              Get Your Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-14 bg-transparent">
              Explore Coverage
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-foreground/50">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">4.9</span>
              <span>★★★★★</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <span>Trusted by 100,000+ customers</span>
            <div className="w-px h-6 bg-border" />
            <span>A+ Rated</span>
          </div>
        </div>
      </div>
    </section>
  )
}
