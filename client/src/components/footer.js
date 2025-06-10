import { Link } from "react-router-dom";
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiHelpCircle
} from "react-icons/fi";
import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer glass-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-title">
              <span className="logo-gradient">HiiStudent</span>
            </h3>
            <p className="footer-subtitle">
              Connecting students with global opportunities
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/bosnia" className="footer-link">Bosnia</Link></li>
              <li><Link to="/europe" className="footer-link">Europe</Link></li>
              <li><Link to="/resources" className="footer-link">Resources</Link></li>
              <li><Link to="/forum" className="footer-link">Forum</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-links">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-list">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/faq" className="footer-link">FAQs</Link></li>
              <li><Link to="/help" className="footer-link"><FiHelpCircle /> Help Center</Link></li>
              <li><Link to="#" className="footer-link">Feedback</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-list">
              <li className="contact-item">
                <FiMail className="contact-icon" />
                <span>info@hiistudent.com</span>
              </li>
              <li className="contact-item">
                <FiPhone className="contact-icon" />
                <span>+387 33 123 456</span>
              </li>
              <li className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>Sarajevo, Bosnia & Herzegovina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="#" className="legal-link">Privacy Policy</Link>
            <Link to="#" className="legal-link">Terms of Service</Link>
            <Link to="#" className="legal-link">Cookie Policy</Link>
          </div>
          <div className="footer-copyright">
            <p>© {currentYear} HiiStudent. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}