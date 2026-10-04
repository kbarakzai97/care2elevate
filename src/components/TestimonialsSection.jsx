import { useState } from 'react'
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

const PAGE_SIZE = 2

export default function TestimonialsSection({
  id = 'testimonials',
  title = 'Voices of Healing',
  subtitle = 'Real stories from women who found strength, community, and hope through Care2Elevate.',
  testimonials = defaultTestimonials
}) {
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(testimonials.length / PAGE_SIZE)
  const visibleTestimonials = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const goToPrevious = () => {
    setPage((current) => (current - 1 + pageCount) % pageCount)
  }

  const goToNext = () => {
    setPage((current) => (current + 1) % pageCount)
  }

  return (
    <section id={id} className="testimonials-section">
      <div className="testimonials-carousel">
        <button
          type="button"
          className="testimonial-arrow testimonial-arrow-left"
          onClick={goToPrevious}
          aria-label="Show previous testimonials"
        >
          &#8249;
        </button>
        <div className="testimonials-row">
          {visibleTestimonials.map((item) => (
            <article key={item.key} className="testimonial-card">
              <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
              <p className="testimonial-quote">{item.quote}</p>
              <div className="testimonial-attribution">
                <span className="testimonial-avatar">{item.initials}</span>
                <div className="testimonial-identity">
                  <span className="testimonial-name">{item.name}</span>
                  {item.detail && <span className="testimonial-detail">{item.detail}</span>}
                </div>
              </div>
            </article>
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
