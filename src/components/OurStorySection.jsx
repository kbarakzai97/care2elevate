import communityGatheringImage from '../assets/community-gathering-landscape.jpeg'
import circleOfSistersImage from '../assets/0eef6ebe-c61d-4729-baff-7635ac5156e7.jpeg'
import friendsTalkingImage from '../assets/mask-group-5-sharp.webp'
import travelingTogetherImage from '../assets/lauren-1-sharp.jpeg'
import './our-story-section.css'

const milestones = [
  {
    year: '2012',
    title: 'Circle of STARhood',
    desc: 'Founded in Sterling, VA — bi-weekly meetings at the ADAMS Center masjid.',
  },
  {
    year: '2014',
    title: 'Ikram Foundation',
    desc: 'Co-founded to provide educational grants to divorced Muslim women.',
  },
  {
    year: 'Today',
    title: 'Care2Elevate',
    desc: 'Faith-informed grief support and online WhatsApp communities.',
  },
  {
    year: 'Ahead',
    title: 'Growing Together',
    desc: 'Expanding to Muslim men and local masjids across the U.S., InshAllah.',
  },
]

export default function OurStorySection({ id = 'our-story' }) {
  return (
    <section id={id} className="os-page">

      {/* Page title */}
      <div className="os-hero">
        <h1 className="os-hero-title">Our Story</h1>
      </div>

      {/* Lead band */}
      <div className="os-lead">
        <p className="os-lead-text">
          When you&rsquo;re part of a support group, you no longer have to carry the shame or guilt of having been in a dysfunctional relationship alone. Among survivors, there&rsquo;s an unspoken understanding: what happened in the relationship was never about your worth. You are not alone, and your experience is valid.
        </p>
        <p className="os-lead-text">
          Care2Elevate&mdash;originally known as Circle of STARhood&mdash;began as a grassroots initiative in ADAMS CENTER in Sterling, Virginia. It was born out of the lived experiences of five divorced Muslim women who were searching for a safe space to process their grief and rediscover their strength.
        </p>
      </div>

      {/* Milestone strip */}
      <div className="os-milestones">
        {milestones.map((m) => (
          <div key={m.title} className="os-milestone">
            <span className="os-milestone-year">{m.year}</span>
            <h3 className="os-milestone-title">{m.title}</h3>
            <p className="os-milestone-desc">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* Wide community photo */}
      <div className="os-wide-photo">
        <img
          src={communityGatheringImage}
          alt="Care2Elevate sisters gathering together"
          loading="lazy"
        />
      </div>

      {/* Chapter 01 */}
      <article className="os-chapter os-chapter--text-first">
        <div className="os-chapter-text">
          <h2 className="os-chapter-heading">How It Began</h2>
          <p>
            In 2012, Mariam Azimi brought forth the idea to gather and support one another through the painful journey of divorce. With the support and approval of community leaders Imam Mohamed Magid and Imam Abd Ar-Rafa Ouertani, the group began to meet bi-weekly at the ADAMS Center masjid.
          </p>
          <p>
            What started as a small gathering quickly grew into a transformative space where women could shed their silence. They shared the heartbreak of divorce, the pain of navigating life as a &ldquo;divorcee,&rdquo; and the deep spiritual and emotional toll it took&mdash;all within a confidential, non-judgmental circle.
          </p>
        </div>
        <div className="os-chapter-photo">
          <img
            src={circleOfSistersImage}
            alt="Founding circle of sisters who started Care2Elevate"
            loading="lazy"
          />
        </div>
      </article>

      {/* Chapter 02 */}
      <article className="os-chapter os-chapter--photo-first">
        <div className="os-chapter-photo">
          <img
            src={friendsTalkingImage}
            alt="Care2Elevate gathering and workshop session"
            loading="lazy"
          />
        </div>
        <div className="os-chapter-text">
          <h2 className="os-chapter-heading">The Ikram Foundation</h2>
          <p>
            As the group evolved, so did Mariam Azimi&rsquo;s vision. Her passion for advocacy and deep commitment to serving this often-overlooked population led her to conduct informal assessments of the group&rsquo;s most pressing needs.
          </p>
          <p>
            What she discovered was eye-opening: the number one factor impacting divorced Muslim women was lack of financial security. This realization led to the co-founding of the Ikram Foundation in 2014, a nonprofit dedicated to providing educational grants to empower and support divorced Muslim women in rebuilding their lives with dignity and independence.
          </p>
        </div>
      </article>

      {/* Chapter 03 */}
      <article className="os-chapter os-chapter--text-first">
        <div className="os-chapter-text">
          <h2 className="os-chapter-heading">Care2Elevate Is Born</h2>
          <p>
            Further reflection and continued conversations highlighted another pressing gap&mdash;the lack of widespread emotional and communal support. Mariam saw firsthand how grief left unacknowledged could freeze someone in time. Unprocessed pain lingers like an unwelcome guest, weighing down our spirit and distorting our self-worth. She recognized that if we don&rsquo;t mourn the loss of marriage when it ends, we risk carrying unresolved trauma into future relationships.
          </p>
          <p>
            Mariam&rsquo;s colleague Bassem Hassan highlighted another vital truth: men also need such support. He shared that men grieve too, and this grief often goes unnoticed in the Muslim community. Culturally conditioned to remain stoic, men are expected to wear a strong face, even while carrying silent burdens of shame, failure, and lost identity. This fueled Care2Elevate&rsquo;s mission to extend support not just to women, but to men who, too, deserve compassionate spaces to heal.
          </p>
          <p>
            Care2Elevate was thus born as a broader initiative to offer accessible, faith-informed post-divorce grief support. Our online WhatsApp-based support groups have since become lifelines for many women, creating safe and supportive virtual spaces to share experiences, ask for help, and walk the road of recovery together.
          </p>
        </div>
        <div className="os-chapter-photo">
          <img
            src={travelingTogetherImage}
            alt="Circle of sisters supporting one another"
            loading="lazy"
          />
        </div>
      </article>

      {/* Vision */}
      <div className="os-vision">
        <h2 className="os-vision-heading">Looking Forward</h2>
        <div className="os-vision-body">
          <p>
            Our long-term vision includes developing structured programs on conflict resolution, healthy relationships, and spiritual healing. We also aim to connect participants with trusted Muslim therapists, coaches, and counselors to support them through every stage of healing.
          </p>
          <p>
            Being part of a support group allows you to recognize the signs of abuse, understand your experience more deeply, and gain strength from hearing others&rsquo; stories that mirror your own. Through shared experiences, you not only receive emotional support but also begin to reclaim your voice.
          </p>
          <p>
            Moreover, support groups help you check your reality, remember your identity, and reaffirm that you are safe&mdash;and not alone. They foster a sense of belonging, a critical piece in healing from relational trauma. You are surrounded by those who truly get it&mdash;people who don&rsquo;t judge you, who affirm your pain, and who offer solidarity.
          </p>
          <p>
            To find a support group, visit{' '}
            <a href="https://care2elevate.space" target="_blank" rel="noopener noreferrer">
              Care2Elevate.space
            </a>
            , or search for one of our WhatsApp-based communities. We also offer referrals to trained coaches, counselors, and mental health professionals who understand the cultural and spiritual nuances of divorce in the Muslim community.
          </p>
          <p>
            Even though the thought of rebuilding your life after divorce can feel overwhelming, it is possible&mdash;and it is sacred work. Care2Elevate is here to walk beside you through that journey. In the near future, we hope to bring Care2Elevate to local masjids across the U.S., InshAllah. Healing is not a destination; it&rsquo;s a journey best taken together. By joining a support group, you don&rsquo;t just heal&mdash;you empower others to do the same.
          </p>
        </div>
      </div>

    </section>
  )
}
