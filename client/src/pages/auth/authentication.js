import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const userData = {
        email,
        userType,
        token: "mock-token-" + Math.random().toString(36).substring(2),
      };

      localStorage.setItem("user", JSON.stringify(userData));
      navigate(userType === "student" ? "/dashboard" : "/company/dashboard");
    } catch (err) {
      setError(err.message || "Authentication failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="flex justify-center mb-6">
          <h2 className="auth-title">{isLogin ? "Login" : "Register"}</h2>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="auth-label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="auth-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              required
              minLength="6"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {!isLogin && (
            <>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="auth-label">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength="6"
                  className="auth-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="auth-label">I am a:</label>
                <div className="flex space-x-6">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="auth-radio"
                      name="userType"
                      value="student"
                      checked={userType === "student"}
                      onChange={() => setUserType("student")}
                    />
                    <span className="ml-2 text-gray-700">Student</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="auth-radio"
                      name="userType"
                      value="company"
                      checked={userType === "company"}
                      onChange={() => setUserType("company")}
                    />
                    <span className="ml-2 text-gray-700">Company</span>
                  </label>
                </div>
              </div>
            </>
          )}

          <div className="mb-4">
            <button type="submit" className="auth-button">
              {isLogin ? "Sign in" : "Register"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          {isLogin ? (
            <>
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button onClick={() => setIsLogin(false)} className="auth-link">
                  Register here
                </button>
              </p>
              <p className="mt-2">
                <button
                  onClick={() =>
                    alert("Password reset functionality would go here")
                  }
                  className="auth-link"
                >
                  Forgot your password?
                </button>
              </p>
            </>
          ) : (
            <p className="text-gray-600">
              Already have an account?{" "}
              <button onClick={() => setIsLogin(true)} className="auth-link">
                Login here
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
