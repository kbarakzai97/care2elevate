import workshopImage from '../assets/sixweekrecovery.jpg'
import { HashLink } from 'react-router-hash-link'
import './program-highlight.css'

export default function ProgramHighlight({
  id = 'program-highlight',
  eyebrow = '6-Week Program',
  title = 'Divorce Recovery Group / Virtual Workshop',
  description = "A comprehensive and compassionate guide designed to help you navigate the intricate terrain of the grief cycle, overcome the profound loss of a marriage, and empower yourself to move forward with confidence and mindfulness. Divorce is undoubtedly one of life’s most challenging experiences, ushering in a wave of emotions that can be overwhelming and complex. In the midst of heartache and change, it’s crucial to recognize that healing is not a linear path but a journey through the multifaceted stages of grief. Understanding the intricate layers of grief acknowledging the pain, anger, and sadness that often accompany the end of a marriage. Gaining insight into your emotions, allows you to navigate the grief cycle and build yourself up both emotionally and mentally will better enable you to elevate yourself into an opportunity for a new beginning.",
  ctaLabel = 'Contact Us',
  ctaTo = '/care2elevate/contact',
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
