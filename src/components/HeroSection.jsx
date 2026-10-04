import heroimage from '../assets/herophoto.webp'
import { Link } from 'react-router-dom'
import './hero-section.css'

const defaultStats = [
  { key: 'years', value: '10+', label: 'Years' },
  { key: 'clients', value: '500+', label: 'Clients' },
  { key: 'events', value: '100+', label: 'Events' },
  { key: 'volunteers', value: '50+', label: 'Volunteers' }
]

export default function HeroSection({
  headingId = 'home-title',
  title = 'A New Chapter Rooted in Dignity and Peace',
  description = 'Care2Elevate guides divorced Muslim women through a compassionate online program, rooted in Islamic teachings that helps them process grief, restore their karamah and sakinah, and step forward with clarity.',
  ctaLabel = 'Begin Your Journey',
  ctaTo = '/care2elevate/resources',
  imageSrc = heroimage,
  imageAlt = 'Hero image showing a woman wearing a hijab having a good time',
  stats = defaultStats
}) {
  return (
    <section className="home-hero" aria-labelledby={headingId}>
      <div className="home-hero-copy">
        <h1 id={headingId} className="home-title">
          {title}
        </h1>
        <p className="home-description">{description}</p>
        <Link className="home-hero-cta" to={ctaTo}>
          {ctaLabel}
        </Link>
        <dl className="home-hero-stats">
          {stats.map((stat) => (
            <div key={stat.key} className="home-hero-stat">
              <dt className="home-hero-stat-label">{stat.label}</dt>
              <dd className="home-hero-stat-value">{stat.value}</dd>
            </div>
          ))}
        </dl>
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
