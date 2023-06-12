import React, { useState } from "react";
import ratingStar from "../../assets/star-filled.svg";

import color1 from "../../assets/color1.png";
import color2 from "../../assets/color2.png";
// import color3 from "../../assets/color3.png";
import color3bg from "../../assets/color3bg.png";
import color4 from "../../assets/color4.png";
import upArrow from "../../assets/chevronLeft.svg";
import downArrow from "../../assets/chevronRight.svg";
import heartIcon from "../../assets/icon_heart.svg";
import shareIcon from "../../assets/icon-share.svg";

const ProductDetailRight = ({ toggleCartNotification, cartNotification }) => {
    const [qty, setQty] = useState(1);

    const increment = () => {
        setQty(qty + 1);
    };

    const decrement = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
    };

    return (
        <>
            <div>
                <div className="product-detail__title">
                    ARMEN LIVING SUMMER CHAIR
                </div>
                <div className="product-detail__price">₹6,450</div>
                <div className="product-detail__tax-info">
                    Price incl. of all taxes
                </div>
                <div className="product-detail__rating">
                    <img src={ratingStar} alt="" />
                    <img src={ratingStar} alt="" />
                    <img src={ratingStar} alt="" />
                    <img src={ratingStar} alt="" />
                    <img src={ratingStar} alt="" />
                </div>
                <div className="product-detail__in-stock">
                    Brand: Studio Design
                </div>
                <div className="product-detail__in-stock">
                    Reference: demo_3
                </div>
                <div className="product-detail__in-stock">
                    In stock 191 Items
                </div>
                <div className="product-detail__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="product-detail__hr-line"></div>
                <div className="product-detail__choose-color">Choose Color</div>
                <div className="product-detail__colors">
                    <img src={color1} alt="" />
                    <img src={color2} alt="" />
                    <img src={color3bg} alt="" />
                    <img src={color4} alt="" />
                </div>
                <div className="product-detail__cart">
                    <button
                        onClick={toggleCartNotification}
                        type="button"
                        className="product-detail__btn"
                    >
                        Add To Cart
                    </button>
                    <div className="product-detail__cart-btn-container">
                        <div className="product-detail__qty">{qty}</div>
                        <div className="product-detail__qty-update-container">
                            <button
                                className="product-detail__qty-update-up"
                                onClick={increment}
                            >
                                <img src={upArrow} alt="" />
                            </button>
                            <button
                                className="product-detail__qty-update-down"
                                onClick={decrement}
                            >
                                <img src={downArrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product-detail__share-container">
                    <button className="product-detail__wishlist">
                        <img src={heartIcon} alt="" /> Add to Wishlist
                    </button>
                    <button className="product-detail__share">
                        <img src={shareIcon} alt="" /> Share this
                    </button>
                </div>
            </div>

          
        </>
    );
};

export default ProductDetailRight;
