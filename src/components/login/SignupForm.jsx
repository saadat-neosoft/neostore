import { Link } from "react-router-dom";

const SignupForm = ({ loginToggler }) => {
  return (
    <>
      <form className="hero__right__form">
        <span className="hero__right__form-header">SIGN UP</span>
        <span class="hero__right__form-label">New Account Register</span>
        <input
          type="text"
          id="loginEmail"
          className="hero__right__form-control"
          placeholder="First Name"
        />

        <input
          type="text"
          id="loginEmail"
          className="hero__right__form-control"
          placeholder="Last Name"
        />

        <input
          type="email"
          id="loginEmail"
          className="hero__right__form-control"
          placeholder="Email Address"
        />

        <input
          type="password"
          id="loginPassword"
          className="hero__right__form-control"
          placeholder="Password"
        />

        <div className="hero__right__form-terms">
          <input type="checkbox" />I agree to the terms and conditions.
        </div>

        <button className="hero__right__form-btn">Continue</button>
        <span className="hero__right__form-signup">
          New to NeoSTORE?
          <Link className="hero__right__form-signup-btn" onClick={loginToggler}>
            Log in
          </Link>
        </span>
      </form>
    </>
  );
};

export default SignupForm;
