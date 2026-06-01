import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'

export const metadata = {
  title: 'Oil-Immersed Transformers | Power Transformers',
  description: 'Oil immersed transformers are widely used in industrial plants, utility networks, power distribution systems and renewable energy projects.'
}

export default function Page() {
  const product = products.find(p => p.id === 'oil-immersed-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'droplets' as const
  }} />
}
