import { Form, Link } from "react-router-dom";
import { useState } from "react";
import VerifyHuman from "./VerifyHuman";

export default function Login() {
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
              placeholder="Gmail"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <VerifyHuman />
          <div className="login-btns">
            <Link to="/Home">
              <button id="log-btn" type="submit">
                Login
              </button>
            </Link>

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
