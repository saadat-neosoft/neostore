import "../../styles/components/homeSection.scss";
import chairIcon from "../../assets/icon_chair.svg";
import cupboardIcon from "../../assets/icon_cupboard.svg";
import lampIcon from "../../assets/icon_lamp.svg";
import sofaIcon from "../../assets/icon_sofa.svg";
import starIcon from "../../assets/icon_star.svg";
import tableIcon from "../../assets/icon_table.svg";

const DepartmentCategories = () => {
    return (
        <div className="home-section__categories">
            <div className="home-section__category">
                <img src={starIcon} alt="" height="70px" width="66px" />
                <span className="home-section__category__title">Popular</span>
            </div>
            <div className="home-section__category">
                <img src={chairIcon} alt="" height="84px" width="84px" />
                <span className="home-section__category__title">Chair</span>
            </div>
            <div className="home-section__category">
                <img src={tableIcon} alt="" height="84px" width="84px" />
                <span className="home-section__category__title">Table</span>
            </div>
            <div className="home-section__category">
                <img src={sofaIcon} alt="" height="84px" width="84px" />
                <span className="home-section__category__title">Sofa</span>
            </div>
            <div className="home-section__category">
                <img src={cupboardIcon} alt="" height="84px" width="84px" />
                <span className="home-section__category__title">Cupboard</span>
            </div>
            <div className="home-section__category">
                <img src={lampIcon} alt="" height="84px" width="84px" />
                <span className="home-section__category__title">Lamp</span>
            </div>
        </div>
    );
};

export default DepartmentCategories;
