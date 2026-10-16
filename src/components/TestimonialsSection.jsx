import { useEffect, useState } from 'react'
import './testimonials-section.css'

const defaultTestimonials = [
  {
    key: 'ayesha',
    initials: 'A.R.',
    quote: "After losing my partner, I felt completely lost. Care2Elevate gave me not just support, but a sense of belonging. I found strength in the stories of other women and finally started to heal.",
    name: 'Ayesha R.'
  },
  {
    key: 'sara',
    initials: 'S.M.',
    quote: "I used to think healing meant forgetting. But through Care2Elevate, I learned that healing means growing. The community here lifted me in ways I never imagined.",
    name: 'Sara M.'
  },
  {
    key: 'farah',
    initials: 'F.S.',
    quote: "Care2Elevate isn\u2019t just a support service \u2014 it\u2019s a lifeline. The team truly understands the emotional and social struggles we go through. I no longer feel alone in my journey.",
    name: 'Farah S.'
  },
  {
    key: 'mehnaz',
    initials: 'M.K.',
    quote: "The workshops gave me confidence to rebuild my life. I walked in unsure and broken, but today I stand with hope and direction. The care I received here was genuine and life-changing.",
    name: 'Mehnaz K.'
  }
]

// Two cards per page on wider screens, one on phones
const MOBILE_QUERY = '(max-width: 640px)'

function usePerPage() {
  const getPerPage = () => (window.matchMedia(MOBILE_QUERY).matches ? 1 : 2)
  const [perPage, setPerPage] = useState(getPerPage)

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY)
    const handleChange = () => setPerPage(getPerPage())
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  return perPage
}

export default function TestimonialsSection({
  id = 'testimonials',
  title = 'Voices of Healing',
  subtitle = 'Real stories from women who found strength, community, and hope through Care2Elevate.',
  testimonials = defaultTestimonials
}) {
  const perPage = usePerPage()
  const [activePage, setActivePage] = useState(0)

  const pages = []
  for (let i = 0; i < testimonials.length; i += perPage) {
    pages.push(testimonials.slice(i, i + perPage))
  }
  const pageCount = pages.length
  const currentPage = activePage % pageCount

  const goToPrevious = () => {
    setActivePage((current) => (current % pageCount - 1 + pageCount) % pageCount)
  }

  const goToNext = () => {
    setActivePage((current) => (current % pageCount + 1) % pageCount)
  }

  return (
    <section id={id} className="testimonials-section" aria-labelledby={`${id}-title`}>
      <div className="testimonials-header">
        <h2 id={`${id}-title`} className="testimonials-title">{title}</h2>
        <p className="testimonials-subtitle">{subtitle}</p>
      </div>
      <div className="testimonials-carousel">
        <button
          type="button"
          className="testimonial-arrow testimonial-arrow-left"
          onClick={goToPrevious}
          aria-label="Show previous testimonials"
        >
          &#8249;
        </button>
        <div className="testimonials-pages">
          {/* All pages share one grid cell so the carousel keeps the tallest page's height */}
          {pages.map((page, pageIndex) => (
            <div
              key={page[0].key}
              className={`testimonials-row${pageIndex === currentPage ? ' testimonials-row-active' : ''}`}
              aria-hidden={pageIndex !== currentPage}
            >
              {page.map((item) => (
                <article key={item.key} className="testimonial-card">
                  <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
                  <p className="testimonial-quote">{item.quote}</p>
                  <div className="testimonial-attribution">
                    <div className="testimonial-identity">
                      <span className="testimonial-name">{item.name}</span>
                      {item.detail && <span className="testimonial-detail">{item.detail}</span>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="testimonial-arrow testimonial-arrow-right"
          onClick={goToNext}
          aria-label="Show next testimonials"
        >
          &#8250;
        </button>
      </div>
    </section>
  )
}
