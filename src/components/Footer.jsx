import './footer.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/logo.webp'

export default function Footer() {
    return (
    <footer className="footer">
        <div className="footer-container">
            <Link
                className="footer-logo-link"
                to="/care2elevate/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
            >
                <img className="footer-logo" src={logo} alt="Care2Elevate Logo" />
            </Link>
            <nav aria-label="Footer">
                <ul className="footer-list">
                    <li><Link to="/care2elevate/our-story">{"About"}</Link></li>
                    <li><HashLink smooth to="/care2elevate/#services-section">{"Services"}</HashLink></li>
                    <li><Link to="/care2elevate/resources">{"Resources"}</Link></li>
                    <li><Link to="/care2elevate/contact">{"Contact Us"}</Link></li>
                </ul>
            </nav>
            <ul className="footer-list footer-social" aria-label="Get in touch">
                <li><a href="mailto:care2elevate@gmail.com">{"care2elevate@gmail.com"}</a></li>
                <li>
                    <a href="https://www.facebook.com/circleofsiSTARhood/" target="_blank" rel="noopener noreferrer">
                        {"Facebook"}
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/care2elevate/" target="_blank" rel="noopener noreferrer">
                        {"Instagram"}
                    </a>
                </li>
            </ul>
        </div>
        <p className="footer-copyright">
            {`© ${new Date().getFullYear()} Care2Elevate. All rights reserved.`}
        </p>
    </footer>
    );
}
