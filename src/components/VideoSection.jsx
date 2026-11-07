import { useRef, useState } from 'react'
import storyVideo from '../assets/Video.mov'
import './video-section.css'

export default function VideoSection() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }

  return (
    <section className="video-section">
      <div className="video-section-circle-accent" aria-hidden="true" />
      <div className="video-section-header" data-reveal="left">
        <h2 className="video-section-title">Understanding the Stages of Your Healing Journey</h2>
        <p className="video-section-description">
          Healing after divorce is not a single moment — it is a journey through distinct stages, each carrying its own emotional, spiritual, and practical weight.
        </p>
        <p className="video-section-description">
          This video walks you through the stages of the Care2Elevate healing framework, so you can understand where you are, what comes next, and how our program supports you at every step — rooted in Islamic teachings and compassionate guidance.
        </p>
        <p className="video-section-description">
          Whether you are newly divorced or years into your journey, knowing the path ahead makes all the difference.
        </p>
      </div>
      <div className="video-section-player-wrap" data-reveal="right" data-delay="200">
        <video
          ref={videoRef}
          className="video-section-player"
          src={storyVideo}
          playsInline
          preload="metadata"
          onEnded={() => setPlaying(false)}
          onClick={togglePlay}
        />
        {!playing && (
          <button className="video-section-play-btn" onClick={togglePlay} aria-label="Play video">
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <polygon points="6,4 20,12 6,20" fill="white" />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}
