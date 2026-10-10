import whyImage from '../assets/woman-hijab-laptop-home.webp'
import './why-choose-us-section.css'

const defaultPoints = [
  'Faith-rooted guidance',
  'Structured 6-week program',
  'Women-only community',
  'Trained grief facilitators'
]

const defaultStats = [
  { key: 'years', value: '10+', label: 'Years' },
  { key: 'clients', value: '500+', label: 'Clients' },
  { key: 'events', value: '100+', label: 'Events' },
  { key: 'volunteers', value: '50+', label: 'Volunteers' }
]

export default function WhyChooseUsSection({
  headingId = 'why-choose-us-title',
  eyebrow = 'Why Choose Us',
  title = 'A Safe Space to Heal, Rooted in Faith',
  description = 'Care2Elevate is more than a program. It is a community of Muslim women who understand what you are walking through. We bring together Islamic teachings, grief-recovery tools, and gentle guidance so you can process the end of your marriage, restore your karamah, and step into your next chapter with sakinah.',
  points = defaultPoints,
  stats = defaultStats,
  imageSrc = whyImage,
  imageAlt = 'Smiling woman wearing a hijab using a laptop at home'
}) {
  return (
    <section className="why-choose-us-section" aria-labelledby={headingId}>
      <div className="why-choose-us-media">
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
      <div className="why-choose-us-panel">
        {title ? (
          <>
            <p className="why-choose-us-eyebrow">{eyebrow}</p>
            <h2 id={headingId} className="why-choose-us-title">{title}</h2>
          </>
        ) : (
          <h2 id={headingId} className="why-choose-us-eyebrow">{eyebrow}</h2>
        )}
        {description && <p className="why-choose-us-description">{description}</p>}
        {points.length > 0 && (
          <ul className="why-choose-us-points">
            {points.map((point) => (
              <li key={point} className="why-choose-us-point">
                <span className="why-choose-us-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14">
                    <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        )}
        <dl className="why-choose-us-stats">
          {stats.map((stat) => (
            <div key={stat.key} className="why-choose-us-stat">
              <dt className="why-choose-us-stat-label">{stat.label}</dt>
              <dd className="why-choose-us-stat-value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
