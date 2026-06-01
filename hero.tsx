import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle, FileText } from 'lucide-react'

// WhatsApp预设消息
const whatsappMessage = encodeURIComponent(
`Hello, I'm interested in your transformer products.

Please provide a quote for:
1. Transformer Type: 
2. Voltage (kV): 
3. Capacity (kVA): 
4. Country/Project Location: 

Thank you.`
)

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BD%91%E7%AB%99%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%9B%BE%E7%89%87-aoXskClX6ojrlf6kS8yYf2h66cKMzv.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Product Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            Power Transformer Manufacturer & Exporter
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
            Reliable Power Transformer Manufacturing
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl text-pretty">
            WENZE Power manufactures and exports high-quality transformers for diverse industrial and utility applications worldwide.
          </p>

          {/* Key Specs - Engineering Style */}
          <div className="mt-8 inline-flex flex-wrap gap-x-6 gap-y-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-5 py-3">
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-white/50 font-medium">Voltage:</span>
              <span className="font-semibold">0.4kV – 220kV</span>
            </div>
            <div className="w-px h-4 bg-white/20 self-center hidden sm:block" />
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-white/50 font-medium">Capacity:</span>
              <span className="font-semibold">10kVA – 100MVA</span>
            </div>
            <div className="w-px h-4 bg-white/20 self-center hidden sm:block" />
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-white/50 font-medium">Frequency:</span>
              <span className="font-semibold">50Hz / 60Hz</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 h-12">
              <Link href="#contact">
                <FileText className="w-5 h-5 mr-2" />
                Get a Free Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold text-base px-8 h-12 backdrop-blur-sm">
              <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/70 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-white/70 text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1,000+</div>
                <div className="text-white/70 text-sm">Units/Year Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
