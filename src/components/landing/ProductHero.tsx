import { useState } from 'react'
import { motion } from 'framer-motion'
import img1 from '@/assets/1.png.asset.json'
import img2 from '@/assets/2.png.asset.json'
import img5 from '@/assets/5.png.asset.json'
import img3 from '@/assets/3.png.asset.json'

const THUMBNAILS = [
  img1.url || '/images/1.png',
  img2.url || '/images/2.png',
  img5.url || '/images/5.png',
  img3.url || '/images/3.png',
]

const VARIANTS = [
  { label: 'Gói Dùng Thử 100g', price: '299.000 ₫', original: '450.000 ₫', savings: '33%', stock: 23 },
  { label: 'Gói Gia Đình 300g', price: '750.000 ₫', original: '900.000 ₫', savings: '17%', stock: 41 },
  { label: 'Gói Tích Lũy 500g', price: '1.150.000 ₫', original: '1.500.000 ₫', savings: '23%', stock: 15, best: true },
]

export function ProductHero() {
  const [activeImg, setActiveImg] = useState(0)
  const [activeVariant, setVariant] = useState(0)
  const [added, setAdded] = useState(false)
  const variant = VARIANTS[activeVariant]

  function handleAddToCart() {
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <section
      id="san-pham"
      aria-label="Thông tin sản phẩm"
      className="bg-canvas py-section-sm md:py-section-md"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 lg:gap-14 items-start">
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-card bg-parchment aspect-square">
              <img
                src={THUMBNAILS[activeImg]}
                alt="Tam Thất Bắc Nguyên Chất Hà Giang"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {THUMBNAILS.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  aria-label={`Xem ảnh ${i + 1}`}
                  className={`aspect-square rounded-[8px] overflow-hidden bg-parchment border-2 transition-all duration-200 ${activeImg === i ? 'border-gold shadow-gold' : 'border-stone-300 hover:border-sage'}`}
                >
                  <img src={src} alt={`Thumbnail Tam Thất ${i + 1}`} className="w-full h-full object-contain" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-5"
          >
            <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage">
              TAM THẤT BẮC HÀ GIANG NGUYÊN CHẤT
            </p>

            <h1 className="font-body text-2xl sm:text-3xl font-bold text-forest leading-relaxed tracking-tight text-pretty">
              Tam thất nguyên chất 7 năm tuổi. Nghiền theo từng mẻ nhỏ để giữ trọn hương vị tự nhiên.
            </h1>


            <div className="flex items-center gap-3">
              <span className="text-gold text-body-lg tracking-tight" aria-label="5 sao">★★★★★</span>
              <a href="#danh-gia" className="font-body text-body-sm text-stone-600 underline underline-offset-2 hover:text-forest transition-colors">
                1.248 đánh giá thực
              </a>
              <span className="w-px h-4 bg-stone-300" />
              <span className="font-body text-body-sm text-trust-green font-semibold">Đã bán 5.000+ đơn</span>
            </div>

            <p className="font-body text-body-lg text-stone-600 leading-relaxed max-w-content">
              Tam thất là một dược liệu được sử dụng lâu đời trong y học cổ truyền. Chất lượng của củ phụ thuộc vào vùng trồng, thời gian sinh trưởng, quy trình sơ chế và cách bảo quản sau thu hoạch.
            </p>

            <div>
              <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-stone-600 mb-2">
                Chọn Gói:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                {VARIANTS.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setVariant(i)}
                    aria-pressed={activeVariant === i}
                    className={`relative flex-1 flex flex-col items-center justify-center text-center px-3 pt-5 pb-3.5 rounded-card border-2 transition-all duration-200 ${activeVariant === i ? 'border-forest bg-pale-fern' : 'border-stone-300 hover:border-sage bg-canvas'}`}
                  >
                    {v.best && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gold text-dark font-body text-[10px] leading-tight font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-badge shadow-sm">
                        Tiết Kiệm Nhất
                      </span>
                    )}
                    <span className="block font-body text-body-sm font-semibold text-stone-900 text-center leading-tight">{v.label}</span>
                    <span className="block font-mono text-body-sm text-forest font-medium mt-1 text-center">{v.price}</span>
                  </button>

                ))}
              </div>
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="font-mono text-price-xl font-bold text-forest">
                {variant.price}
              </span>
              <span className="font-body text-body-base text-stone-600 line-through">
                {variant.original}
              </span>
              <span className="bg-amber/30 text-stone-900 font-body text-label-lg font-bold uppercase tracking-wide px-2.5 py-1 rounded-badge">
                Tiết kiệm {variant.savings}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-alert-amber animate-pulse inline-block" />
              <p className="font-body text-body-sm text-alert-amber font-semibold">
                Chỉ còn {variant.stock} hộp trong kho — đặt ngay để đảm bảo hàng
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="relative flex-1 overflow-hidden bg-forest text-amber font-body font-bold text-body-base uppercase tracking-widest py-4 px-6 rounded-btn hover:bg-jade transition-colors duration-200 animate-pulse focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Thêm vào giỏ hàng và đặt mua ngay"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber/20 to-transparent bg-[length:200%_100%] animate-shimmer pointer-events-none" />
                <span className="relative">
                  {added ? '✓ Đã Thêm Vào Giỏ!' : '🛒 Đặt Mua Ngay — Giao Trong 2 Ngày'}
                </span>
              </button>

              <a
                href="#cach-dung"
                className="flex-shrink-0 border-2 border-forest text-forest font-body font-semibold text-body-sm uppercase tracking-widest py-4 px-5 rounded-btn text-center hover:bg-pale-fern transition-colors duration-200"
              >
                Xem Cách Dùng ↓
              </a>
            </div>

            <p className="font-body text-body-sm text-stone-600">
              🚚 Đặt trước 15:00 → Giao ngay hôm nay
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                '✓ ĐỔI TRẢ TRONG 30 NGÀY THEO CHÍNH SÁCH',
                '✓ TUYỂN CHỌN TỪ VÙNG NGUYÊN LIỆU HÀ GIANG',
                'Tam thất Bắc tuyển chọn từ Hà Giang, xay mịn từ củ nguyên chất',
              ].map((t) => (
                <span
                  key={t}
                  className="bg-pale-fern text-forest font-body text-label-sm font-semibold uppercase tracking-wide px-3 py-1.5 rounded-badge border border-sage/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
