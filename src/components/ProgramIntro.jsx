import './program-intro.css'

export default function ProgramIntro({
  id = 'program-intro',
  title = 'Welcome to the transformative journey of the 6-week Divorce Recovery Program',
  text = "A comprehensive and compassionate guide designed to help you navigate the intricate terrain of the grief cycle, overcome the profound loss of a marriage, and empower yourself to move forward with confidence and mindfulness. Divorce is undoubtedly one of life\u2019s most challenging experiences, ushering in a wave of emotions that can be overwhelming and complex. In the midst of heartache and change, it\u2019s crucial to recognize that healing is not a linear path but a journey through the multifaceted stages of grief. Understanding the intricate layers of grief acknowledging the pain, anger, and sadness that often accompany the end of a marriage. Gaining insight into your emotions, allows you to navigate the grief cycle and build yourself up both emotionally and mentally will better enable you to elevate yourself into an opportunity for a new beginning."
}) {
  return (
    <section id={id} className="program-intro">
      <h2 className="program-intro-title">{title}</h2>
      <p className="program-intro-text">{text}</p>
    </section>
  )
}
