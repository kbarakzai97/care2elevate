import friendsTalkingImage from '../assets/islamic-women-friends-talking-having-fun.webp'
import './mission-section.css'

const pillars = [
  {
    title: 'Faith-Rooted Progress',
    tagline: 'Moving forward with faith, dignity, reflection, and hope.',
    paragraphs: [
      'Your emotional healing and your relationship with Allah do not have to be separate journeys. Through guided reflection and Islamic teachings, we encourage women to reconnect with their values, strengthen their trust in Allah, and make thoughtful choices about their future.',
      'Faith-rooted progress does not mean suppressing sadness or pretending to be strong. It means allowing space for honest emotions while continuing to seek guidance and move forward.'
    ]
  },
  {
    title: 'A Safe Space',
    tagline: 'A place to be heard without shame or judgment.',
    paragraphs: [
      'Our online, women-only support program offers a welcoming environment where divorced Muslim women can share experiences, ask questions, listen, and learn at their own pace.',
      'You do not need to have all the answers. You do not need to hide your pain. Your story deserves to be heard with compassion and respect.',
      'Through shared experience, we discover that we are not alone—and that we can learn from one another as we rebuild.'
    ]
  },
  {
    title: 'Emotional Healing',
    tagline: 'From grief and isolation toward clarity, confidence, and rebuilding.',
    paragraphs: [
      'Healing involves more than trying to forget what happened. It can mean understanding your emotions, rebuilding self-trust, rediscovering who you are beyond marriage, and learning to recognize healthier patterns in relationships.',
      'We encourage women to give themselves time to grieve, reflect, and grow before making major decisions about their next chapter.',
      'The goal is not perfection. It is progress: becoming more aware of your needs, your values, your boundaries, and the life you want to build.'
    ]
  }
]

