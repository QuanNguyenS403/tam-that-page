import { Play } from 'lucide-react'

export function VideoModule() {
  return (
    <section aria-label="Product video" className="container-tt py-16 md:py-24">
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-[hsl(var(--dark))] group cursor-pointer">
        <img src="https://images.unsplash.com/photo-1515envc75f?w=1600&q=80" alt="Video preview" onError={(e:any)=>{e.currentTarget.src='https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=1600&q=80'}} className="w-full h-full object-cover opacity-70" loading="lazy" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button aria-label="Play video" className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-[hsl(var(--primary))] ml-1" fill="currentColor" />
          </button>
        </div>
      </div>
      <div className="text-center mt-6">
        <h3 className="mb-2">See What Makes Tam Thất Quân Nguyễn Different</h3>
        <p className="text-[hsl(var(--muted-foreground))]">From root selection to your daily cup — a closer look at our process.</p>
      </div>
    </section>
  )
}
