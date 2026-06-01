import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wenze-global.com'),
  title: 'WENZE Power | Power Transformer Manufacturer & Exporter',
  description: 'WENZE Power focuses on reliable transformer manufacturing and export solutions for industrial and power distribution projects in Southeast Asia, Middle East, Russia and Africa.',
  keywords: 'WENZE Power, power transformer manufacturer, transformer exporter China, oil immersed transformer, dry type transformer, distribution transformer, pole mounted transformer, renewable energy transformer, high voltage transformer',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'WENZE Power | Power Transformer Manufacturer & Exporter',
    description: 'WENZE Power focuses on reliable transformer manufacturing and export solutions for industrial and power distribution projects.',
    type: 'website',
    url: 'https://www.wenze-global.com',
    siteName: 'WENZE Power',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'WENZE Power - Transformer Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WENZE Power | Power Transformer Manufacturer',
    description: 'WENZE Power focuses on reliable transformer manufacturing and export solutions for industrial and power distribution projects.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://www.wenze-global.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WENZE Power',
  url: 'https://www.wenze-global.com',
  logo: 'https://www.wenze-global.com/placeholder-logo.svg',
  description: 'WENZE Power focuses on reliable transformer manufacturing and export solutions for industrial and power distribution projects.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+86-159-0534-2475',
    contactType: 'Sales',
    email: 'sales@wenze-global.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CN',
    addressRegion: 'Shandong',
    streetAddress: 'Shandong, China',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
