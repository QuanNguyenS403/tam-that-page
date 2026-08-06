import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import img3 from '@/assets/3.png.asset.json'

export function GiftCallout() {
  const { ref, inView } = useInView()

  return (
    <section
      id="qua-tang"
      aria-label="Ý nghĩa quà tặng"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-dark text-stone-100 py-section-sm md:py-section-md overflow-hidden"
    >
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-3">
              Món Quà Ý Nghĩa
            </p>
            <h2 className="font-display text-display-md text-amber mb-6 leading-[1.2]">
              Trao sức khỏe — Món quà vượt xa mọi giỏ quà truyền thống
            </h2>
            <div className="space-y-4 font-body text-body-lg text-stone-300 leading-relaxed">
              <p>Rượu rồi sẽ cạn. Bánh ngọt thưởng thức một lần rồi qua. Giỏ quà trang trí thường bị xếp vào một góc.</p>
              <p>Tam Thất Quân Nguyễn thì khác. Đó là món quà gửi gắm thông điệp cá nhân sâu sắc — bạn chọn sức khỏe thay vì thói quen, chọn chất lượng thay vì sự tiện lợi.</p>
              <p>Dù là mừng thọ cha mẹ, quà biếu Tết, mừng nghỉ hưu hay lời cảm ơn đối tác quan trọng — đây là món quà phản ánh sự tinh tế của người tặng.</p>
              <p className="font-semibold text-amber">Bởi vì món quà tuyệt vời nhất không phải là đắt nhất, mà là tâm huyết nhất.</p>
            </div>
            <a
              href="#san-pham"
              className="inline-block mt-8 bg-gold hover:bg-amber text-dark font-body font-bold text-label-lg uppercase tracking-widest px-6 py-3.5 rounded-btn transition-colors duration-200 shadow-gold"
            >
              Chọn Quà Ngay →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="aspect-square rounded-card overflow-hidden bg-forest/40 border border-stone-600"
          >
            <img
              src={img3.url || "/images/3.png"}
              alt="Hộp quà Tam Thất Quân Nguyễn Mua 1 Tặng 1 cao cấp"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
