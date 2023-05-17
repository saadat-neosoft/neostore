import LazyLoad from "react-lazy-load";
import twoFactorAuthImg from "../../assets/pana.png";

const HeroLeft = () => {
    return (
        <div className="hero__left">
            <LazyLoad>
                <img
                    className="hero__left-img"
                    src={twoFactorAuthImg}
                    width="360px"
                    height="386px"
                    alt=""
                    loading="lazy"
                />
            </LazyLoad>
        </div>
    );
};

export default HeroLeft;
