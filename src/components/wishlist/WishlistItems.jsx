import React from "react";
import "../../styles/components/wishlistItems.scss";

import wishlistImg from "../../assets/wishlist.png";

import gridView from "../../assets/gridView.svg";
import listView from "../../assets/listView.svg";

const WishlistItems = () => {
    return (
        <div className="container">
            <div className="wishlist">
                <div className="wishlist__view">
                    <button>
                        <img src={gridView} alt="" />
                    </button>
                    <button>
                        <img src={listView} alt="" />
                    </button>
                </div>
                <div className="wishlist__items">
                    <div className="wishlist__items__item">
                        <img
                            className="wishlist__items__item__img"
                            src={wishlistImg}
                            alt=""
                        />
                        <div className="wishlist__items__item__details">
                            <div className="wishlist__items__item__details__title">
                                Armen Living Summer Chair
                            </div>
                            <div className="wishlist__items__item__details__item">
                                Item: MB494
                            </div>
                            <div className="wishlist__items__item__details__size">
                                Size: 40X60 cm
                            </div>
                            <div className="wishlist__items__item__details__price-qty">
                                <span className="wishlist__items__item__details__price-qty__price">
                                    Price:{" "}
                                    <span className="wishlist__items__item__details__price-qty__price__old">
                                        ₹4,499
                                    </span>{" "}
                                    ₹3,825
                                </span>
                                <select className="wishlist__items__item__details__price-qty__qty">
                                    <option value="1"> Qty: 1</option>
                                </select>
                            </div>
                            <button className="wishlist__items__item__details__btn">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                    <div className="wishlist__items__item">
                        <img
                            className="wishlist__items__item__img"
                            src={wishlistImg}
                            alt=""
                        />
                        <div className="wishlist__items__item__details">
                            <div className="wishlist__items__item__details__title">
                                Armen Living Summer Chair
                            </div>
                            <div className="wishlist__items__item__details__item">
                                Item: MB494
                            </div>
                            <div className="wishlist__items__item__details__size">
                                Size: 40X60 cm
                            </div>
                            <div className="wishlist__items__item__details__price-qty">
                                <span className="wishlist__items__item__details__price-qty__price">
                                    Price:{" "}
                                    <span className="wishlist__items__item__details__price-qty__price__old">
                                        ₹4,499
                                    </span>{" "}
                                    ₹3,825
                                </span>
                                <select className="wishlist__items__item__details__price-qty__qty">
                                    <option value="1"> Qty: 1</option>
                                </select>
                            </div>
                            <button className="wishlist__items__item__details__btn">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistItems;
