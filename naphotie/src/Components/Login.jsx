import { Form, Link } from "react-router-dom";
import { useState } from "react";
import VerifyHuman from "./VerifyHuman";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="login-page">
        <h3>Sign in to NAPHOTIE</h3>
        <form>
          <div className="log-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <label htmlFor="password">Password:</label>
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

          <VerifyHuman />
          <div className="login-btns">
            <button id="log-btn" type="submit">
              <Link to="/Home">Login </Link>
            </button>

            <Link to="Signup">
              <button id="signup-btn">Sign up</button>
            </Link>
          </div>
        </form>
      </div>
      <small>©2025 Naphotie, All rights reserved.</small>
    </>
  );
}
