import { Link } from "react-router-dom";
import "../styles/components/newArrivals.scss";

const HomeNewArrivals = () => {
    return (
        <div className="new-arrivals">
            <div className="new-arrivals__1">
                <span className="new-arrivals__heading">NEW ARRIVALS</span>
                <span className="new-arrivals__text">Sofa Style 2021</span>
                <Link className="new-arrivals__btn">Shop now</Link>
            </div>
            <div className="new-arrivals__2">
                <span className="new-arrivals__heading">NEW ARRIVALS</span>
                <span className="new-arrivals__text">
                    Perfect fit for your home
                </span>
                <Link className="new-arrivals__btn">Shop now</Link>
            </div>
            <div className="new-arrivals__3">
                <span className="new-arrivals__heading">NEW ARRIVALS</span>
                <span className="new-arrivals__text">New Collection</span>
                <Link className="new-arrivals__btn">Shop now</Link>
            </div>
        </div>
    );
};

export default HomeNewArrivals;
