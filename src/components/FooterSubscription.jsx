import emailIcon from "../assets/icon_mail.svg";

const FooterSubscription = () => {
    return (
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
    );
};

export default FooterSubscription;
