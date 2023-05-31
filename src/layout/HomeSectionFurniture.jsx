import HomeSectionHeader from "../components/home/HomeSectionHeader";

import blueSofa from "../assets/blue-sofa.png";
import whiteSofaBed from "../assets/white-sofabed.png";
import playTable from "../assets/play-table.png";

import "../styles/components/furnitureSection.scss";

const HomeSectionFurniture = () => {
    const title = "FURNITURE FOR EVERY BUDGET";
    const text =
        "From glam vibes to laid-back comfort, these sofas all have one thing in common—and that’s amazing value.";

    return (
        <div>
            <HomeSectionHeader title={title} text={text} />
            <div className="container">
                <div className="furniture-section">
                    <div className="furniture-section__item">
                        <img src={blueSofa} alt="" />
                        <div className="furniture-section__shop-container">
                            <div className="furniture-section__product">
                                <span className="furniture-section__product__name">
                                    Sofas under
                                </span>
                                <span className="furniture-section__product__price">
                                    ₹12000.00
                                </span>
                            </div>
                            <button className="furniture-section__shop-container__btn">
                                Shop now
                            </button>
                        </div>
                    </div>
                    <div className="furniture-section__item">
                        <img src={whiteSofaBed} alt="" />
                        <div className="furniture-section__shop-container">
                            <div className="furniture-section__product">
                                <span className="furniture-section__product__name">
                                    Sofas under
                                </span>
                                <span className="furniture-section__product__price">
                                    ₹12000.00
                                </span>
                            </div>
                            <button className="furniture-section__shop-container__btn">
                                Shop now
                            </button>
                        </div>
                    </div>
                    <div className="furniture-section__item">
                        <img src={playTable} alt="" />
                        <div className="furniture-section__shop-container">
                            <div className="furniture-section__product">
                                <span className="furniture-section__product__name">
                                    Sofas under
                                </span>
                                <span className="furniture-section__product__price">
                                    ₹12000.00
                                </span>
                            </div>
                            <button className="furniture-section__shop-container__btn">
                                Shop now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSectionFurniture;
