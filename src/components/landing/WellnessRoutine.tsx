import { Check } from 'lucide-react'

const bullets = [
  'No raw herb preparation required',
  'No boiling, slicing, or lengthy process',
  'Consistent fine powder texture in every pack',
  'Portable packaging — at home or while traveling',
  'Clear serving instructions on every package',
  'Long shelf life for worry-free storage',
]

export function WellnessRoutine() {
  return (
    <section id="wellness" aria-label="Wellness routine" className="container-tt py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="aspect-square rounded-2xl overflow-hidden bg-[hsl(var(--secondary))]">
          <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1000&q=80" alt="A calm morning ritual" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow mb-4">Daily Wellness</p>
          <h2 className="mb-6">The simplest healthy habit you will actually keep.</h2>
          <div className="space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
            <p>Most wellness routines fail because they are too complex, too time-consuming, or too expensive to maintain.</p>
            <p>Tam Thất Quân Nguyễn was designed around one principle: a high-quality herbal wellness habit should fit your life as it already is — not the other way around.</p>
            <p className="font-semibold text-[hsl(var(--foreground))]">One serving. Warm water. Two minutes.</p>
            <p>That is it. And because the preparation is effortless, the habit becomes sustainable.</p>
          </div>
          <ul className="space-y-2.5 mb-6">
            {bullets.map(b => (
              <li key={b} className="flex gap-3">
                <Check className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm italic text-[hsl(var(--muted-foreground))]">A traditional herbal ingredient. A modern daily habit.</p>
        </div>
      </div>
    </section>
  )
}
