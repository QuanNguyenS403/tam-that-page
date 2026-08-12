import { useInView } from '../../hooks/useInView'
import { motion } from 'framer-motion'

const ITEMS = [
  { icon: '🛡️', label: 'Hoàn Tiền 100%', sub: 'Trong 30 ngày' },
  { icon: '📍', label: 'Xuất Xứ Bắc Hà Giang', sub: 'Lựa chọn kĩ lưỡng' },
  { icon: '🔬', label: 'Kiểm Nghiệm ISO', sub: 'QUATEST 3' },
  { icon: '🚚', label: 'Giao Toàn Quốc', sub: '2–3 ngày làm việc' },
  { icon: '🌿', label: 'Không Phụ Gia', sub: '100% Nguyên Chất' },
]

export function TrustStrip() {
  const { ref, inView } = useInView()

  return (
    <section
      id="trust-strip"
      aria-label="Cam kết chất lượng"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-cream border-y border-stone-300 py-4 overflow-x-auto"
    >
      <motion.div
        className="flex items-center justify-start sm:justify-center gap-0 min-w-max sm:min-w-0 px-4 sm:px-8 snap-x snap-mandatory"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {ITEMS.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 px-5 sm:px-6 snap-start border-r border-stone-300 last:border-r-0"
          >
            <span className="text-2xl sm:text-xl" role="img" aria-hidden="true">{item.icon}</span>
            <div className="text-center sm:text-left">
              <p className="font-body text-label-lg font-bold uppercase tracking-wide text-forest whitespace-nowrap">
                {item.label}
              </p>
              <p className="font-body text-label-sm text-stone-600 whitespace-nowrap">{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <p className="sm:hidden text-center font-body text-label-sm text-stone-600 mt-2 pb-1">
        ← Vuốt ngang để xem thêm →
      </p>
    </section>
  )
}
