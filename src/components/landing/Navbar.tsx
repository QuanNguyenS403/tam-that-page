import { useState } from 'react'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'

const links = [
  { label: 'Our Product', href: '#hero' },
  { label: 'Our Story', href: '#story' },
  { label: 'Wellness Guide', href: '#wellness' },
  { label: 'Gift Sets', href: '#comparison' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--background))]/90 backdrop-blur border-b border-[hsl(var(--border))]">
      <nav className="container-tt flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
        <a href="#hero" className="font-serif text-xl md:text-2xl font-semibold tracking-tight" style={{fontFamily:'Cormorant Garamond, serif'}}>
          Tam Thất <span className="text-[hsl(var(--accent))]">Quân Nguyễn</span>
        </a>
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--accent))] transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden md:inline-flex hover:text-[hsl(var(--accent))]"><Search className="w-5 h-5" /></button>
          <button aria-label="Account" className="hidden md:inline-flex hover:text-[hsl(var(--accent))]"><User className="w-5 h-5" /></button>
          <button aria-label="Cart" className="relative hover:text-[hsl(var(--accent))]">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[hsl(var(--accent))] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>
          <button aria-label="Menu" className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
          <ul className="container-tt py-4 flex flex-col gap-3">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-base font-medium">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
