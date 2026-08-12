import { useEffect, useState } from 'react'
import { ExternalLink, Loader2, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCartStore } from '@/stores/cartStore'

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: currencyCode }).format(Number(amount))
}

export function CartDrawer() {
  const [open, setOpen] = useState(false)
  const { items, isLoading, isSyncing, error, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore()
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + Number(item.price.amount) * item.quantity, 0)
  const currencyCode = items[0]?.price.currencyCode ?? 'VND'

  useEffect(() => {
    if (open) void syncCart()
  }, [open, syncCart])

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl()
    if (!checkoutUrl) return
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Mở giỏ hàng" className="relative border-forest text-forest hover:bg-pale-fern">
          <ShoppingBag className="h-4 w-4" />
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-badge bg-gold px-1 text-[11px] font-bold text-dark">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full w-full flex-col bg-canvas sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-display text-display-sm text-forest">Giỏ hàng</SheetTitle>
          <SheetDescription>{totalItems ? `${totalItems} sản phẩm trong giỏ` : 'Giỏ hàng của bạn đang trống'}</SheetDescription>
        </SheetHeader>
        <div className="flex min-h-0 flex-1 flex-col pt-6">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag className="h-10 w-10 text-sage" />
              <p className="font-body text-body-base text-stone-600">Chưa có sản phẩm nào.</p>
            </div>
          ) : (
            <>
              <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
                {items.map(item => {
                  const image = item.product.images.edges[0]?.node
                  return (
                    <div key={item.variantId} className="flex gap-3 border-b border-stone-300 pb-4">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-btn bg-parchment">
                        {image && <img src={image.url} alt={image.altText ?? item.product.title} className="h-full w-full object-cover" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-body font-semibold text-stone-900">{item.product.title}</p>
                        <p className="text-body-sm text-stone-600">{item.variantTitle}</p>
                        <p className="font-mono text-body-sm font-semibold text-forest">{formatPrice(item.price.amount, item.price.currencyCode)}</p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end justify-between">
                        <Button variant="ghost" size="icon" className="h-7 w-7" aria-label={`Xóa ${item.product.title}`} onClick={() => void removeItem(item.variantId)}>
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                        <div className="flex items-center gap-1">
                          <Button variant="outline" size="icon" className="h-7 w-7" aria-label="Giảm số lượng" onClick={() => void updateQuantity(item.variantId, item.quantity - 1)}>
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <Button variant="outline" size="icon" className="h-7 w-7" aria-label="Tăng số lượng" onClick={() => void updateQuantity(item.variantId, item.quantity + 1)}>
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="space-y-4 border-t border-stone-300 bg-canvas pt-5">
                {error && <p role="alert" className="text-body-sm text-alert-amber">{error}</p>}
                <div className="flex items-center justify-between font-body">
                  <span className="font-semibold text-stone-900">Tạm tính</span>
                  <span className="font-mono text-body-lg font-bold text-forest">{formatPrice(String(totalPrice), currencyCode)}</span>
                </div>
                <Button onClick={handleCheckout} disabled={isLoading || isSyncing} className="w-full bg-forest text-amber hover:bg-jade">
                  {isLoading || isSyncing ? <Loader2 className="h-4 w-4 animate-spin" /> : <ExternalLink className="h-4 w-4" />}
                  Thanh toán an toàn qua Shopify
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
