import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'

export const metadata = {
  title: 'Distribution Transformers | Power Transformers',
  description: 'Distribution transformers are designed for utility power distribution networks with reliable and efficient power delivery.'
}

export default function Page() {
  const product = products.find(p => p.id === 'distribution-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'box' as const
  }} />
}
