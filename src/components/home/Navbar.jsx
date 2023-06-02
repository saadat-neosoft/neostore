import { Link } from "react-router-dom";
import "../../styles/components/navbar.scss";
import NavLinks from "./NavLinks";
import NavSearchBar from "./NavSearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
    return (
        <div className="stick">
            <div className="container">
                <nav className="navbar">
                    <Link to="/neostore" className="logo">
                        NeoSTORE
                    </Link>
                    <input className="nav-input" type="checkbox" id="toggle" />
                    <span className="toggler-container">
                        <label className="navbar-toggler" for="toggle">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </label>
                    </span>
                    <div className="navlist">
                        <NavLinks />
                        <NavSearchBar />
                        <NavIcons />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
