export function GiftCallout() {
  return (
    <section aria-label="Gift positioning" className="bg-[hsl(var(--dark))] text-white">
      <div className="container-tt py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">The Meaningful Gift</p>
            <h2 className="mb-6 text-white">Give something that says more than a gift basket ever could.</h2>
            <div className="space-y-4 text-white/75 leading-relaxed">
              <p>Wine gets consumed and forgotten. Sweets are appreciated for a moment. Decorative baskets sit in a corner.</p>
              <p>Tam Thất Quân Nguyễn is different. It is a gift that communicates something personal — that you chose health over convention, quality over convenience, and care over obligation.</p>
              <p>Whether for a parent's birthday, Lunar New Year, a retirement celebration, or a gesture of appreciation to a valued client — this is the gift that reflects who you are as a giver.</p>
              <p>Because the best gifts are not the most expensive ones. They are the most thoughtful ones.</p>
            </div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1000&q=80" alt="Elegant gift packaging" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
