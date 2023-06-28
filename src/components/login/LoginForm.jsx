import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ loginToggler }) => {
  return (
    <>
      <form className="hero__right__form">
        <span className="hero__right__form-header">LOGIN</span>
        <label for="loginEmail" class="hero__right__form-label">
          Email
        </label>
        <input
          type="email"
          id="loginEmail"
          className="hero__right__form-control"
          placeholder="youremail@address.com"
        />
        <label for="loginPassword" className="hero__right__form-label">
          Password
        </label>
        <input
          type="password"
          id="loginPassword"
          className="hero__right__form-control"
          placeholder="••••••••••••"
        />
        <Link className="hero__right__form__forgot-password">
          Forgot password
        </Link>
        <button className="hero__right__form-btn">Continue</button>
        <span className="hero__right__form-signup">
          New to NeoSTORE?
          <Link className="hero__right__form-signup-btn" onClick={loginToggler}>
            Sign up
          </Link>
        </span>
      </form>
    </>
  );
};

export default LoginForm;
