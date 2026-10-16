import aziRosliImage from '../assets/azi rosli.jpeg'
import './volunteers-section.css'

const volunteers = [
  {
    key: 'azi-rosli',
    name: 'Azi Rosli',
    role: 'Volunteer',
    tag: 'Volunteer',
    quote: 'I enjoy volunteering with Care2Elevate because I genuinely value the people and the heart behind the organization. The leadership is open-minded, approachable, and generous in sharing their knowledge, experience, and wisdom. That creates an environment where volunteers feel supported, valued, and encouraged to grow. There is something incredibly powerful about creating spaces where women can meet new people, build meaningful friendships, share their experiences, and support one another through life\'s challenges.',
    photo: aziRosliImage,
    featured: true,
  },
]

export default function VolunteersSection({ id = 'volunteers' }) {
  return (
    <main id={id} className="vol-page">

      {/* Page title + gratitude intro */}
      <div className="vol-thanks">
        <h1 className="vol-hero-title">Our Volunteers</h1>
        <span className="vol-thanks-eyebrow">With deep gratitude</span>
        <h2 className="vol-thanks-heading">Care2Elevate exists because of people like you.</h2>
        <p className="vol-thanks-text">Our volunteers show up with compassion, patience, and purpose. They give their time so that others don't have to heal alone. Every message answered, every session held, every resource shared — it starts with them.</p>
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

    </main>
  )
}
