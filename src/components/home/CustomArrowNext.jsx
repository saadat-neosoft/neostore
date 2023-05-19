import chevronRight from "../../assets/chevronRight.svg";

const CustomArrowNext = ({ onClick }) => {
    return (
        <img
            src={chevronRight}
            alt=""
            className="slick-arrow slick-next"
            onClick={onClick}
            style={{ right: "25px" }}
        />
    );
};

export default CustomArrowNext;
