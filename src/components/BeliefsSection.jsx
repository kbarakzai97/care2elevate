import compassionIcon from '../assets/compassion_circle.png'
import faithIcon from '../assets/faith_circle.png'
import flexibilityIcon from '../assets/flexibility_circle.png'
import leadershipIcon from '../assets/leadership_circle.png'
import './beliefs-section.css'

const defaultBeliefs = [
  {
    id: 1,
    title: 'Compassion',
    description: 'We believe pain should be met with mercy, no judgement. So we create a space where every woman can speak without shame, and no story is ever dismissed.',
    icon: compassionIcon
  },
  {
    id: 2,
    title: 'Faith',
    description: 'We believe healing is deeper when it is rooted in deen. So we guide every woman through Islamic teachings, prophetic stories, and the trust of tawakkul, never preaching, always grounding.',
    icon: faithIcon
  },
  {
    id: 3,
    title: 'Flexibility',
    description: 'We believe healing has no fixed timeline. So we never rush a woman to "move on", we meet her where she is and move at her pace.',
    icon: flexibilityIcon
  },
  {
    id: 4,
    title: 'Leadership',
    description: 'We believe a healed woman becomes a light for others. So we help each woman find her voice, knowing she may become the safe space the next woman needs.',
    icon: leadershipIcon
  }
]

export default function BeliefsSection({
  title = 'What We Believe In',
  subtitle = 'Our values guide everything we do and shape the safe, supportive community we create for every woman.',
  beliefs = defaultBeliefs
}) {
  return (
    <section className="beliefs-section">
      <div className="beliefs-header">
        <h2 className="beliefs-title">{title}</h2>
        <p className="beliefs-subtitle">{subtitle}</p>
      </div>
      <div className="beliefs-grid">
        {beliefs.map((item) => (
          <div key={item.id} className="belief-card">
            <div className="belief-icon-circle">
              <img className="belief-icon-glyph" src={item.icon} alt="" />
            </div>
            <h3 className="belief-item-title">{item.title}</h3>
            <p className="belief-item-text">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
