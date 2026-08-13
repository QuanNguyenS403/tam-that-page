import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Navbar } from "@/components/landing/Navbar";
import { Breadcrumb } from "@/components/landing/Breadcrumb";
import { ProductHero } from "@/components/landing/ProductHero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { HeritageBanner } from "@/components/landing/HeritageBanner";
import { AuthenticityCallout } from "@/components/landing/AuthenticityCallout";
import { VideoModule } from "@/components/landing/VideoModule";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { Reviews } from "@/components/landing/Reviews";
import { GiftCallout } from "@/components/landing/GiftCallout";
import { IncludedAddon } from "@/components/landing/IncludedAddon";
import { WellnessRoutine } from "@/components/landing/WellnessRoutine";
import { GuaranteeBlock } from "@/components/landing/GuaranteeBlock";
import { EmailCapture } from "@/components/landing/EmailCapture";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { StickyCartBar } from "@/components/landing/StickyCartBar";

const title = "QuanNguyenS — Tam thất Bắc nguyên chất tuyển chọn từ Hà Giang";
const description =
  "Tam thất Bắc tuyển chọn từ Hà Giang, xay mịn từ củ nguyên chất. Đóng gói sang trọng, phù hợp dùng hằng ngày và làm quà tặng.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
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
  );
}
