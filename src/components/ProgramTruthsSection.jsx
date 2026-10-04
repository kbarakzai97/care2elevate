import './program-truths-section.css'

const defaultTruths = [
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

export default function ProgramTruthsSection({
  id = 'program-truths',
  title = 'From divorce to a new beginning',
  subtitle = 'These truths guide our work and remind us that healing after divorce is possible, meaningful, and full of new beginnings.',
  truths = defaultTruths
}) {
  return (
    <section id={id} className="program-truths">
      <div className="program-truths-header">
        <h2 className="program-truths-title">{title}</h2>
        <p className="program-truths-subtitle">{subtitle}</p>
      </div>
      <ol className="program-truths-list">
        {truths.map((item, index) => (
          <li key={item} className="program-truth-item truth-coral">
            <span className="program-truth-number">{index + 1}</span>
            <div className="program-truth-card">
              <p>{item}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
