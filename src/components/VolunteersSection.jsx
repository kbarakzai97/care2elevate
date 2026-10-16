import { Link } from 'react-router-dom'
import './volunteers-section.css'

const volunteers = [
  {
    key: 'azi-rosli',
    name: 'Azi Rosli',
    role: 'Volunteer',
    tag: 'Volunteer',
    quote: 'I enjoy volunteering with Care2Elevate because I genuinely value the people and the heart behind the organization. The leadership is open-minded, approachable, and generous in sharing their knowledge, experience, and wisdom. That creates an environment where volunteers feel supported, valued, and encouraged to grow. There is something incredibly powerful about creating spaces where women can meet new people, build meaningful friendships, share their experiences, and support one another through life\'s challenges.',
    photo: null,
    featured: true,
  },
]

export default function VolunteersSection({ id = 'volunteers' }) {
  return (
    <main id={id} className="vol-page">

      {/* Editorial ruled header */}
      <div className="vol-hero">
        <div className="vol-hero-top">
          <h1 className="vol-hero-title">Our Volunteers</h1>
          <span className="vol-hero-tag">Our Community</span>
        </div>
        <div className="vol-hero-bottom">
          <p className="vol-hero-subtitle">The hearts that make Care2Elevate possible.</p>
          <div className="vol-pills">
            <span className="vol-pill">Community</span>
            <span className="vol-pill">Faith</span>
            <span className="vol-pill">Service</span>
          </div>
        </div>
      </div>

      {/* Gratitude band */}
      <div className="vol-thanks">
        <span className="vol-thanks-eyebrow">With deep gratitude</span>
        <h2 className="vol-thanks-heading">Care2Elevate exists because of people like you.</h2>
        <p className="vol-thanks-text">Our volunteers show up with compassion, patience, and purpose. They give their time so that others don't have to heal alone. Every message answered, every session held, every resource shared — it starts with them.</p>
      </div>

      {/* Featured quote strip */}
      <div className="vol-quote-strip">
        <div className="vol-quote-rule" />
        <div className="vol-quote-content">
          <p className="vol-quote-text">"I came to Care2Elevate as someone who had been through divorce myself. Volunteering gave me a way to turn that pain into something meaningful — and I found my own healing deepened in the process."</p>
          <span className="vol-quote-attr">— Volunteer, Care2Elevate Community</span>
        </div>
      </div>

      {/* Volunteer spotlights */}
      <div className="vol-spotlights">
        <p className="vol-spotlights-label">Volunteer Spotlight</p>
        <div className="vol-spotlights-grid">
          {volunteers.filter(v => v.featured).map(v => (
            <article key={v.key} className="vol-card vol-card--featured">
              <div className="vol-card-photo">
                {v.photo
                  ? <img src={v.photo} alt={v.name} loading="lazy" />
                  : 'Photo'}
              </div>
              <div className="vol-card-body">
                <div>
                  <p className="vol-card-name">{v.name}</p>
                  <p className="vol-card-role">{v.role}</p>
                </div>
                <p className="vol-card-quote">"{v.quote}"</p>
                <span className="vol-card-tag">{v.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Coming soon */}
      <div className="vol-coming-soon">
        <div className="vol-coming-soon-inner">
          <div className="vol-coming-soon-dot" />
          <p className="vol-coming-soon-text">More volunteer stories coming soon — we'd love to feature yours.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="vol-cta">
        <div className="vol-cta-copy">
          <h2 className="vol-cta-heading">Want to get involved?</h2>
          <p className="vol-cta-text">Reach out and let us know how you'd like to contribute.</p>
        </div>
        <Link className="vol-cta-btn" to="/care2elevate/contact">Get in touch →</Link>
      </div>

    </main>
  )
}
