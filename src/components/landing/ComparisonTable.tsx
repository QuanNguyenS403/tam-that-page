import { useInView } from '../../hooks/useInView'
import { motion } from 'framer-motion'

const ROWS = [
  { label: 'Giá', vals: ['299.000 ₫', '750.000 ₫', '1.150.000 ₫'] },
  { label: 'Trọng lượng', vals: ['100g', '300g', '500g'] },
  { label: 'Tiết kiệm', vals: ['—', '17%', '23%'] },
  { label: 'Phù hợp cho', vals: ['Dùng thử lần đầu', '1–2 người / tháng', 'Cả gia đình'] },
  { label: 'Thời gian sử dụng', vals: ['2–3 tuần', '2–3 tháng', '4–5 tháng'] },
  { label: 'Giao hàng miễn phí', vals: ['—', '✓', '✓'] },
  { label: 'Hộp quà cao cấp', vals: ['—', '—', '✓'] },
]
const HEADERS = ['Gói Dùng Thử 100g', 'Gói Gia Đình 300g', 'Gói Tích Lũy 500g']
const BEST_COL = 2

export function ComparisonTable() {
  const { ref, inView } = useInView()

  return (
    <section
      id="bang-so-sanh"
      aria-label="Bảng so sánh các gói sản phẩm"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-cream py-section-sm md:py-section-md"
    >
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-3">
            So Sánh Các Gói
          </p>
          <h2 className="font-display text-display-md text-forest max-w-content mx-auto leading-[1.2]">
            Chọn đúng lượng cho nhu cầu của bạn
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-stone-300 [&::-webkit-scrollbar-track]:bg-transparent">
            <table className="w-full min-w-[560px] border-separate border-spacing-0 rounded-card overflow-hidden shadow-card">
              <thead>
                <tr className="bg-forest">
                  <th className="text-left font-body text-label-lg font-semibold uppercase tracking-wide text-sage py-4 px-5 w-[36%]">
                    Tiêu Chí
                  </th>
                  {HEADERS.map((h, i) => (
                    <th
                      key={i}
                      className={`font-body text-label-lg font-bold uppercase tracking-wide py-4 px-4 text-center relative ${i === BEST_COL ? 'text-amber' : 'text-stone-300'}`}
                    >
                      {i === BEST_COL && (
                        <span className="absolute -top-0 left-1/2 -translate-x-1/2 bg-gold text-dark text-label-sm font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-b-badge whitespace-nowrap">
                          Tiết Kiệm Nhất
                        </span>
                      )}
                      <span className="mt-2 block">{h}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr
                    key={ri}
                    className={`${ri % 2 === 0 ? 'bg-canvas' : 'bg-cream'} hover:bg-pale-fern transition-colors duration-150`}
                  >
                    <td className="font-body text-body-sm font-semibold text-stone-900 py-3.5 px-5 border-b border-stone-300">
                      {row.label}
                    </td>
                    {row.vals.map((v, vi) => (
                      <td
                        key={vi}
                        className={`font-mono text-body-sm text-center py-3.5 px-4 border-b border-stone-300 ${vi === BEST_COL ? 'text-forest font-bold bg-pale-fern/60' : 'text-stone-600'}`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-pale-fern">
                  <td className="py-4 px-5 font-body text-body-sm font-semibold text-forest">
                    Đặt Ngay
                  </td>
                  {HEADERS.map((_, i) => (
                    <td key={i} className="py-4 px-4 text-center">
                      <a
                        href="#san-pham"
                        className={`inline-block font-body text-label-lg font-bold uppercase tracking-wide px-4 py-2.5 rounded-btn transition-all duration-200 w-full ${i === BEST_COL ? 'bg-forest text-amber hover:bg-jade shadow-gold' : 'border-2 border-forest text-forest hover:bg-pale-fern'}`}
                      >
                        Chọn Gói
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="sm:hidden text-center font-body text-label-sm text-stone-600 mt-2">
            ← Vuốt ngang để xem đầy đủ →
          </p>
        </div>
      </div>
    </section>
  )
}
