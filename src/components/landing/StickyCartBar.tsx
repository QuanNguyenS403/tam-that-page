import { useEffect, useState } from 'react'

export function StickyCartBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      role="complementary"
      aria-label="Thanh đặt hàng nhanh"
      className={`fixed bottom-0 inset-x-0 z-50 bg-forest/95 backdrop-blur-glass border-t border-jade shadow-glass transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="font-display text-amber text-display-sm font-bold leading-none">
            Tam Thất Bắc Hà Giang
          </p>
          <p className="font-body text-sage text-label-lg uppercase tracking-wide mt-0.5">
            Nguyên chất · Có truy xuất nguồn gốc
          </p>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <span className="font-mono text-amber text-body-xl font-bold">299.000 ₫</span>
          <a
            href="#san-pham"
            className="inline-block bg-gold hover:bg-amber text-dark font-body font-bold text-label-lg uppercase tracking-widest px-6 py-3 rounded-btn transition-colors duration-150 shadow-gold"
            aria-label="Đặt mua ngay"
          >
            Đặt Mua Ngay →
          </a>
        </div>
      </div>
    </div>
  )
}
