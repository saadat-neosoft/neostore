import twitterIcon from "../assets/icon_twitter.svg";
import instagramIcon from "../assets/icon_instagram.svg";
import facebookIcon from "../assets/icon_facebook.svg";

const FooterSocialLinks = () => {
    return (
        <div class="footer__container__contact-us__contact__icons">
            <a href="/facebook">
                <img src={facebookIcon} alt="facebook-icon" title="Facebook" />
            </a>
            <a href="/instagram">
                <img
                    src={instagramIcon}
                    alt="instagram-icon"
                    title="Instagram"
                />
            </a>
            <a href="/twitter">
                <img src={twitterIcon} alt="twitter-icon" title="Twitter" />
            </a>
        </div>
    );
};

export default FooterSocialLinks;
