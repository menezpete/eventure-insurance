import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TechTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/professional-woman-smiling.png",
      rating: 5,
      text: "Switched to Eventure and saved $1,200 a year on my home insurance. The process was incredibly fast and the coverage is better than what I had before.",
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      image: "/professional-man-smiling.png",
      rating: 5,
      text: "As a business owner, I need insurance I can trust. Eventure's AI-powered platform found me the perfect coverage at an unbeatable price. Highly recommend!",
    },
    {
      name: "Emily Rodriguez",
      role: "Young Professional",
      image: "/young-professional-woman.png",
      rating: 5,
      text: "I got my auto insurance quote in literally 60 seconds. The app is so easy to use and their customer service is available 24/7. Best insurance experience ever!",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Loved by
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              500K+ customers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their Eventure experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-lg mb-8 leading-relaxed">{testimonial.text}</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
