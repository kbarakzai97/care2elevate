import friendsTalkingImage from '../assets/islamic-women-friends-talking-having-fun.webp'
import './mission-section.css'

export default function MissionSection({
  id = 'mission',
  title = 'Mission'
}) {
  return (
    <section id={id} className="mission-section">
      <div className="mission-hero">
        <div className="mission-intro">
          <h1 className="mission-title">{title}</h1>
          <p className="mission-lead">
            At Care2Elevate (C2E), we are dedicated to supporting Muslims as they navigate the emotional journey of divorce&mdash;with compassion, resilience, and faith. Whether you&rsquo;re a woman or a man, our mission is to walk beside you through the pain of separation and help you find strength, healing, and renewed purpose.
          </p>
        </div>
        <img
          className="mission-photo"
          src={friendsTalkingImage}
          alt="Three Muslim women laughing and talking together outdoors"
          loading="lazy"
        />
      </div>

      <div className="mission-body">
        <p className="mission-paragraph">
          We create safe, private, and welcoming spaces where individuals can share their stories, connect with others, and access meaningful emotional and practical support. These communities are designed to be easily accessible and judgment-free, helping people feel seen, heard, and uplifted.
        </p>

        <p className="mission-paragraph">
          Our goal is to break the silence and stigma that often surrounds divorce in the Muslim community. We believe that your story doesn&rsquo;t end with separation. With the right support, you can rebuild your life with dignity, rediscover your self-worth, and move forward with hope and clarity.
        </p>

        <p className="mission-paragraph mission-highlight">
          Care2Elevate&rsquo;s support groups have already made a powerful difference in the lives of many women&mdash;and we are actively working to extend the same care and community to men as well.
        </p>
      </div>

      <p className="mission-closing">
        Because at C2E, you are never alone. You are supported, valued, and capable of transforming your challenges into growth.
      </p>
    </section>
  )
}
