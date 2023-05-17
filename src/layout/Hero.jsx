import ".././styles/components/hero.scss";
import HeroLeft from "../components/login/HeroLeft";
import HeroRight from "../components/login/HeroRight";

const Hero = () => {
    return (
        <main className="hero">
            <HeroLeft />
            <HeroRight />
        </main>
    );
};

export default Hero;
