import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { products } from '@/lib/products-data'

const whatsappMessage = encodeURIComponent(
`Hello, I'm interested in your transformer products.

Please provide a quote for:
1. Transformer Type:
2. Voltage (kV):
3. Capacity (kVA):
4. Country/Project Location:

Thank you.`
)

export function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Our Transformer Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Comprehensive range of power transformers designed for diverse industrial and utility applications.
            All products comply with international standards including IEC and ANSI.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link href={`/products/${product.id}`} className="block h-full">
                <div className="relative h-52 overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <product.icon className="w-6 h-6" />
                      <span className="font-bold text-lg">{product.title}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <div className="rounded-lg border border-border overflow-hidden">
                    <div className="bg-primary px-4 py-2.5">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Specifications</h4>
                    </div>
                    <div className="divide-y divide-border">
                      <div className="flex items-center px-4 py-2.5 bg-white">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28 shrink-0">Voltage</span>
                        <span className="text-sm font-semibold text-foreground">{product.specs.voltage}</span>
                      </div>
                      <div className="flex items-center px-4 py-2.5 bg-secondary/30">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28 shrink-0">Capacity</span>
                        <span className="text-sm font-semibold text-foreground">{product.specs.capacity}</span>
                      </div>
                      <div className="flex items-center px-4 py-2.5 bg-white">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28 shrink-0">Cooling</span>
                        <span className="text-sm font-semibold text-foreground">{product.specs.cooling}</span>
                      </div>
                      <div className="flex items-center px-4 py-2.5 bg-secondary/30">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28 shrink-0">Standards</span>
                        <span className="text-sm font-semibold text-foreground">{product.specs.standards}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
