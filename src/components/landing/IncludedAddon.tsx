import { useState } from 'react'
import { Check } from 'lucide-react'

const tabs = ['What\'s Included', 'Serving Guide'] as const

export function IncludedAddon() {
  const [tab, setTab] = useState<typeof tabs[number]>(tabs[0])
  return (
    <section aria-label="What's included" className="container-tt py-16 md:py-24">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 rounded-2xl bg-white border border-[hsl(var(--border))] p-6 md:p-8">
          <div role="tablist" className="flex gap-2 border-b border-[hsl(var(--border))] mb-6">
            {tabs.map(t => (
              <button key={t} role="tab" aria-selected={tab===t} onClick={() => setTab(t)}
                className={`px-4 py-3 text-sm font-semibold border-b-2 -mb-px transition ${tab===t ? 'border-[hsl(var(--accent))] text-[hsl(var(--accent))]' : 'border-transparent text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'}`}>
                {t}
              </button>
            ))}
          </div>
          {tab === 'What\'s Included' ? (
            <div>
              <h3 className="mb-4">Standard Pack — $29.99</h3>
              <ul className="space-y-3">
                {[
                  '1 × Tam Thất Quân Nguyễn Premium Panax Notoginseng Powder',
                  'Premium moisture-resistant sealed packaging',
                  'Minimalist gift-ready presentation box',
                  'Preparation guide card',
                  'Certificate of quality (included with each order)',
                ].map(i => (
                  <li key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                    <span className="text-[hsl(var(--muted-foreground))]">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h3 className="mb-4">How to prepare your daily serving:</h3>
              <ol className="space-y-3">
                {[
                  'Add one serving of Tam Thất powder to a cup',
                  'Pour warm water (not boiling) and stir gently',
                  'Drink in the morning or as part of your daily routine',
                  'Store in a cool, dry place after opening',
                ].map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-7 h-7 rounded-full bg-[hsl(var(--accent))] text-white text-sm font-semibold flex items-center justify-center shrink-0">{i+1}</span>
                    <span className="text-[hsl(var(--muted-foreground))] pt-0.5">{s}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm italic text-[hsl(var(--muted-foreground))]">Simple. Consistent. Ready in under two minutes.</p>
            </div>
          )}
        </div>

        <aside className="rounded-2xl bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/30 p-6 md:p-8">
          <p className="eyebrow mb-2">Perfect Pairing</p>
          <h3 className="mb-3 text-lg">Gift Presentation Upgrade</h3>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">Premium Ribbon & Gift Card. Elevate your order into a complete gifting experience. Add a handwritten-style gift message card and premium ribbon wrap at checkout.</p>
          <button className="btn-accent w-full mb-3">Add to Order — $4.99</button>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">Popular with customers purchasing for Lunar New Year and business gifts.</p>
        </aside>
      </div>
    </section>
  )
}
