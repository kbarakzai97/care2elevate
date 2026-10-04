import founderImage from '../assets/mariam.webp'
import './founder-section.css'

const defaultParagraphs = [
  'Mariam founded Care2Elevate after experiencing firsthand the loneliness, uncertainty, and stigma that can accompany divorce.',
  'Her mission is to create a safe, compassionate space where Muslim women can heal, reconnect, and rebuild with guidance rooted in faith and spirituality.',
  'Through Care2Elevate, she believes in using faith as a source of strength - helping women rediscover their dignity, find peace, and confidently step into their next chapter. She holds a B.A from the University of Massachusetts and has training in grief facilitation, trauma resilience, and compassion meditation.'
]

export default function FounderSection({
  imageSrc = founderImage,
  imageAlt = 'Portrait of Mariam Azimi',
  title = 'Meet Mariam Azimi',
  paragraphs = defaultParagraphs,
  ctaLabel = 'Learn More',
  ctaHref = 'https://www.99clayvessels.com/mariam-azimi'
}) {
  return (
    <section className="founder-section">
      <div className="founder-media">
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
      <div className="founder-copy">
        <h2 className="founder-title">{title}</h2>
        {paragraphs.map((paragraph) => (
          <p className="founder-text" key={paragraph}>
            {paragraph}
          </p>
        ))}
        <a className="home-cta home-cta-secondary founder-cta" href={ctaHref} target="_blank" rel="noopener noreferrer">
          {ctaLabel}
        </a>
      </div>
    </section>
  )
}