const exploreTopics = [
  'Processing grief, sadness, anger, and uncertainty.',
  'Rebuilding identity, confidence, and self-worth.',
  'Navigating loneliness, trust, and changing family relationships.',
  'Exploring boundaries and healthier relationship patterns.',
  'Supporting children through family changes and co-parenting.',
  'Reflecting on future relationships and emotional readiness.',
  'Reconnecting with Allah through faith-centered reflection and learning.',
  'Rediscovering personal goals, purpose, and hope.'
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" />
      <path d="M5.5 10.5l3 3 6-6.5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MissionSection({
  id = 'mission',
  title = 'Mission'
}) {
  return (
    <section id={id} className="mission-section">

      {/* Page title */}
      <div className="mission-hero">
        <h1 className="mission-title">{title}</h1>
      </div>

      {/* Intro */}
      <div className="mission-intro">
        <span className="mission-eyebrow">Care2elevate.space</span>
        <h2 className="mission-tagline">Restoring Karāmah. Rebuilding with Sakīnah.</h2>
        <p className="mission-subtitle">A faith-rooted online sanctuary for divorced Muslim women.</p>
        <p className="mission-paragraph">
          Divorce can change far more than a relationship. It can affect our identity, confidence, family life, sense of belonging, and hopes for the future.
        </p>
        <p className="mission-paragraph">
          At Care2Elevate (C2E), we believe that the end of a marriage does not mean the end of your story. With compassionate support, reflection, and faith, it is possible to process grief, rediscover your God-given dignity, and move forward with renewed clarity and hope.
        </p>
        <p className="mission-emphasis">You do not have to navigate this journey alone.</p>
      </div>

      {/* Our Mission — photo + mission and vision */}
      <div className="mission-body">
        <div className="mission-photo">
          <img
            src={friendsTalkingImage}
            alt="Three Muslim women laughing and talking together outdoors"
            loading="lazy"
          />
        </div>
        <div className="mission-text">
          <h2 className="mission-heading">Our Mission</h2>
          <p className="mission-statement">
            Care2Elevate guides divorced Muslim women through a compassionate online program rooted in Islamic teachings, helping them process grief, restore their karāmah (dignity), cultivate sakīnah (tranquility), and move forward with clarity, faith, and hope.
          </p>
          <p className="mission-paragraph">
            Our vision is a world where divorced Muslim women are supported rather than stigmatized, empowered to make healthier choices, and able to rebuild their lives with confidence and dignity.
          </p>
        </div>
      </div>

      {/* Why Care2Elevate Exists */}
      <div className="mission-band mission-band--cream">
        <div className="mission-column">
          <h2 className="mission-heading">Why Care2Elevate Exists</h2>
          <p className="mission-paragraph">
            Divorce is a significant life transition, yet the emotional journey that follows can often remain unseen.
          </p>
          <p className="mission-paragraph">
            Some women feel pressure to move on quickly. Others experience loneliness, family expectations, financial uncertainty, or the fear of being judged by their community. They may have people around them but still lack a safe place to speak honestly about their grief.
          </p>
          <p className="mission-paragraph">Care2Elevate exists to help bridge that gap.</p>
          <p className="mission-paragraph">
            We offer a compassionate environment where women can acknowledge their experiences without shame, learn from others who understand, and explore what it means to rebuild a life after divorce.
          </p>
          <p className="mission-emphasis">We believe that healing deserves the same attention as the ending of a marriage.</p>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="mission-band">
        <h2 className="mission-heading mission-heading--center">Three Pillars of Care2Elevate</h2>
        <div className="mission-pillars">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="mission-pillar">
              <h3 className="mission-pillar-title">{pillar.title}</h3>
              <p className="mission-pillar-tagline">{pillar.tagline}</p>
              {pillar.paragraphs.map((text) => (
                <p key={text} className="mission-pillar-text">{text}</p>
              ))}
            </article>
          ))}
        </div>
      </div>

      {/* Why Support Groups Matter */}
      <div className="mission-band mission-band--cream">
        <div className="mission-column">
          <h2 className="mission-heading">Why Support Groups Matter</h2>
          <p className="mission-paragraph">
            Books and articles can offer knowledge, but sharing experiences with others can help us understand how to apply that knowledge in our own lives.
          </p>
          <p className="mission-paragraph">
            A supportive group can provide connection, perspective, encouragement, and a sense of belonging during a difficult transition. It gives women an opportunity to speak openly, learn from different experiences, and discover that their struggles do not make them failures.
          </p>
          <p className="mission-paragraph">
            Research on structured post-divorce support programs suggests that guided group interventions can help improve divorce adjustment. Studies of social support and grief also highlight the potential value of connection, shared understanding, and opportunities to make sense of loss.
          </p>
          <p className="mission-paragraph">
            Although outcomes vary and support groups are not a substitute for professional mental health care, these findings reinforce the importance of providing accessible, compassionate support.
          </p>
          <p className="mission-emphasis">
            At Care2Elevate, we believe that community is not simply a place to receive help. It is a place where we can learn from one another, rediscover our strengths, and begin to see possibilities beyond our pain.
          </p>
        </div>
      </div>

      {/* Restoring Karāmah */}
      <div className="mission-band">
        <div className="mission-column">
          <h2 className="mission-heading">Restoring Karāmah: Remembering Your God-Given Dignity</h2>
          <p className="mission-paragraph">
            In Islam, a person&rsquo;s worth is not determined by marital status, community opinion, or another person&rsquo;s acceptance.
          </p>
          <p className="mission-paragraph">Allah says:</p>
          <blockquote className="mission-verse">
            <p>&ldquo;And We have certainly honored the children of Adam...&rdquo;</p>
            <cite>&mdash; Qur&rsquo;an 17:70</cite>
          </blockquote>
          <p className="mission-paragraph">
            This verse reminds us of the dignity bestowed upon human beings. Divorce does not erase your worth, your potential, or your relationship with Allah.
          </p>
          <p className="mission-paragraph">
            At Care2Elevate, restoring karāmah means learning to see yourself with dignity again, releasing undeserved shame, and recognizing that your identity is greater than the circumstances of your marriage.
          </p>
          <p className="mission-paragraph">
            We also draw inspiration from Qur&rsquo;an 2:231, which emphasizes honorable treatment when a marriage is retained or ended, and Qur&rsquo;an 30:21, which describes marriage through tranquility, affection, and mercy.
          </p>
          <p className="mission-paragraph">
            We do not ask women to deny their pain in the name of faith. We encourage them to bring their questions, emotions, and hopes into a process of reflection, learning, and spiritual reconnection.
          </p>
        </div>
      </div>

      {/* Rebuilding with Sakīnah */}
      <div className="mission-band mission-band--cream">
        <div className="mission-column">
          <h2 className="mission-heading">Rebuilding with Sakīnah</h2>
          <p className="mission-paragraph">
            Sakīnah speaks of tranquility and inner steadiness. For Care2Elevate, it represents the hope of finding greater peace while rebuilding a life after loss.
          </p>
          <p className="mission-paragraph">
            This does not mean that every day will feel peaceful or that grief follows a straight line. It means learning to move through uncertainty with greater self-awareness, support, and trust in Allah.
          </p>
          <p className="mission-paragraph">
            As women begin to understand their experiences, strengthen their boundaries, and reconnect with their values, they can make room for a future shaped less by fear and more by clarity and intention.
          </p>
          <p className="mission-paragraph">
            We do not believe you must become completely independent before you can love again. We believe that a healthy relationship should enrich your life rather than determine your worth.
          </p>
        </div>
      </div>

      {/* What You Can Explore With Us */}
      <div className="mission-band">
        <div className="mission-column mission-column--wide">
          <h2 className="mission-heading">What You Can Explore With Us</h2>
          <p className="mission-paragraph">
            Our support program creates space to discuss the realities of life after divorce, including:
          </p>
          <ul className="mission-topics">
            {exploreTopics.map((topic) => (
              <li key={topic}>
                <CheckIcon />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
          <p className="mission-paragraph">
            Every woman&rsquo;s journey is different. You are welcome to take the time you need and participate at a pace that feels right for you.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="mission-closing">
        <div className="mission-closing-card">
          <div className="mission-closing-intro">
            <h2 className="mission-closing-heading">You Do Not Have to Walk Alone</h2>
            <p className="mission-closing-text">
              Care2Elevate is more than a place to discuss divorce. It is a community committed to compassion, dignity, emotional healing, and faith-rooted personal growth.
            </p>
            <p className="mission-closing-text">
              We want every woman who comes to C2E to feel acknowledged rather than judged, supported rather than isolated, and reminded that divorce does not define the rest of her life.
            </p>
          </div>
          <div className="mission-closing-panel">
            <ul className="mission-closing-lines">
              <li>Your story matters.</li>
              <li>Your dignity remains.</li>
              <li>Your future is still unfolding.</li>
            </ul>
            <p className="mission-closing-welcome">
              Welcome to Care2Elevate&mdash;a place to heal, reconnect, and rebuild with faith.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
