import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

// Home page components — loaded eagerly (always needed on first visit)
import HeroSection from './components/HeroSection'
import OpportunitySection from './components/OpportunitySection'
import StorySection from './components/StorySection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import ProblemStatement from './components/ProblemStatement'
import ValuesSection from './components/ValuesSection'
import TestimonialsSection from './components/TestimonialsSection'
import QuoteBanner from './components/QuoteBanner'
import ContactCtaSection from './components/ContactCtaSection'

// Inner pages — loaded only when the user navigates to them
const ContactUs = lazy(() => import('./components/ContactUs'))
const NewBeginningPage = lazy(() => import('./components/NewBeginningPage'))
const OurStorySection = lazy(() => import('./components/OurStorySection'))
const MissionSection = lazy(() => import('./components/MissionSection'))
const BoardOfAdvisorsSection = lazy(() => import('./components/BoardOfAdvisorsSection'))
const ResourcesSection = lazy(() => import('./components/ResourcesSection'))
const ActivitiesSection = lazy(() => import('./components/ActivitiesSection'))
const GoalsSection = lazy(() => import('./components/GoalsSection'))
const VolunteersSection = lazy(() => import('./components/VolunteersSection'))

function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <ProblemStatement />
      <StorySection />
      <OpportunitySection />
      <QuoteBanner />
      <ValuesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactCtaSection />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/care2elevate/" element={<HomePage />} />
          <Route path="/care2elevate/resources" element={<ResourcesSection />} />
          <Route path="/care2elevate/our-story" element={<OurStorySection />} />
          <Route path="/care2elevate/mission" element={<MissionSection />} />
          <Route path="/care2elevate/who-we-are" element={<BoardOfAdvisorsSection />} />
          <Route path="/care2elevate/board" element={<BoardOfAdvisorsSection />} />
          <Route path="/care2elevate/activities" element={<ActivitiesSection />} />
          <Route path="/care2elevate/volunteers" element={<VolunteersSection />} />
          <Route path="/care2elevate/goals" element={<GoalsSection />} />
          <Route path="/care2elevate/new-beginning" element={<NewBeginningPage />} />
          <Route path="/care2elevate/contact" element={<ContactUs />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppFAB />
    </BrowserRouter>
  )
}

export default App
