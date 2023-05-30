import HomeSectionHeader from "../components/home/HomeSectionHeader";
// import BestsellersItem from "../components/home/BestsellersItem";
import bs1 from "../assets/bs1.png";
import bs2 from "../assets/bs2.png";
import bs3 from "../assets/bs3.png";
import bs4 from "../assets/bs4.png";
import bs5 from "../assets/bs5.png";
import bs6 from "../assets/bs6.png";

import "../styles/components/bestsellers.scss";
import BestsellersItem from "../components/home/BestsellersItem";

const HomeSectionBestSellers = () => {
    const title = "BESTSELLERS";
    const text = "Sitewide Discounts & Savings of up to 25%";
    return (
        <div>
            <HomeSectionHeader title={title} text={text} />
            <div className="container">
                <div className="bestsellers">
                    <BestsellersItem pic={bs1} />
                    <BestsellersItem pic={bs2} />
                    <BestsellersItem pic={bs3} />
                    <BestsellersItem pic={bs4} />
                    <BestsellersItem pic={bs5} />
                    <BestsellersItem pic={bs6} />
                </div>
            </div>
        </div>
    );
};

export default HomeSectionBestSellers;
