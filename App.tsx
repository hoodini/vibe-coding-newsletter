import { Hero } from '@/components/hero'
import { CourseDetails } from '@/components/course-details'
import { AboutInstructor } from '@/components/about-instructor'
import { BonusSection } from '@/components/bonus-section'
import { FAQ } from '@/components/faq'
import { SocialProof } from '@/components/social-proof'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'
import { UrgencyBanner } from '@/components/urgency-banner'
import { CourseSyllabus } from '@/components/course-syllabus'
import { BackgroundEffects } from '@/components/background-effects'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-x-hidden">
      <BackgroundEffects />
      <UrgencyBanner />
      <Hero />
      <CourseSyllabus />
      <CourseDetails />
      <AboutInstructor />
      <BonusSection />
      <SocialProof />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </div>
  )
}