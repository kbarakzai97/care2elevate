import { useState } from 'react'
import './contact-us.css'

/**
 * Contact form endpoint for Formsubmit.co
 */
const contactEndpoint = 'https://formsubmit.co/ajax/tazeen.refai1@gmail.com' 

export default function ContactUs() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
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
          _subject: subject,
          firstName,
          lastName,
          email,
          message,
        }),
      })
      const result = await response.json()

      if (!response.ok || result.success !== 'true') {
        throw new Error('Message could not be sent')
      }

      setFirstName('')
      setLastName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact-section" className="contact-page">
      <div className="contact-panel" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p className="contact-eyebrow">We’re here to listen</p>
          <h1 id="contact-title">Contact Us</h1>
          <p>
            Share what’s on your mind. Your message will be sent directly to
            the Care2Elevate team.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-form-field">
              <label htmlFor="contact-first-name">First name</label>
              <input
                id="contact-first-name"
                name="firstName"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                maxLength={10}
                autoComplete="given-name"
                required
              />
            </div>
            <div className="contact-form-field">
              <label htmlFor="contact-last-name">Last name</label>
              <input
                id="contact-last-name"
                name="lastName"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                maxLength={10}
                autoComplete="family-name"
                required
              />
            </div>
          </div>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            maxLength={50}
            autoComplete="email"
            required
          />
          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            maxLength={50}
            autoComplete="off"
            required
          />
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={7}
            maxLength={250}
            required
          />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p className={`contact-status contact-status-${status}`} aria-live="polite" role="status">
            {status === 'sent' && 'Your message has been sent. Thank you for reaching out.'}
            {status === 'error' && 'We couldn’t send your message. Please try again.'}
          </p>
        </form>
      </div>
    </section>
  )
}