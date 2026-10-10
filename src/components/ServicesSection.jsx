import recoveryIcon from '../assets/sixweekrecovery.jpg'
import coachingIcon from '../assets/oneononecoaching.jpg'
import recoveryPhoto from '../assets/front-view-islamic-family-home.webp'
import coachingPhoto from '../assets/coaching-session.webp'
import workshopsPhoto from '../assets/programs.webp'
import professionalsPhoto from '../assets/happy-smiling-muslim-islamic-woman-hijab-businesswoman-recruit-client-handshake-shake-arms-female.jpg'
import curriculumPhoto from '../assets/curriculum-development.webp'
import { Link } from 'react-router-dom'
import './services-section.css'

export default function ServicesSection({
  id = 'services-section',
  heading = 'Our Services',
  recoveryIconSrc = recoveryIcon,
  recoveryIconAlt = 'A mother and daughter holding hands',
  recoveryPhotoSrc = recoveryPhoto,
  recoveryPhotoAlt = 'A mother in hijab sitting with her young daughter at home',
  recoveryTitle = '6 Week Recovery Program',
  recoveryText = 'A guided, faith based program to help you process grief, rebuild your karamah, and create a hopeful path forward',
  recoveryHighlightedTruth = 'Healing is not forgetting what happened; it is learning not to let it choose for you again.',
  recoveryLinkLabel = 'Read more on our perspective',
  recoveryTo = '/care2elevate/new-beginning',
  coachingIconSrc = coachingIcon,
  coachingIconAlt = 'Two women having a supportive coaching conversation',
  coachingPhotoSrc = coachingPhoto,
  coachingPhotoAlt = 'A smiling woman in hijab on a video call with a headset',
  coachingTitle = 'One on One Coaching Session',
  coachingText = 'Personalized support tailored to your unique journey, with compassionate guidance and practical tools',
  workshopsPhotoSrc = workshopsPhoto,
  workshopsPhotoAlt = 'Three Muslim women greeting each other warmly',
  workshopsTitle = 'Workshops and Courses',
  workshopsText = 'Focused on healthy boundaries, trauma recovery, conflict resolution, and future relationship readiness.',
  professionalsPhotoSrc = professionalsPhoto,
  professionalsPhotoAlt = 'A smiling woman in hijab shaking hands with a client',
  professionalsTitle = 'Access to Professionals',
  professionalsText = 'Connecting participants to Muslim therapists, coaches, and scholars for personalized support.',
  curriculumPhotoSrc = curriculumPhoto,
  curriculumPhotoAlt = 'A woman in hijab working on a laptop at home',
  curriculumTitle = 'Curriculum Development',
  curriculumText = 'Culturally competent tools and exercises that guide individuals through self-discovery, healing, and empowerment.'
}) {
  return (
    <section id={id} className="services-section">
      <h2 className="services-heading">{heading}</h2>
      <div className="services-grid" role="region" aria-label="Our services" tabIndex="0">
        <article className="service-card">
          <div className="service-media">
            <img className="service-photo" src={recoveryPhotoSrc} alt={recoveryPhotoAlt} loading="lazy" />
            <div className="service-icon-wrap">
              <img src={recoveryIconSrc} alt={recoveryIconAlt} loading="lazy" />
            </div>
          </div>
          <h3 className="service-title">{recoveryTitle}</h3>
          <p className="service-text">{recoveryText}</p>
          <p className="program-truth-preview">{recoveryHighlightedTruth}</p>
          <Link className="program-link" to={recoveryTo}>
            {recoveryLinkLabel} <span aria-hidden="true">{'\u2192'}</span>
          </Link>
        </article>
        <article className="service-card">
          <div className="service-media">
            <img className="service-photo" src={coachingPhotoSrc} alt={coachingPhotoAlt} loading="lazy" />
            <div className="service-icon-wrap">
              <img src={coachingIconSrc} alt={coachingIconAlt} loading="lazy" />
            </div>
          </div>
          <h3 className="service-title">{coachingTitle}</h3>
          <p className="service-text">{coachingText}</p>
        </article>
        <article className="service-card">
          <div className="service-media">
            <img className="service-photo" src={workshopsPhotoSrc} alt={workshopsPhotoAlt} loading="lazy" />
            <div className="service-icon-wrap">
              {/* Graduation cap drawn to match the circular icons above */}
              <svg viewBox="0 0 80 80" aria-hidden="true">
                <circle cx="40" cy="40" r="40" fill="#5b7d74" />
                <g fill="none" stroke="#f6f1ea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 34l24-12 24 12-24 12z" />
                  <path d="M26 39v11c8 7 20 7 28 0V39" />
                  <path d="M64 34v14" />
                </g>
              </svg>
            </div>
          </div>
          <h3 className="service-title">{workshopsTitle}</h3>
          <p className="service-text">{workshopsText}</p>
        </article>
        <article className="service-card">
          <div className="service-media">
            <img className="service-photo" src={professionalsPhotoSrc} alt={professionalsPhotoAlt} loading="lazy" />
            <div className="service-icon-wrap">
              {/* Person with a check mark */}
              <svg viewBox="0 0 80 80" aria-hidden="true">
                <circle cx="40" cy="40" r="40" fill="#5b7d74" />
                <g fill="none" stroke="#f6f1ea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="34" cy="30" r="8" />
                  <path d="M20 56v-3a10 10 0 0 1 10-10h8a10 10 0 0 1 10 10v3" />
                  <path d="M50 36l4 4 8-8" />
                </g>
              </svg>
            </div>
          </div>
          <h3 className="service-title">{professionalsTitle}</h3>
          <p className="service-text">{professionalsText}</p>
        </article>
        <article className="service-card">
          <div className="service-media">
            <img className="service-photo" src={curriculumPhotoSrc} alt={curriculumPhotoAlt} loading="lazy" />
            <div className="service-icon-wrap">
              {/* Open book */}
              <svg viewBox="0 0 80 80" aria-hidden="true">
                <circle cx="40" cy="40" r="40" fill="#5b7d74" />
                <g fill="none" stroke="#f6f1ea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 26h12a10 10 0 0 1 10 10v22a7 7 0 0 0-7-7H18z" />
                  <path d="M62 26H50a10 10 0 0 0-10 10v22a7 7 0 0 1 7-7h15z" />
                </g>
              </svg>
            </div>
          </div>
          <h3 className="service-title">{curriculumTitle}</h3>
          <p className="service-text">{curriculumText}</p>
        </article>
      </div>
    </section>
  )
}
