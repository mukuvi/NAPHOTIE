import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="auth-container">
      <div className="signup-page">
        <div className="signup-header">
          <h2>Join NAPHOTIE</h2>
          <p>Create your free account today</p>
        </div>

        <form className="signup-form">
          <div className="signup-input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="signup-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="signup-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="terms-agreement">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <Link to="/terms">Terms & Conditions</Link>
            </label>
          </div>

          <div className="signup-btns">
            <button id="signup-submit-btn" type="submit">
              <Link to="/Home"> Sign Up</Link>
            </button>
            <p className="login-redirect">
              Already have an account? <Link to="/">Log in</Link>
            </p>
          </div>
        </form>

        <div className="signup-footer">
          <small>©2025 NAPHOTIE. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
}
