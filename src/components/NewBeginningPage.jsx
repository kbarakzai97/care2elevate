import familyImage from '../assets/women-wearing-hijab-having-good-time.webp'
import HealingJourneySection from './HealingJourneySection'
import './new-beginning-page.css'

const focusPoints = [
  'Understand the intricate layers of the grief cycle',
  'Acknowledge the pain, anger, and sadness that often accompany the end of a marriage',
  'Build yourself up both emotionally and mentally',
  'Move forward with confidence and mindfulness into a new beginning'
]

const truths = [
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
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" />
      <path d="M5.5 10.5l3 3 6-6.5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function NewBeginningPage() {
  return (
    <main className="nb-page">

      {/* Page title */}
      <div className="nb-hero">
        <h1 className="nb-hero-title">Programs</h1>
      </div>

      {/* Featured program card */}
      <article className="nb-featured">
        <div className="nb-featured-img">
          <img src={familyImage} alt="Women wearing hijab smiling and enjoying time together" loading="lazy" />
        </div>
        <div className="nb-featured-content">
          <span className="nb-featured-eyebrow">✦ Current Program</span>
          <h2 className="nb-featured-title">6-Week Divorce Recovery Program</h2>
          <p className="nb-featured-text">
            A comprehensive and compassionate guide designed to help you navigate the intricate terrain of the grief cycle, overcome the profound loss of a marriage, and empower yourself to move forward with confidence and mindfulness. Divorce is undoubtedly one of life&rsquo;s most challenging experiences, ushering in a wave of emotions that can be overwhelming and complex. In the midst of heartache and change, it&rsquo;s crucial to recognize that healing is not a linear path but a journey through the multifaceted stages of grief.
          </p>
          <h3 className="nb-featured-subheading">Divorce Recovery Group / Virtual Workshop</h3>
          <p className="nb-featured-text">
            Our 6-week virtual workshop, Understanding the Grief Cycle, offers a confidential, faith-centered circle where you can process your loss alongside others who understand. Connect with us to learn more about the registration process.
          </p>
          <ul className="nb-checklist">
            {focusPoints.map((point) => (
              <li key={point}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Healing journey timeline */}
      <HealingJourneySection />

      {/* Truths + portrait */}
      <section className="nb-split">
        <div>
          <h2 className="nb-truths-heading">From Divorce to a New Beginning</h2>
          <p className="nb-truths-intro">
            These truths guide our work and remind us that healing after divorce is possible, meaningful, and full of new beginnings.
          </p>
          <ul className="nb-truths">
            {truths.map((truth) => (
              <li key={truth}>{truth}</li>
            ))}
          </ul>
        </div>
        <img className="nb-portrait" src={familyImage} alt="Women wearing hijab smiling and enjoying time together" loading="lazy" />
      </section>

    </main>
  )
}
