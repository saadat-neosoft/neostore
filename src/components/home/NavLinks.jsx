import { Link } from "react-router-dom";
import "../../styles/components/navLinks.scss";

const NavLinks = () => {
    return (
        <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/furniture">Furniture</Link>
            <Link to="/home-decor">Home Decor</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/sales">Sales</Link>
            <Link to="/more">More</Link>
        </div>
    );
};

export default NavLinks;