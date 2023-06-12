import React from "react";
import Header from "../layout/Header";
import FurnitureList from "../components/product/FurnitureList";
import HomeSectionHeader from "../components/home/HomeSectionHeader";
import TrendingItem from "../components/home/TrendingItem";
import Footer from "../layout/Footer";

import cartItem from "../assets/cart-item.png";

import "../styles/components/cart.scss";

import wishlistHeart from "../assets/wishlist-heart.svg";

import closeIcon from "../assets/icon-close.svg";

const Cart = () => {
    const title = "YOU MIGHT ALSO LIKE";
    const text =
        "From glam vibes to laid-back comfort, these sofas all have one thing in common—and that’s amazing value.";
    return (
        <>
            <Header />
            <FurnitureList />
            <div className="container">
                <div className="cart">
                    <div className="cart__left">
                        <div className="cart__left__item">
                            <div>
                                <img src={cartItem} alt="" />
                            </div>
                            <div className="cart__left__item__details">
                                <span className="cart__left__item__details__title">
                                    Minimal Stand
                                </span>
                                <span className="cart__left__item__details__price">
                                    <span className="cart__left__item__details__price__old">
                                        ₹4,499
                                    </span>
                                    ₹3,825
                                </span>
                                <span className="cart__left__item__details__save">
                                    you save: ₹674 (20% )
                                </span>
                                <div className="cart__left__item__details__qty-wishlist">
                                    <select
                                        name=""
                                        id=""
                                        className="cart__left__item__details__qty-wishlist__qty"
                                    >
                                        <option value="1">Qty: 1</option>
                                    </select>
                                    <div className="cart__left__item__details__qty-wishlist__btn-container">
                                        <img
                                            src={wishlistHeart}
                                            alt=""
                                            className="cart__left__item__details__qty-wishlist__btn-container__img"
                                        />
                                        <button className="cart__left__item__details__qty-wishlist__btn-container__btn">
                                            Move to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="cart__left__item__close-btn">
                                <img
                                    src={closeIcon}
                                    alt=""
                                    className="cart__left__item__close-btn__img"
                                />
                            </button>
                        </div>
                        <div className="cart__left__item">
                            <div>
                                <img src={cartItem} alt="" />
                            </div>
                            <div className="cart__left__item__details">
                                <span className="cart__left__item__details__title">
                                    Minimal Stand
                                </span>
                                <span className="cart__left__item__details__price">
                                    <span className="cart__left__item__details__price__old">
                                        ₹4,499
                                    </span>
                                    ₹3,825
                                </span>
                                <span className="cart__left__item__details__save">
                                    you save: ₹674 (20% )
                                </span>
                                <div className="cart__left__item__details__qty-wishlist">
                                    <select
                                        name=""
                                        id=""
                                        className="cart__left__item__details__qty-wishlist__qty"
                                    >
                                        <option value="1">Qty: 1</option>
                                    </select>
                                    <div className="cart__left__item__details__qty-wishlist__btn-container">
                                        <img
                                            src={wishlistHeart}
                                            alt=""
                                            className="cart__left__item__details__qty-wishlist__btn-container__img"
                                        />
                                        <button className="cart__left__item__details__qty-wishlist__btn-container__btn">
                                            Move to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="cart__left__item__close-btn">
                                <img
                                    src={closeIcon}
                                    alt=""
                                    className="cart__left__item__close-btn__img"
                                />
                            </button>
                        </div>
                        <div className="cart__left__item">
                            <div>
                                <img src={cartItem} alt="" />
                            </div>
                            <div className="cart__left__item__details">
                                <span className="cart__left__item__details__title">
                                    Minimal Stand
                                </span>
                                <span className="cart__left__item__details__price">
                                    <span className="cart__left__item__details__price__old">
                                        ₹4,499
                                    </span>
                                    ₹3,825
                                </span>
                                <span className="cart__left__item__details__save">
                                    you save: ₹674 (20% )
                                </span>
                                <div className="cart__left__item__details__qty-wishlist">
                                    <select
                                        name=""
                                        id=""
                                        className="cart__left__item__details__qty-wishlist__qty"
                                    >
                                        <option value="1">Qty: 1</option>
                                    </select>
                                    <div className="cart__left__item__details__qty-wishlist__btn-container">
                                        <img
                                            src={wishlistHeart}
                                            alt=""
                                            className="cart__left__item__details__qty-wishlist__btn-container__img"
                                        />
                                        <button className="cart__left__item__details__qty-wishlist__btn-container__btn">
                                            Move to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="cart__left__item__close-btn">
                                <img
                                    src={closeIcon}
                                    alt=""
                                    className="cart__left__item__close-btn__img"
                                />
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="cart__right">
                            <h4 className="cart__right__heading">
                                Apply Coupon
                            </h4>
                            <div className="cart__right__coupon">
                                <span className="cart__right__coupon__apply">
                                    Apply Coupon
                                </span>
                                <span className="cart__right__coupon__view">
                                    View Coupon
                                </span>
                            </div>
                            <h4 className="cart__right__heading-2">
                                Price Detail
                            </h4>
                            <div className="cart__right__price-detail">
                                <span>Total Price</span>
                                <span>₹4,650</span>
                            </div>
                            <div className="cart__right__price-detail">
                                <span>Discount on Price</span>
                                <span>-₹674</span>
                            </div>
                            <div className="cart__right__price-detail">
                                <span>Coupon</span>
                                <span>Apply Coupon</span>
                            </div>
                            <div className="cart__right__price-detail">
                                <span>Shipping Charges</span>
                                <span>₹0.00</span>
                            </div>
                            <div className="cart__right__price-detail__total">
                                <span>Total</span>
                                <span>₹4,650</span>
                            </div>
                            <div>
                                <button className="product-detail__cart-notification__card__body__checkout-btn">
                                    Checkout
                                </button>
                            </div>
                            <div>
                                <button className="product-detail__cart-notification__card__body__continue-btn">
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-section container">
                <HomeSectionHeader title={title} text={text} />
                <TrendingItem />
            </div>
            <Footer />
        </>
    );
};

export default Cart;
