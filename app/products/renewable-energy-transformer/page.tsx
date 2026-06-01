import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'

export const metadata = {
  title: 'Renewable Energy Transformers | WENZE Power',
  description: 'Purpose-built step-up transformers for solar PV, wind power, and other renewable energy applications.'
}

export default function Page() {
  const product = products.find(p => p.id === 'renewable-energy-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{ ...data, iconName: 'sun' as const }} />
}
