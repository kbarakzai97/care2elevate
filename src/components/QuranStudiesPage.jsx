import { Link } from 'react-router-dom'
import './quran-studies-page.css'

export default function QuranStudiesPage() {
  return (
    <main className="qs-page">

      {/* Page title */}
      <div className="qs-hero">
        <span className="qs-eyebrow">Virtual WhatsApp Group</span>
        <h1 className="qs-title">Quran Studies</h1>
        <p className="qs-intro">All groups are free and virtual for women.</p>
      </div>

      {/* Options */}
      <div className="qs-options">

        <article className="qs-option">
          <span className="qs-option-label">Option 1</span>
          <p className="qs-text">
            Join sister Enas Ghassal, who is an Associate Professor in Quranic Studies with a Master&rsquo;s from Hartford Seminary CT, and a valuable volunteer conducting her virtual classes every Ramadan 2027.
          </p>
          <div className="qs-schedule">
            <span className="qs-schedule-label">Daily during Ramadan 2027</span>
            <p className="qs-schedule-time">11AM Central Standard Time (CST)</p>
            <p className="qs-schedule-note">8:00 PM (20:00) Turkey Time (TRT) in Istanbul</p>
          </div>
          <p className="qs-text">
            Please use this link to get her{' '}
            <a
              className="qs-link"
              href="https://www.hartfordinternational.edu/faculty/enas-ghassal"
              target="_blank"
              rel="noopener noreferrer"
            >
              full bio ↗
            </a>
          </p>
        </article>

        <article className="qs-option">
          <span className="qs-option-label">Option 2</span>
          <p className="qs-text">
            Asalām ʿalaykum, let&rsquo;s continue to grow spiritually by reading and reflecting on at least one randomly generated ayah from the Quran in English daily! Of course nothing is random in Islam! Everything is from Allah! Sharing is caring so invite your loved ones too!
          </p>
          <p className="qs-text">
            Nightly virtual Quran Tajweed practice with a volunteer teacher for thirty minutes followed by Quran recitation for Surah AlMulk and other Surahs.
          </p>
        </article>

        <article className="qs-option">
          <span className="qs-option-label">Option 3</span>
          <p className="qs-text qs-text--lead">Quran Tafsir and discussion once a month.</p>
        </article>

      </div>

      {/* Back link */}
      <div className="qs-cta">
        <Link className="qs-back" to="/activities">← Back to Activities</Link>
      </div>

    </main>
  )
}
