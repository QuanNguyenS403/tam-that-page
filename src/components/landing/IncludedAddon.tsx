import { useState } from 'react'
import { Check } from 'lucide-react'
import img5 from '@/assets/5.png.asset.json'
import img7 from '@/assets/7.png.asset.json'

const TABS = ['Bộ Sản Phẩm Bao Gồm', 'Hướng Dẫn Sử Dụng'] as const

export function IncludedAddon() {
  const [tab, setTab] = useState<typeof TABS[number]>(TABS[0])

  return (
    <section id="quy-cach-dong-goi" aria-label="Quy cách đóng gói và hướng dẫn sử dụng" className="bg-canvas py-section-sm md:py-section-md">
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 rounded-card bg-cream border border-stone-300 p-6 md:p-8">
            <div role="tablist" className="flex gap-4 border-b border-stone-300 mb-6">
              {TABS.map(t => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={`pb-3 font-body text-body-base font-semibold border-b-2 -mb-px transition-colors ${tab === t ? 'border-forest text-forest' : 'border-transparent text-stone-600 hover:text-stone-900'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {tab === 'Bộ Sản Phẩm Bao Gồm' ? (
              <div role="tabpanel" className="space-y-4">
                <h3 className="font-display text-display-sm text-forest font-bold">Gói Tam Thất Bắc Nguyên Chất 100g / 300g / 500g</h3>
                <ul className="space-y-3">
                  {[
                    '1 × Túi Tam Thất Bắc Hà Giang xay mịn nguyên chất',
                    'Bao bì chống ẩm cao cấp chuẩn bảo quản dược liệu',
                    'Hộp đựng thiết kế tối giản làm quà biếu',
                    'Thẻ hướng dẫn liều lượng và cách dùng chuẩn y học cổ truyền',
                    'Nguyên liệu Tam thất Bắc tuyển chọn từ Hà Giang',
                  ].map(i => (
                    <li key={i} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-trust-green shrink-0 mt-0.5" />
                      <span className="font-body text-body-base text-stone-900">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div role="tabpanel" className="space-y-4">
                <h3 className="font-display text-display-sm text-forest font-bold">Cách pha uống mỗi ngày đơn giản:</h3>
                <ol className="space-y-3">
                  {[
                    'Lấy 3–5g bột Tam Thất (khoảng 1 thìa cà phê nhỏ) vào cốc',
                    'Rót 100–150ml nước ấm (khoảng 60–70°C), khuấy đều cho tan hoàn toàn',
                    'Uống vào buổi sáng trước bữa ăn 30 phút hoặc buổi tối trước khi đi ngủ',
                    'Có thể kết hợp cùng mật ong nguyên chất để tăng hương vị và công dụng',
                  ].map((s, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="w-7 h-7 rounded-badge bg-forest text-amber font-mono text-body-sm font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-body text-body-base text-stone-900 pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 font-body text-body-sm italic text-stone-600">Đơn giản. Đều đặn. Chuẩn bị chưa tới 2 phút mỗi ngày.</p>
              </div>
            )}
          </div>

          <aside className="rounded-card bg-pale-fern/50 border border-sage/40 p-6 md:p-8 flex flex-col gap-4">
            <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-forest">Dịch Vụ Đi Kèm</p>
            <h3 className="font-display text-display-sm text-forest font-bold">Tùy Chọn Hộp Quà Biếu Cao Cấp</h3>
            <p className="font-body text-body-sm text-stone-600 leading-relaxed">
              Thêm nơ gấm thủ công và thiệp viết tay cá nhân hóa. Biến đơn hàng của bạn thành món quà trang trọng chuẩn bị chu đáo.
            </p>
            <a href="#san-pham" className="bg-forest text-amber font-body font-bold text-label-lg uppercase tracking-widest py-3 px-4 rounded-btn text-center hover:bg-jade transition-colors">
              Miễn Phí Cho Đơn Từ 2 Sản Phẩm
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
