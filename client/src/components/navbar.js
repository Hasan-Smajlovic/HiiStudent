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
          <Link to="/europe" className="navbar-link">
            Europe
          </Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-smash-black font-medium">{user.name}</span>
              <button
                type="button"
                onClick={logout}
                className="bg-smash-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors shadow-custom"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleLogin}
                className="bg-smash-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors shadow-custom"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleSignup}
                className="bg-transparent border-2 border-smash-black text-smash-black px-4 py-2 rounded-lg hover:bg-smash-black hover:text-white transition-colors shadow-custom"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
