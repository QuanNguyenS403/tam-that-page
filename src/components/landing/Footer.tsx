import { useState, FormEvent } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const COLS = [
  {
    title: 'Sản Phẩm',
    links: [
      { name: 'Gói Dùng Thử 100g', href: '#san-pham' },
      { name: 'Gói Gia Đình 300g', href: '#san-pham' },
      { name: 'Gói Tích Lũy 500g', href: '#san-pham' },
      { name: 'Hộp Quà Biếu Tặng', href: '#san-pham' },
    ],
  },
  {
    title: 'Tìm Hiểu',
    links: [
      { name: 'Công Dụng Tam Thất', href: '#cong-dung' },
      { name: 'Hướng Dẫn Sử Dụng', href: '#cach-dung' },
      { name: 'Quy Trình Thu Hoạch', href: '#quy-trinh-san-xuat' },
      { name: 'Nguồn Gốc Hà Giang', href: '#tinh-xac-thuc' },
    ],
  },
  {
    title: 'Thương Hiệu',
    links: [
      { name: 'Giá Trị Thương Hiệu', href: '#gia-tri-thuong-hieu' },
      { name: 'Chứng Chỉ QUATEST 3', href: '#tinh-xac-thuc' },
      { name: 'Cam Kết Chất Lượng', href: '#cam-ket' },
      { name: 'Đánh Giá Khách Hàng', href: '#danh-gia' },
    ],
  },
  {
    title: 'Hỗ Trợ',
    links: [
      { name: 'Hỏi & Đáp (FAQ)', href: '#faq' },
      { name: 'Chính Sách Vận Chuyển', href: '#cam-ket' },
      { name: 'Chính Sách Đổi Trả', href: '#cam-ket' },
      { name: 'Liên Hệ Đặt Hàng', href: '#footer' },
    ],
  },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer id="footer" aria-label="Chân trang" className="bg-dark text-stone-300 border-t border-stone-600">
      <div className="max-w-wide mx-auto px-4 sm:px-8 py-section-sm md:py-section-md">
        <div className="mb-12 pb-8 border-b border-stone-600 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-display text-display-sm text-amber font-bold mb-2">QuanNguyenS</h3>
            <p className="font-body text-body-base text-stone-300 max-w-xl">
              Tam Thất Bắc được tuyển chọn từ vùng nguyên liệu Hà Giang, chế biến và đóng gói theo tiêu chuẩn của Tam Thất Quân Nguyễn.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
            <label htmlFor="footer-email" className="sr-only">Email nhận ưu đãi</label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              className="px-4 py-2.5 rounded-btn bg-stone-900 border border-stone-600 text-stone-100 placeholder:text-stone-300 text-body-sm outline-none focus:border-gold"
            />
            <button type="submit" className="bg-gold hover:bg-amber text-dark font-body font-bold text-label-lg uppercase tracking-widest px-5 py-2.5 rounded-btn transition-colors shrink-0">
              {subscribed ? 'Đã Nhận ✓' : 'Đăng Ký'}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {COLS.map(c => (
            <div key={c.title}>
              <h4 className="font-body text-label-lg font-bold text-amber uppercase tracking-wider mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map(l => (
                  <li key={l.name}>
                    <a href={l.href} className="font-body text-body-sm text-stone-300 hover:text-gold transition-colors">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-stone-600 font-body text-body-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span>ducquan16102006@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>0981 753 082</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>Amber Riverside, 622 Minh Khai, Vĩnh Tuy, Hai Bà Trưng, Hà Nội</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gold shrink-0" />
              <span>Thứ Hai – Chủ Nhật: 7:00 – 22:00</span>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end gap-2 text-stone-300">
            <p className="font-semibold text-amber">"BÁN SỰ MINH BẠCH, CHẤT LƯỢNG VÀ NIỀM TIN"</p>
            <p>© 2026 Tam Thất Quân Nguyễn.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-600 text-label-sm text-stone-300">
          <p className="leading-relaxed">
            * Khuyến cáo: Sản phẩm Tam Thất Quân Nguyễn là dược liệu truyền thống bồi bổ sức khỏe, không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.
          </p>
        </div>
      </div>
    </footer>
  )
}
