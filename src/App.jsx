import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import HeroSection from './components/HeroSection'
import OpportunitySection from './components/OpportunitySection'
import StorySection from './components/StorySection'
import ServicesSection from './components/ServicesSection'
import SupportComparisonSection from './components/SupportComparisonSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import NewBeginningPage from './components/NewBeginningPage'
import OurStorySection from './components/OurStorySection'
import MissionSection from './components/MissionSection'
import ConceptSection from './components/ConceptSection'
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
      <ValuesSection />
      <ServicesSection />
      <FounderSection />
      <WhyChooseUsSection />
      <SupportComparisonSection />
      <TestimonialsSection />
      <QuoteBanner />
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
        <Route path="/care2elevate/mission" element={<MissionSection />} />
        <Route path="/care2elevate/concept" element={<ConceptSection />} />
        <Route path="/care2elevate/who-we-are" element={<BoardOfAdvisorsSection />} />
        <Route path="/care2elevate/board" element={<BoardOfAdvisorsSection />} />
        <Route path="/care2elevate/new-beginning" element={<NewBeginningPage />} />
        <Route path="/care2elevate/contact" element={<ContactUs />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
