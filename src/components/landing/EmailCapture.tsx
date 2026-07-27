import { useState, FormEvent } from 'react'

export function EmailCapture() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const onSubmit = (e: FormEvent) => { e.preventDefault(); if (email) setSent(true) }
  return (
    <section aria-label="Newsletter" className="bg-[hsl(var(--dark))] text-white">
      <div className="container-tt py-16 md:py-24 text-center max-w-2xl mx-auto">
        <h2 className="mb-4 text-white">Stay connected. Live well.</h2>
        <p className="text-white/75 mb-8">Join our community for wellness tips, new product updates, seasonal gift guides, and exclusive subscriber-only offers.</p>
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <label htmlFor="nl-email" className="sr-only">Email address</label>
          <input id="nl-email" type="email" required value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 rounded-full text-[hsl(var(--foreground))] outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]" />
          <button type="submit" className="btn-accent">{sent ? 'Subscribed ✓' : "Subscribe — It's Free"}</button>
        </form>
        <p className="mt-4 text-xs text-white/60">No spam. Unsubscribe anytime. We respect your privacy.</p>
      </div>
    </section>
  )
}
