import "../styles/components/signupSection.scss";
import rightArrow from "../assets/right-arrow.svg";

const HomeSectionSignUp = () => {
    return (
        <div className="signup-container">
            <div className="signup-container__container">
                <div className="signup-container__title">
                    SIGN UP FOR NEWS & OFFERS!
                </div>
                <div className="signup-container__description">
                    Subscribe to the weekly newsletter for all the latest
                    updates
                </div>
                <form className="signup-container__form">
                    <input
                        className="signup-container__form__input"
                        type="text"
                        placeholder="Enter your email"
                    />
                    <button className="signup-container__form__btn">
                        <img src={rightArrow} alt="" />
                    </button>
                </form>
            </div>
            <div className="gradient-layer"></div>
        </div>
    );
};

export default HomeSectionSignUp;
