"use client"

import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5">
              <div className="h-3 w-8 rounded-full bg-accent" />
            </div>
            <div className="h-3 w-8 bg-primary" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }} />
          </div>
          <span className="text-xl font-bold text-primary">Eventure</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#coverage"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Coverage
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            How It Works
          </a>
          <a href="#about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            About
          </a>
          <a href="#faq" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            FAQ
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="sm" className="gap-2">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">(800) 555-0123</span>
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <a href="#coverage" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Coverage
            </a>
            <a href="#how-it-works" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </a>
            <a href="#about" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#faq" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
            <Button variant="outline" size="sm" className="gap-2 justify-start bg-transparent">
              <Phone className="h-4 w-4" />
              (800) 555-0123
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
