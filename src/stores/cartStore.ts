import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import {
  CART_CREATE_MUTATION,
  CART_LINES_ADD_MUTATION,
  CART_LINES_REMOVE_MUTATION,
  CART_LINES_UPDATE_MUTATION,
  CART_QUERY,
  cartNotFound,
  storefrontApiRequest,
  withOnlineStoreChannel,
  type ShopifyProduct,
} from '@/lib/shopify'

export interface CartItem {
  lineId: string | null
  product: ShopifyProduct
  variantId: string
  variantTitle: string
  price: { amount: string; currencyCode: string }
  quantity: number
  selectedOptions: Array<{ name: string; value: string }>
}

type CartLine = { id: string; merchandise: { id: string } }
type CartMutationResult = { userErrors: Array<{ message: string }>; cart?: { id: string; checkoutUrl?: string; lines: { edges: Array<{ node: CartLine }> } } }

interface CartStore {
  items: CartItem[]
  cartId: string | null
  checkoutUrl: string | null
  isLoading: boolean
  isSyncing: boolean
  error: string | null
  addItem: (item: Omit<CartItem, 'lineId'>) => Promise<void>
  updateQuantity: (variantId: string, quantity: number) => Promise<void>
  removeItem: (variantId: string) => Promise<void>
  clearCart: () => void
  syncCart: () => Promise<void>
  getCheckoutUrl: () => string | null
}

function findLine(edges: Array<{ node: CartLine }> | undefined, variantId: string) {
  return edges?.find(edge => edge.node.merchandise.id === variantId)?.node.id ?? null
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      cartId: null,
      checkoutUrl: null,
      isLoading: false,
      isSyncing: false,
      error: null,

      addItem: async item => {
        const { items, cartId, clearCart } = get()
        const existing = items.find(current => current.variantId === item.variantId)
        set({ isLoading: true, error: null })
        try {
          if (!cartId) {
            const data = await storefrontApiRequest<{ cartCreate: CartMutationResult }>(CART_CREATE_MUTATION, {
              input: { lines: [{ quantity: item.quantity, merchandiseId: item.variantId }] },
            })
            const result = data.cartCreate
            if (result.userErrors.length || !result.cart?.checkoutUrl) throw new Error(result.userErrors[0]?.message ?? 'Unable to create cart')
            const lineId = findLine(result.cart.lines.edges, item.variantId)
            if (!lineId) throw new Error('Shopify did not return a cart line')
            set({ cartId: result.cart.id, checkoutUrl: withOnlineStoreChannel(result.cart.checkoutUrl), items: [{ ...item, lineId }] })
            return
          }

          if (existing?.lineId) {
            const quantity = existing.quantity + item.quantity
            const data = await storefrontApiRequest<{ cartLinesUpdate: CartMutationResult }>(CART_LINES_UPDATE_MUTATION, {
              cartId,
              lines: [{ id: existing.lineId, quantity }],
            })
            const result = data.cartLinesUpdate
            if (cartNotFound(result.userErrors)) { clearCart(); return }
            if (result.userErrors.length) throw new Error(result.userErrors[0].message)
            set({ items: get().items.map(current => current.variantId === item.variantId ? { ...current, quantity } : current) })
            return
          }

          const data = await storefrontApiRequest<{ cartLinesAdd: CartMutationResult }>(CART_LINES_ADD_MUTATION, {
            cartId,
            lines: [{ quantity: item.quantity, merchandiseId: item.variantId }],
          })
          const result = data.cartLinesAdd
          if (cartNotFound(result.userErrors)) { clearCart(); return }
          if (result.userErrors.length) throw new Error(result.userErrors[0].message)
          const lineId = findLine(result.cart?.lines.edges, item.variantId)
          set({ items: [...get().items, { ...item, lineId }] })
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Unable to update cart' })
        } finally {
          set({ isLoading: false })
        }
      },

      updateQuantity: async (variantId, quantity) => {
        if (quantity <= 0) { await get().removeItem(variantId); return }
        const { cartId, items, clearCart } = get()
        const item = items.find(current => current.variantId === variantId)
        if (!cartId || !item?.lineId) return
        set({ isLoading: true, error: null })
        try {
          const data = await storefrontApiRequest<{ cartLinesUpdate: CartMutationResult }>(CART_LINES_UPDATE_MUTATION, {
            cartId,
            lines: [{ id: item.lineId, quantity }],
          })
          const result = data.cartLinesUpdate
          if (cartNotFound(result.userErrors)) { clearCart(); return }
          if (result.userErrors.length) throw new Error(result.userErrors[0].message)
          set({ items: get().items.map(current => current.variantId === variantId ? { ...current, quantity } : current) })
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Unable to update cart' })
        } finally {
          set({ isLoading: false })
        }
      },

      removeItem: async variantId => {
        const { cartId, items, clearCart } = get()
        const item = items.find(current => current.variantId === variantId)
        if (!cartId || !item?.lineId) return
        set({ isLoading: true, error: null })
        try {
          const data = await storefrontApiRequest<{ cartLinesRemove: CartMutationResult }>(CART_LINES_REMOVE_MUTATION, {
            cartId,
            lineIds: [item.lineId],
          })
          const result = data.cartLinesRemove
          if (cartNotFound(result.userErrors)) { clearCart(); return }
          if (result.userErrors.length) throw new Error(result.userErrors[0].message)
          const remaining = get().items.filter(current => current.variantId !== variantId)
          remaining.length ? set({ items: remaining }) : clearCart()
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Unable to remove item' })
        } finally {
          set({ isLoading: false })
        }
      },

      clearCart: () => set({ items: [], cartId: null, checkoutUrl: null, error: null }),
      getCheckoutUrl: () => get().checkoutUrl,

      syncCart: async () => {
        const { cartId, isSyncing, clearCart } = get()
        if (!cartId || isSyncing) return
        set({ isSyncing: true })
        try {
          const data = await storefrontApiRequest<{ cart: { totalQuantity: number } | null }>(CART_QUERY, { id: cartId })
          if (!data.cart || data.cart.totalQuantity === 0) clearCart()
        } catch {
          // Preserve the local cart when Shopify is temporarily unavailable.
        } finally {
          set({ isSyncing: false })
        }
      },
    }),
    {
      name: 'shopify-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ items: state.items, cartId: state.cartId, checkoutUrl: state.checkoutUrl }),
    },
  ),
)
