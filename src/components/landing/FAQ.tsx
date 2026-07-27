import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'What exactly is Panax notoginseng (Tam Thất)?', a: 'Panax notoginseng, known in Vietnamese as Tam Thất, is a traditional herbal root with a long history of use in Vietnamese and East Asian herbal wellness traditions. Tam Thất Quân Nguyễn uses this ingredient in a finely milled powder form for convenient daily use. Our product is a traditional herbal wellness product and is not a medicine.' },
  { q: 'How do I prepare a serving?', a: 'Add one serving of Tam Thất Quân Nguyễn powder to a cup of warm water. Stir gently until dissolved. Drink as part of your morning or daily routine. Full preparation instructions are included inside every pack.' },
  { q: 'How is Tam Thất Quân Nguyễn different from other Tam Thất products online?', a: 'Most Tam Thất powders sold on general marketplaces compete primarily on price. This means inconsistent sourcing, unclear origins, and generic presentation. Tam Thất Quân Nguyễn is positioned differently — we prioritize careful ingredient selection, a fine powder texture, moisture-resistant packaging, and an elegant gift-ready presentation that generic sellers do not offer.' },
  { q: 'Is this product safe for daily use?', a: 'Tam Thất Quân Nguyễn is a traditional herbal wellness product intended for daily use by healthy adults as part of a balanced lifestyle. If you are pregnant, nursing, taking medications, or managing a health condition, please consult your healthcare provider before use.' },
  { q: 'Can I give this as a gift?', a: 'Absolutely — gifting is one of the primary purposes this product was designed for. The packaging is premium, presentation-ready, and suitable for Lunar New Year, Mid-Autumn Festival, birthdays, retirement celebrations, business appreciation gifts, and more. An optional gift card and ribbon upgrade is available at checkout.' },
  { q: 'Which pack should I choose?', a: 'Standard Pack ($29.99): Ideal for first-time buyers or a single meaningful gift. Value Pack ($79.99 — 3 packs): Perfect for regular personal use or multiple gift recipients. Family Pack ($124.99 — 5 packs): Best value for family wellness routines or corporate gifting.' },
  { q: 'How long does one pack last?', a: 'This depends on your daily serving frequency. Exact serving count per pack is printed clearly on the packaging. Most customers using one serving per day find a single pack lasts approximately 30 days.' },
  { q: 'What is your return and satisfaction policy?', a: 'If your order arrives damaged or incorrect, contact our customer service team within 7 days of delivery and we will make it right. Unopened products may be returned within 30 days of purchase. Opened consumable products are generally not eligible for return unless there is a product quality issue. Full details are available on our Refund Policy page.' },
  { q: 'How long does shipping take?', a: 'We typically process and dispatch orders within 1–2 business days. Estimated delivery is 3–5 business days after dispatch. Orders over $75 qualify for free shipping. You will receive a tracking number by email once your order is dispatched.' },
  { q: 'Where can I follow Tam Thất Quân Nguyễn for updates and wellness content?', a: 'Follow us on Facebook, TikTok, YouTube, and Instagram for wellness guidance, product updates, seasonal gift inspiration, and exclusive subscriber offers. Links are in the footer of every page.' },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section aria-label="FAQ" className="container-tt py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <p className="text-[hsl(var(--muted-foreground))]">Everything you need to know before your first order.</p>
      </div>
      <div className="max-w-3xl mx-auto divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))]">
        {faqs.map((f, i) => (
          <div key={i}>
            <button onClick={() => setOpen(open===i ? null : i)} aria-expanded={open===i}
              className="w-full flex items-center justify-between gap-4 py-5 text-left group">
              <span className="font-semibold text-base md:text-lg group-hover:text-[hsl(var(--accent))] transition-colors">{f.q}</span>
              <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${open===i ? 'rotate-180' : ''}`} />
            </button>
            {open===i && (
              <p className="pb-5 text-[hsl(var(--muted-foreground))] leading-relaxed">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
