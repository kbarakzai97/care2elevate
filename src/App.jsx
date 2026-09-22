import { useState } from 'react'
import heroimage from './assets/women-wearing-hijab-having-good-time.jpg'
import image1 from './assets/muslim-women-traveling-paris-together.jpg'
import reflectionImage from './assets/medium-shot-women-with-laptop.jpg'
import coachingIcon from './assets/oneononecoaching.jpg'
import recoveryIcon from './assets/sixweekrecovery.jpg'
import founderImage from './assets/beautiful-woman-wearing-hijab.jpg'
import handsImage from './assets/mother-daughter-holding-hands-together-white-background-closeup.jpg'
import friendsOutdoorImage from './assets/islamic-women-friends-talking-having-fun.jpg'
import handshakeImage from './assets/happy-smiling-muslim-islamic-woman-hijab-businesswoman-recruit-client-handshake-shake-arms-female.jpg'
import aboutImage from './assets/medium-shot-woman-wearing-halal-outdoors.jpg'
import { BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <section className="home-hero" aria-labelledby="home-title">
        <img
          className="home-hero-image"
          src={heroimage}
          alt={"Hero image showing a woman wearing a hijab having a good time"}
        />
        <div className="home-card">
          <h1 id="home-title" className="home-title">
            {"A New Chapter Rooted in Dignity and Peace"}
          </h1>
          <p className="home-description">
            {"Care2Elevate guides divorced Muslim women through a compassionate online program, rooted in "}
            {"Islamic teachings that helps them process grief, restore their karamah and sakinah, and step "}
            {"forward with clarity."}
          </p>
          <div className="home-cta-group">
            <Link className="home-cta home-cta-primary" to="">
              {"Get Started"}
            </Link>
            <Link className="home-cta home-cta-secondary" to="">
              {"Learn More"}
            </Link>
          </div>
        </div>
      </section>
      <section className="story-section">
        <div className="story-row">
          <div className="story-media">
            <img src={image1} alt={"Three friends smiling and taking a selfie together"} />
          </div>
          <div className="story-copy">
            <p className="story-eyebrow">{"Our Story"}</p>
            <h2 className="story-title">
              {"Divorce may close one chapter, but it doesn't diminish the woman who lived it."}
            </h2>
            <p className="story-text">
              {"Care2Elevate challenges the expectation that divorced Muslim women should simply \"move on\" and carry the weight of healing alone. Instead, we create a safe, faith-centered sisterhood where women are given permission to pause, process, and heal with intention."}
            </p>
          </div>
        </div>
        <div className="story-row story-row-reverse">
          <div className="story-copy">
            <p className="story-text">
              {"Here, divorce is not treated as a failure or something to quietly overcome. It is a life transition deserving of compassion, reflection, and meaningful support. Through spiritually grounded guidance, honest conversations, and community, women can process the grief of what was lost while rediscovering the strength, dignity, and identity that remain."}
            </p>
            <p className="story-text">
              {"Care2Elevate is a space to restore karamah (dignity), find sakinah (peace), and move forward with greater clarity and confidence. Because rebuilding after divorce isn't simply about moving on—it's about moving forward with faith, purpose, and a renewed sense of self."}
            </p>
            <Link className="home-cta home-cta-secondary story-cta" to="">
              {"Get Started"}
            </Link>
          </div>
          <div className="story-media">
            <img src={reflectionImage} alt={"Woman resting her head on her arms in quiet reflection"} />
          </div>
        </div>
      </section>
        <section className="services-section">
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
      <section className="about-container">
        <div className="about-copy-col">
          <p className="about-label">{"About US"}</p>
          <h2 className="about-title">{"Who we are"}</h2>
          <p className="about-text">
            <span className="about-dropcap">{"A"}</span>
            {" compassionate, online, women-only support program for divorced Muslim women, a virtual sanctuary for healing from grief, reflection and personal growth, rooted in Faith through Islamic teaching."}
          </p>
          <p className="about-text">
            {"We envision a world where Muslim women are supported and empowered to make healthier choices, rebuild their lives with faith and clarity, and move forward with confidence and karamah."}
          </p>
        </div>
        <div className="about-copy-col">
          <h2 className="about-title">{"Our vision"}</h2>
          <p className="about-text">
            <span className="about-dropcap">{"O"}</span>
            {"ur vision is to create a world where Muslim women are supported and empowered to make healthier choices, rebuild their lives with faith and clarity, and move forward with confidence and karamah."}
          </p>
          <p className="about-text">
            {"We envision a world where Muslim women are supported and empowered to make healthier choices, rebuild their lives with faith and clarity, and move forward with confidence and karamah."}
          </p>
        </div>
      </section>
      <section className="founder-section">
        <div className="founder-media">
          <img src={founderImage} alt={"Portrait of Mariam Azimi"} />
        </div>
        <div className="founder-copy">
          <p className="founder-eyebrow">{"Our Founder"}</p>
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
        <div className="value-tile value-tile-dark">
          <h3 className="value-title">{"Sakinah"}</h3>
          <p className="value-text">
            {"Sakinah is the deep peace that comes from trusting Allah's plan. It is a sense of calm in the heart, even amid life's challenges and the assurance that you are never alone."}
          </p>
        </div>
        <div className="value-tile value-tile-media">
          <img src={handsImage} alt={"Two people holding hands in a gesture of support"} />
        </div>
        <div className="value-tile value-tile-light">
          <h3 className="value-title">{"Sabr"}</h3>
          <p className="value-text">
            {"Sabr is the strength to persevere through difficulties with faith and steadfastness. It is trusting in Allah's wisdom, even when the path is unclear, and believing that ease follows hardship"}
          </p>
        </div>
        <div className="value-tile value-tile-media">
          <img src={friendsOutdoorImage} alt={"Three friends laughing together outdoors"} />
        </div>
        <div className="value-tile value-tile-sage">
          <h3 className="value-title">{"Karamah"}</h3>
          <p className="value-text">
            {"Karamah is the inherent dignity and value that Allah has given to every person. It means knowing your worth, honoring your boundaries, and living with self-respect and purpose"}
          </p>
        </div>
        <div className="value-tile value-tile-media">
          <img src={handshakeImage} alt={"Two people shaking hands"} />
        </div>
      </section>
      
    
    </BrowserRouter>
  )
}

export default App
