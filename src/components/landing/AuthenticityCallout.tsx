import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import img5 from '@/assets/5.png.asset.json'

const PROOF_POINTS = [
  {
    icon: '🔍',
    title: 'Mã QR Truy Xuất Nguồn Gốc',
    body: 'Mỗi sản phẩm đều có tem QR giúp truy xuất thông tin lô hàng và nguồn nguyên liệu.',
  },
  {
    icon: '🧪',
    title: 'Kết Quả Kiểm Nghiệm Saponin',
    body: 'Mỗi lô sản phẩm được kiểm tra chất lượng theo tiêu chuẩn công bố trước khi đưa ra thị trường.',
  },
  {
    icon: '📸',
    title: 'Ảnh Thực Từ Vườn Trồng',
    body: 'Hình ảnh nguyên liệu và quá trình sản xuất được ghi nhận trực tiếp từ vùng trồng.',
  },
]

export function AuthenticityCallout() {
  const { ref, inView } = useInView()

  return (
    <section
      id="tinh-xac-thuc"
      aria-label="Bằng chứng chất lượng"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-canvas py-section-sm md:py-section-md"
    >
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-3">
              Chứng Minh Không Bằng Lời Nói
            </p>
            <h2 className="font-display text-display-md text-forest mb-5 leading-[1.2]">
              Điều gì giúp bạn nhận biết một sản phẩm Tam thất đáng tin cậy?
            </h2>
            <p className="font-body text-body-lg text-stone-600 mb-8 max-w-content leading-relaxed">
              Mỗi sản phẩm đều có tem QR giúp truy xuất thông tin lô hàng và nguồn nguyên liệu.
            </p>

            <div className="flex flex-col gap-5">
              {PROOF_POINTS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.12 * i + 0.2 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-2xl mt-0.5 flex-shrink-0" role="img" aria-hidden="true">
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="font-body text-body-base font-bold text-stone-900 mb-1">{p.title}</h3>
                    <p className="font-body text-body-sm text-stone-600 leading-relaxed">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#tinh-xac-thuc"
              className="inline-flex items-center gap-2 mt-8 text-forest font-body font-semibold text-body-sm border-b-2 border-gold hover:border-forest transition-colors duration-200 pb-0.5"
            >
              Xem Chứng Chỉ Kiểm Nghiệm Đầy Đủ →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative rounded-card overflow-hidden aspect-[4/3] bg-pale-fern"
          >
            <img
              src={img5.url || "/images/ha-giang-origin.jpg"}
              alt="Củ Tam Thất nguyên củ, bột Tam Thất và Hộp quà Premium Gift"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-dark/70 backdrop-blur-glass rounded-card p-4">
              <p className="font-display text-amber text-display-sm font-bold">Bắc Hà · Đồng Văn</p>
              <p className="font-body text-stone-300 text-body-sm mt-0.5">
                Độ cao 1.400–1.800m · Khí hậu á nhiệt đới núi đá
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
