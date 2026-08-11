import { useEffect } from 'react'
import { useCartStore } from '@/stores/cartStore'

export function useCartSync() {
  const syncCart = useCartStore(state => state.syncCart)

  useEffect(() => {
    void syncCart()
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') void syncCart()
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [syncCart])
}
