import './opportunity-section.css'

const defaultStats = [
  {
    value: '33%',
    description: 'of American Muslim marriages end in divorce',
    source: 'ISPU, 2020'
  },
  {
    value: '2x',
    description: 'divorce cases in Egypt doubled between 2010 and 2024',
    source: 'CAPMAS Egypt'
  },
  {
    value: '53%',
    description: 'rise in divorces in Indonesia in one year (2020-21)',
    source: 'Statistics Indonesia'
  }
]

export default function OpportunitySection({
  headingId = 'opportunity-title',
  title = 'Muslim divorce rates are rising. Support systems have not kept pace.',
  description = 'Care2Elevate brings Islamic faith, emotional healing, and structured online support together for divorced Muslim women.',
  stats = defaultStats
}) {
  return (
    <section className="opportunity-section" aria-labelledby={headingId}>
      <div className="opportunity-inner">
        <div className="opportunity-heading">
          <h2 id={headingId}>{title}</h2>
        </div>
        <p>{description}</p>
        <div className="opportunity-stats">
          {stats.map((stat) => (
            <article className="opportunity-stat" key={stat.source}>
              <p className="opportunity-stat-value">{stat.value}</p>
              <div>
                <p className="opportunity-stat-description">{stat.description}</p>
                <p className="opportunity-stat-source">{stat.source}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
