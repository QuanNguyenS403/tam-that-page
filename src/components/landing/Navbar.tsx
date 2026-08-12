import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { CartDrawer } from './CartDrawer'

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
      <nav className="mx-auto flex h-16 max-w-full items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8 xl:px-16" aria-label="Điều hướng chính">
        <a href="/" className="font-display text-display-sm font-bold text-forest">QuanNguyenS</a>
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="font-body text-body-sm font-medium uppercase tracking-wide text-stone-900 transition-colors duration-200 hover:text-forest">{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#san-pham" className="hidden rounded-btn bg-forest px-5 py-2.5 font-body text-label-lg font-semibold uppercase tracking-widest text-amber shadow-sm transition-colors duration-200 hover:bg-jade hover:shadow-gold sm:inline-block">Mua sắm</a>
          <CartDrawer />
          <button aria-label={open ? 'Đóng menu' : 'Mở menu'} className="text-stone-900 lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-stone-300 bg-canvas/98 backdrop-blur-glass lg:hidden">
          <ul className="flex flex-col gap-3 px-4 py-4">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-2 font-body text-body-base font-medium uppercase tracking-wide text-stone-900 hover:text-forest">{link.label}</a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#san-pham" onClick={() => setOpen(false)} className="block rounded-btn bg-forest px-5 py-3 text-center font-body text-label-lg font-semibold uppercase tracking-widest text-amber hover:bg-jade">Mua sắm</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
