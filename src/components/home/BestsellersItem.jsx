import "../../styles/components/bestsellers.scss";
import ratingStar from "../../assets/icon_rating-star.svg";
import ratingStarHalf from "../../assets/icon_rating-star-half.svg";
import iconHeart from "../../assets/icon_heart.svg";
import iconBag from "../../assets/icon_bag.svg";

const BestsellersItem = ({ pic }) => {
    return (
        <div className="bestsellers-item">
            <img src={pic} alt="" />
            <div className="bestsellers-item__info">
                <div className="bestsellers-item__info__rating">
                    <img src={ratingStar} alt="" />
                    <img src={ratingStar} alt="" />
                    <img src={ratingStar} alt="" />
                    <img src={ratingStar} alt="" />
                    <img src={ratingStarHalf} alt="" />
                </div>
                <div className="bestsellers-item__info__title">
                    White Wooden Chair
                </div>
                <div className="bestsellers-item__info__price">
                    <span className="bestsellers-item__info__price__striked">
                        ₹8000.00
                    </span>
                    <span>₹6000.00</span>
                </div>
                <div className="bestsellers-item__info__btns">
                    <span className="bestsellers-item__info__btns__btn">
                        <img
                            src={iconHeart}
                            alt=""
                            height="25px"
                            width="25px"
                        />
                    </span>
                    <span className="bestsellers-item__info__btns__btn">
                        <img src={iconBag} alt="" height="25px" width="25px" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BestsellersItem;
