import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react'

const cols = [
  { title: 'Shop', links: ['Standard Pack', 'Value Pack', 'Family Pack', 'Gift Sets', 'New Arrivals', 'Best Sellers'] },
  { title: 'Learn', links: ['What is Panax Notoginseng?', 'Daily Wellness Guide', 'How to Prepare Tam Thất Powder', 'Gifting Guide', 'Our Story', 'Blog / Wellness Articles'] },
  { title: 'Company', links: ['About Us', 'Our Quality Standards', 'Brand Values', 'Press Enquiries', 'Wholesale & Corporate Gifting', 'Careers'] },
  { title: 'Support', links: ['Customer Service', 'Shipping Information', 'Track Your Order', 'FAQs', 'Contact Us', 'Returns & Exchanges'] },
]

const legal = ['Privacy Policy', 'Refund Policy', 'Return Policy', 'Terms & Conditions', 'Shipping Policy', 'Payment Policy', 'Cookie Policy']

export function Footer() {
  return (
    <footer id="footer" className="bg-[hsl(var(--dark))] text-white/80">
      <div className="container-tt py-16">
        <div className="mb-12 pb-12 border-b border-white/10">
          <h3 className="text-white text-2xl md:text-3xl mb-3" style={{fontFamily:'Cormorant Garamond, serif'}}>Tam Thất Quân Nguyễn</h3>
          <p className="text-white/60 max-w-xl">Premium Herbal Wellness. Crafted with Care. Given with Meaning.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {cols.map(c => (
            <div key={c.title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map(l => (
                  <li key={l}><a href="#" className="text-sm hover:text-[hsl(var(--accent))] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 py-8 border-t border-white/10">
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-[hsl(var(--accent))]" /> ducquan16102006@gmail.com</div>
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-[hsl(var(--accent))]" /> 0981753082</div>
            <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5" /> Amber Riverside, 622 Minh Khai, Vinh Tuy, Ha Noi, Viet Nam</div>
            <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-[hsl(var(--accent))]" /> Monday – Saturday, 7h – 22h</div>
          </div>
          <div>
            <p className="text-sm text-white/60 mb-3">Get wellness tips and exclusive offers</p>
            <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
              <input type="email" required placeholder="Email" aria-label="Email"
                className="flex-1 px-4 py-2.5 rounded-full text-[hsl(var(--foreground))] text-sm outline-none" />
              <button className="btn-accent px-6 py-2.5 text-sm">Subscribe</button>
            </form>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--accent))] transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--accent))] transition text-sm font-bold">TT</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
            {legal.map(l => <li key={l}><a href="#" className="hover:text-[hsl(var(--accent))]">{l}</a></li>)}
          </ul>
          <p className="text-xs text-white/50">© 2026 Tam Thất Quân Nguyễn. All Rights Reserved.</p>
          <p className="text-xs text-white/40 max-w-3xl leading-relaxed">
            Tam Thất Quân Nguyễn products are traditional herbal wellness products and are not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before beginning any new supplement routine.
          </p>
        </div>
      </div>
    </footer>
  )
}
