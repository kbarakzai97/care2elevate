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

function ResourcesPage() {
  return (
    <main className="resources-page">
      <section className="resources-page-intro" aria-labelledby="resources-page-title">
        <h1 id="resources-page-title">{"Resources"}</h1>
        <p>
          {"Explore support created to help you move forward with care, connection, and faith."}
        </p>
      </section>
      <section className="resources-page-content" aria-label="Available resources">
        <article className="resources-page-card resources-page-card-sage">
          <h2>{"Peer Support Registration: Connect with women who understand"}</h2>
          <p>
            {"Register your interest in peer support. Complete the form and the Care2Elevate team will follow up with you."}
          </p>
          <a
            href="https://forms.gle/7aVCYC94McoRBVqA7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Register for peer support"} <span aria-hidden="true">{"\u2197"}</span>
          </a>
        </article>
      </section>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/care2elevate/" element={<HomePage />} />
        <Route path="/care2elevate/resources" element={<ResourcesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
