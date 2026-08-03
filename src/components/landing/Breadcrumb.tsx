export function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="container-tt py-4 text-xs md:text-sm text-[hsl(var(--muted-foreground))]">
      <ol className="flex items-center gap-2 flex-wrap">
        <li><a href="#hero" className="hover:text-[hsl(var(--accent))]">Home</a></li>
        <li><span aria-hidden="true">→</span></li>
        <li><a href="#hero" className="hover:text-[hsl(var(--accent))]">Herbal Supplements</a></li>
        <li><span aria-hidden="true">→</span></li>
        <li className="text-[hsl(var(--foreground))] font-medium">Tam Thất Premium Powder</li>
      </ol>
    </nav>
  )
}
