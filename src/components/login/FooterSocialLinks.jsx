import twitterIcon from "../../assets/icon_twitter.svg";
import instagramIcon from "../../assets/icon_instagram.svg";
import facebookIcon from "../../assets/icon_facebook.svg";
import { Link } from "react-router-dom";

const FooterSocialLinks = () => {
  return (
    <div className="footer__container__contact-us__contact__icons">
      <Link>
        <img src={facebookIcon} alt="facebook-icon" title="Facebook" />
      </Link>
      <Link>
        <img src={instagramIcon} alt="instagram-icon" title="Instagram" />
      </Link>
      <Link>
        <img src={twitterIcon} alt="twitter-icon" title="Twitter" />
      </Link>
    </div>
  );
};

export default FooterSocialLinks;
