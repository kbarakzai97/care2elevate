import aboutImage from '../assets/muslim-women-disagreement.webp'
import './about-section.css'

const defaultBlocks = [
  {
    title: 'Who We Are',
    text: 'A compassionate, online, women-only support program for divorced Muslim women, a virtual sanctuary for healing from grief, reflection and personal growth, rooted in Faith through Islamic teaching.'
  },
  {
    title: 'Our Vision',
    text: 'Our vision is to create a world where Muslim women are supported and empowered to make healthier choices, rebuild their lives with faith and clarity, and move forward with confidence and karamah.'
  }
]

export default function AboutSection({
  id = 'about-section',
  imageSrc = aboutImage,
  imageAlt = 'Woman wearing a hijab outdoors',
  blocks = defaultBlocks
}) {
  return (
    <section id={id} className="identity-section">
      <div className="identity-media">
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
      <div className="identity-panel">
        {blocks.map((block) => (
          <div className="identity-block" key={block.title}>
            <h2 className="identity-title">{block.title}</h2>
            <p className="identity-text">{block.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
