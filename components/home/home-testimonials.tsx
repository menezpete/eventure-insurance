import { Card } from "@/components/ui/card"
import { StarIcon } from "@/components/icons"

export function HomeTestimonials() {
  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      role: "Wedding - June 2024",
      rating: 5,
      text: "When our venue had a last-minute issue, Eventure's coverage saved our wedding. They handled everything professionally and we didn't lose a dime. Couldn't recommend them more!",
    },
    {
      name: "David Chen",
      role: "Corporate Event Planner",
      rating: 5,
      text: "We use Eventure for all our corporate events. Their team understands the unique needs of business gatherings. The quote process is fast and their coverage is comprehensive.",
    },
    {
      name: "Maria Rodriguez",
      role: "Festival Organizer",
      rating: 5,
      text: "Organizing a music festival requires robust insurance. Eventure provided coverage that met all venue and vendor requirements. Their expertise in festival insurance is unmatched.",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {" "}
              Event Planners
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See why thousands of event organizers choose Eventure Insurance for their coverage needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-secondary text-secondary" filled />
                ))}
              </div>

              <p className="text-lg mb-8 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
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
