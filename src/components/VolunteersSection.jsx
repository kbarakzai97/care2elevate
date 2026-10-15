import { Link } from 'react-router-dom'
import './volunteers-section.css'

const roles = [
  {
    key: 'peer-support',
    tag: 'Support',
    title: 'Peer Support Volunteer',
    desc: 'Offer compassionate listening and support to women navigating post-divorce grief in our WhatsApp communities. No professional background required — just empathy, patience, and lived experience.',
    commitment: 'Flexible · Virtual',
    accent: 'vol-card-sage',
  },
  {
    key: 'facilitator',
    tag: 'Programs',
    title: 'Workshop Facilitator',
    desc: 'Lead or co-facilitate our 6-week divorce recovery program sessions. Full training is provided by Care2Elevate. Ideal for those with a background in counseling, social work, or community education.',
    commitment: 'Weekly · Virtual',
    accent: 'vol-card-teal',
  },
  {
    key: 'outreach',
    tag: 'Outreach',
    title: 'Outreach & Awareness',
    desc: 'Help spread the word at local masjids, community events, and online to connect those in need with our resources. Great for people with strong community connections or a passion for advocacy.',
    commitment: 'As needed · In-person or virtual',
    accent: 'vol-card-sage',
  },
  {
    key: 'content',
    tag: 'Communications',
    title: 'Content & Social Media',
    desc: 'Support Care2Elevate\'s online presence by creating thoughtful content that raises awareness about post-divorce grief in the Muslim community and highlights our programs and resources.',
    commitment: 'Part-time · Remote',
    accent: 'vol-card-teal',
  },
  {
    key: 'translation',
    tag: 'Accessibility',
    title: 'Translation & Interpretation',
    desc: 'Help make our resources accessible to non-English-speaking communities by translating materials or providing live interpretation during sessions. Arabic, Urdu, Somali, and French especially needed.',
    commitment: 'Project-based · Remote',
    accent: 'vol-card-sage',
  },
]

export default function VolunteersSection({ id = 'volunteers' }) {
  return (
    <main id={id} className="vol-page">

      {/* Editorial ruled header */}
      <div className="vol-hero">
        <div className="vol-hero-top">
          <h1 className="vol-hero-title">Volunteers</h1>
          <span className="vol-hero-tag">Get Involved</span>
        </div>
        <div className="vol-hero-bottom">
          <p className="vol-hero-subtitle">Join our community and help others heal.</p>
          <div className="vol-pills">
            <span className="vol-pill">Virtual</span>
            <span className="vol-pill">Faith-based</span>
            <span className="vol-pill">Community</span>
          </div>
        </div>
      </div>

      {/* Lead band */}
      <div className="vol-lead">
        <p className="vol-lead-text">
          Care2Elevate is powered by a community of dedicated volunteers who believe that no one should walk the road of divorce alone. Whether you bring professional skills, lived experience, or simply a caring heart — there is a place for you here.
        </p>
        <p className="vol-lead-text">
          All volunteers receive orientation and ongoing support from our team. We are committed to creating a safe, faith-informed space for both those who receive support and those who give it.
        </p>
      </div>

      {/* Volunteer roles */}
      <div className="vol-roles">
        <p className="vol-section-label">Open Roles</p>
        <div className="vol-grid">
          {roles.map((role) => (
            <article key={role.key} className={`vol-card ${role.accent}`}>
              <p className="vol-card-tag">{role.tag}</p>
              <h2 className="vol-card-title">{role.title}</h2>
              <p className="vol-card-desc">{role.desc}</p>
              <p className="vol-card-commitment">{role.commitment}</p>
              <Link
                className="vol-card-btn"
                to="/care2elevate/contact"
              >
                Apply now ↗
              </Link>
            </article>
          ))}
        </div>
      </div>

    </main>
  )
}
