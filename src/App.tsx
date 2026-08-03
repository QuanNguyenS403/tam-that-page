import { AnnouncementBar } from './components/landing/AnnouncementBar'
import { Navbar } from './components/landing/Navbar'
import { Breadcrumb } from './components/landing/Breadcrumb'
import { ProductHero } from './components/landing/ProductHero'
import { HeritageBanner } from './components/landing/HeritageBanner'
import { VideoModule } from './components/landing/VideoModule'
import { FeaturesGrid } from './components/landing/FeaturesGrid'
import { AuthenticityCallout } from './components/landing/AuthenticityCallout'
import { GiftCallout } from './components/landing/GiftCallout'
import { IncludedAddon } from './components/landing/IncludedAddon'
import { WellnessRoutine } from './components/landing/WellnessRoutine'
import { ComparisonTable } from './components/landing/ComparisonTable'
import { Reviews } from './components/landing/Reviews'
import { EmailCapture } from './components/landing/EmailCapture'
import { FAQ } from './components/landing/FAQ'
import { GuaranteeBlock } from './components/landing/GuaranteeBlock'
import { TrustStrip } from './components/landing/TrustStrip'
import { Footer } from './components/landing/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <Breadcrumb />
      <main role="main">
        <ProductHero />
        <GuaranteeBlock />
        <TrustStrip />
        <HeritageBanner />
        <VideoModule />
        <FeaturesGrid />
        <AuthenticityCallout />
        <GiftCallout />
        <IncludedAddon />
        <WellnessRoutine />
        <ComparisonTable />
        <Reviews />
        <EmailCapture />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
