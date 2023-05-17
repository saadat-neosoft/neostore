import ".././styles/components/footer.scss";
import FooterCopyright from "../components/login/FooterCopyright";
import FooterContainer from "../components/login/FooterContainer";

const Footer = () => {
    return (
        <footer class="footer">
            <FooterContainer />
            <FooterCopyright />
        </footer>
    );
};

export default Footer;
