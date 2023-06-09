import { Link } from "react-router-dom";
import "../styles/components/newArrivals.scss";

import na1 from "../assets/na1.png";
import na2 from "../assets/na2.png";
import na3 from "../assets/na3.png";

const HomeNewArrivals = () => {
    return (
        <div className="container">
            <div className="new-arrivals">
                <div className="new-arrivals__1">
                    <span className="new-arrivals__heading">NEW ARRIVALS</span>
                    <span className="new-arrivals__text">Sofa Style 2021</span>
                    <Link className="new-arrivals__btn">Shop now</Link>
                    <img src={na1} alt="" />
                </div>
                <div className="new-arrivals__2">
                    <span className="new-arrivals__heading">NEW ARRIVALS</span>
                    <span className="new-arrivals__text">
                        Perfect fit for your home
                    </span>
                    <Link className="new-arrivals__btn">Shop now</Link>
                    <img src={na2} alt="" />
                </div>
                <div className="new-arrivals__3">
                    <span className="new-arrivals__heading">NEW ARRIVALS</span>
                    <span className="new-arrivals__text">New Collection</span>
                    <Link className="new-arrivals__btn">Shop now</Link>
                    <img src={na3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeNewArrivals;
