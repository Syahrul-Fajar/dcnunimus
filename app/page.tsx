import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CertificateSection } from "@/components/certificate-section"
import { AnnouncementSection } from "@/components/announcement-section"
import { GameSection } from "@/components/game-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <HeroSection />
      <RoadmapSection />
      <BenefitsSection />
      <CertificateSection />
      <AnnouncementSection />
      <GameSection />
      <Footer />
    </main>
  )
}
