import './navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.webp'
import { scrollToSection } from '../utils/scrollToSection'

export default function Navbar() {
    return (
    <header className="navbar-header">
    <div className="nav-container">
      <Link className="nav-logo-link" to="/care2elevate/">
        <img className="nav-logo" src={logo} alt="Care2Elevate Logo" />
      </Link>
      <ul className="nav-links">
        <li className="nav-dropdown">
          <span className="nav-dropdown-trigger">About US</span>
          <ul className="nav-dropdown-menu">
            <li><HashLink smooth to="/care2elevate/#about-section">About</HashLink></li>
            <li><Link to="/care2elevate/our-story">Our Story</Link></li>
            <li><Link to="/care2elevate/board">Board of Advisors</Link></li>
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