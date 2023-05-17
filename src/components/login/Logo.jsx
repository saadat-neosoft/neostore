import { Link } from "react-router-dom";
import "../../styles/components/logo.scss";

const Logo = () => {
    return (
        <div className="logo-container">
            <Link to="/neostore" className="logo">
                NeoSTORE
            </Link>
        </div>
    );
};

export default Logo;
