import './problem-statement.css'

const challenges = [
  'Cultural stigma that labels divorced women/men as failures or burdens.',
  'Social isolation due to community discomfort with addressing divorce openly.',
  'Emotional grief suppression from religious guilt or misinterpretation of patience and perseverance.',
  'Limited access to post-divorce resources tailored to Islamic values and emotional wellbeing.',
]

export default function ProblemStatement() {
  return (
    <section className="ps-section" aria-labelledby="ps-heading">
      <div className="ps-left">
        <h2 id="ps-heading" className="ps-heading">
          The challenges Muslim divorcees face
        </h2>
        <p className="ps-intro">
          Divorce is a life-altering event — and for Muslims, it often comes
          with an extra layer of stigma, silence, and isolation that makes
          healing harder.
        </p>
      </div>

      <div className="ps-right">
        <ul className="ps-list" aria-label="Key challenges">
          {challenges.map((item) => (
            <li key={item} className="ps-item">
              <span className="ps-dot" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="ps-close">
        These factors delay or prevent healing — contributing to long-term
        emotional distress, spiritual disconnection, and dysfunctional
        relationship cycles. Care2Elevate was built to change that.
      </p>
    </section>
  )
}
