import './healing-journey-section.css'

const defaultWeeks = [
  { week: 1, phase: 'Acknowledge', title: 'You Are Heard' },
  { week: 2, phase: 'Acknowledge', title: 'Naming What Hurts' },
  { week: 3, phase: 'Educate', title: 'Reclaiming My Power' },
  { week: 4, phase: 'Educate', title: 'Releasing What Was' },
  { week: 5, phase: 'Elevate', title: 'Rebuilding the Self' },
  { week: 6, phase: 'Elevate', title: 'Trusting the Road Ahead' }
]

export default function HealingJourneySection({
  id = 'healing-journey',
  headingId = 'healing-journey-title',
  title = 'Our Healing Journey',
  description = 'Six weeks rooted in Islamic teaching, the stories of the Prophets, and the wisdom of Ibn al-Qayyim and Al-Ghazali.',
  weeks = defaultWeeks
}) {
  return (
    <section id={id} className="healing-journey-section" aria-labelledby={headingId}>
      <div className="healing-journey-inner">
        <div className="healing-journey-heading">
          <div>
            <h2 id={headingId}>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <ol className="healing-timeline">
          {weeks.map((item, index) => (
            <li className="healing-timeline-item" key={item.week}>
              <span className="healing-timeline-node">{index + 1}</span>
              <span className="healing-timeline-dash" aria-hidden="true"></span>
              <p className="healing-timeline-week">{'Week '}{item.week}</p>
              <h3 className="healing-timeline-title">{item.title}</h3>
              <p className="healing-timeline-phase">{item.phase}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
