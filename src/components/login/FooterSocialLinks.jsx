import twitterIcon from "../../assets/icon_twitter.svg";
import instagramIcon from "../../assets/icon_instagram.svg";
import facebookIcon from "../../assets/icon_facebook.svg";
import { Link } from "react-router-dom";

const FooterSocialLinks = () => {
    return (
        <div className="footer__container__contact-us__contact__icons">
            <Link to="/facebook">
                <img src={facebookIcon} alt="facebook-icon" title="Facebook" />
            </Link>
            <Link to="/instagram">
                <img
                    src={instagramIcon}
                    alt="instagram-icon"
                    title="Instagram"
                />
            </Link>
            <Link to="/twitter">
                <img src={twitterIcon} alt="twitter-icon" title="Twitter" />
            </Link>
        </div>
    );
};

export default FooterSocialLinks;
