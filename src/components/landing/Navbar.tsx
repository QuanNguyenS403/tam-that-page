import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#cong-dung', label: 'Công Dụng' },
  { href: '#cach-dung', label: 'Cách Dùng' },
  { href: '#danh-gia', label: 'Đánh Giá' },
  { href: '#bang-so-sanh', label: 'Bảng So Sánh' },
  { href: '#faq', label: 'Hỏi & Đáp' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-canvas/95 backdrop-blur-glass shadow-sm border-b border-stone-300' : 'bg-transparent'}`}>
      <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 flex items-center justify-between h-16 md:h-20" aria-label="Điều hướng chính">
        <a href="/" className="font-display text-display-sm text-forest font-bold">
          Tam Thất Quân Nguyễn
        </a>
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-body-sm font-medium text-stone-900 hover:text-forest transition-colors duration-200 uppercase tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="#san-pham"
            className="hidden sm:inline-block bg-forest text-amber font-body font-semibold text-label-lg uppercase tracking-widest px-5 py-2.5 rounded-btn hover:bg-jade transition-colors duration-200 shadow-sm hover:shadow-gold"
          >
            Đặt Mua Ngay
          </a>
          <button aria-label="Mở menu" className="lg:hidden text-stone-900" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-stone-300 bg-canvas/98 backdrop-blur-glass">
          <ul className="px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-body text-body-base font-medium text-stone-900 hover:text-forest uppercase tracking-wide"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#san-pham"
                onClick={() => setOpen(false)}
                className="block text-center bg-forest text-amber font-body font-semibold text-label-lg uppercase tracking-widest px-5 py-3 rounded-btn hover:bg-jade"
              >
                Đặt Mua Ngay
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
