import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import HeroSection from './components/HeroSection'
import OpportunitySection from './components/OpportunitySection'
import StorySection from './components/StorySection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import NewBeginningPage from './components/NewBeginningPage'
import OurStorySection from './components/OurStorySection'
import MissionSection from './components/MissionSection'
import ProblemStatement from './components/ProblemStatement'
import BoardOfAdvisorsSection from './components/BoardOfAdvisorsSection'
import ValuesSection from './components/ValuesSection'
import TestimonialsSection from './components/TestimonialsSection'
import QuoteBanner from './components/QuoteBanner'
import ContactCtaSection from './components/ContactCtaSection'
import ResourcesSection from './components/ResourcesSection'
import ActivitiesSection from './components/ActivitiesSection'
import GoalsSection from './components/GoalsSection'
import VolunteersSection from './components/VolunteersSection'
import WhatsAppFAB from './components/WhatsAppFAB'

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
      <Footer />
      <WhatsAppFAB />
    </BrowserRouter>
  )
}

export default App
