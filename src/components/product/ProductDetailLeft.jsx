import color3bg from "../../assets/color3bg.png";
// import upArrow from "../../assets/chevronLeft.svg";
// import downArrow from "../../assets/chevronRight.svg";

// import vc1 from "../../assets/vc1.png";
// import vc2 from "../../assets/vc2.png";
// import vc3 from "../../assets/vc3.png";
import SwiperVertical from "../../pages/SwiperVertical";

const ProductDetailLeft = () => {
    return (
        <div className="product-detail__left">
            {/* <div className="product-detail__left__carousel">
                <img
                    className="product-detail__left__carousel__up-arrow"
                    src={upArrow}
                    alt=""
                />

                <div className="product-detail__left__carousel__images">
                    <img src={vc1} alt="" />
                    <img src={vc2} alt="" />
                    <img src={vc3} alt="" />
                </div>
                <img
                    className="product-detail__left__carousel__down-arrow"
                    src={downArrow}
                    alt=""
                />
            </div> */}
            <SwiperVertical />
            <div className="product-detail__img-container">
                <img src={color3bg} alt="" />
            </div>
        </div>
    );
};

export default ProductDetailLeft;
