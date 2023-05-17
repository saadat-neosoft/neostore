import FlashSale from "../components/login/FlashSale";
import Logo from "../components/login/Logo";

const HomeHeader = () => {
    return (
        <header>
            <FlashSale />
            <nav>
                <Logo />
            </nav>
        </header>
    );
};

export default HomeHeader;
