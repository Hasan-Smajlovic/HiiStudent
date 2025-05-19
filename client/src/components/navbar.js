import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          HiiStudent
        </Link>
        <div className="navbar-links">
          <Link to="/home" className="navbar-link">
            Home
          </Link>
          <Link to="/bosnia" className="navbar-link">
            Bosnia & Herzegovina
          </Link>
          <Link to="/europe" className="navbar-link">
            Europe
          </Link>
          <Link to="/auth" className="navbar-link">
            Login/Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
