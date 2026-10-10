import { Link } from 'react-router-dom'
import './contact-cta-section.css'

export default function ContactCtaSection({
  headingId = 'contact-cta-title',
  title = 'Ready to Begin Your Healing Journey?',
  description = "Have a question or want to learn more about our programs? We'd love to hear from you.",
  ctaLabel = 'Contact Us',
  ctaTo = '/care2elevate/contact'
}) {
  return (
    <section className="contact-cta-section" aria-labelledby={headingId}>
      <div className="contact-cta-inner">
        <div className="contact-cta-copy">
          <h2 id={headingId} className="contact-cta-title">{title}</h2>
          <p className="contact-cta-text">{description}</p>
        </div>
        <Link className="home-cta home-cta-primary contact-cta-button" to={ctaTo}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}
