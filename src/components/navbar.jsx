import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.webp'
import { scrollToSection } from '../utils/scrollToSection'

export default function Navbar() {
    const [isAboutOpen, setIsAboutOpen] = useState(false)

    const closeAboutDropdown = () => setIsAboutOpen(false)

    return (
    <header className="navbar-header">
    <div className="nav-container">
      <Link className="nav-logo-link" to="/care2elevate/">
        <img className="nav-logo" src={logo} alt="Care2Elevate Logo" />
      </Link>
      <ul className="nav-links">
        <li
          className="nav-dropdown"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <span
            className="nav-dropdown-trigger"
            onClick={() => setIsAboutOpen((open) => !open)}
          >
            About US
          </span>
          <ul className={`nav-dropdown-menu${isAboutOpen ? ' nav-dropdown-menu-open' : ''}`}>
            <li><HashLink smooth to="/care2elevate/#about-section" onClick={closeAboutDropdown}>About</HashLink></li>
            <li><Link to="/care2elevate/mission" onClick={closeAboutDropdown}>Mission</Link></li>
            <li><Link to="/care2elevate/concept" onClick={closeAboutDropdown}>Concept</Link></li>
            <li><Link to="/care2elevate/our-story" onClick={closeAboutDropdown}>Our Story</Link></li>
            <li><Link to="/care2elevate/who-we-are" onClick={closeAboutDropdown}>Who We Are</Link></li>
          </ul>
        </li>
        <li><Link to="/care2elevate/new-beginning">Programs</Link></li>
        <li><Link to="/care2elevate/resources">Resources</Link></li>
        <li>
          <a
            href="#contact-section"
            onClick={scrollToSection('contact-section')}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
    </header>
    );
}