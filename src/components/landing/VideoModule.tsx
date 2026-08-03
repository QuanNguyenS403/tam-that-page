import { useState } from 'react'
import { Play } from 'lucide-react'
import img from '@/assets/4.png.asset.json'

export function VideoModule() {
  const [playing, setPlaying] = useState(false)

  return (
    <section aria-label="Product video" className="container-tt py-16 md:py-24">
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-[hsl(var(--dark))] group cursor-pointer">
        {playing ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Tam Thất Quân Nguyễn Product Video"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img src={img.url} alt="Video preview" className="w-full h-full object-cover opacity-70" loading="lazy" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setPlaying(true)}
                aria-label="Play video"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-[hsl(var(--primary))] ml-1" fill="currentColor" />
              </button>
            </div>
          </>
        )}
      </div>
      <div className="text-center mt-6">
        <h3 className="mb-2">See What Makes Tam Thất Quân Nguyễn Different</h3>
        <p className="text-[hsl(var(--muted-foreground))]">From root selection to your daily cup — a closer look at our process.</p>
      </div>
    </section>
  )
}
