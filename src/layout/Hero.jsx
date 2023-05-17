import "../styles/components/hero.scss";
import HeroLeft from "../components/HeroLeft";
import HeroRight from "../components/HeroRight";

const Hero = () => {
    return (
        <main className="hero">
            <HeroLeft />
            <HeroRight />
        </main>
    );
};

export default Hero;
