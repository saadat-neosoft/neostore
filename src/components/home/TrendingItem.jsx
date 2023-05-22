import "../../styles/components/homeSection.scss";
import whiteChair from "../../assets/white-wooden-chair.png";
import modernSofa from "../../assets/modern-sofa-couch-with-wood.png";
import modernClock from "../../assets/modern-clock.png";
import jaguarChair from "../../assets/armen-living-jaguar-chair.png";
import deskLamp from "../../assets/globe-desk-lamp.png";

const TrendingItem = () => {
    return (
        <div className="home-section__trending-items">
            <div className="home-section__trending-items__item">
                <img src={whiteChair} alt="" height="235.2px" width="235.2px" />
                <span className="home-section__trending-item-title">
                    White Wooden Chair
                </span>
                <span className="home-section__trending-item-price">
                    ₹1200.00
                </span>
            </div>
            <div className="home-section__trending-items__item">
                <img src={modernSofa} alt="" height="235.2px" width="235.2px" />
                <span className="home-section__trending-item-title">
                    White Wooden Chair
                </span>
                <span className="home-section__trending-item-price">
                    ₹1200.00
                </span>
            </div>
            <div className="home-section__trending-items__item">
                <img
                    src={jaguarChair}
                    alt=""
                    height="235.2px"
                    width="235.2px"
                />
                <span className="home-section__trending-item-title">
                    White Wooden Chair
                </span>
                <span className="home-section__trending-item-price">
                    ₹1200.00
                </span>
            </div>
            <div className="home-section__trending-items__item">
                <img
                    src={modernClock}
                    alt=""
                    height="235.2px"
                    width="235.2px"
                />
                <span className="home-section__trending-item-title">
                    White Wooden Chair
                </span>
                <span className="home-section__trending-item-price">
                    ₹1200.00
                </span>
            </div>
            <div className="home-section__trending-items__item">
                <img src={deskLamp} alt="" height="235.2px" width="235.2px" />
                <span className="home-section__trending-item-title">
                    White Wooden Chair
                </span>
                <span className="home-section__trending-item-price">
                    ₹1200.00
                </span>
            </div>
        </div>
    );
};

export default TrendingItem;
