import { Link } from "react-router-dom";
import "../../styles/components/navbar.scss";
import NavLinks from "./NavLinks";
import NavSearchBar from "./NavSearchBar";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/neostore" className="logo">
                NeoSTORE
            </Link>
            <NavLinks />
            <NavSearchBar />
        </nav>
    );
};

export default Navbar;
