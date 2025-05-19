import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">HiiStudent</h3>
            <p className="footer-subtitle">
              Connecting students with opportunities
            </p>
          </div>
          <div className="footer-links">
            <Link to="/about" className="footer-link">
              About
            </Link>
            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>
            <Link to="#" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="#" className="footer-link">
              Terms
            </Link>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} HiiStudent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
