import "../../styles/components/homeSection.scss";

const HomeSectionHeader = ({ title, text }) => {
    return (
        <>
            <div className="home-section__heading">{title}</div>
            <div className="home-section__text">{text}</div>
            <div className="home-section__hr-line-container">
                <div className="home-section__hr-line-container__hr-line"></div>
            </div>
        </>
    );
};

export default HomeSectionHeader;
