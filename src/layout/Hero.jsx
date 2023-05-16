import LazyLoad from "react-lazy-load";
import "../styles/components/hero.scss";
import twoFactorAuthImg from "../assets/pana.png";

const Hero = () => {
    return (
        <main className="hero">
            <div className="hero__left">
                <LazyLoad>
                    <img src={twoFactorAuthImg} alt="" loading="lazy" />
                </LazyLoad>
            </div>
            <div class="hero__right">
                <form
                    action="/login-form"
                    method="post"
                    class="hero__right__form"
                >
                    <span class="hero__right__form-header">LOGIN</span>
                    <label for="loginEmail" class="hero__right__form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="loginEmail"
                        class="hero__right__form-control"
                        placeholder="youremail@address.com"
                    />
                    <label for="loginEmail" class="hero__right__form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="loginPassword"
                        class="hero__right__form-control"
                        placeholder="••••••••••••"
                    />
                    <a
                        href="/forgot-password"
                        class="hero__right__form__forgot-password"
                    >
                        Forgot password
                    </a>
                    <button type="submit" class="hero__right__form-btn">
                        Continue
                    </button>
                    <span class="hero__right__form-signup">
                        New to NeoSTORE?
                        <a href="/signup" class="hero__right__form-signup-btn">
                            Sign up
                        </a>
                    </span>
                </form>
            </div>
        </main>
    );
};

export default Hero;
