import "../../styles/components/navSearchBar.scss";
import searchIcon from "../../assets/icon_search.svg";

const NavSearchBar = () => {
    return (
        <div className="nav-search-bar">
            <input type="text" placeholder="Search..." />

            <button className="nav-search-btn">
                <img src={searchIcon} alt="search-icon" />
            </button>
        </div>
    );
};

export default NavSearchBar;
