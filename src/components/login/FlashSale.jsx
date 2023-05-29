import { Link } from "react-router-dom";
import "../../styles/components/flashSale.scss";

const FlashSale = () => {
    return (
        <div to="/flash-sale" className="flash-sale">
            MARKDOWNS: UP TO 70% OFF{"  "}
            <Link className="flash-sale__btn">SHOP NOW</Link>
        </div>
    );
};

export default FlashSale;
