import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
    return <>
    <div className="nav-container">
      <Link className="nav-logo-link" to="/care2elevate">
        <img className="nav-logo" src={logo} />
      </Link>
      <ul className="nav-links">
        <li className="nav-links">
            <li><Link to="/care2elevate/aboutus">About</Link></li>
            <li><Link to="/care2elevate/services">Services</Link></li>
            <li><Link to="/care2elevate/contactus">Contact Us</Link></li>
        </li>
    </ul>
    </div>
    </>
}