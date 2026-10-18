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
      <StorySection />
      <OpportunitySection />
      <ProblemStatement />
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
      <Suspense fallback={<div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'60vh'}}><div style={{width:36,height:36,border:'4px solid #f3e8e2',borderTop:'4px solid #D66252',borderRadius:'50%',animation:'spin 0.7s linear infinite'}} /><style>{'@keyframes spin{to{transform:rotate(360deg)}}'}</style></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesSection />} />
          <Route path="/our-story" element={<OurStorySection />} />
          <Route path="/mission" element={<MissionSection />} />
          <Route path="/who-we-are" element={<BoardOfAdvisorsSection />} />
          <Route path="/board" element={<BoardOfAdvisorsSection />} />
          <Route path="/activities" element={<ActivitiesSection />} />
          <Route path="/volunteers" element={<VolunteersSection />} />
          <Route path="/goals" element={<GoalsSection />} />
          <Route path="/new-beginning" element={<NewBeginningPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppFAB />
    </BrowserRouter>
  )
}

export default App
