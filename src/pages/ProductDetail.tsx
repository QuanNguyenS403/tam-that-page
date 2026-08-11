import { useEffect, useState } from 'react'
import { ArrowLeft, Loader2, ShoppingBag } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PRODUCT_BY_HANDLE_QUERY, storefrontApiRequest, type ShopifyProduct } from '@/lib/shopify'
import { useCartStore } from '@/stores/cartStore'

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: currencyCode }).format(Number(amount))
}

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>()
  const navigate = useNavigate()
  const [product, setProduct] = useState<ShopifyProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const addItem = useCartStore(state => state.addItem)
  const isLoading = useCartStore(state => state.isLoading)

  useEffect(() => {
    if (!handle) return
    let active = true
    storefrontApiRequest<{ product: ShopifyProduct | null }>(PRODUCT_BY_HANDLE_QUERY, { handle })
      .then(data => {
        if (active) setProduct(data.product)
      })
      .catch(() => {
        if (active) setError('Không thể tải sản phẩm lúc này.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => { active = false }
  }, [handle])

  if (loading) return <div className="flex min-h-screen items-center justify-center bg-canvas"><Loader2 className="h-6 w-6 animate-spin text-sage" /></div>
  if (error || !product) return <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-canvas px-4 text-center"><p className="font-body text-alert-amber">{error ?? 'Không tìm thấy sản phẩm.'}</p><Button onClick={() => navigate('/')} variant="outline">Quay lại cửa hàng</Button></div>

  const image = product.images.edges[0]?.node
  const variant = product.variants.edges.find(edge => edge.node.availableForSale)?.node ?? product.variants.edges[0]?.node

  const handleAdd = async () => {
    if (!variant) return
    await addItem({ product, variantId: variant.id, variantTitle: variant.title, price: variant.price, quantity: 1, selectedOptions: variant.selectedOptions })
  }

  return (
    <main className="min-h-screen bg-canvas px-4 py-10 sm:px-8 md:py-16">
      <div className="mx-auto max-w-wide">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 font-body text-body-sm font-semibold text-sage hover:text-forest"><ArrowLeft className="h-4 w-4" /> Quay lại danh mục</Link>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-square overflow-hidden rounded-card bg-parchment">{image && <img src={image.url} alt={image.altText ?? product.title} className="h-full w-full object-contain" />}</div>
          <div className="flex flex-col justify-center">
            <p className="mb-3 font-body text-label-lg font-semibold uppercase tracking-widest text-sage">Sản phẩm chính hãng</p>
            <h1 className="font-display text-display-lg font-bold text-forest">{product.title}</h1>
            <p className="mt-5 whitespace-pre-line font-body text-body-lg leading-relaxed text-stone-600">{product.description || 'Sản phẩm chính hãng từ cửa hàng Shopify.'}</p>
            {variant && <p className="mt-8 font-mono text-price-xl font-bold text-forest">{formatPrice(variant.price.amount, variant.price.currencyCode)}</p>}
            <Button onClick={() => void handleAdd()} disabled={isLoading || !variant?.availableForSale} size="lg" className="mt-6 w-full bg-forest text-amber hover:bg-jade sm:w-fit"><ShoppingBag className="h-4 w-4" /> Thêm vào giỏ hàng</Button>
            <p className="mt-4 font-body text-body-sm text-stone-600">Thanh toán và vận chuyển được xử lý an toàn bởi Shopify.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
