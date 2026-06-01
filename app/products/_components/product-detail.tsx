'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, MessageCircle, Mail, Droplets, Wind, Zap, Box, Radio, Sun } from 'lucide-react'
import type { DetailedSpecTable } from '@/lib/products-data'

interface ProductData {
  id: string
  iconName: 'droplets' | 'wind' | 'zap' | 'box' | 'radio' | 'sun'
  title: string
  shortDescription: string
  fullDescription: string
  standardSizes: string[]
  image: string
  specs: {
    voltage: string
    capacity: string
    frequency: string
    cooling: string
    standards: string
  }
  features: string[]
  specTable?: Array<{
    capacity: string
    voltage: string
    dimensions: string
    weight?: string
  }>
  detailedSpecTable?: DetailedSpecTable
}

const getWhatsAppMessage = (productName: string) => encodeURIComponent(
`Hello, I'm interested in your ${productName}.

Please provide a quote for:
1. Voltage (kV):
2. Capacity (kVA):
3. Quantity:
4. Country/Project Location:

Thank you.`
)

const iconMap = {
  droplets: Droplets,
  wind: Wind,
  zap: Zap,
  box: Box,
  radio: Radio,
  sun: Sun,
}

export function ProductDetail({ product }: { product: ProductData }) {
  const Icon = iconMap[product.iconName]
  const whatsappMessage = getWhatsAppMessage(product.title)

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-primary/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/#products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Power Transformer</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary">{product.title}</h1>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.fullDescription}
              </p>

              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-primary px-6 py-3">
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">Technical Specifications</h2>
                </div>
                <div className="divide-y divide-border">
                  <div className="flex items-center px-6 py-3 bg-white">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 shrink-0">Voltage</span>
                    <span className="text-sm font-semibold text-foreground">{product.specs.voltage}</span>
                  </div>
                  <div className="flex items-center px-6 py-3 bg-secondary/30">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 shrink-0">Capacity</span>
                    <span className="text-sm font-semibold text-foreground">{product.specs.capacity}</span>
                  </div>
                  <div className="flex items-center px-6 py-3 bg-white">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 shrink-0">Frequency</span>
                    <span className="text-sm font-semibold text-foreground">{product.specs.frequency}</span>
                  </div>
                  <div className="flex items-center px-6 py-3 bg-secondary/30">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 shrink-0">Cooling</span>
                    <span className="text-sm font-semibold text-foreground">{product.specs.cooling}</span>
                  </div>
                  <div className="flex items-center px-6 py-3 bg-white">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 shrink-0">Standards</span>
                    <span className="text-sm font-semibold text-foreground">{product.specs.standards}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-6">
                  <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Inquiry
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold h-12 px-6">
                  <a href="mailto:sales@wenze-global.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.detailedSpecTable && product.detailedSpecTable.rows.length > 0 && (
        <section className="py-16 bg-white border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-8">Standard Sizes & Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="bg-primary">
                    {product.detailedSpecTable.columns.map((col) => (
                      <th key={col.key} className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider whitespace-nowrap">
                        {col.label}{col.unit ? ` (${col.unit})` : ''}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {product.detailedSpecTable.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-secondary/30'}>
                      {product.detailedSpecTable!.columns.map((col, colIdx) => (
                        <td key={col.key} className={`px-4 py-3 text-sm text-foreground whitespace-nowrap ${colIdx === 0 ? 'font-semibold' : ''}`}>
                          {row[col.key] != null ? String(row[col.key]) : '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {product.detailedSpecTable.note && (
              <p className="text-sm text-muted-foreground mt-4">{product.detailedSpecTable.note}</p>
            )}
            <p className="text-sm text-muted-foreground mt-2">
              Custom sizes and specifications are available based on project technical requirements.
            </p>
          </div>
        </section>
      )}

      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Request A Quote</h2>
            <p className="text-white/80 mb-8">
              Send us your project requirements and receive a quotation within <span className="font-bold text-accent">24 hours</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-14 px-8 text-base">
                <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold h-14 px-8 text-base">
                <a href="mailto:sales@wenze-global.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-secondary/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <Link href="/#products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <Link href="/#contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
