export function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="container-tt py-4 text-xs md:text-sm text-[hsl(var(--muted-foreground))]">
      <ol className="flex items-center gap-2 flex-wrap">
        <li><a href="#" className="hover:text-[hsl(var(--accent))]">Home</a></li>
        <li aria-hidden>→</li>
        <li><a href="#" className="hover:text-[hsl(var(--accent))]">Herbal Supplements</a></li>
        <li aria-hidden>→</li>
        <li className="text-[hsl(var(--foreground))] font-medium">Tam Thất Premium Powder</li>
      </ol>
    </nav>
  )
}
