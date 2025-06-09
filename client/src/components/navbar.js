import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../services/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          HiiStudent
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/bosnia" className="navbar-link">
            Bosnia & Herzegovina
          </Link>
          <Link to="/europe" className="navbar-link" onClick={logout}>
            Europe
          </Link>
          {user ? (
            <>
            <Link to="/profile" className="navbar-link">
                Profile
              </Link>
              <Link className="navbar-link" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-link" onClick={handleLogin}>
                Login
              </Link>
              <Link to="/signup" className="navbar-link" onClick={handleSignup}>
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
