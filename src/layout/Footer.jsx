import "../styles/components/footer.scss";

import facebookIcon from "../assets/icon_facebook.svg";
import twitterIcon from "../assets/icon_twitter.svg";
import instagramIcon from "../assets/icon_instagram.svg";
import emailIcon from "../assets/icon_mail.svg";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__container">
                <div class="footer__container__contact-us">
                    <span class="footer__container__contact-us__title">
                        NeoSTORE
                    </span>

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
                            <img
                                src={twitterIcon}
                                alt="twitter-icon"
                                title="Twitter"
                            />
                        </a>
                    </div>
                </div>

                <div class="footer__container__quick-links">
                    <div class="footer__container__quick-links__list">
                        <span class="footer__container__quick-links__list__title">
                            Categories
                        </span>
                        <div class="footer__container__quick-links__list__list-item">
                            <a href="/">Popular</a>
                            <a href="/">Chair</a>
                            <a href="/">Table</a>
                            <a href="/">Sofa</a>
                            <a href="/">Cupboard</a>
                            <a href="/">Lamp</a>
                        </div>
                    </div>
                    <div class="footer__container__quick-links__list">
                        <span class="footer__container__quick-links__list__title">
                            Customer Service
                        </span>
                        <div class="footer__container__quick-links__list__list-item">
                            <a href="/">My Account</a>
                            <a href="/">Discount</a>
                            <a href="/">Returns</a>
                            <a href="/">Orders History</a>
                            <a href="/">Order Tracking</a>
                        </div>
                    </div>
                    <div class="footer__container__quick-links__list">
                        <span class="footer__container__quick-links__list__title">
                            Furniture
                        </span>
                        <div class="footer__container__quick-links__list__list-item">
                            <a href="/">Living Room Furniture</a>
                            <a href="/">Bar Furniture</a>
                            <a href="/">Bedroom Furniture</a>
                            <a href="/">Kids Furniture</a>
                            <a href="/">Accent Furniture</a>
                            <a href="/">Book Shelves</a>
                        </div>
                    </div>
                    <div class="footer__container__quick-links__list">
                        <span class="footer__container__quick-links__list__title">
                            Useful Links
                        </span>
                        <div class="footer__container__quick-links__list__list-item">
                            <a href="/">Promotions</a>
                            <a href="/">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>

            <span class="footer__copyright">
                ©Neostore - All Rights Reserved
            </span>
        </footer>
    );
};

export default Footer;
