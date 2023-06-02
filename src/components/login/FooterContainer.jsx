import FooterContactUs from "./FooterContactUs";
import FooterQuickLinks from "./FooterQuickLinks";

const FooterContainer = () => {
    return (
        <div className="footer__container  ">
            <div className="container container-2">
                <FooterContactUs />
                <FooterQuickLinks />
            </div>
        </div>
    );
};

export default FooterContainer;
