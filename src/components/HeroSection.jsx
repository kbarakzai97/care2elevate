import heroimage from '../assets/herophoto.webp'
import { scrollToSection } from '../utils/scrollToSection'
import './hero-section.css'

export default function HeroSection({
  headingId = 'home-title',
  title = 'A New Chapter Rooted in Dignity and Peace',
  description = 'Care2Elevate guides divorced Muslim women through a compassionate online program, rooted in Islamic teachings that helps them process grief, restore their karamah and sakinah, and step forward with clarity.',
  ctaLabel = 'Begin Your Journey',
  ctaTargetId = 'services-section',
  imageSrc = heroimage,
  imageAlt = 'Hero image showing a woman wearing a hijab having a good time'
}) {
  return (
    <section className="home-hero" aria-labelledby={headingId}>
      <div className="home-hero-copy">
        <h1 id={headingId} className="home-title">
          {title}
        </h1>
        <p className="home-description">{description}</p>
        <a className="home-hero-cta" href={`#${ctaTargetId}`} onClick={scrollToSection(ctaTargetId)}>
          {ctaLabel}
        </a>
      </div>
      <div className="home-hero-media">
        <img
          className="home-hero-image"
          src={imageSrc}
          alt={imageAlt}
          width="1145"
          height="1374"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
