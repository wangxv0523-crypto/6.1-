import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = {
  products: [
    { name: 'Oil Immersed Transformers', href: '/products/oil-immersed-transformer' },
    { name: 'Dry Type Transformers', href: '/products/dry-type-transformer' },
    { name: 'High Voltage Power Transformers', href: '/products/high-voltage-power-transformer' },
    { name: 'Distribution Transformers', href: '/products/distribution-transformer' },
    { name: 'Pole Mounted Transformers', href: '/products/pole-mounted-transformer' },
    { name: 'Renewable Energy Transformers', href: '/products/renewable-energy-transformer' },
  ],
  company: [
    { name: 'About Us', href: '#factory' },
    { name: 'Manufacturing', href: '#factory' },
    { name: 'Engineering', href: '#capabilities' },
    { name: 'Contact Us', href: '#contact' },
  ],
  resources: [
    { name: 'Technical Specifications', href: '#products' },
    { name: 'Engineering Capabilities', href: '#capabilities' },
    { name: 'Export Markets', href: '#products' },
    { name: 'Get Quote', href: '#contact' },
  ],
}

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

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-n2GL5TaXQSDwwTPZmdjvvT0y5cX8oN.png" 
                alt="WENZE Power - Reliable Power Solutions" 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            
            <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
              WENZE Power focuses on reliable transformer manufacturing and export solutions for industrial and power distribution projects.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Official Email</p>
                <a href="mailto:sales@wenze-global.com" className="flex items-center gap-3 text-white hover:text-accent transition-colors font-medium">
                  <Mail className="w-5 h-5" />
                  <span>sales@wenze-global.com</span>
                </a>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">WhatsApp / Phone</p>
                <a href="https://wa.me/8615905342475" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-accent transition-colors font-medium">
                  <Phone className="w-5 h-5" />
                  <span>+86 159 0534 2475</span>
                </a>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Location</p>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>Shandong Province, China</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA in Footer */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <a 
                href={`https://wa.me/8615905342475?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#1da851] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <p className="text-white/50 text-xs mt-2">Response within 24 hours</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} WENZE Power. All rights reserved.</p>
          <p className="mt-2">
            Specialized in power transformers for Southeast Asia, Middle East, Russia, and Africa markets.
          </p>
        </div>
      </div>
    </footer>
  )
}
