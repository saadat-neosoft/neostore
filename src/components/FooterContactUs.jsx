import twitterIcon from "../assets/icon_twitter.svg";
import instagramIcon from "../assets/icon_instagram.svg";
import emailIcon from "../assets/icon_mail.svg";
import facebookIcon from "../assets/icon_facebook.svg";

const FooterContactUs = () => {
    return (
        <div class="footer__container__contact-us">
            <span class="footer__container__contact-us__title">NeoSTORE</span>

            <form
                action="/email-subscription"
                method="post"
                class="footer__container__contact-us__subscribe"
            >
                <img src={emailIcon} alt="email-icon" />
                <input type="email" placeholder="Your email address" />
                <button
                    type="submit"
                    class="footer__container__contact-us__subscribe-btn"
                >
                    subscribe
                </button>
            </form>

            <div class="footer__container__contact-us__contact">
                <span class="footer__container__contact-us__contact__info">
                    Contact Info
                </span>

                <span class="footer__container__contact-us__contact__number">
                    <span> +91 12345 67890 </span>
                    <span>|</span>
                    <span> +91 12345 67890 </span>
                </span>

                <p class="footer__container__contact-us__contact__address">
                    17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
            </div>

            <div class="footer__container__contact-us__contact__icons">
                <a href="/facebook">
                    <img
                        src={facebookIcon}
                        alt="facebook-icon"
                        title="Facebook"
                    />
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
        </div>
    );
};

export default FooterContactUs;
