"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function LuxuryHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <div className="absolute top-0 left-0 w-full h-4 bg-secondary rounded-full" />
              <div
                className="absolute bottom-0 left-0 w-full h-6 bg-primary"
                style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
              />
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight">Eventure</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <a
              href="#coverage"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Coverage
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium">
              Sign In
            </Button>
            <Button className="text-sm font-medium bg-primary hover:bg-primary/90">Get Started</Button>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
