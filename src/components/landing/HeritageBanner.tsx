import img from '@/assets/2.png.asset.json'

export function HeritageBanner() {
  return (
    <section aria-label="Heritage" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={img.url} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="relative container-tt text-center text-white">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
          "A tradition of care.<br/>Now in the most refined form it has ever taken."
        </h2>
        <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          Tam Thất — trusted across generations of Vietnamese herbal wellness practice.
        </p>
      </div>
    </section>
  )
}
