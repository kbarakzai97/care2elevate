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
        <li><HashLink smooth to="/care2elevate#about-section">About</HashLink></li>
        <li><HashLink smooth to="/care2elevate#services-section">Services</HashLink></li>
        <li><Link to="/care2elevate/contact-us">Contact Us</Link></li>
      </ul>
    </div>
    </header>
    );
}