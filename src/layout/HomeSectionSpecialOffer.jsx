import "../styles/components/specialOffer.scss";

import offer1 from "../assets/offer-1.png";
import offer2 from "../assets/offer-2.png";
import offer3 from "../assets/offer-3.png";

import ratingStar from "../assets/icon_rating-star.svg";
import ratingStarHalf from "../assets/icon_rating-star-half.svg";

const HomeSectionSpecialOffer = () => {
    return (
        <div className="container">
            <div className="special-offer-container">
                <div className="special-offer">
                    <span className="special-offer__title">SPECIAL OFFER</span>
                    <span className="special-offer__countdown">
                        ends in 2d : 5h : 26m : 2s
                    </span>
                </div>
                <div className="special-offer__card">
                    <span className="special-offer__card__title">
                        White Wooden Chair
                    </span>
                    <span className="special-offer__card__price">₹1200.00</span>
                    <img
                        className="special-offer__card__img"
                        src={offer1}
                        alt=""
                    />
                    <div className="special-offer__card__qty-total">
                        <div className="special-offer__card__qty-available"></div>
                    </div>
                    <div className="special-offer__card__rating-container">
                        <span className="special-offer__card__availability">
                            Available: 289
                        </span>
                        <span className="special-offer__card__rating">
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStarHalf}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                        </span>
                    </div>
                </div>
                <div className="special-offer__card">
                    <span className="special-offer__card__title">
                        White Wooden Chair
                    </span>
                    <span className="special-offer__card__price">₹1200.00</span>
                    <img
                        className="special-offer__card__img"
                        src={offer2}
                        alt=""
                    />
                    <div className="special-offer__card__qty-total">
                        <div className="special-offer__card__qty-available"></div>
                    </div>
                    <div className="special-offer__card__rating-container">
                        <span className="special-offer__card__availability">
                            Available: 289
                        </span>
                        <span className="special-offer__card__rating">
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStarHalf}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                        </span>
                    </div>
                </div>
                <div className="special-offer__card">
                    <span className="special-offer__card__title">
                        White Wooden Chair
                    </span>
                    <span className="special-offer__card__price">₹1200.00</span>
                    <img
                        className="special-offer__card__img"
                        src={offer3}
                        alt=""
                    />
                    <div className="special-offer__card__qty-total">
                        <div className="special-offer__card__qty-available"></div>
                    </div>
                    <div className="special-offer__card__rating-container">
                        <span className="special-offer__card__availability">
                            Available: 289
                        </span>
                        <span className="special-offer__card__rating">
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStar}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                            <img
                                src={ratingStarHalf}
                                alt=""
                                height="24px"
                                width="24px"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSectionSpecialOffer;
