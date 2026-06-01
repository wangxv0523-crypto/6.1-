import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { About } from '@/components/about'
import { Capabilities } from '@/components/capabilities'
import { ContactForm } from '@/components/contact-form'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Capabilities />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
