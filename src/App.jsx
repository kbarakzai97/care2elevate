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
import ProgramTruthsSection from './components/ProgramTruthsSection'
import AboutSection from './components/AboutSection'
import FounderSection from './components/FounderSection'
import ValuesSection from './components/ValuesSection'
import QuoteBanner from './components/QuoteBanner'

function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <OpportunitySection />
      <StorySection />
      <BeliefsSection />
      <ServicesSection />
      <SupportComparisonSection />
      <HealingJourneySection />
      <ProgramTruthsSection />
      <AboutSection />
      <FounderSection />
      <ValuesSection />
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
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
