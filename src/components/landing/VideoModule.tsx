import { useState } from 'react'
import { Play } from 'lucide-react'
import img6 from '@/assets/6.png.asset.json'

export function VideoModule() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section
      id="quy-trinh-san-xuat"
      aria-label="Video quy trình sản xuất"
      className="bg-cream py-section-sm md:py-section-md"
    >
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-3 text-center">
          Quy Trình Thu Hoạch & Sơ Chế
        </p>
        <h2 className="font-display text-display-md text-forest text-center max-w-content mx-auto leading-[1.2] mb-10">
          Từ núi đá Đồng Văn đến tay bạn — không một công đoạn nào bị bỏ qua
        </h2>

        <div className="relative w-full max-w-wide mx-auto rounded-card overflow-hidden aspect-video bg-dark shadow-glass">
          {isPlaying ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Quy trình thu hoạch Tam Thất"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={img6.url || "/images/video-thumbnail.jpg"}
                alt="Hình ảnh quy trình thu hoạch Tam Thất"
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/30 backdrop-blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-amber/90 hover:bg-amber text-dark w-16 h-16 rounded-full flex items-center justify-center shadow-gold transition-all duration-200 hover:scale-110"
                  aria-label="Phát video quy trình sản xuất"
                >
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </button>
              </div>
            </>
          )}
        </div>

        <p className="text-center font-body text-body-sm text-stone-600 mt-3">
          ▶ Xem Hành Trình 3 Phút Của Củ Tam Thất
        </p>
      </div>
    </section>
  )
}
