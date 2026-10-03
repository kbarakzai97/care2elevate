import './navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png'

export default function Navbar() {
    return (
    <header className="navbar-header">
    <div className="nav-container">
      <Link className="nav-logo-link" to="/care2elevate/">
        <img className="nav-logo" src={logo} alt="Care2Elevate Logo" />
      </Link>
      <ul className="nav-links">
        <li><HashLink smooth to="/care2elevate/#about-section">About</HashLink></li>
        <li><HashLink smooth to="/care2elevate/#services-section">Services</HashLink></li>
        <li>
          <a
            href="#contact-section"
            onClick={(event) => {
              event.preventDefault()
              const contactSection = document.getElementById('contact-section')
              if (!contactSection) return

              window.history.pushState(null, '', '#contact-section')
              contactSection.scrollIntoView({ behavior: 'instant', block: 'start' })
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
    </header>
    );
}