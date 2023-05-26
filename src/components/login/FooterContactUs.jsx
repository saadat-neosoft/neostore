import FooterSubscription from "./FooterSubscription";
import FooterAddress from "./FooterAddress";
import FooterSocialLinks from "./FooterSocialLinks";

const FooterContactUs = () => {
    return (
        <div className="footer__container__contact-us">
            <span className="footer__container__contact-us__title">
                NeoSTORE
            </span>
            <FooterSubscription />
            <FooterAddress />
            <FooterSocialLinks />
        </div>
    );
};

export default FooterContactUs;
