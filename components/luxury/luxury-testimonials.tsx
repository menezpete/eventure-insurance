import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Switching to Eventure was the best decision. The process was seamless, and I'm saving $200 a month.",
    author: "Sarah Chen",
    role: "Homeowner",
    image: "/professional-woman-smiling.png",
  },
  {
    quote: "When I had an accident, Eventure handled everything perfectly. Claims processed in 48 hours.",
    author: "Michael Rodriguez",
    role: "Auto Insurance Customer",
    image: "/professional-man-smiling.png",
  },
  {
    quote: "Finally, an insurance company that treats you like a person, not a policy number.",
    author: "Emily Thompson",
    role: "Life Insurance Customer",
    image: "/professional-woman-portrait.png",
  },
]

export function LuxuryTestimonials() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Trusted by thousands</h2>
          <p className="text-xl text-foreground/60">
            See what our customers have to say about their Eventure experience.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 space-y-6 border-0 shadow-lg">
              <p className="text-lg leading-relaxed text-foreground/80">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
