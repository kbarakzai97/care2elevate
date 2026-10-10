import heroBackground from '../assets/istockphoto-1973088350-1024x1024.jpg'
import { Link } from 'react-router-dom'
import './hero-section.css'

export default function HeroSection({
  headingId = 'home-title',
  title = 'A New Chapter Rooted in Dignity and Peace',
  description = 'Care2Elevate guides divorced Muslim women through a compassionate online program, rooted in Islamic teachings that helps them process grief, restore their karamah and sakinah, and step forward with clarity.',
  ctaLabel = 'Begin Your Journey',
  ctaTo = '/care2elevate/resources',
  backgroundSrc = heroBackground
}) {
  return (
    <section
      className="home-hero"
      aria-labelledby={headingId}
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <div className="home-hero-copy">
        <h1 id={headingId} className="home-title">
          {title}
        </h1>
        <p className="home-description">{description}</p>
        <Link className="home-hero-cta" to={ctaTo}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}
