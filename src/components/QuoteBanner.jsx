import './quote-banner.css'

export default function QuoteBanner({
  quote = 'Perhaps you dislike something which is good for you and like something which is bad for you. Allah knows and you do not know',
  source = 'AL-BAQARAH (2:216)'
}) {
  return (
    <section className="quote-banner-container">
      <div className="quote-content-wrapper">
        <blockquote className="quran-quote">&ldquo;{quote}&rdquo;</blockquote>
        <cite className="quote-source">{source}</cite>
      </div>
    </section>
  )
}
