import { useState, FormEvent } from 'react'
import img8 from '@/assets/8.png.asset.json'

export function EmailCapture() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) setSent(true)
  }

  return (
    <section id="dang-ky-tin" aria-label="Đăng ký nhận ưu đãi và tin tức" className="bg-dark text-stone-100 py-section-sm md:py-section-md">
      <div className="max-w-content mx-auto px-4 sm:px-8 text-center">
        <div className="rounded-card overflow-hidden mb-8 max-w-md mx-auto">
          <img src={img8.url} alt="Bột Tam Thất Quân Nguyễn đồng hành cùng nhịp sống hằng ngày" className="w-full h-auto object-cover" loading="lazy" />
        </div>
        <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-3">Đồng Hành Cùng Chúng Tôi</p>
        <h2 className="font-display text-display-md text-amber mb-4 leading-[1.2]">
          Nhận kiến thức về Tam thất và dưỡng sinh
        </h2>
        <p className="font-body text-body-lg text-stone-300 mb-8 leading-relaxed">
          Đăng ký để nhận các bài viết kiến thức y học cổ truyền, hướng dẫn dưỡng sinh mùa lạnh và mã giảm giá cho đơn hàng tiếp theo.
        </p>

        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <label htmlFor="nl-email" className="sr-only">Địa chỉ email</label>
          <input
            id="nl-email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Nhập địa chỉ email của bạn"
            className="flex-1 px-5 py-3.5 rounded-btn bg-stone-900 border border-stone-600 text-stone-100 placeholder:text-stone-300 outline-hidden focus:border-gold font-body text-body-base"
          />
          <button
            type="submit"
            className="bg-gold hover:bg-amber text-dark font-body font-bold text-label-lg uppercase tracking-widest px-6 py-3.5 rounded-btn transition-colors duration-200 shadow-gold shrink-0"
          >
            {sent ? 'Đã Đăng Ký ✓' : 'Đăng Ký Khuyến Mãi'}
          </button>
        </form>
        <p className="mt-4 font-body text-body-sm text-stone-300">Bảo mật thông tin tuyệt đối</p>
      </div>
    </section>
  )
}
