import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Switching to Eventure was the best decision. I saved $800 on my home insurance and the claims process was incredibly smooth when I needed it.",
      rating: 5,
      image: "/professional-woman-smiling.png",
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      content:
        "The business insurance package gave me peace of mind to focus on growing my company. Their support team is always there when I have questions.",
      rating: 5,
      image: "/professional-man-smiling.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Young Professional",
      content:
        "As a first-time insurance buyer, Eventure made everything so simple. The instant quotes and transparent pricing helped me make an informed decision.",
      rating: 5,
      image: "/young-professional-woman.png",
    },
  ]

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Trusted by thousands of customers
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-6 text-pretty leading-relaxed text-foreground">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
