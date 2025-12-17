"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, Clock, Zap } from "lucide-react"
import { useState } from "react"

export function TechInstantQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverage: "",
    zipCode: "",
  })

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Personalized Coverage Analysis</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Get your personalized quote in
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                24-48 hours
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              We analyze your unique needs to find you the best coverage at the best price.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Qualify for Quick Quote Program? Get results same-day!</span>
            </div>
          </div>

          <Card className="p-8 md:p-12 border-border/50 shadow-2xl bg-card/80 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverage" className="text-base font-medium">
                    Coverage Type
                  </Label>
                  <select
                    id="coverage"
                    value={formData.coverage}
                    onChange={(e) => setFormData({ ...formData, coverage: e.target.value })}
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select coverage type</option>
                    <option value="home">Home Insurance</option>
                    <option value="auto">Auto Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="business">Business Insurance</option>
                    <option value="travel">Travel Insurance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-base font-medium">
                    ZIP Code
                  </Label>
                  <Input
                    id="zipCode"
                    placeholder="12345"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  Request Your Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Typical response time: 24-48 hours</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                By clicking "Request Your Quote", you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </Card>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Quote Program</h3>
                <p className="text-muted-foreground">
                  Need coverage faster? Certain coverage types and risk profiles qualify for same-day quotes. We'll let
                  you know if you're eligible when you submit your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
