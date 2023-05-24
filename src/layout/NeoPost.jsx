import HomeSectionHeader from "../components/home/HomeSectionHeader";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import "../styles/components/neopost.scss";

const NeoPost = () => {
    const title = "#NEOSTOREfurniture";
    const text = "Use #neostore on your post for a chance to be featured!";

    return (
        <div className="neopost">
            <HomeSectionHeader title={title} text={text} />
            <div className="neopost__gallery">
                <div className="image-container">
                    <img className="neopost__gallery__img" src={g1} alt="" />
                    <div className="gradient-overlay-1"></div>
                </div>
                <img className="neopost__gallery__img" src={g2} alt="" />
                <img className="neopost__gallery__img" src={g3} alt="" />
                <img className="neopost__gallery__img" src={g4} alt="" />
                <img className="neopost__gallery__img" src={g5} alt="" />
                <div className="image-container">
                    <img className="neopost__gallery__img" src={g6} alt="" />
                    <div className="gradient-overlay-2"></div>
                </div>
            </div>
        </div>
    );
};

export default NeoPost;
