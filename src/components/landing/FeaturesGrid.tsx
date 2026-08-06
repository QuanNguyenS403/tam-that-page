import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const FEATURES = [
  {
    icon: '💊',
    label: 'Saponin ≥ 3,2%',
    title: 'Hàm Lượng Hoạt Chất Cao',
    body: 'Saponin — hoạt chất chính trong Tam Thất — đạt ≥ 3,2% theo kiểm nghiệm độc lập. Gấp đôi so với hàng trôi nổi thông thường.',
  },
  {
    icon: '🚫',
    label: 'Không Chất Bảo Quản',
    title: 'Chỉ Tam Thất. Không Gì Khác.',
    body: 'Không phụ gia, không chất tạo màu, không lưu huỳnh. Phơi tự nhiên và sấy lạnh bảo toàn dưỡng chất tối đa.',
  },
  {
    icon: '🏔️',
    label: 'Kỹ Thuật Phơi Truyền Thống',
    title: 'Phương Pháp Sơ Chế 300 Năm',
    body: 'Người Mông Hà Giang phơi Tam Thất trên giàn tre trong gió núi 45–60 ngày. Không lò sấy công nghiệp. Không tắt dưỡng khí.',
  },
  {
    icon: '📋',
    label: 'Kiểm Nghiệm ISO QUATEST 3',
    title: 'Xác Nhận Bởi Lab Độc Lập',
    body: 'Mỗi lô hàng được kiểm nghiệm bởi QUATEST 3 (Bộ KH&CN). Kết quả công khai — quét QR là thấy ngay.',
  },
  {
    icon: '🌱',
    label: 'Cây 7 Năm Tuổi Tối Thiểu',
    title: 'Thời Gian Không Thể Làm Giả',
    body: 'Tam Thất phải 7 năm mới đủ Saponin để thu hoạch. Không có quy trình thúc tăng trưởng nào thay thế được thời gian của đất trời.',
  },
  {
    icon: '♻️',
    label: 'Bao Bì Thân Thiện Môi Trường',
    title: 'Đóng Gói Có Trách Nhiệm',
    body: 'Túi kraft tái chế, hộp carton FSC, túi hút chân không kéo dài thời gian bảo quản 18 tháng không chất bảo quản.',
  },
]

export function FeaturesGrid() {
  const { ref, inView } = useInView()

  return (
    <section
      id="cong-dung"
      aria-label="Đặc điểm nổi bật"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-canvas py-section-sm md:py-section-md"
    >
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-3">
            Tại Sao Khác Biệt
          </p>
          <h2 className="font-display text-display-md text-forest max-w-content mx-auto leading-[1.2]">
            Sáu lý do khiến Tam Thất Quân Nguyễn không thể so sánh với hàng chợ
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group bg-cream border border-stone-300 rounded-card p-6 hover:shadow-card-hover hover:-translate-y-1 hover:border-sage transition-all duration-300 cursor-default"
            >
              <span className="text-3xl mb-4 block" role="img" aria-hidden="true">{f.icon}</span>
              <p className="font-body text-label-sm font-bold uppercase tracking-widest text-sage mb-1.5">
                {f.label}
              </p>
              <h3 className="font-body text-body-base font-bold text-stone-900 mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="font-body text-body-sm text-stone-600 leading-relaxed">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
