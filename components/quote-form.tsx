"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRightIcon, CheckIcon } from "@/components/icons"

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    eventType: "",
    eventName: "",
    eventDate: "",
    eventEndDate: "",
    venueType: "",
    venueName: "",
    venueAddress: "",
    expectedAttendees: "",
    alcoholServed: "",
    coverageNeeds: [] as string[],
    name: "",
    email: "",
    phone: "",
    company: "",
    additionalInfo: "",
  })

  const eventTypes = [
    "Wedding / Reception",
    "Corporate Event / Conference",
    "Festival / Fair",
    "Concert / Music Event",
    "Sports Event / Tournament",
    "Trade Show / Expo",
    "Private Party / Celebration",
    "Fundraiser / Nonprofit Event",
    "Rodeo / Equestrian Event",
    "Community Event / Block Party",
    "Religious / Cultural Event",
    "Cannabis Event",
    "Film / Video Production",
    "Other",
  ]

  const venueTypes = [
    "Hotel / Conference Center",
    "Banquet Hall / Event Center",
    "Outdoor Venue / Park",
    "Restaurant / Bar",
    "Private Residence",
    "Arena / Stadium",
    "Fairgrounds",
    "Church / Religious Venue",
    "Ranch / Farm",
    "Other",
  ]

  const coverageOptions = [
    "General Liability",
    "Event Cancellation",
    "Liquor Liability",
    "Equipment Coverage",
    "Weather Insurance",
    "Additional Insureds",
  ]

  const handleCoverageChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      coverageNeeds: prev.coverageNeeds.includes(option)
        ? prev.coverageNeeds.filter((c) => c !== option)
        : [...prev.coverageNeeds, option],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckIcon className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Quote Request Received!</h3>
        <p className="text-muted-foreground mb-2">
          Thank you for your submission. Our team will review your event details and provide a personalized quote within
          24-48 hours.
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          If your event qualifies for our Quick Quote Program, you may hear from us sooner.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Submit Another Quote Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Event Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-border">Event Information</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="eventType">Event Type *</Label>
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

          <div>
            <Label htmlFor="eventName">Event Name</Label>
            <Input
              id="eventName"
              placeholder="e.g., Smith-Johnson Wedding, Annual Company Retreat"
              className="mt-1.5"
              value={formData.eventName}
              onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="eventDate">Event Start Date *</Label>
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
              <Label htmlFor="eventEndDate">Event End Date</Label>
              <Input
                id="eventEndDate"
                type="date"
                className="mt-1.5"
                value={formData.eventEndDate}
                onChange={(e) => setFormData({ ...formData, eventEndDate: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="expectedAttendees">Expected Number of Attendees *</Label>
            <Input
              id="expectedAttendees"
              type="number"
              placeholder="e.g., 150"
              className="mt-1.5"
              value={formData.expectedAttendees}
              onChange={(e) => setFormData({ ...formData, expectedAttendees: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="alcoholServed">Will Alcohol Be Served? *</Label>
            <select
              id="alcoholServed"
              className="w-full mt-1.5 h-11 px-3 rounded-md border border-input bg-background text-sm"
              value={formData.alcoholServed}
              onChange={(e) => setFormData({ ...formData, alcoholServed: e.target.value })}
              required
            >
              <option value="">Select...</option>
              <option value="no">No</option>
              <option value="beer-wine">Yes - Beer and Wine Only</option>
              <option value="full-bar">Yes - Full Bar / Liquor</option>
              <option value="byob">BYOB</option>
            </select>
          </div>
        </div>
      </div>

      {/* Venue Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-border">Venue Information</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="venueType">Venue Type *</Label>
            <select
              id="venueType"
              className="w-full mt-1.5 h-11 px-3 rounded-md border border-input bg-background text-sm"
              value={formData.venueType}
              onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
              required
            >
              <option value="">Select venue type...</option>
              {venueTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="venueName">Venue Name</Label>
            <Input
              id="venueName"
              placeholder="e.g., The Grand Ballroom, City Park Pavilion"
              className="mt-1.5"
              value={formData.venueName}
              onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="venueAddress">Venue Address (City, State)</Label>
            <Input
              id="venueAddress"
              placeholder="e.g., Dallas, TX"
              className="mt-1.5"
              value={formData.venueAddress}
              onChange={(e) => setFormData({ ...formData, venueAddress: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Coverage Needs */}
      <div>
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-border">Coverage Needs</h3>
        <p className="text-sm text-muted-foreground mb-4">Select all that apply:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {coverageOptions.map((option) => (
            <label
              key={option}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                formData.coverageNeeds.includes(option)
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.coverageNeeds.includes(option)}
                onChange={() => handleCoverageChange(option)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border flex items-center justify-center ${
                  formData.coverageNeeds.includes(option) ? "bg-primary border-primary" : "border-input"
                }`}
              >
                {formData.coverageNeeds.includes(option) && <CheckIcon className="w-3 h-3 text-white" />}
              </div>
              <span className="text-sm font-medium">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-border">Contact Information</h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="John Smith"
                className="mt-1.5"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="company">Company / Organization</Label>
              <Input
                id="company"
                placeholder="Optional"
                className="mt-1.5"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
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
              <Label htmlFor="phone">Phone Number *</Label>
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

          <div>
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Tell us anything else about your event that would help us prepare your quote (special activities, vendor requirements, etc.)"
              className="mt-1.5 min-h-[100px]"
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
            />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white"
      >
        Submit Quote Request
        <ArrowRightIcon className="ml-2 h-5 w-5" />
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll respond within 24-48 hours
        with your personalized quote.
      </p>
    </form>
  )
}
