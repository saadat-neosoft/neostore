import "../../styles/components/furnitureList.scss";

import furnPic from "../../assets/furniture-bg.png";

const FurnitureList = () => {
    return (
        <div className="furniture-list">
            <span className="furniture-list__text container">
                <span className="furniture-list__text__home">Home</span>
                <span className="furniture-list__text__furniture">|</span>
                <span className="furniture-list__text__furniture">
                    Furniture list
                </span>
            </span>
            <img src={furnPic} alt="" />
        </div>
    );
};

export default FurnitureList;
