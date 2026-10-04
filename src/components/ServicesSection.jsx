import recoveryIcon from '../assets/sixweekrecovery.jpg'
import coachingIcon from '../assets/oneononecoaching.jpg'
import { scrollToSection } from '../utils/scrollToSection'
import './services-section.css'

export default function ServicesSection({
  id = 'services-section',
  heading = 'Our Services',
  recoveryIconSrc = recoveryIcon,
  recoveryIconAlt = 'A mother and daughter holding hands',
  recoveryTitle = '6 Week Recovery Program',
  recoveryText = 'A guided, faith based program to help you process grief, rebuild your karamah, and create a hopeful path forward',
  recoveryHighlightedTruth = 'Healing is not forgetting what happened; it is learning not to let it choose for you again.',
  recoveryLinkLabel = 'Read more on our perspective',
  recoveryTargetId = 'program-truths',
  coachingIconSrc = coachingIcon,
  coachingIconAlt = 'Two women having a supportive coaching conversation',
  coachingTitle = 'One on One Coaching Session',
  coachingText = 'Personalized support tailored to your unique journey, with compassionate guidance and practical tools'
}) {
  return (
    <section id={id} className="services-section">
      <h2 className="services-heading">{heading}</h2>
      <div className="services-grid">
        <div className="service-card service-card-dark">
          <div className="service-icon-wrap">
            <img src={recoveryIconSrc} alt={recoveryIconAlt} loading="lazy" />
          </div>
          <h3 className="service-title">{recoveryTitle}</h3>
          <p className="service-text">{recoveryText}</p>
          <p className="program-truth-preview">{recoveryHighlightedTruth}</p>
          <a
            className="program-link"
            href={`#${recoveryTargetId}`}
            onClick={scrollToSection(recoveryTargetId)}
          >
            {recoveryLinkLabel} <span aria-hidden="true">{'\u2192'}</span>
          </a>
        </div>
        <div className="service-card service-card-light">
          <div className="service-icon-wrap">
            <img src={coachingIconSrc} alt={coachingIconAlt} loading="lazy" />
          </div>
          <h3 className="service-title service-title-accent">{coachingTitle}</h3>
          <p className="service-text">{coachingText}</p>
        </div>
      </div>
    </section>
  )
}
