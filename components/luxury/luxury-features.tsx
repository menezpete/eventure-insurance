import { Shield, Zap, Heart, Award } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Coverage",
    description: "Get insured in minutes, not days. Our streamlined process gets you protected immediately.",
  },
  {
    icon: Shield,
    title: "Comprehensive Protection",
    description: "Premium coverage that adapts to your life. From home to auto to life insurance.",
  },
  {
    icon: Heart,
    title: "Human-Centered Service",
    description: "Real people, real support. Available 24/7 when you need us most.",
  },
  {
    icon: Award,
    title: "Industry Leading",
    description: "Award-winning service and claims processing. We set the standard.",
  },
]

export function LuxuryFeatures() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
