import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Tam Thất Bắc Quân Nguyễn có nguồn gốc từ đâu?',
    a: 'Tam Thất Quân Nguyễn được thu hái trực tiếp tại các vùng núi đá cao 1.400m–1.800m thuộc Bắc Hà Giang (Đồng Văn, Mèo Vạc, Hoàng Su Phì). Cây được trồng tự nhiên đủ 7 năm tuổi trở lên trước khi thu hoạch.',
  },
  {
    q: 'Làm thế nào để truy xuất nguồn gốc sản phẩm?',
    a: 'Mỗi hộp sản phẩm đều được dán tem chống hàng giả tích hợp mã QR. Bạn chỉ cần dùng camera điện thoại hoặc Zalo quét mã QR để xem ngay vị trí vườn trồng, thông tin lô thu hoạch và chứng nhận kiểm nghiệm độc lập.',
  },
  {
    q: 'Cách pha và thời điểm uống Tam Thất tốt nhất là khi nào?',
    a: 'Bạn dùng 3–5g bột Tam Thất (khoảng 1 thìa cà phê) hòa với 100–150ml nước ấm. Uống vào buổi sáng trước khi ăn 30 phút hoặc buổi tối trước khi đi ngủ. Có thể thêm 1 thìa mật ong để tăng thêm công dụng bồi bổ.',
  },
  {
    q: 'Tam Thất Quân Nguyễn có khác gì so với Tam Thất bán ngoài chợ?',
    a: 'Tam Thất chợ thường trôi nổi, pha trộn ngô/sắn xay, phơi sấy bằng lưu huỳnh độc hại hoặc củ chưa đủ 7 năm tuổi. Tam Thất Quân Nguyễn cam kết 100% nguyên chất, phơi sấy truyền thống bằng gió núi, hàm lượng Saponin ≥ 3,2% kiểm nghiệm bởi QUATEST 3.',
  },
  {
    q: 'Những ai nên sử dụng và ai cần lưu ý?',
    a: 'Sản phẩm rất tốt cho người cần bồi bổ cơ thể, người sau phẫu thuật, phụ nữ sau sinh, người ngủ kém, huyết áp không ổn định. Phụ nữ đang mang thai hoặc người đang bị xuất huyết cấp tính nên tham khảo ý kiến bác sĩ trước khi dùng.',
  },
  {
    q: 'Thời gian giao hàng mất bao lâu và phí vận chuyển thế nào?',
    a: 'Đơn hàng tại Hà Nội và TP.HCM giao trong 1–2 ngày. Các tỉnh thành khác từ 2–3 ngày làm việc. Miễn phí vận chuyển toàn quốc cho đơn hàng từ 500.000 ₫.',
  },
  {
    q: 'Chính sách đổi trả và hoàn tiền áp dụng ra sao?',
    a: 'Chúng tôi cam kết hoàn tiền 100% trong vòng 30 ngày nếu bạn phát hiện hàng giả, hàng kém chất lượng hoặc không hài lòng với sản phẩm.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" aria-label="Câu hỏi thường gặp" className="bg-canvas py-section-sm md:py-section-md">
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <div className="text-center max-w-content mx-auto mb-10 md:mb-14">
          <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-3">
            Giải Đáp Thắc Mắc
          </p>
          <h2 className="font-display text-display-md text-forest leading-[1.2] mb-4">
            Những câu hỏi thường gặp về Tam Thất Quân Nguyễn
          </h2>
          <p className="font-body text-body-lg text-stone-600">
            Mọi điều bạn cần biết trước khi đặt mua sản phẩm
          </p>
        </div>

        <div className="max-w-content mx-auto space-y-4">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="bg-cream border border-stone-300 rounded-card overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
              >
                <span className="font-body text-body-lg font-bold text-stone-900 group-hover:text-forest transition-colors">
                  {f.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-forest shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 md:px-6 md:pb-6 font-body text-body-base text-stone-600 leading-relaxed border-t border-stone-300/60 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
