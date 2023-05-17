import LazyLoad from "react-lazy-load";
import twoFactorAuthImg from "../assets/pana.png";

const HeroLeft = () => {
    return (
        <div className="hero__left">
            <LazyLoad>
                <img src={twoFactorAuthImg} alt="" loading="lazy" />
            </LazyLoad>
        </div>
    );
};

export default HeroLeft;
