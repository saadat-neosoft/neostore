import { Link } from "react-router-dom";
import "../../styles/components/flashSale.scss";

const FlashSale = () => {
    return (
        <Link to="/flash-sale" className="flash-sale">
            MARKDOWNS: UP TO 70% OFF SHOP NOW
        </Link>
    );
};

export default FlashSale;
