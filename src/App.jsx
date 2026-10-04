import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import HeroSection from './components/HeroSection'
import OpportunitySection from './components/OpportunitySection'
import StorySection from './components/StorySection'
import BeliefsSection from './components/BeliefsSection'
import ServicesSection from './components/ServicesSection'
import SupportComparisonSection from './components/SupportComparisonSection'
import HealingJourneySection from './components/HealingJourneySection'
import NewBeginningPage from './components/NewBeginningPage'
import AboutSection from './components/AboutSection'
import OurStorySection from './components/OurStorySection'
import BoardOfAdvisorsSection from './components/BoardOfAdvisorsSection'
import FounderSection from './components/FounderSection'
import ValuesSection from './components/ValuesSection'
import TestimonialsSection from './components/TestimonialsSection'
import QuoteBanner from './components/QuoteBanner'
import ResourcesSection from './components/ResourcesSection'

function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <OpportunitySection />
      <StorySection />
      <AboutSection />
      <BeliefsSection />
      <ServicesSection />
      <HealingJourneySection />
      <FounderSection />
      <ValuesSection />
      <SupportComparisonSection />
      <TestimonialsSection />
      <QuoteBanner />
      <ContactUs />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/care2elevate/" element={<HomePage />} />
        <Route path="/care2elevate/resources" element={<ResourcesSection />} />
        <Route path="/care2elevate/our-story" element={<OurStorySection />} />
        <Route path="/care2elevate/board" element={<BoardOfAdvisorsSection />} />
        <Route path="/care2elevate/new-beginning" element={<NewBeginningPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
