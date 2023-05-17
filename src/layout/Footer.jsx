import "../styles/components/footer.scss";
import FooterCopyright from "../components/FooterCopyright";
import FooterContainer from "../components/FooterContainer";

const Footer = () => {
    return (
        <footer class="footer">
            <FooterContainer />
            <FooterCopyright />
        </footer>
    );
};

export default Footer;
