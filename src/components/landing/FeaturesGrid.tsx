const features = [
  { icon: '🌿', title: 'Carefully Selected Raw Material', desc: 'Every batch begins with hand-selected Panax notoginseng roots. We source only what meets our quality standard — no compromise, no shortcuts.' },
  { icon: '✨', title: 'Finely Milled Powder', desc: 'Our premium grinding process produces a fine, smooth powder that dissolves easily and prepares in minutes — no boiling, no slicing, no preparation stress.' },
  { icon: '🎁', title: 'Elegant Gift-Ready Packaging', desc: 'Designed with gifting in mind. The moment someone receives Tam Thất Quân Nguyễn, the presentation alone communicates thoughtfulness, respect, and care.' },
  { icon: '📅', title: 'Built for Daily Convenience', desc: 'One simple serving fits naturally into any morning routine. Warm water. Stir. Done. Premium wellness should never feel complicated.' },
]

export function FeaturesGrid() {
  return (
    <section aria-label="Features" className="container-tt py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="mb-4">Crafted with intention. Designed for your daily life.</h2>
        <p className="text-[hsl(var(--muted-foreground))]">Four qualities that make Tam Thất Quân Nguyễn the premium choice — for yourself and for the people you care about most.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(f => (
          <article key={f.title} className="p-6 rounded-2xl bg-white border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4" aria-hidden>{f.icon}</div>
            <h3 className="mb-3 text-lg">{f.title}</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{f.desc}</p>
          </article>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="#comparison" className="text-[hsl(var(--accent))] font-semibold hover:underline underline-offset-4">Explore our full product collection →</a>
      </div>
    </section>
  )
}
