import './goals-section.css'

const coreGoals = [
  {
    num: '01',
    title: 'Post-Divorce Empowerment',
    desc: 'Empowering divorced Muslim men and women to rebuild confidence, re-establish self-sufficiency, and rekindle personal purpose through emotional support and community guidance.',
  },
  {
    num: '02',
    title: 'Transformative Learning Support',
    desc: 'Providing structured workshops and programs that educate individuals on navigating the post-divorce grief cycle, while building emotional intelligence and spiritual resilience.',
  },
  {
    num: '03',
    title: 'Community-Based Support',
    desc: 'Encouraging Islamic centers and leaders to offer divorce-related support services, just as they provide pre-marital and marriage services, to cultivate a compassionate and inclusive environment.',
  },
]

const strategicGoals = [
  {
    num: '01',
    tag: 'Mental Health',
    title: 'Mental Health Support',
    desc: 'Integrate faith-sensitive psychological services by partnering with Muslim mental health professionals. Create group therapy circles, self-paced healing modules, and spiritual counseling programs that validate emotional struggles while reinforcing Islamic principles of healing.',
  },
  {
    num: '02',
    tag: 'Legal & Finance',
    title: 'Legal and Financial Guidance',
    desc: 'Provide resources on Islamic and civil legal processes post-divorce, including child custody, inheritance, and spousal rights. Host expert-led webinars on financial literacy, budgeting, and long-term planning for newly single individuals.',
  },
  {
    num: '03',
    tag: 'Family',
    title: 'Family Dynamics Support',
    desc: 'Develop co-parenting programs that promote respectful communication, shared responsibilities, and child-focused parenting. Offer support circles for single parents and children of divorced families, ensuring they are emotionally and socially supported.',
  },
  {
    num: '04',
    tag: 'Outreach',
    title: 'Community Education and Engagement',
    desc: 'Launch an outreach campaign to raise awareness in mosques and Islamic schools about the realities of divorce. Encourage khutbahs (Friday sermons), seminars, and educational series that de-stigmatize divorced individuals and promote post-divorce care as a community obligation.',
  },
  {
    num: '05',
    tag: 'Inclusion',
    title: 'Accessibility and Inclusion',
    desc: 'Ensure that all services—whether counseling, workshops, or mentorship—are inclusive of linguistic diversity, cultural differences, and financial situations. Develop online platforms for remote access to all resources, especially for underserved or geographically isolated communities.',
  },
]

export default function GoalsSection({ id = 'goals' }) {
  return (
    <main id={id} className="goals-page">

      {/* Page title */}
      <div className="goals-hero">
        <h1 className="goals-hero-title">Goals</h1>
      </div>

      {/* Core goals — dark green band */}
      <div className="goals-core">
        {coreGoals.map((g) => (
          <div key={g.num} className="goals-core-item">
            <span className="goals-core-eyebrow">{g.num}</span>
            <h2 className="goals-core-title">{g.title}</h2>
            <p className="goals-core-desc">{g.desc}</p>
          </div>
        ))}
      </div>

      {/* Strategic goals — numbered list */}
      <div className="goals-strategic">
        <div className="goals-strat-header">
          <h2 className="goals-strat-heading">Strategic Goals</h2>
          <span className="goals-strat-count">5 initiatives</span>
        </div>
        <div className="goals-strat-list">
          {strategicGoals.map((g) => (
            <div key={g.num} className="goals-strat-item">
              <div className="goals-strat-num">{g.num}</div>
              <div>
                <span className="goals-strat-tag">{g.tag}</span>
                <h3 className="goals-strat-title">{g.title}</h3>
                <p className="goals-strat-desc">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}
