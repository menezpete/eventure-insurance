export function LuxuryFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute top-0 left-0 w-full h-4 bg-secondary rounded-full" />
                <div
                  className="absolute bottom-0 left-0 w-full h-6 bg-primary"
                  style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
                />
              </div>
              <span className="text-2xl font-bold text-primary">Eventure</span>
            </div>
            <p className="text-foreground/60">Insurance reimagined for the modern world.</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Auto Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Home Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Life Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Business Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>© 2025 Eventure Insurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
