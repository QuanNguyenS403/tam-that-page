import { useEffect, useState } from 'react'
import { ArrowRight, Loader2, ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PRODUCTS_QUERY, storefrontApiRequest, type ShopifyProduct } from '@/lib/shopify'
import { useCartStore } from '@/stores/cartStore'

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: currencyCode }).format(Number(amount))
}

export function ProductHero() {
  const [products, setProducts] = useState<ShopifyProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const addItem = useCartStore(state => state.addItem)
  const isLoading = useCartStore(state => state.isLoading)
  const navigate = useNavigate()

  useEffect(() => {
    let active = true
    storefrontApiRequest<{ products: { edges: Array<{ node: ShopifyProduct }> } }>(PRODUCTS_QUERY, { first: 24 })
      .then(data => {
        if (active) setProducts(data.products.edges.map(edge => edge.node))
      })
      .catch(() => {
        if (active) setError('Không thể tải danh mục sản phẩm lúc này.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => { active = false }
  }, [])

  const handleAdd = async (product: ShopifyProduct) => {
    const variant = product.variants.edges.find(edge => edge.node.availableForSale)?.node
    if (!variant) return
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions,
    })
  }

  return (
    <section id="san-pham" aria-label="Danh mục sản phẩm" className="bg-canvas py-section-sm md:py-section-md">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 font-body text-label-lg font-semibold uppercase tracking-widest text-sage">TAM THẤT QUÂN NGUYỄN</p>
          <h1 className="mb-4 max-w-3xl font-body text-3xl font-semibold leading-tight text-forest sm:text-4xl md:text-5xl">
            Sản phẩm được tuyển chọn từ vùng nguyên liệu Hà Giang
          </h1>
          <p className="max-w-2xl font-body text-body-lg leading-relaxed text-stone-600">
            Khám phá danh mục chính hãng từ cửa hàng Shopify. Mỗi sản phẩm được hiển thị trực tiếp từ kho hàng thực tế và thanh toán an toàn qua Shopify.
          </p>
        </div>

        {loading && (
          <div className="flex items-center gap-3 border-y border-stone-300 py-10 font-body text-stone-600">
            <Loader2 className="h-5 w-5 animate-spin text-sage" /> Đang tải sản phẩm từ Shopify…
          </div>
        )}

        {error && !loading && <p role="alert" className="border-y border-stone-300 py-10 font-body text-alert-amber">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <div className="border-y border-stone-300 py-14 text-center">
            <ShoppingBag className="mx-auto mb-4 h-10 w-10 text-sage" />
            <h2 className="mb-2 font-display text-display-sm font-bold text-forest">Chưa có sản phẩm</h2>
            <p className="mx-auto max-w-lg font-body text-body-base text-stone-600">
              Danh mục Shopify hiện chưa có sản phẩm. Hãy tạo sản phẩm trong Shopify rồi quay lại để hiển thị chúng tại đây.
            </p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map(product => {
              const image = product.images.edges[0]?.node
              const variant = product.variants.edges.find(edge => edge.node.availableForSale)?.node ?? product.variants.edges[0]?.node
              return (
                <article key={product.id} className="group flex flex-col overflow-hidden rounded-card border border-stone-300 bg-cream transition-shadow hover:shadow-card-hover">
                  <button type="button" onClick={() => navigate(`/product/${product.handle}`)} className="aspect-square overflow-hidden bg-parchment text-left" aria-label={`Xem ${product.title}`}>
                    {image ? <img src={image.url} alt={image.altText ?? product.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /> : <div className="flex h-full items-center justify-center text-stone-600">Chưa có hình ảnh</div>}
                  </button>
                  <div className="flex flex-1 flex-col p-5">
                    <button type="button" onClick={() => navigate(`/product/${product.handle}`)} className="text-left">
                      <h2 className="font-display text-display-sm font-bold text-forest">{product.title}</h2>
                    </button>
                    <p className="mt-2 line-clamp-3 flex-1 font-body text-body-sm leading-relaxed text-stone-600">{product.description || 'Sản phẩm chính hãng từ cửa hàng Shopify.'}</p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="font-mono text-body-lg font-bold text-forest">{variant ? formatPrice(variant.price.amount, variant.price.currencyCode) : 'Liên hệ'}</span>
                      <Button onClick={() => void handleAdd(product)} disabled={isLoading || !variant?.availableForSale} size="sm" className="bg-forest text-amber hover:bg-jade">
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShoppingBag className="h-4 w-4" />}
                        Thêm vào giỏ
                      </Button>
                    </div>
                    <button type="button" onClick={() => navigate(`/product/${product.handle}`)} className="mt-3 inline-flex items-center gap-1 self-start font-body text-body-sm font-semibold text-sage hover:text-forest">
                      Xem chi tiết <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
