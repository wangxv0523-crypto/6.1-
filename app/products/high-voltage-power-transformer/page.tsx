import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'

export const metadata = {
  title: 'High Voltage Power Transformers | WENZE Power',
  description: 'High voltage power transformers for utility power grids and large industrial power systems with voltages up to 220kV.'
}

export default function Page() {
  const product = products.find(p => p.id === 'high-voltage-power-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'zap' as const
  }} />
}
