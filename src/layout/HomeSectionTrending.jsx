import HomeSectionHeader from "../components/home/HomeSectionHeader";
import TrendingItem from "../components/home/TrendingItem";

const HomeSectionTrending = () => {
    const title = "TRENDING";

    const text =
        "Explore a wide range of affordable, well-designed and functional home furnishing solutions";
    return (
        <div className="home-section container">
            <HomeSectionHeader title={title} text={text} />
            <TrendingItem />
        </div>
    );
};

export default HomeSectionTrending;
