import './resources-page.css'

const defaultResources = [
  {
    key: 'peer-support',
    className: 'resources-page-card-sage',
    label: 'Peer Support',
    title: 'Connect with women who understand',
    description:
      'Register your interest in peer support. Complete the form and the Care2Elevate team will follow up with you.',
    href: 'https://forms.gle/7aVCYC94McoRBVqA7',
    linkText: 'Register for peer support'
  }
]

export default function ResourcesSection({
  title = 'Resources',
  intro = 'Explore support created to help you move forward with care, connection, and faith.',
  resources = defaultResources
}) {
  return (
    <main className="resources-page">
      <section className="resources-page-intro" aria-labelledby="resources-page-title">
        <h1 id="resources-page-title">{title}</h1>
        <p className="resources-page-lead">{intro}</p>
      </section>
      <section className="resources-page-content" aria-label="Available resources">
        <div className="resources-page-grid">
          {resources.map((resource) => (
            <article key={resource.key} className={`resources-page-card ${resource.className}`}>
              {resource.label && <p className="resources-page-label">{resource.label}</p>}
              <h2>{resource.title}</h2>
              <p className="resources-page-description">{resource.description}</p>
              <a
                className="resources-page-link"
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.linkText} <span aria-hidden="true">{'↗'}</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
