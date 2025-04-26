import { Form, Link } from "react-router-dom";
import { useState } from "react";
import VerifyHuman from "./VerifyHuman";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container">
      <div className="login-page">
        <div className="login-header">
          <h2>Welcome Back!</h2>
          <p>
            Sign in to continue to <span className="brand">NAPHOTIE</span>
          </p>
        </div>

        <form className="login-form">
          <div className="log-input">
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

          <div className="log-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <VerifyHuman />

          <div className="login-btns">
            <button id="log-btn" type="submit">
              Login
            </button>
            <button id="signup-btn">
              <Link to="/Signup">Create Account</Link>
            </button>
          </div>
        </form>

        <div className="login-footer">
          <small>©2025 NAPHOTIE. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
}
