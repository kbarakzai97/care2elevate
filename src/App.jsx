import heroimage from './assets/herophoto.png'
import image1 from './assets/muslim-women-traveling-paris-together.jpg'
import reflectionImage from './assets/medium-shot-women-with-laptop.jpg'
import coachingIcon from './assets/oneononecoaching.jpg'
import recoveryIcon from './assets/sixweekrecovery.jpg'
import founderImage from './assets/mariam.png'
import aboutImage from './assets/muslim-women-disagreement.jpg'
import familyImage from './assets/women-wearing-hijab-having-good-time.jpg'
import groupImage from './assets/two-arabic-muslim-girls.jpg'
import prayingImage from './assets/woman-praying-indoors-front-view.jpg'
import compassionIcon from './assets/compassion_circle.png'
import faithIcon from './assets/faith_circle.png'
import flexibilityIcon from './assets/flexibility_circle.png'
import leadershipIcon from './assets/leadership_circle.png'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'

function HomePage() {
  const beliefsData = [
    {
      id: 1,
      title: 'Compassion',
      description: 'We believe pain should be met with mercy, no judgement. So we create a space where every women can speak without shame, and no story is ever dismissed.',
      icon: compassionIcon
    },
    {
      id: 2,
      title: 'Faith',
      description: 'We believe healing is deeper when it is rooted in deen. So we guide every women through islamic teachings, prophetic stories, and the trust of tawwakul, never preaching, always grounding.',
      icon: faithIcon
    },
    {
      id: 3,
      title: 'Flexibility',
      description: 'We believe healing has no fixed timeline. So we never rush a women to "move on", we meet her where she is and move at her pace.',
      icon: flexibilityIcon
    },
    {
      id: 4,
      title: 'Leadership',
      description: 'We believe a healed women becomes a light for others. So we help each women find her voice, knowing she may become the safe space the next women needs.',
      icon: leadershipIcon
    }
  ];

  const programTruths = [
    'Sometimes the hardest part after divorce is not losing someone, it is finding yourself again.',
    'People tell divorced women to move on, but rarely give them a safe place to move through.',
    'A woman can leave a marriage and still carry the marriage inside her mind.',
    'Healing is not forgetting what happened; it is learning not to let it choose for you again.',
    'Divorce can end a relationship, but unprocessed pain can keep the relationship alive inside you.',
    'A support circle is where pain stops being a secret and starts becoming language.',
    'Sometimes dignity is not something you lose, it is something you need help remembering.',
    'The opposite of isolation is not advice; it is belonging.',
    'A woman who heals after divorce may not only change her future — she may change what her children believe she should feel like.',
    'Faith-centered healing is not pretending the pain is gone; it is finding meaning while carrying it less.'
  ];

  const opportunityStats = [
    {
      value: '33%',
      description: 'of American Muslim marriages end in divorce',
      source: 'ISPU, 2020'
    },
    {
      value: '2x',
      description: 'divorce cases in Egypt doubled between 2010 and 2024',
      source: 'CAPMAS Egypt'
    },
    {
      value: '53%',
      description: 'rise in divorces in Indonesia in one year (2020-21)',
      source: 'Statistics Indonesia'
    }
  ];

  const supportComparison = [
    { label: 'Faith-rooted healing', availability: [true, true, false, false] },
    { label: 'Structured 6-week program', availability: [true, false, true, false] },
    { label: 'Women-only safe space', availability: [true, false, false, true] },
    { label: 'Online and accessible', availability: [true, false, true, true] },
    { label: 'Space to heal before moving on', availability: [true, false, false, false] }
  ];

  const healingWeeks = [
    { week: 1, phase: 'Acknowledge', title: 'You Are Heard' },
    { week: 2, phase: 'Acknowledge', title: 'Naming What Hurts' },
    { week: 3, phase: 'Educate', title: 'Reclaiming My Power' },
    { week: 4, phase: 'Educate', title: 'Releasing What Was' },
    { week: 5, phase: 'Elevate', title: 'Rebuilding the Self' },
    { week: 6, phase: 'Elevate', title: 'Trusting the Road Ahead' }
  ];

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <div></div>
          <h1 id="home-title" className="home-title">
            {"A New Chapter Rooted in Dignity and Peace"}
          </h1>
          <p className="home-description">
            {"Care2Elevate guides divorced Muslim women through a compassionate online program, rooted in "}
            {"Islamic teachings that helps them process grief, restore their karamah and sakinah, and step "}
            {"forward with clarity."}
          </p>
          <a
            className="home-hero-cta"
            href="#services-section"
            onClick={(event) => {
              event.preventDefault()
              const servicesSection = document.getElementById('services-section')
              if (!servicesSection) return

              window.history.pushState(null, '', '#services-section')
              servicesSection.scrollIntoView({ behavior: 'instant', block: 'start' })
            }}
          >
            {"Begin Your Journey"}
          </a>
        </div>
        <div className="home-hero-media">
          <img
            className="home-hero-image"
            src={heroimage}
            alt={"Hero image showing a woman wearing a hijab having a good time"}
          />
        </div>
      </section>
      <section className="opportunity-section" aria-labelledby="opportunity-title">
        <div className="opportunity-inner">
          <div className="opportunity-heading">
            <h2 id="opportunity-title">{"Muslim divorce rates are rising. Support systems have not kept pace."}</h2>
            <p>
              {"Care2Elevate brings Islamic faith, emotional healing, and structured online support together for divorced Muslim women."}
            </p>
          </div>
          <div className="opportunity-stats">
            {opportunityStats.map((stat) => (
              <article className="opportunity-stat" key={stat.source}>
                <p className="opportunity-stat-value">{stat.value}</p>
                <div>
                  <p className="opportunity-stat-description">{stat.description}</p>
                  <p className="opportunity-stat-source">{stat.source}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="story-section">
        <div className="story-intro">
          <h2 className="story-title">
            {"Divorce may close one chapter, but it doesn't diminish the woman who lived it."}
          </h2>
          <p className="story-text">
            {"Care2Elevate challenges the expectation that divorced Muslim women should simply \"move on\" and carry the weight of healing alone. Instead, we create a safe, faith-centered sisterhood where women are given permission to pause, process, and heal with intention."}
          </p>
          <p className="story-text">
            {"Here, divorce is not treated as a failure or something to quietly overcome. It is a life transition deserving of compassion, reflection, and meaningful support. Through spiritually grounded guidance, honest conversations, and community, women can process the grief of what was lost while rediscovering the strength, dignity, and identity that remain."}
          </p>
          <p className="story-text">
            {"Care2Elevate is a space to restore karamah (dignity), find sakinah (peace), and move forward with greater clarity and confidence. Because rebuilding after divorce isn't simply about moving on—it's about moving forward with faith, purpose, and a renewed sense of self."}
          </p>
          <a
            className="home-cta home-cta-secondary story-cta"
            href="#services-section"
            onClick={(event) => {
              event.preventDefault()
              const servicesSection = document.getElementById('services-section')
              if (!servicesSection) return

              window.history.pushState(null, '', '#services-section')
              servicesSection.scrollIntoView({ behavior: 'instant', block: 'start' })
            }}
          >
            {"Get Started"}
          </a>
        </div>
        <div className="story-collage">
          <div className="story-collage-media">
            <img className="story-collage-small" src={image1} alt={"Three friends smiling and taking a selfie together"} />
            <img className="story-collage-large" src={reflectionImage} alt={"Woman resting her head on her arms in quiet reflection"} />
          </div>
        </div>
      </section>
      <section className="beliefs-section">
        <div className="beliefs-header">
          <h2 className="beliefs-title">{"What We Believe In"}</h2>
          <p className="beliefs-subtitle">
            {"Our values guide everything we do and shape the safe, supportive community we create for every woman."}
          </p>
        </div>
        <div className="beliefs-grid">
          {beliefsData.map((item) => (
            <div key={item.id} className="belief-card">
              <div className="belief-icon-circle">
                <img className="belief-icon-glyph" src={item.icon} alt="" />
              </div>
              <h3 className="belief-item-title">{item.title}</h3>
              <p className="belief-item-text">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      
        <section id="services-section" className="services-section">
        <h2 className="services-heading">{"Our Services"}</h2>
        <div className="services-grid">
          <div className="service-card service-card-dark">
            <div className="service-icon-wrap">
              <img src={recoveryIcon} alt={"A mother and daughter holding hands"} />
            </div>
            <h3 className="service-title">{"6 Week Recovery Program"}</h3>
            <p className="service-text">
              {"A guided, faith based program to help you process grief, rebuild your karamah, and create a hopeful path forward"}
            </p>
            <p className="program-truth-preview">{programTruths[3]}</p>
            <a
              className="program-link"
              href="#program-truths"
              onClick={(event) => {
                event.preventDefault()
                const truthsSection = document.getElementById('program-truths')
                if (!truthsSection) return

                window.history.pushState(null, '', '#program-truths')
                truthsSection.scrollIntoView({ behavior: 'instant', block: 'start' })
              }}
            >
              {"Read more on our perspective"} <span aria-hidden="true">{"\u2192"}</span>
            </a>
          </div>
          <div className="service-card service-card-light">
            <div className="service-icon-wrap">
              <img src={coachingIcon} alt={"Two women having a supportive coaching conversation"} />
            </div>
            <h3 className="service-title service-title-accent">{"One on One Coaching Session"}</h3>
            <p className="service-text">
              {"Personalized support tailored to your unique journey, with compassionate guidance and practical tools"}
            </p>
          </div>
        </div>
      </section>
      <section className="support-comparison-section" aria-labelledby="support-comparison-title">
        <div className="support-comparison-inner">
          <div className="support-comparison-heading">
            <h2 id="support-comparison-title">{"No single option offers all of this."}</h2>
            <p>
              {"Care2Elevate brings faith, structure, and a women-only online community together in one guided program."}
            </p>
          </div>
          <div className="support-comparison-table-wrap" role="region" aria-label="Support options comparison" tabIndex="0">
            <table className="support-comparison-table">
              <thead>
                <tr>
                  <th scope="col">{"What support includes"}</th>
                  <th scope="col" className="comparison-care">{"Care2Elevate"}</th>
                  <th scope="col">{"Islamic centres"}</th>
                  <th scope="col">{"Secular counselling"}</th>
                  <th scope="col">{"Online communities"}</th>
                </tr>
              </thead>
              <tbody>
                {supportComparison.map((item) => (
                  <tr key={item.label}>
                    <th scope="row">{item.label}</th>
                    {item.availability.map((available, index) => (
                      <td
                        key={`${item.label}-${index}`}
                        className={`${index === 0 ? 'comparison-care ' : ''}${available ? 'comparison-available' : 'comparison-unavailable'}`}
                        aria-label={available ? 'Included' : 'Not listed'}
                      >
                        {available ? '\u2713' : '\u2014'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="healing-journey" className="healing-journey-section" aria-labelledby="healing-journey-title">
        <div className="healing-journey-inner">
          <div className="healing-journey-heading">
            <div>
              <h2 id="healing-journey-title">{"Our Healing Journey"}</h2>
              <p>
                {"Six weeks rooted in Islamic teaching, the stories of the Prophets, and the wisdom of Ibn al-Qayyim and Al-Ghazali."}
              </p>
            </div>
          </div>
          <ol className="healing-timeline">
            {healingWeeks.map((item, index) => (
              <li className="healing-timeline-item" key={item.week}>
                <span className="healing-timeline-node">{index + 1}</span>
                <span className="healing-timeline-dash" aria-hidden="true"></span>
                <p className="healing-timeline-week">{"Week "}{item.week}</p>
                <h3 className="healing-timeline-title">{item.title}</h3>
                <p className="healing-timeline-phase">{item.phase}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="program-truths" className="program-truths">
        <div className="program-truths-header">
          <h2 className="program-truths-title">{"From divorce to a new beginning"}</h2>
          <p className="program-truths-subtitle">
            {"These truths guide our work and remind us that healing after divorce is possible, meaningful, and full of new beginnings."}
          </p>
        </div>
        <ol className="program-truths-list">
          {programTruths.map((item, index) => (
            <li key={item} className="program-truth-item truth-coral">
              <span className="program-truth-number">{index + 1}</span>
              <div className="program-truth-card">
                <p>{item}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section id="about-section" className="identity-section">
        <div className="identity-media">
          <img src={aboutImage} alt={"Woman wearing halal outdoors"} />
        </div>
        <div className="identity-panel">
          <div className="identity-block">
            <h3 className="identity-title">{"Who We Are"}</h3>
            <p className="identity-text">
              {"A compassionate, online, women-only support program for divorced Muslim women, a virtual sanctuary for healing from grief, reflection and personal growth, rooted in Faith through Islamic teaching."}
            </p>
          </div>
          <div className="identity-block">
            <h3 className="identity-title">{"Our Vision"}</h3>
            <p className="identity-text">
              {"Our vision is to create a world where Muslim women are supported and empowered to make healthier choices, rebuild their lives with faith and clarity, and move forward with confidence and karamah."}
            </p>
          </div>
        </div>
      </section>
  
      <section className="founder-section">
        <div className="founder-media">
          <img src={founderImage} alt={"Portrait of Mariam Azimi"} />
        </div>
        <div className="founder-copy">
          <h2 className="founder-title">{"Meet Mariam Azimi"}</h2>
          <p className="founder-text">
            {"Mariam founded Care2Elevate after experiencing firsthand the loneliness, uncertainty, and stigma that can accompany divorce."}
          </p>
          <p className="founder-text">
            {"Her mission is to create a safe, compassionate space where Muslim women can heal, reconnect, and rebuild with guidance rooted in faith and spirituality."}
          </p>
          <p className="founder-text">
            {"Through Care2Elevate, she believes in using faith as a source of strength - helping women rediscover their dignity, find peace, and confidently step into their next chapter. She holds a B.A from the University of Massachusetts and has training in grief facilitation, trauma resilience, and compassion meditation."}
          </p>
          <a
            className="home-cta home-cta-secondary founder-cta"
            href="https://www.99clayvessels.com/mariam-azimi"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Learn More"}
          </a>
        </div>
      </section>
      <section className="values-grid">
        <div className="value-card value-card-coral">
          <div className="value-icon-circle">
            <img className="value-icon-img" src={flexibilityIcon} alt="" />
          </div>
          <h3 className="value-title">{"Sakinah"}</h3>
          <span className="value-underline"></span>
          <p className="value-text">
            {"Sakinah is the deep peace that comes from trusting Allah's plan. It is a sense of calm in the heart, even amid life's challenges and the assurance that you are never alone."}
          </p>
        </div>
        <div className="value-media value-media-coral">
          <img className="value-media-family" src={familyImage} alt={"Islamic family together at home"} />
        </div>
        <div className="value-card value-card-green">
          <div className="value-icon-circle">
            <img className="value-icon-img" src={faithIcon} alt="" />
          </div>
          <h3 className="value-title">{"Sabr"}</h3>
          <span className="value-underline"></span>
          <p className="value-text">
            {"Sabr is the strength to persevere through difficulties with faith and steadfastness. It is trusting in Allah's wisdom, even when the path is unclear, and believing that ease follows hardship"}
          </p>
        </div>
        <div className="value-media value-media-green">
          <img className="value-media-group" src={groupImage} alt={"Two Muslim girls spending time together"} />
        </div>
        <div className="value-card value-card-orange">
          <div className="value-icon-circle">
            <img className="value-icon-img" src={leadershipIcon} alt="" />
          </div>
          <h3 className="value-title">{"Karamah"}</h3>
          <span className="value-underline"></span>
          <p className="value-text">
            {"Karamah is the inherent dignity and value that Allah has given to every person. It means knowing your worth, honoring your boundaries, and living with self-respect and purpose"}
          </p>
        </div>
        <div className="value-media value-media-orange">
          <img className="value-media-praying" src={prayingImage} alt={"Woman praying indoors"} />
        </div>
      </section>
      <section className="quote-banner-container">
        <div className="quote-content-wrapper">
          <blockquote className="quran-quote">
            “Perhaps you dislike something which is good for you and like something which is bad for you. Allah knows and you do not know”.
          </blockquote>
          <cite className="quote-source">AL-BAQARAH (2:216)</cite>
        </div>
      </section>
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
