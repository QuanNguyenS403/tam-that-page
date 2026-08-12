import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import { motion } from 'framer-motion'
import img2 from '@/assets/2.png.asset.json'

const STATS = [
  { value: 10000, suffix: '+', label: 'Khách hàng tin dùng' },
  { value: 7, suffix: ' năm', label: 'Tuổi cây tối thiểu' },
  { value: 5000, suffix: '+', label: 'Đơn hàng thành công' },
  { value: 30, suffix: ' ngày', label: 'Cam kết hoàn tiền' },
]

export function HeritageBanner() {
  const { ref, inView } = useInView(0.2)

  return (
    <section
      id="gia-tri-thuong-hieu"
      aria-label="Giá trị thương hiệu"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-dark py-section-sm md:py-section-md overflow-hidden"
    >
      <div className="max-w-wide mx-auto px-4 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-4"
        >
          GIÁ TRỊ CỦA TAM THẤT BẮT ĐẦU TỪ VÙNG NGUYÊN LIỆU
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-display-md text-amber leading-[1.3] max-w-content mx-auto mb-6"
        >
          Chúng tôi lựa chọn nguồn Tam thất từ vùng núi cao Hà Giang, nơi có khí hậu mát mẻ quanh năm và điều kiện tự nhiên phù hợp để cây phát triển ổn định. Mỗi lô nguyên liệu đều được tuyển chọn và kiểm tra trước khi đưa vào chế biến.
        </motion.blockquote>

        <motion.cite
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="not-italic font-body text-body-sm text-stone-300 block mb-12"
        >
          — Ông Vàng Mí Chứ, người trồng Tam Thất, Đồng Văn, Hà Giang
        </motion.cite>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="rounded-card overflow-hidden mb-12 max-w-4xl mx-auto bg-forest/40"
        >
          <img src={img2.url} alt="Lợi ích sức khỏe của Tam Thất Bắc nguyên chất" className="w-full h-auto object-cover" loading="lazy" />
        </motion.div>



        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-stone-600 pt-10">
          {STATS.map((s, i) => {
            const count = useCountUp(s.value, 1800, inView)
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i + 0.4 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="font-mono text-display-md text-gold font-bold">
                  {count.toLocaleString('vi-VN')}{s.suffix}
                </span>
                <span className="font-body text-label-lg uppercase tracking-wide text-stone-300">
                  {s.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
