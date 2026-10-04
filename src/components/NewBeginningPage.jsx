import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import workshopImage from '../assets/medium-shot-women-with-laptop.webp'
import './new-beginning-page.css'

const contactEndpoint = 'https://formsubmit.co/ajax/care2elevate@gmail.com'

const programOptions = ['6-Week Divorce Recovery Program', 'One on One Coaching Session']

const focusPoints = [
  'Understand the intricate layers of the grief cycle',
  'Acknowledge the pain, anger, and sadness that often accompany the end of a marriage',
  'Build yourself up both emotionally and mentally',
  'Move forward with confidence and mindfulness into a new beginning'
]

const truths = [
  'Sometimes the hardest part after divorce is not losing someone, it is finding yourself again.',
  'People tell divorced women to move on, but rarely give them a safe place to move through.',
  'A woman can leave a marriage and still carry the marriage inside her mind.',
  'Healing is not forgetting what happened; it is learning not to let it choose for you again.',
  'Divorce can end a relationship, but unprocessed pain can keep the relationship alive inside you.',
  'A support circle is where pain stops being a secret and starts becoming language.',
  'Sometimes dignity is not something you lose, it is something you need help remembering.',
  'The opposite of isolation is not advice; it is belonging.',
  'A woman who heals after divorce may not only change her future — she may change what her children believe she should feel like.',
  'Faith-centered healing is not pretending the pain is gone; it is finding meaning while carrying it less.'
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" />
      <path d="M5.5 10.5l3 3 6-6.5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FieldIcon({ type }) {
  const paths = {
    name: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    program: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>
  }

  return (
    <svg className="nb-field-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function AppointmentForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [program, setProgram] = useState(programOptions[0])
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Program inquiry: ${program}`,
          name,
          email,
          program,
        }),
      })
      const result = await response.json()

      if (!response.ok || result.success !== 'true') {
        throw new Error('Message could not be sent')
      }

      setName('')
      setEmail('')
      setProgram(programOptions[0])
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="nb-sidebar-box nb-form" onSubmit={handleSubmit} aria-labelledby="nb-form-title">
      <h2 id="nb-form-title" className="nb-sidebar-title nb-form-title">Get Started</h2>

      <label className="nb-field">
        <span className="nb-visually-hidden">Name</span>
        <FieldIcon type="name" />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label className="nb-field">
        <span className="nb-visually-hidden">Email</span>
        <FieldIcon type="email" />
        <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>

      <label className="nb-field">
        <span className="nb-visually-hidden">Program</span>
        <FieldIcon type="program" />
        <select value={program} onChange={(e) => setProgram(e.target.value)}>
          {programOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>

      <button type="submit" className="nb-form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request Info'}
      </button>

      <p className="nb-form-status" aria-live="polite" role="status">
        {status === 'sent' && 'Thank you for reaching out. We’ll be in touch soon.'}
        {status === 'error' && 'We couldn’t send your message. Please try again.'}
      </p>
    </form>
  )
}

export default function NewBeginningPage() {
  return (
    <main className="nb-page">
      <header className="nb-page-header">
        <h1 className="nb-page-title">6-Week Divorce Recovery Program</h1>
      </header>

      <div className="nb-layout">
        <article className="nb-main">
          <img className="nb-hero-image" src={workshopImage} alt="Three women in hijab smiling together while joining a session on a laptop" />

          <p className="nb-text">
            A comprehensive and compassionate guide designed to help you navigate the intricate terrain of the grief cycle, overcome the profound loss of a marriage, and empower yourself to move forward with confidence and mindfulness. Divorce is undoubtedly one of life&rsquo;s most challenging experiences, ushering in a wave of emotions that can be overwhelming and complex. In the midst of heartache and change, it&rsquo;s crucial to recognize that healing is not a linear path but a journey through the multifaceted stages of grief. Understanding the intricate layers of grief acknowledging the pain, anger, and sadness that often accompany the end of a marriage. Gaining insight into your emotions, allows you to navigate the grief cycle and build yourself up both emotionally and mentally will better enable you to elevate yourself into an opportunity for a new beginning.
          </p>

          <h2 className="nb-heading">Divorce Recovery Group / Virtual Workshop</h2>
          <p className="nb-text">
            Our 6-week virtual workshop, Understanding the Grief Cycle, offers a confidential, faith-centered circle where you can process your loss alongside others who understand. Connect with us to learn more about the registration process.
          </p>
          <ul className="nb-checklist">
            {focusPoints.map((point) => (
              <li key={point}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <h2 className="nb-heading">From Divorce to a New Beginning</h2>
          <p className="nb-text">
            These truths guide our work and remind us that healing after divorce is possible, meaningful, and full of new beginnings.
          </p>
          <ul className="nb-truths">
            {truths.map((truth) => (
              <li key={truth}>{truth}</li>
            ))}
          </ul>
        </article>

        <aside className="nb-sidebar">
          <nav className="nb-sidebar-box" aria-labelledby="nb-programs-title">
            <h2 id="nb-programs-title" className="nb-sidebar-title">Our Programs</h2>
            <ul className="nb-sidebar-links">
              <li><Link to="/care2elevate/new-beginning" aria-current="page">6-Week Recovery Program</Link></li>
              <li><HashLink smooth to="/care2elevate/#services-section">One on One Coaching</HashLink></li>
              <li><Link to="/care2elevate/resources">Resources</Link></li>
              <li><Link to="/care2elevate/our-story">Our Story</Link></li>
            </ul>
          </nav>

          <AppointmentForm />
        </aside>
      </div>
    </main>
  )
}
