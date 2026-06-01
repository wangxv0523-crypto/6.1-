import { Building2, Wrench, Cog, CircleCheck as CheckCircle } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">About WENZE Power</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
            Professional Transformer Manufacturing
          </h2>
        </div>

        {/* Factory Gate Image */}
        <div className="relative rounded-xl overflow-hidden mb-12 bg-secondary shadow-lg">
          <img
            src="/大门口.png"
            alt="WENZE Power Manufacturing Facility Gate"
            className="w-full object-cover aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
        </div>

        {/* Company Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Company Overview</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded with a commitment to delivering reliable, high-quality power transformers, WENZE Power operates a modern manufacturing facility equipped with advanced production and testing equipment. Our team combines technical expertise with practical manufacturing experience to produce transformers that meet rigorous international standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We manufacture transformer solutions across a wide voltage and capacity range, from compact distribution units to large industrial power transformers. Each unit undergoes comprehensive factory testing to ensure performance reliability and compliance with IEC and ANSI standards.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years in Business</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground mt-1">Countries Served</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground mt-1">Units/Year Capacity</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground mt-1">Product Categories</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Manufacturing Capabilities</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Cog className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Production Capacity</h4>
                  <p className="text-sm text-muted-foreground">Annual production capacity exceeding 1,000 transformer units across voltage classes from 0.4kV to 220kV.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Wrench className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive testing laboratory with routine and type testing capabilities. Factory acceptance testing (FAT) for all units.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Standards Compliance</h4>
                  <p className="text-sm text-muted-foreground">Full compliance with IEC 60076, IEEE C57, and relevant international standards. Third-party inspection available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Workshop Image */}
        <div className="relative rounded-xl overflow-hidden bg-secondary shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="WENZE Power Production Workshop"
            className="w-full h-full object-cover aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-medium text-lg">Production Workshop</p>
          </div>
        </div>
      </div>
    </section>
  )
}
