export function AnnouncementBar() {
  return (
    <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-xs md:text-sm">
      <div className="container-tt py-2.5 flex items-center justify-center text-center gap-2 flex-wrap">
        <span>Free Shipping on Orders Over $75</span>
        <span className="opacity-40">·</span>
        <span>Save up to 17% with Family Pack</span>
        <a href="#hero" className="underline underline-offset-4 hover:text-[hsl(var(--accent))] transition-colors font-semibold">Shop Now →</a>
      </div>
    </div>
  )
}
