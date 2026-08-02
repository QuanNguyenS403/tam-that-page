const items = [
  { icon: '🌿', title: 'Premium Ingredients', desc: 'Carefully selected Panax notoginseng root' },
  { icon: '🎁', title: 'Gift-Ready Packaging', desc: 'Elegant presentation on every order' },
  { icon: '🔒', title: 'Secure Checkout', desc: 'SSL-encrypted payment processing' },
  { icon: '🚚', title: 'Free Shipping $75+', desc: 'Tracked delivery on every order' },
  { icon: '↩', title: '30-Day Returns', desc: 'Hassle-free return policy' },
]

export function TrustStrip() {
  return (
    <section aria-label="Trust signals" className="border-y border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      <div className="container-tt py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {items.map(i => (
            <div key={i.title} className="text-center">
              <div className="text-3xl mb-2" aria-hidden>{i.icon}</div>
              <div className="font-semibold text-sm mb-1">{i.title}</div>
              <div className="text-xs text-[hsl(var(--muted-foreground))]">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
