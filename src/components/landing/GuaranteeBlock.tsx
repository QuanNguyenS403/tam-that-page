import { Lock, Package, RotateCcw, Star } from 'lucide-react'

export function GuaranteeBlock() {
  return (
    <section aria-label="Guarantee" className="container-tt py-10 md:py-14">
      <div className="rounded-2xl bg-[hsl(var(--secondary))] p-8 md:p-12">
        <p className="eyebrow mb-3">Our Promise to You</p>
        <h2 className="mb-5 max-w-3xl">Premium quality — or we make it right.</h2>
        <div className="max-w-3xl space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed">
          <p>We built Tam Thất Quân Nguyễn around one commitment: every order should arrive exactly as described — premium in quality, elegant in presentation, and worthy of the trust you placed in us.</p>
          <p>If your order arrives damaged or does not meet your expectations due to a quality issue, contact our team within 7 days of delivery. We will resolve it — no complicated process, no long waiting.</p>
          <p>Unopened products can be returned within 30 days, no questions asked. A premium product should come with a premium experience from the first click to the last serving.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[hsl(var(--accent))]" /> Secure Checkout</span>
          <span className="flex items-center gap-2"><Package className="w-4 h-4 text-[hsl(var(--accent))]" /> Tracked Delivery</span>
          <span className="flex items-center gap-2"><RotateCcw className="w-4 h-4 text-[hsl(var(--accent))]" /> 30-Day Return Policy</span>
          <span className="flex items-center gap-2"><Star className="w-4 h-4 text-[hsl(var(--accent))]" /> Premium Quality Standard</span>
        </div>
      </div>
    </section>
  )
}
