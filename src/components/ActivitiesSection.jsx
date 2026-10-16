import { Link } from 'react-router-dom'
import quranImg from '../assets/activity-quran.jpeg'
import exerciseImg from '../assets/activity-exercise.webp'
import eventsImg from '../assets/activity-events.webp'
import bookclubImg from '../assets/activity-bookclub.webp'
import breakfastImg from '../assets/activity-breakfast.webp'
import './activities-section.css'

export default function ActivitiesSection() {
  return (
    <main className="activities-page">

      {/* Page title */}
      <section className="activities-hero">
        <h1 className="activities-title">Activities</h1>
      </section>

      {/* ── Bento grid ── */}
      <div className="activities-grid">

        {/* Featured: Quran Studies — full width top row */}
        <article className="act-featured">
          <div className="act-featured-img">
            <img src={quranImg} alt="Open Quran on a wooden stand" loading="lazy" />
            <span className="act-featured-badge">Weekly · Virtual</span>
          </div>
          <div className="act-featured-content">
            <span className="act-featured-tag">✦ Featured Program</span>
            <h2 className="act-featured-title">Quran Studies</h2>
            <p className="act-featured-desc">
              Three weekly sessions taught by an Associate Professor in Quranic
              Studies with a Master's from Hartford Seminary, CT — open to all levels.
            </p>

            <ul className="act-schedule" aria-label="Class schedule">
              <li className="act-schedule-item">
                <span className="act-schedule-dot" aria-hidden="true" />
                <span className="act-schedule-day">Wednesdays</span>
                <span className="act-schedule-type">Quran Reflection</span>
                <span className="act-schedule-time">10:30 am ET</span>
              </li>
              <li className="act-schedule-item">
                <span className="act-schedule-dot" aria-hidden="true" />
                <span className="act-schedule-day">Thursdays</span>
                <span className="act-schedule-type">Quran Recitation</span>
                <span className="act-schedule-time">10:30 am ET</span>
              </li>
              <li className="act-schedule-item">
                <span className="act-schedule-dot" aria-hidden="true" />
                <span className="act-schedule-day">Fridays</span>
                <span className="act-schedule-type">Quran Tajweed</span>
                <span className="act-schedule-time">10:30 am ET</span>
              </li>
            </ul>

            <Link className="act-btn-primary" to="/care2elevate/contact">
              Register Now →
            </Link>
          </div>
        </article>

        {/* 4 community cards */}
        <article className="act-card">
          <div className="act-card-img">
            <img src={exerciseImg} alt="Women exercising together" loading="lazy" />
            <div className="act-card-tags">
              <span className="act-card-tag">Virtual</span>
            </div>
          </div>
          <div className="act-card-body">
            <h3 className="act-card-title">Virtual Exercise Group</h3>
            <p className="act-card-desc">
              Stay active with sisters who support your wellness journey — from wherever you are.
            </p>
            <Link className="act-card-link" to="/care2elevate/contact">Connect with us →</Link>
          </div>
        </article>

        <article className="act-card">
          <div className="act-card-img">
            <img src={eventsImg} alt="Muslim women gathering at a virtual event" loading="lazy" />
            <div className="act-card-tags">
              <span className="act-card-tag">Virtual</span>
              <span className="act-card-tag act-card-tag--region">Virginia Region</span>
            </div>
          </div>
          <div className="act-card-body">
            <h3 className="act-card-title">Virtual Events</h3>
            <p className="act-card-desc">
              The Virginia region hosts a variety of virtual events throughout the year. Connect to find out what's coming up.
            </p>
            <Link className="act-card-link" to="/care2elevate/contact">Connect with us →</Link>
          </div>
        </article>

        <article className="act-card">
          <div className="act-card-img">
            <img src={bookclubImg} alt="Women reading and discussing a book together" loading="lazy" />
            <div className="act-card-tags">
              <span className="act-card-tag">Virtual</span>
            </div>
          </div>
          <div className="act-card-body">
            <h3 className="act-card-title">Virtual Book Club</h3>
            <p className="act-card-desc">
              Read and reflect together around meaningful books — from healing and growth to faith and community.
            </p>
            <Link className="act-card-link" to="/care2elevate/contact">Connect with us →</Link>
          </div>
        </article>

        <article className="act-card">
          <div className="act-card-img">
            <img src={breakfastImg} alt="Muslim women sharing breakfast together" loading="lazy" />
            <div className="act-card-tags">
              <span className="act-card-tag">In Person</span>
              <span className="act-card-tag act-card-tag--region">Florida Region</span>
            </div>
          </div>
          <div className="act-card-body">
            <h3 className="act-card-title">Monthly Breakfast</h3>
            <p className="act-card-desc">
              The Florida region gathers the first Monday of every month for breakfast and in-person connection. All are welcome.
            </p>
            <Link className="act-card-link" to="/care2elevate/contact">Connect with us →</Link>
          </div>
        </article>

      </div>
    </main>
  )
}
