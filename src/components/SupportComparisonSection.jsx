import './support-comparison-section.css'

const defaultColumns = ['Care2Elevate', 'Islamic centres', 'Secular counselling', 'Online communities']

const defaultItems = [
  { label: 'Faith-rooted healing', availability: [true, true, false, false] },
  { label: 'Structured 6-week program', availability: [true, false, true, false] },
  { label: 'Women-only safe space', availability: [true, false, false, true] },
  { label: 'Online and accessible', availability: [true, false, true, true] },
  { label: 'Space to heal before moving on', availability: [true, false, false, false] }
]

export default function SupportComparisonSection({
  headingId = 'support-comparison-title',
  title = 'No single option offers all of this.',
  description = 'Care2Elevate brings faith, structure, and a women-only online community together in one guided program.',
  columns = defaultColumns,
  items = defaultItems
}) {
  return (
    <section className="support-comparison-section" aria-labelledby={headingId}>
      <div className="support-comparison-inner">
        <div className="support-comparison-heading">
          <h2 id={headingId}>{title}</h2>
          <p>{description}</p>
        </div>
        <div
          className="support-comparison-table-wrap"
          role="region"
          aria-label="Support options comparison"
          tabIndex="0"
        >
          <table className="support-comparison-table">
            <thead>
              <tr>
                <th scope="col">{'What support includes'}</th>
                {columns.map((column, index) => (
                  <th scope="col" key={column} className={index === 0 ? 'comparison-care' : undefined}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.label}>
                  <th scope="row">{item.label}</th>
                  {item.availability.map((available, index) => (
                    <td
                      key={`${item.label}-${index}`}
                      className={`${index === 0 ? 'comparison-care ' : ''}${available ? 'comparison-available' : 'comparison-unavailable'}`}
                      aria-label={available ? 'Included' : 'Not listed'}
                    >
                      {available ? '\u2713' : '\u2014'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
