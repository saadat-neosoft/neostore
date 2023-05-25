import "../../styles/components/furnitureList.scss";

const FurnitureList = () => {
    return (
        <div className="furniture-list">
            <span className="furniture-list__text">
                <span className="furniture-list__text__home">Home</span>
                <span className="furniture-list__text__furniture">|</span>
                <span className="furniture-list__text__furniture">
                    Furniture list
                </span>
            </span>
        </div>
    );
};

export default FurnitureList;
