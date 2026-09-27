import { useState } from 'react'
import './contact-us.css'

/**
 * Contact form endpoint for Formsubmit.co
 */
const contactEndpoint = 'https://formsubmit.co/ajax/tazeen.refai1@gmail.com' 

export default function ContactUs() {
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
        body: JSON.stringify({ _subject: subject, message }),
      })
      const result = await response.json()

      if (!response.ok || result.success !== 'true') {
        throw new Error('Message could not be sent')
      }

      setSubject('')
      setMessage('')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-panel" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p className="contact-eyebrow">We’re here to listen</p>
          <h1 id="contact-title">Contact Us</h1>
          <p>
            Share what’s on your mind. Your message will be sent directly to
            the Care2Elevate team.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            maxLength={150}
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
      </section>
    </main>
  )
}