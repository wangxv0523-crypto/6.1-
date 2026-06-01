import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'

export const metadata = {
  title: 'Pole Mounted Transformers | WENZE Power',
  description: 'Compact single-phase and three-phase transformers designed for overhead line installation on utility poles.'
}

export default function Page() {
  const product = products.find(p => p.id === 'pole-mounted-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{ ...data, iconName: 'radio' as const }} />
}
