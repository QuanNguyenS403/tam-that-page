import { useState, useRef } from 'react'
import { Play } from 'lucide-react'
import img6 from '@/assets/6.png.asset.json'
const newVideo = '/7809966088298.mp4'

export function VideoModule() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section
      id="quy-trinh-san-xuat"
      aria-label="Video quy trình sản xuất"
      className="bg-cream py-section-sm md:py-section-md"
    >
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-sage mb-3 text-center">
          {"\n"}
        </p>
        <h2 className="font-display text-display-md text-forest text-center max-w-content mx-auto leading-[1.2] mb-10">
          {"\n"}
        </h2>

        <div className="relative w-full max-w-wide mx-auto rounded-card overflow-hidden aspect-[9/16] bg-dark shadow-glass">
          <video
            ref={videoRef}
            src={newVideo}
            poster={img6.url}
            className="w-full h-full object-cover"
            controls={isPlaying}
            playsInline
            preload="metadata"
          />
          {!isPlaying && (
            <>
              <div className="absolute inset-0 bg-dark/30 backdrop-blur-[2px] pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => {
                    setIsPlaying(true)
                    videoRef.current?.play()
                  }}
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
          {"\n"}
        </p>
      </div>
    </section>
  )
}
