import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../services/AuthContext";
import { 
  FiHome, 
  FiUser, 
  FiLogIn, 
  FiLogOut, 
  FiSettings, 
  FiChevronDown,
  FiBookmark,
  FiBell,
  FiMessageSquare,
  FiHelpCircle,
  FiUsers,
} from "react-icons/fi";
import { GiModernCity } from "react-icons/gi";
import "./navbar.css";
import { EU, BA } from 'country-flag-icons/react/3x2';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setShowMobileMenu(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar glass-navbar">
      <div className="navbar-container">
        {/* Logo with animated gradient */}
        <Link to="/" className="navbar-logo">
          <span className="logo-gradient">HiiStudent</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <NavLink to="/" icon={<FiHome />} text="Home" />
          
          <div className="nav-dropdown">
            <button className="nav-dropdown-btn">
              <GiModernCity className="nav-icon" />
              <span>Destinations</span>
              <FiChevronDown className="dropdown-arrow" />
            </button>
            <div className="nav-dropdown-content">
              <Link to="/bosnia" className="dropdown-item">
                <BA title="Bosnia" className="flag-icon" />
                Bosnia & Herzegovina
              </Link>
              <Link to="/europe" className="dropdown-item">
                <EU title="Europe" className="flag-icon" />
                Europe
              </Link>
            </div>
          </div>

           <div className="nav-dropdown">
            <button className="nav-dropdown-btn">
              <FiUsers className="nav-icon" />
              <span>Features</span>
              <FiChevronDown className="dropdown-arrow" />
            </button>
            <div className="nav-dropdown-content">
              <Link to="/chatroom" className="dropdown-item">
                Chatroom
              </Link>
              <Link to="/#" className="dropdown-item">
                Test
              </Link>
            </div>
          </div>
          <NavLink to="/contact" icon={<FiMessageSquare />} text="Contact" />
          <NavLink to="/help" icon={<FiHelpCircle />} text="Help" />

          {user && (
            <button className="notification-btn">
              <FiBell />
              <span className="notification-badge">3</span>
            </button>
          )}
        </div>

        {/* User Section */}
        <div className="user-section" ref={dropdownRef}>
          {user ? (
            <>
              <button 
                className="user-avatar"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="avatar-circle">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" />
                  ) : (
                    <FiUser />
                  )}
                </div>
                <span className="username">{user.displayName || "User"}</span>
                <FiChevronDown className={`dropdown-arrow ${showDropdown ? "rotate" : ""}`} />
              </button>

              {showDropdown && (
                <div className="user-dropdown">
                  <Link to="/profile" className="dropdown-item">
                    <FiUser /> Profile
                  </Link>
                  <Link to="/settings" className="dropdown-item">
                    <FiSettings /> Settings
                  </Link>
                  <Link to="/saved" className="dropdown-item">
                    <FiBookmark /> Saved Items
                  </Link>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <FiLogOut /> Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="auth-buttons">
              <button 
                className="btn-login"
                onClick={() => navigate("/login")}
              >
                <FiLogIn /> Login
              </button>
              <button 
                className="btn-signup"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <div className={`hamburger ${showMobileMenu ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="mobile-menu">
          <NavLink to="/" icon={<FiHome />} text="Home" mobile />
          <Link to="/bosnia" className="dropdown-item">
    <BA title="Bosnia" className="flag-icon" />
    Bosnia & Herzegovina
  </Link>
  <Link to="/europe" className="dropdown-item">
    <EU title="Europe" className="flag-icon" />
    Europe
  </Link>
          <NavLink to="/resources" icon={<FiBookmark />} text="Resources" mobile />
          <NavLink to="/forum" icon={<FiMessageSquare />} text="Forum" mobile />
          
          {user ? (
            <>
              <NavLink to="/profile" icon={<FiUser />} text="Profile" mobile />
              <NavLink to="/settings" icon={<FiSettings />} text="Settings" mobile />
              <button className="mobile-menu-item" onClick={handleLogout}>
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <>
              <button 
                className="mobile-menu-item"
                onClick={() => navigate("/login")}
              >
                <FiLogIn /> Login
              </button>
              <button 
                className="mobile-menu-item"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

// Reusable NavLink component
const NavLink = ({ to, icon, text, mobile }) => (
  <Link 
    to={to} 
    className={mobile ? "mobile-menu-item" : "navbar-link"}
  >
    <span className="nav-icon">{icon}</span>
    <span className="nav-text">{text}</span>
  </Link>
);