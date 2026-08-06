import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const RATING_BREAKDOWN = [
  { stars: 5, pct: 78 },
  { stars: 4, pct: 15 },
  { stars: 3, pct: 5 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
]

const REVIEWS = [
  {
    name: 'Chị Lan H.',
    city: 'Hà Nội',
    stars: 5,
    variant: 'Gói 300g',
    date: 'Tháng 6, 2024',
    verified: true,
    body: 'Mình mua cho ba uống sau ca phẫu thuật. Sau 3 tuần thấy ba khoẻ hơn hẳn, ngủ ngon hơn, bầm tím giảm nhanh. Tam Thất này khác hẳn loại mua ngoài chợ — màu đậm hơn, mùi thơm đặc trưng. Sẽ mua thêm gói 500g lần sau.',
  },
  {
    name: 'Anh Minh T.',
    city: 'TP. Hồ Chí Minh',
    stars: 5,
    variant: 'Gói 500g',
    date: 'Tháng 5, 2024',
    verified: true,
    body: 'Đặt hàng lần thứ 3 rồi. Gia đình mình dùng mỗi sáng, bố mẹ và con nhỏ đều uống được. Hàng giao nhanh, đóng gói cẩn thận, quan trọng là quét QR ra ngay thông tin vườn trồng — yên tâm hoàn toàn.',
  },
  {
    name: 'Chị Thu N.',
    city: 'Đà Nẵng',
    stars: 5,
    variant: 'Gói 100g',
    date: 'Tháng 4, 2024',
    verified: true,
    body: 'Mua thử gói nhỏ trước, hài lòng quá. Mình hay bị tụ máu chỗ tiêm sau khi truyền dịch, uống Tam Thất này 1 tuần thấy vết thâm tan rất nhanh. Bác sĩ bảo cũng không phản chỉ định với thuốc đang uống.',
  },
  {
    name: 'Chú Hùng V.',
    city: 'Cần Thơ',
    stars: 4,
    variant: 'Gói 300g',
    date: 'Tháng 3, 2024',
    verified: true,
    body: 'Chất lượng tốt, giao hàng đúng hẹn. Củ xay rất mịn, dễ hòa tan trong nước ấm. Ba mẹ tôi uống đều đặn mỗi sáng thấy huyết áp ổn định hơn.',
  },
  {
    name: 'Anh Hoàng K.',
    city: 'Hải Phòng',
    stars: 5,
    variant: 'Gói 500g',
    date: 'Tháng 2, 2024',
    verified: true,
    body: 'Làm quà biếu sếp đợt Tết vừa rồi. Hộp quà sang trọng, thiết kế chỉn chu cực kỳ. Sếp khen chất lượng và hỏi địa chỉ mua để tặng tiếp.',
  },
]

export function Reviews() {
  const { ref, inView } = useInView()
  const [filterStars, setFilterStars] = useState<number | null>(null)

  const filtered = filterStars ? REVIEWS.filter(r => r.stars === filterStars) : REVIEWS

  return (
    <section
      id="danh-gia"
      aria-label="Đánh giá của khách hàng"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-canvas py-section-sm md:py-section-md"
    >
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <div className="text-center mb-10">
          <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-3">
            Đánh Giá Thực Từ Khách Hàng
          </p>
          <h2 className="font-display text-display-md text-forest max-w-content mx-auto leading-[1.2] mb-4">
            1.248 người đã chọn Tam Thất Quân Nguyễn cho sức khỏe gia đình
          </h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-gold text-2xl tracking-tight" aria-label="4.9 trên 5 sao">★★★★★</span>
            <span className="font-mono font-bold text-forest text-body-lg">4.9 / 5.0</span>
          </div>
          <p className="font-body text-body-sm text-stone-600">(100% Đánh giá đã xác thực mua hàng)</p>
        </div>

        {/* Rating Breakdown */}
        <div className="bg-cream border border-stone-300 rounded-card p-6 mb-10 max-w-content mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-stone-300 pb-4 sm:pb-0 sm:pr-6">
              <p className="font-mono text-display-xl font-bold text-forest leading-none mb-1">4.9</p>
              <div className="text-gold text-body-base mb-1">★★★★★</div>
              <p className="font-body text-body-sm text-stone-600">Dựa trên 1.248 đánh giá</p>
            </div>
            <div className="flex flex-col gap-1.5">
              {RATING_BREAKDOWN.map(b => (
                <button
                  key={b.stars}
                  onClick={() => setFilterStars(filterStars === b.stars ? null : b.stars)}
                  className={`flex items-center gap-2 text-left group hover:opacity-80 transition-opacity ${filterStars === b.stars ? 'font-bold' : ''}`}
                >
                  <span className="font-body text-body-sm text-stone-600 w-12 shrink-0">{b.stars} sao</span>
                  <div className="flex-1 h-2 bg-stone-300 rounded-badge overflow-hidden">
                    <div className="h-full bg-gold rounded-badge" style={{ width: `${b.pct}%` }} />
                  </div>
                  <span className="font-mono text-body-sm text-stone-600 w-10 text-right shrink-0">{b.pct}%</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((r, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-cream border border-stone-300 rounded-card p-6 flex flex-col justify-between hover:shadow-card hover:border-sage transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="text-gold text-body-base" aria-label={`${r.stars} sao`}>
                    {'★'.repeat(r.stars)}
                  </div>
                  <span className="bg-pale-fern text-forest font-body text-label-sm font-semibold px-2.5 py-0.5 rounded-badge">
                    {r.variant}
                  </span>
                </div>
                <p className="font-body text-body-base text-stone-900 leading-relaxed mb-4">
                  "{r.body}"
                </p>
              </div>
              <div className="border-t border-stone-300 pt-3 flex items-center justify-between text-body-sm text-stone-600">
                <div>
                  <span className="font-semibold text-stone-900">{r.name}</span>
                  <span className="text-stone-600"> — {r.city}</span>
                </div>
                {r.verified && (
                  <span className="text-trust-green font-semibold text-label-sm uppercase tracking-wide">
                    ✓ Đã mua hàng
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
