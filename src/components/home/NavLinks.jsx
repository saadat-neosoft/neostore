import { Link } from "react-router-dom";
import "../../styles/components/navLinks.scss";

const NavLinks = () => {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/product">Furniture</Link>
      <Link>Home Decor</Link>
      <Link>Blog</Link>
      <Link>Sales</Link>
      <Link>More</Link>
    </div>
  );
};

export default NavLinks;
