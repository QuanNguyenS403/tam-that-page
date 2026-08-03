import { useState } from 'react'
import { Heart, Share2, Truck } from 'lucide-react'
import img1 from '@/assets/1.png.asset.json'
import img5 from '@/assets/5.png.asset.json'
import img8 from '@/assets/8.png.asset.json'
import img3 from '@/assets/3.png.asset.json'

const variants = [
  { id: 'std', label: 'Standard Pack', desc: '1 Pack', price: '$29.99', note: '' },
  { id: 'val', label: 'Value Pack', desc: '3 Packs', price: '$79.99', note: 'Save 10%' },
  { id: 'fam', label: 'Family Pack', desc: '5 Packs', price: '$124.99', note: 'Best Value' },
]

const badges = ['Traditional Herbal', 'Fine Powder', 'Gift-Ready', 'Daily Wellness']

export function ProductHero() {
  const [selected, setSelected] = useState('std')
  const [imgIdx, setImgIdx] = useState(0)
  const images = [img1.url, img5.url, img8.url, img3.url]
  const activeVariant = variants.find(v => v.id === selected) || variants[0]

  return (
    <section id="hero" aria-label="Product hero" className="container-tt py-6 md:py-10">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div className="fade-in" style={{ animationDelay: '0ms' }}>
          <div className="aspect-square rounded-2xl bg-[hsl(var(--secondary))] overflow-hidden">
            <img src={images[imgIdx]} alt="Tam Thất Quân Nguyễn Premium Panax Notoginseng Powder" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {images.map((src, i) => (
              <button key={i} onClick={() => setImgIdx(i)} aria-label={`View image ${i+1}`}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition ${imgIdx===i ? 'border-[hsl(var(--accent))]' : 'border-transparent hover:border-[hsl(var(--border))]'}`}>
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="fade-in" style={{ animationDelay: '150ms' }}>
          <h1 className="mb-3">
            Tam Thất Quân Nguyễn
            <span className="block text-xl md:text-2xl font-normal text-[hsl(var(--muted-foreground))] mt-2 font-sans">
              Premium Panax Notoginseng Powder
            </span>
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-[hsl(var(--star))]" aria-label="5 star rating">
              {'★★★★★'.split('').map((s,i) => <span key={i}>{s}</span>)}
            </div>
            <span className="text-sm text-[hsl(var(--muted-foreground))]">Reviews loading soon</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {badges.map(b => (
              <span key={b} className="text-xs px-3 py-1.5 rounded-full bg-[hsl(var(--secondary))] font-medium">{b}</span>
            ))}
          </div>

          <div className="mb-6 pb-6 border-b border-[hsl(var(--border))]">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl md:text-4xl font-semibold">{activeVariant.price}</span>
              <span className="text-sm text-[hsl(var(--muted-foreground))]">{activeVariant.label}</span>
            </div>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mt-2">
              Or from <span className="text-[hsl(var(--foreground))] font-semibold">$24.99/pack</span> with the Family Pack — <span className="text-[hsl(var(--accent))] font-semibold">Best Value</span>
            </p>
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">Flexible payment options available at checkout.</p>
          </div>

          <fieldset className="mb-6">
            <legend className="text-sm font-semibold mb-3">Choose your pack</legend>
            <div className="space-y-2">
              {variants.map(v => (
                <label key={v.id} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition ${selected===v.id ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))]/5' : 'border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))]/40'}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="variant" value={v.id} checked={selected===v.id} onChange={() => setSelected(v.id)} className="accent-[hsl(var(--accent))]" />
                    <div>
                      <div className="font-semibold text-sm">{v.label} — {v.desc}</div>
                      {v.note && <div className="text-xs text-[hsl(var(--accent))] font-semibold">{v.note}</div>}
                    </div>
                  </div>
                  <div className="font-semibold">{v.price}</div>
                </label>
              ))}
            </div>
          </fieldset>

          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-5 flex items-center gap-2">
            <Truck className="w-4 h-4" /> Free shipping on orders over $75 · Estimated delivery 3–5 business days
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="btn-primary flex-1">Shop Now</button>
            <button className="btn-outline sm:w-auto" aria-label="Add to wishlist"><Heart className="w-4 h-4" /> Wishlist</button>
            <button className="btn-outline sm:w-auto" aria-label="Share"><Share2 className="w-4 h-4" /> Share</button>
          </div>
        </div>
      </div>
    </section>
  )
}
