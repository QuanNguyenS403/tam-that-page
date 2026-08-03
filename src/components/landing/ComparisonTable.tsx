import { Check } from 'lucide-react'

const rows = [
  ['Price', '$29.99', '$79.99', '$124.99'],
  ['Quantity', '1 Pack', '3 Packs', '5 Packs'],
  ['Savings', '—', 'Save 10%', 'Best Value'],
  ['Gift-Ready Packaging', '✓', '✓', '✓'],
  ['Free Shipping', 'On orders $75+', '✓ Included', '✓ Included'],
  ['Best For', 'First-time buyer / Single gift', 'Regular personal use / Multiple gifts', 'Family wellness / Corporate gifting'],
  ['Gift Card Option', 'Add-on available', 'Add-on available', 'Add-on available'],
]

export function ComparisonTable() {
  return (
    <section id="comparison" aria-label="Pack comparison" className="bg-[hsl(var(--secondary))]">
      <div className="container-tt py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Choose the pack that fits your life.</h2>
          <p className="text-[hsl(var(--muted-foreground))]">Whether you are starting your wellness routine or looking for the best gifting option, there is a Tam Thất Quân Nguyễn pack designed for you.</p>
        </div>

        <div className="rounded-2xl bg-white border border-[hsl(var(--border))] overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-[hsl(var(--border))]">
                <th className="text-left p-4 md:p-6 font-semibold"></th>
                <th className="p-4 md:p-6 font-semibold">Standard Pack</th>
                <th className="p-4 md:p-6 font-semibold bg-[hsl(var(--accent))]/5">Value Pack</th>
                <th className="p-4 md:p-6 font-semibold bg-[hsl(var(--accent))]/10">
                  Family Pack
                  <div className="text-xs text-[hsl(var(--accent))] mt-1">Best Value</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, ...cells]) => (
                <tr key={label} className="border-b border-[hsl(var(--border))] last:border-0">
                  <td className="p-4 md:p-6 font-semibold text-left">{label}</td>
                  {cells.map((c, j) => (
                    <td key={`${label}-${j}`} className={`p-4 md:p-6 text-center text-[hsl(var(--muted-foreground))] ${j===1 ? 'bg-[hsl(var(--accent))]/5' : j===2 ? 'bg-[hsl(var(--accent))]/10' : ''}`}>
                      {c === '✓' ? <Check className="w-5 h-5 text-[hsl(var(--accent))] mx-auto" /> : c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">Order Standard Pack — $29.99</button>
          <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">Order Family Pack — Best Value</button>
        </div>
      </div>
    </section>
  )
}
