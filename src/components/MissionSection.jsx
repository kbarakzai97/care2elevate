import friendsTalkingImage from '../assets/islamic-women-friends-talking-having-fun.webp'
import './mission-section.css'

export default function MissionSection({
  id = 'mission',
  title = 'Mission'
}) {
  return (
    <section id={id} className="mission-section">

      {/* Editorial ruled header */}
      <div className="mission-hero">
        <div className="mission-hero-top">
          <h1 className="mission-title">{title}</h1>
          <span className="mission-tag">Faith · Healing</span>
        </div>
        <div className="mission-hero-bottom">
          <p className="mission-subtitle">Walking beside you through separation — with compassion, resilience, and faith.</p>
          <div className="mission-pills">
            <span className="mission-pill">Virtual</span>
            <span className="mission-pill">Faith-based</span>
            <span className="mission-pill">Community</span>
          </div>
        </div>
      </div>

      {/* Lead band */}
      <div className="mission-lead-band">
        <p className="mission-lead">
          At Care2Elevate (C2E), we are dedicated to supporting Muslims as they navigate the emotional journey of divorce&mdash;with compassion, resilience, and faith. Whether you&rsquo;re a woman or a man, our mission is to walk beside you through the pain of separation and help you find strength, healing, and renewed purpose.
        </p>
      </div>

      {/* Cream quote band */}
      <div className="mission-quote-band">
        <blockquote className="mission-quote">
          &ldquo;Your story doesn&rsquo;t end with separation. With the right support, you can rebuild your life with dignity, rediscover your self-worth, and move forward with hope and clarity.&rdquo;
        </blockquote>
      </div>

      {/* Photo + text body */}
      <div className="mission-body">
        <div className="mission-photo">
          <img
            src={friendsTalkingImage}
            alt="Three Muslim women laughing and talking together outdoors"
            loading="lazy"
          />
        </div>
        <div className="mission-text">
          <p className="mission-paragraph">
            We create safe, private, and welcoming spaces where individuals can share their stories, connect with others, and access meaningful emotional and practical support. These communities are designed to be easily accessible and judgment-free, helping people feel seen, heard, and uplifted.
          </p>
          <p className="mission-paragraph">
            Our goal is to break the silence and stigma that often surrounds divorce in the Muslim community. We believe that healing is possible&mdash;and that community makes it real.
          </p>
          <p className="mission-paragraph">
            Care2Elevate&rsquo;s support groups have already made a powerful difference in the lives of many women&mdash;and we are actively working to extend the same care and community to men as well.
          </p>
          <p className="mission-close">
            Because at C2E, you are never alone. You are supported, valued, and capable of transforming your challenges into growth.
          </p>
        </div>
      </div>

    </section>
  )
}
