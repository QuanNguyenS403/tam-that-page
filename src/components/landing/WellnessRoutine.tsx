import { Check } from 'lucide-react'
import img4 from '@/assets/4.png.asset.json'

const BULLETS = [
  'Không cần đun sắc hay chế biến phức tạp',
  'Bột mịn hòa tan nhanh, mùi thơm tự nhiên',
  'Bao bì khóa zip chống ẩm tiện mang đi làm hoặc du lịch',
  'Hướng dẫn liều lượng rõ ràng trên từng bao bì',
  'Hạn sử dụng 18 tháng bảo quản dễ dàng',
]

export function WellnessRoutine() {
  return (
    <section id="cach-dung" aria-label="Thói quen chăm sóc sức khỏe hàng ngày" className="bg-cream py-section-sm md:py-section-md">
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-card overflow-hidden bg-pale-fern shadow-card">
            <img src={img4.url || "/images/4.png"} alt="Nguyên liệu Tam Thất củ, bột và trà nguyên chất" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-3">Thói Quen Mỗi Ngày</p>
            <h2 className="font-display text-display-md text-forest leading-[1.2] mb-6">
              Thói quen dưỡng sinh đơn giản nhất bạn có thể duy trì mỗi ngày
            </h2>
            <div className="space-y-4 font-body text-body-lg text-stone-600 leading-relaxed mb-8">
              <p>Hầu hết các phương pháp dưỡng sinh đều thất bại vì quá phức tạp, mất nhiều thời gian hoặc tốn kém.</p>
              <p>Tam Thất Quân Nguyễn được thiết kế theo một nguyên tắc: sản phẩm dược liệu tốt nhất phải dễ dàng hòa nhập vào nhịp sống của bạn.</p>
              <p className="font-semibold text-forest">Một thìa bột. Nước ấm. Hai phút mỗi sáng.</p>
              <p>Chỉ đơn giản như vậy. Và vì chuẩn bị nhanh chóng, thói quen tốt này sẽ đồng hành cùng bạn mỗi ngày.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {BULLETS.map(b => (
                <li key={b} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-trust-green shrink-0 mt-0.5" />
                  <span className="font-body text-body-base text-stone-900">{b}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-body-sm italic text-stone-600">Dược liệu cổ truyền — Phong cách sống hiện đại.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
