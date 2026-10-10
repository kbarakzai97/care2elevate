import { Link } from 'react-router-dom'
import beliefsImage from '../assets/programs.webp'
import './beliefs-section.css'

const defaultBeliefs = [
  {
    id: 1,
    title: 'Compassion',
    description: 'We believe pain should be met with mercy, no judgement. So we create a space where every woman can speak without shame, and no story is ever dismissed.'
  },
  {
    id: 2,
    title: 'Faith',
    description: 'We believe healing is deeper when it is rooted in deen. So we guide every woman through Islamic teachings, prophetic stories, and the trust of tawakkul, never preaching, always grounding.'
  },
  {
    id: 3,
    title: 'Flexibility',
    description: 'We believe healing has no fixed timeline. So we never rush a woman to "move on", we meet her where she is and move at her pace.'
  },
  {
    id: 4,
    title: 'Leadership',
    description: 'We believe a healed woman becomes a light for others. So we help each woman find her voice, knowing she may become the safe space the next woman needs.'
  }
]

export default function BeliefsSection({
  title = 'What We Believe In',
  subtitle = 'Our values guide everything we do and shape the safe, supportive community we create for every woman.',
  beliefs = defaultBeliefs,
  imageSrc = beliefsImage,
  imageAlt = 'Three Muslim women greeting each other warmly',
  ctaLabel = 'Learn More',
  ctaTo = '/care2elevate/our-story'
}) {
  return (
    <section className="beliefs-section">
      <div className="beliefs-media">
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
      <div className="beliefs-copy">
        <h2 className="beliefs-title">{title}</h2>
        <p className="beliefs-subtitle">{subtitle}</p>
        <ul className="beliefs-list">
          {beliefs.map((item) => (
            <li key={item.id} className="belief-item">
              <h3 className="belief-item-title">{item.title}</h3>
              <p className="belief-item-text">{item.description}</p>
            </li>
          ))}
        </ul>
        {ctaLabel && (
          <Link className="beliefs-cta" to={ctaTo}>
            {ctaLabel}
            <span aria-hidden="true">&#8599;</span>
          </Link>
        )}
      </div>
    </section>
  )
}
