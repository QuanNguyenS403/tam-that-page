const CRUMBS = [
  { href: '/', label: 'Trang Chủ' },
  { href: '/san-pham', label: 'Sản Phẩm' },
  { href: '#', label: 'TAM THẤT QUÂN NGUYỄN' },
]

export function Breadcrumb() {
  return (
    <div className="bg-cream border-b border-stone-300 py-2.5 px-4 md:px-8">
      <nav aria-label="Breadcrumb" className="max-w-[1400px] mx-auto">
        <ol className="flex items-center flex-wrap">
          {CRUMBS.map((crumb, idx) => {
            const isLast = idx === CRUMBS.length - 1
            return (
              <li key={crumb.label} className="inline-flex items-center">
                {idx > 0 && <span className="text-stone-300 mx-2" aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="font-body text-label-sm uppercase tracking-wide text-forest font-semibold" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <a
                    href={crumb.href}
                    className="font-body text-label-sm text-stone-600 hover:text-forest transition-colors duration-150 uppercase tracking-wide"
                  >
                    {crumb.label}
                  </a>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
