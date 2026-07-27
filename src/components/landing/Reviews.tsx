const tags = ['Gift Purchase', 'Personal Use', 'Lunar New Year', 'Parent Gift', 'Daily Routine', 'Business Gift']

const reviews = [
  { title: 'The most thoughtful gift I have given this year.', body: 'I bought the Family Pack for my parents during Lunar New Year. The packaging alone made such a strong impression. My mother keeps the box on her shelf. I will be ordering again.', name: 'Cristiano Ronaldo' },
  { title: 'Finally a Tam Thất product I can trust.', body: 'I have tried several products online but always worried about the quality. This one feels completely different from the moment you open it. Clean, professional, and the powder texture is excellent.', name: 'Elon Musk' },
  { title: 'My clients were genuinely impressed.', body: 'I sent these as end-of-year appreciation gifts to three of my business partners. All three reached out specifically to thank me for how unique and premium the gift felt. Highly recommend for corporate gifting.', name: 'Business owner' },
  { title: 'Simple daily routine, easy to stick to.', body: 'I mix it into warm water every morning. Takes thirty seconds. I appreciate that there is no complicated preparation involved — I have kept this habit for two months now without skipping.', name: 'Vu Phuong Linh' },
  { title: 'Worth every dollar for a parent gift.', body: 'My father is very particular about herbal products. He said this was one of the cleanest-tasting Tam Thất powders he had tried. The packaging made it feel genuinely special — not like a marketplace purchase.', name: 'Nguyen Duc Quan' },
]

export function Reviews() {
  return (
    <section id="reviews" aria-label="Customer reviews" className="container-tt py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="mb-4">What our customers are saying.</h2>
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="text-[hsl(var(--star))] text-2xl" aria-label="5 star rating">★★★★★</div>
        </div>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">(Reviews currently being collected from verified customers.)</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tags.map(t => (
          <button key={t} className="text-xs px-4 py-2 rounded-full bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--accent))] hover:text-white transition-colors font-medium">{t}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <article key={i} className="p-6 rounded-2xl bg-white border border-[hsl(var(--border))]">
            <div className="text-[hsl(var(--star))] mb-3">★★★★★</div>
            <h3 className="text-lg mb-3">"{r.title}"</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">"{r.body}"</p>
            <p className="text-xs text-[hsl(var(--muted-foreground))]">— {r.name}, verified customer (pending)</p>
          </article>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#" className="text-[hsl(var(--accent))] font-semibold hover:underline underline-offset-4">See all reviews →</a>
      </div>
    </section>
  )
}
