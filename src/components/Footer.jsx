import './footer.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/logo.webp'

export default function Footer() {
    return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-brand">
                <Link
                    className="footer-logo-link"
                    to="/care2elevate/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                >
                    <img className="footer-logo" src={logo} alt="Care2Elevate Logo" />
                </Link>
                <p className="footer-tagline">
                    {"A compassionate, faith-rooted space helping divorced Muslim women heal, "}
                    {"restore their karamah, and move forward with sakinah."}
                </p>
            </div>
            <div className="footer-links">
                <h3 className="footer-heading">{"Explore"}</h3>
                <ul className="footer-list">
                    <li><Link to="/care2elevate/our-story">{"About"}</Link></li>
                    <li><HashLink smooth to="/care2elevate/#services-section">{"Services"}</HashLink></li>
                    <li><Link to="/care2elevate/resources">{"Resources"}</Link></li>
                    <li><Link to="/care2elevate/contact">{"Contact Us"}</Link></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3 className="footer-heading">{"Get in Touch"}</h3>
                <ul className="footer-list">
                    <li><a href="mailto:care2elevate@gmail.com">{"care2elevate@gmail.com"}</a></li>
                </ul>
                <h3 className="footer-heading footer-follow-heading">{"Follow Us"}</h3>
                <ul className="footer-list" aria-label="Social media">
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
        </div>
        <div className="footer-bottom">
            <p className="footer-copyright">
                {`© ${new Date().getFullYear()} Care2Elevate. All rights reserved.`}
            </p>
        </div>
    </footer>
    );
}
