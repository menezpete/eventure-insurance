"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRightIcon, CheckIcon, ClockIcon } from "@/components/icons"

export function HomeQuoteForm() {
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    attendees: "",
    name: "",
    email: "",
    phone: "",
  })

  const eventTypes = [
    "Wedding",
    "Corporate Event",
    "Festival",
    "Concert",
    "Sports Event",
    "Private Party",
    "Fundraiser",
    "Trade Show",
    "Other",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = "/quote"
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="quote">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {" "}
                Personalized Quote
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tell us about your event and receive a customized quote within 24-48 hours. Our Quick Quote Program may
              qualify you for same-day coverage.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold">No Obligation Quote</h4>
                  <p className="text-sm text-muted-foreground">Get pricing information with no commitment required</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClockIcon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Quick Quote Program</h4>
                  <p className="text-sm text-muted-foreground">Qualifying events may receive same-day quotes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Expert Consultation</h4>
                  <p className="text-sm text-muted-foreground">Our specialists help you find the right coverage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="eventType">Event Type</Label>
                <select
                  id="eventType"
                  className="w-full mt-1.5 h-11 px-3 rounded-md border border-input bg-background text-sm"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  required
                >
                  <option value="">Select event type...</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="eventDate">Event Date</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    className="mt-1.5"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="attendees">Expected Attendees</Label>
                  <Input
                    id="attendees"
                    type="number"
                    placeholder="e.g., 150"
                    className="mt-1.5"
                    value={formData.attendees}
                    onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  className="mt-1.5"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    className="mt-1.5"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-1.5"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
              >
                Request Your Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
