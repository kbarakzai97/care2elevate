import familyImage from '../assets/women-wearing-hijab-having-good-time.webp'
import groupImage from '../assets/two-arabic-muslim-girls.webp'
import prayingImage from '../assets/woman-praying-indoors-front-view.webp'
import flexibilityIcon from '../assets/flexibility_circle.png'
import faithIcon from '../assets/faith_circle.png'
import leadershipIcon from '../assets/leadership_circle.png'
import './values-section.css'

const defaultValues = [
  {
    key: 'sakinah',
    cardClass: 'value-card-coral',
    mediaClass: 'value-media-coral',
    mediaImgClass: 'value-media-family',
    icon: flexibilityIcon,
    title: 'Sakinah',
    text: "Sakinah is the deep peace that comes from trusting Allah's plan. It is a sense of calm in the heart, even amid life's challenges and the assurance that you are never alone.",
    mediaSrc: familyImage,
    mediaAlt: 'Women in hijab laughing together'
  },
  {
    key: 'sabr',
    cardClass: 'value-card-green',
    mediaClass: 'value-media-green',
    mediaImgClass: 'value-media-group',
    icon: faithIcon,
    title: 'Sabr',
    text: "Sabr is the strength to persevere through difficulties with faith and steadfastness. It is trusting in Allah's wisdom, even when the path is unclear, and believing that ease follows hardship.",
    mediaSrc: groupImage,
    mediaAlt: 'Two Muslim girls spending time together'
  },
  {
    key: 'karamah',
    cardClass: 'value-card-orange',
    mediaClass: 'value-media-orange',
    mediaImgClass: 'value-media-praying',
    icon: leadershipIcon,
    title: 'Karamah',
    text: 'Karamah is the inherent dignity and value that Allah has given to every person. It means knowing your worth, honoring your boundaries, and living with self-respect and purpose.',
    mediaSrc: prayingImage,
    mediaAlt: 'Woman praying indoors'
  }
]

export default function ValuesSection({
  headingId = 'values-title',
  heading = 'Three Pillars of Healing',
  description = 'Rooted in Islamic teachings, these three values shape every step of the Care2Elevate journey, guiding you from heartbreak toward peace, strength, and dignity.',
  values = defaultValues
}) {
  return (
    <section className="values-section" aria-labelledby={headingId}>
      <div className="values-intro">
        <h2 id={headingId} className="values-heading">{heading}</h2>
        <p className="values-description">{description}</p>
      </div>
      <div className="values-grid">
        {values.map((value) => (
          <article key={value.key} className={`value-card ${value.cardClass}`}>
            <div className={`value-media ${value.mediaClass}`}>
              <img className={value.mediaImgClass} src={value.mediaSrc} alt={value.mediaAlt} loading="lazy" />
              <div className="value-icon-circle">
                <img className="value-icon-img" src={value.icon} alt="" />
              </div>
            </div>
            <h3 className="value-title">{value.title}</h3>
            <span className="value-underline"></span>
            <p className="value-text">{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
