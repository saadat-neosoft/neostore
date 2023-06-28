import "../../styles/components/navIcons.scss";
import profileIcon from "../../assets/icon_profile.svg";
import heartIcon from "../../assets/icon_heart.svg";
import bagIcon from "../../assets/icon_bag.svg";
import { Link } from "react-router-dom";

const NavIcons = () => {
    return (
        <div className="nav-icons">
            <button className="nav-icons__btn">
                <Link to="/login">
                    <img src={profileIcon} alt="" />
                </Link>
            </button>
            <button className="nav-icons__btn">
                <Link to="/wishlist">
                    <img src={heartIcon} alt="" />
                </Link>
            </button>
            <button className="nav-icons__btn">
                <Link to="/cart">
                    <img src={bagIcon} alt="" />
                </Link>
            </button>
        </div>
    );
};

export default NavIcons;
