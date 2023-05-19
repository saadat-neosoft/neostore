import "../../styles/components/navIcons.scss";
import profileIcon from "../../assets/icon_profile.svg";
import heartIcon from "../../assets/icon_heart.svg";
import bagIcon from "../../assets/icon_bag.svg";

const NavIcons = () => {
    return (
        <div className="nav-icons">
            <button className="nav-icons__btn">
                <img src={profileIcon} alt="" />
            </button>
            <button className="nav-icons__btn">
                <img src={heartIcon} alt="" />
            </button>
            <button className="nav-icons__btn">
                <img src={bagIcon} alt="" />
            </button>
        </div>
    );
};

export default NavIcons;
