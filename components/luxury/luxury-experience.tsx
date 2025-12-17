export function LuxuryExperience() {
  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              The Eventure
              <br />
              Experience
            </h2>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We've reimagined every touchpoint of the insurance journey. From your first quote to filing a claim,
              experience the difference that thoughtful design and genuine care makes.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold mb-2">2min</div>
                <div className="text-primary-foreground/70">Average quote time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-primary-foreground/70">Customer support</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-primary-foreground/70">Satisfaction rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <img src="/professional-customer-service-representative-smili.jpg" alt="Customer experience" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
