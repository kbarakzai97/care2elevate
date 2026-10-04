import image1 from '../assets/muslim-women-traveling-paris-together.webp'
import reflectionImage from '../assets/medium-shot-women-with-laptop.webp'
import { scrollToSection } from '../utils/scrollToSection'
import './story-section.css'

const defaultParagraphs = [
  'Care2Elevate challenges the expectation that divorced Muslim women should simply "move on" and carry the weight of healing alone. Instead, we create a safe, faith-centered sisterhood where women are given permission to pause, process, and heal with intention.',
  'Here, divorce is not treated as a failure or something to quietly overcome. It is a life transition deserving of compassion, reflection, and meaningful support. Through spiritually grounded guidance, honest conversations, and community, women can process the grief of what was lost while rediscovering the strength, dignity, and identity that remain.',
  "Care2Elevate is a space to restore karamah (dignity), find sakinah (peace), and move forward with greater clarity and confidence. Because rebuilding after divorce isn't simply about moving on—it's about moving forward with faith, purpose, and a renewed sense of self."
]

export default function StorySection({
  title = "Divorce may close one chapter, but it doesn't diminish the woman who lived it.",
  paragraphs = defaultParagraphs,
  ctaLabel = 'Get Started',
  ctaTargetId = 'services-section',
  smallImageSrc = image1,
  smallImageAlt = 'Three friends smiling and taking a selfie together',
  largeImageSrc = reflectionImage,
  largeImageAlt = 'Woman resting her head on her arms in quiet reflection'
}) {
  return (
    <section className="story-section">
      <div className="story-intro">
        <h2 className="story-title">{title}</h2>
        {paragraphs.map((paragraph) => (
          <p className="story-text" key={paragraph}>
            {paragraph}
          </p>
        ))}
        <a
          className="home-cta home-cta-secondary story-cta"
          href={`#${ctaTargetId}`}
          onClick={scrollToSection(ctaTargetId)}
        >
          {ctaLabel}
        </a>
      </div>
      <div className="story-collage">
        <div className="story-collage-media">
          <img className="story-collage-small" src={smallImageSrc} alt={smallImageAlt} loading="lazy" />
          <img className="story-collage-large" src={largeImageSrc} alt={largeImageAlt} loading="lazy" />
        </div>
      </div>
    </section>
  )
}
