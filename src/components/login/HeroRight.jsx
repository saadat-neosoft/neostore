import { Link } from "react-router-dom";

const HeroRight = () => {
    return (
        <div className="hero__right">
            <form
                action="/login-form"
                method="post"
                className="hero__right__form"
            >
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
                <label for="loginEmail" className="hero__right__form-label">
                    Password
                </label>
                <input
                    type="password"
                    id="loginPassword"
                    className="hero__right__form-control"
                    placeholder="••••••••••••"
                />
                <Link
                    to="/forgot-password"
                    className="hero__right__form__forgot-password"
                >
                    Forgot password
                </Link>
                <button type="submit" className="hero__right__form-btn">
                    Continue
                </button>
                <span className="hero__right__form-signup">
                    New to NeoSTORE?
                    <Link to="/signup" className="hero__right__form-signup-btn">
                        Sign up
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default HeroRight;
