import img from '@/assets/9.png.asset.json'

export function AuthenticityCallout() {
  return (
    <section id="story" aria-label="Authenticity" className="container-tt py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[hsl(var(--secondary))] order-2 lg:order-1">
          <img src={img.url} alt="Careful herbal preparation" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-4">Why It Matters</p>
          <h2 className="mb-6">In a market full of imitations, authenticity is the real luxury.</h2>
          <div className="space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed">
            <p>Walk into any marketplace today and you will find dozens of Tam Thất powders — all claiming to be premium, all competing on price alone.</p>
            <p>What most do not offer is transparency about their sourcing, consistency in their quality, or packaging that reflects the value of what is inside.</p>
            <p>Tam Thất Quân Nguyễn was built precisely for this gap. Every element — from the way we select our roots, to the way we seal and present each pack — is designed to give you complete confidence in what you are choosing.</p>
            <p>Because when you buy this for yourself, or give it to someone you love, it should be something you are genuinely proud of.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
