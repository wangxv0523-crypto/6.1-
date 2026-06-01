import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'

export const metadata = {
  title: 'Dry-Type Transformers | Power Transformers',
  description: 'Dry type transformers use air as the cooling medium, eliminating the need for oil and reducing fire hazards.'
}

export default function Page() {
  const product = products.find(p => p.id === 'dry-type-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'wind' as const
  }} />
}
