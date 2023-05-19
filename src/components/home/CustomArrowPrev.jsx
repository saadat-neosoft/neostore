import chevronLeft from "../../assets/chevronLeft.svg";

const CustomArrowPrev = ({ onClick }) => {
    return (
        <img
            src={chevronLeft}
            alt=""
            className="slick-arrow slick-prev"
            onClick={onClick}
            style={{ zIndex: "10", left: "25px" }}
        />
    );
};

export default CustomArrowPrev;
