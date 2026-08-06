import { AnnouncementBar } from './components/landing/AnnouncementBar'
import { Navbar } from './components/landing/Navbar'
import { Breadcrumb } from './components/landing/Breadcrumb'
import { ProductHero } from './components/landing/ProductHero'
import { TrustStrip } from './components/landing/TrustStrip'
import { HeritageBanner } from './components/landing/HeritageBanner'
import { AuthenticityCallout } from './components/landing/AuthenticityCallout'
import { VideoModule } from './components/landing/VideoModule'
import { FeaturesGrid } from './components/landing/FeaturesGrid'
import { ComparisonTable } from './components/landing/ComparisonTable'
import { Reviews } from './components/landing/Reviews'
import { GiftCallout } from './components/landing/GiftCallout'
import { IncludedAddon } from './components/landing/IncludedAddon'
import { WellnessRoutine } from './components/landing/WellnessRoutine'
import { GuaranteeBlock } from './components/landing/GuaranteeBlock'
import { EmailCapture } from './components/landing/EmailCapture'
import { FAQ } from './components/landing/FAQ'
import { Footer } from './components/landing/Footer'
import { StickyCartBar } from './components/landing/StickyCartBar'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas font-body text-stone-900 antialiased">
      <AnnouncementBar />
      <Navbar />
      <Breadcrumb />
      <main role="main">
        <ProductHero />
        <TrustStrip />
        <HeritageBanner />
        <AuthenticityCallout />
        <VideoModule />
        <FeaturesGrid />
        <ComparisonTable />
        <Reviews />
        <GiftCallout />
        <IncludedAddon />
        <WellnessRoutine />
        <GuaranteeBlock />
        <EmailCapture />
        <FAQ />
      </main>
      <Footer />
      <StickyCartBar />
    </div>
  )
}
