import workshopImage from '../assets/sixweekrecovery.jpg'
import { HashLink } from 'react-router-hash-link'
import './program-highlight.css'

export default function ProgramHighlight({
  id = 'program-highlight',
  eyebrow = '6-Week Program',
  title = 'Divorce Recovery Group / Virtual Workshop',
  description = 'Divorce Recovery workshop (Understanding the Grief Cycle). Connect to learn more about the registration process.',
  ctaLabel = 'Contact Us',
  ctaTo = '/care2elevate/#contact-section',
  imageSrc = workshopImage,
  imageAlt = 'Women supporting each other during a divorce recovery workshop'
}) {
  return (
    <section id={id} className="program-highlight">
      <div className="program-highlight-media">
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
      <div className="program-highlight-content">
        <span className="program-highlight-eyebrow">
          <span className="program-highlight-eyebrow-line" aria-hidden="true"></span>
          {eyebrow}
        </span>
        <h2 className="program-highlight-title">{title}</h2>
        <p className="program-highlight-text">{description}</p>
        <HashLink smooth to={ctaTo} className="program-highlight-cta">
          {ctaLabel}
        </HashLink>
      </div>
    </section>
  )
}
