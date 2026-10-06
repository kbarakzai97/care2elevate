import './concept-section.css'

const challenges = [
  'Cultural stigma that labels divorced women/men as failures or burdens.',
  'Social isolation due to community discomfort with addressing divorce openly.',
  'Emotional grief suppression from religious guilt or misinterpretation of patience and perseverance.',
  'Limited access to post-divorce resources tailored to Islamic values and emotional wellbeing.'
]

const offerings = [
  {
    title: 'Virtual Support Groups (via WhatsApp and Zoom)',
    text: 'Safe, peer-supported spaces moderated by trained facilitators for Muslim women and men.'
  },
  {
    title: 'Faith-Integrated Grief Processing',
    text: 'Structured sessions to help individuals understand and move through grief while staying rooted in Islamic values.'
  },
  {
    title: 'Workshops and Courses',
    text: 'Focused on healthy boundaries, trauma recovery, conflict resolution, and future relationship readiness.'
  },
  {
    title: 'Access to Professionals',
    text: 'Connecting participants to Muslim therapists, coaches, and scholars for personalized support.'
  },
  {
    title: 'Curriculum Development',
    text: 'Culturally competent tools and exercises that guide individuals through self-discovery, healing, and empowerment.'
  }
]

const supportGroupStudies = [
  'A report by the American Psychological Association shows that peer support improves coping strategies, self-esteem, and reduces stress.',
  'Brissette, Cohen & Seeman (2000) found that social connection plays a crucial role in emotional recovery and mental resilience.',
  'Muslim-focused initiatives like Khalil Center have highlighted the need for Islamic-centered mental health interventions and the positive impact of safe spaces.'
]

const objectives = [
  'To normalize conversations around divorce and grief in the Muslim community through awareness and education.',
  'To reduce isolation and stigma by fostering safe, supportive peer-to-peer environments.',
  'To facilitate emotional and spiritual healing through structured, Islamically grounded curriculum.',
  'To promote long-term well-being by equipping individuals with tools for self-awareness, forgiveness, and future relationship health.'
]

const audience = [
  'Divorced Muslim women and men, particularly in early stages of separation or post-divorce adjustment.',
  'Community members (Imams, educators, family advocates) seeking to better support those experiencing divorce.',
  'Mental health professionals and coaches working with Muslim populations.'
]

const impact = [
  'Improved emotional wellbeing and resilience of divorced individuals.',
  'Reduced community stigma and increased communal empathy and support.',
  'Stronger future relationships through awareness and healing and avoid cycling into toxic relationships.',
  'Growth of a model that can be replicated in other Muslim communities globally.'
]

export default function ConceptSection({
  id = 'concept',
  title = 'Post-Divorce Grief Support & Healing in the Muslim Community'
}) {
  return (
    <section id={id} className="concept-section">
      <header className="concept-header">
        <span className="concept-eyebrow">Concept</span>
        <h1 className="concept-title">{title}</h1>
      </header>

      <div className="concept-body">
        <h2 className="concept-heading">Background &amp; Rationale</h2>
        <p className="concept-paragraph">
          Divorce is a life-altering event that carries deep emotional, social, and spiritual implications. For Muslims, the impact of divorce is compounded by cultural stigmas, community judgment, and a lack of safe spaces to process grief. While Islam permits divorce as a last resort, many Muslims&mdash;especially women&mdash;experience feelings of shame, isolation, and abandonment post-divorce, often without sufficient support to navigate this difficult transition.
        </p>
        <p className="concept-affirmation">
          You are not alone, and your experience is acknowledged and valid without judgement.
        </p>
        <p className="concept-paragraph">
          Care2Elevate.space (C2E) was created in response to this need. Our mission is to provide a compassionate, faith-based, and community-rooted approach to post-divorce care, helping individuals rebuild emotionally, spiritually, and socially through guided grief recovery and support.
        </p>

        <h2 className="concept-heading">Problem Statement</h2>
        <p className="concept-paragraph">Muslim divorcees often face unique challenges:</p>
        <ul className="concept-list">
          {challenges.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="concept-paragraph">
          These factors delay or prevent healing, contributing to long-term emotional distress, spiritual disconnection, and dysfunctional relationship cycles.
        </p>

        <h2 className="concept-heading">Program Overview: What We Offer</h2>
        <p className="concept-paragraph">Care2Elevate.space addresses these challenges through:</p>
        <ul className="concept-offerings">
          {offerings.map((item) => (
            <li key={item.title} className="concept-offering">
              <h3 className="concept-offering-title">{item.title}</h3>
              <p className="concept-offering-text">{item.text}</p>
            </li>
          ))}
        </ul>

        <h2 className="concept-heading">The Importance of Grief Processing in Divorce</h2>
        <p className="concept-paragraph">
          Divorce grief is similar to the grief experienced in death&mdash;marked by denial, anger, bargaining, depression, and acceptance. According to Elisabeth K&uuml;bler-Ross&rsquo;s stages of grief, unprocessed pain can become chronic, impacting health, work, parenting, and spirituality.
        </p>
        <p className="concept-paragraph">
          A study by Sbarra &amp; Emery (2005) notes that unresolved grief after marital dissolution is linked to increased depression, anxiety, and long-term health problems. Attachment theory also highlights how the severance of emotional bonds can mimic addiction withdrawal (Fisher et al., 2009), reinforcing the need for emotional regulation and community care.
        </p>

        <h2 className="concept-heading">The Power of Support Groups</h2>
        <p className="concept-paragraph">Numerous studies confirm the effectiveness of support groups in trauma recovery:</p>
        <ul className="concept-list">
          {supportGroupStudies.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="concept-paragraph">
          At C2E, our virtual groups are designed to create these safe spaces, enabling participants to share, reflect, and find solidarity among others with shared experiences. These groups are not therapy, but therapeutic &mdash; offering validation, empathy, and non-judgmental understanding.
        </p>

        <h2 className="concept-heading">Objectives</h2>
        <ol className="concept-objectives">
          {objectives.map((item) => <li key={item}>{item}</li>)}
        </ol>

        <h2 className="concept-heading">Target Audience</h2>
        <ul className="concept-list">
          {audience.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <h2 className="concept-heading">Expected Impact</h2>
        <ul className="concept-list">
          {impact.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <div className="concept-conclusion">
          <h2 className="concept-heading">Conclusion</h2>
          <p className="concept-paragraph">
            Care2Elevate.space fills a critical gap in the Muslim community by addressing divorce not as a personal failure, but as a painful transition that&mdash;when supported&mdash;can lead to growth, empowerment, and renewed faith. By bringing together emotional insight, spiritual guidance, and peer support, we help individuals heal and reclaim their narrative with dignity and strength.
          </p>
        </div>
      </div>
    </section>
  )
}
