import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import FurnitureList from "../components/product/FurnitureList";
import HomeSectionHeader from "../components/home/HomeSectionHeader";
import TrendingItem from "../components/home/TrendingItem";
import ProductDetailLeft from "../components/product/ProductDetailLeft";
import ProductDetailRight from "../components/product/ProductDetailRight";

import closeIcon from "../assets/icon-close.svg";

import cartImg from "../assets/cart-notificaiton.png";

import "../styles/components/productDetail.scss";

const ProductDetail = () => {
  useEffect(() => {
    document.title = "Product Detail | Neostore";
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "https://be.1-thing.in/favicon.png";
    document.head.appendChild(favicon);
  }, []);

  const [cartNotification, setCartNotification] = useState(false);

  function toggleCartNotification() {
    setCartNotification(!cartNotification);
  }

  const title = "YOU MIGHT ALSO LIKE";
  const text =
    "From glam vibes to laid-back comfort, these sofas all have one thing in common—and that’s amazing value.";

  return (
    <>
      <div>
        <Header />
        <FurnitureList />
        <div className="container">
          <div className="product-detail">
            <ProductDetailLeft />

            <ProductDetailRight
              toggleCartNotification={toggleCartNotification}
              cartNotification={cartNotification}
            />
          </div>
        </div>
        <div className="product-detail__more-info container">
          <h3 className="product-detail__more-info__description">
            DESCRIPTION
          </h3>
          <h3 className="product-detail__more-info__additional">
            ADDITONAL INFORMATION
          </h3>
          <h3 className="product-detail__more-info__reviews">REVIEWS (5)</h3>
        </div>
        <div className="container">
          <div className="product-detail__more-info__hr-line"></div>
        </div>
        <div className="product-detail__info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas sed tempus urna et pharetra pharetra massa. Tincidunt augue
          interdum velit euismod in pellentesque massa placerat. Pharetra diam
          sit amet nisl suscipit adipiscing Ut sem viverra aliquet eget sit amet
          tellus cras adipiscing. Nullam eget felis eget nunc lobortis
          mattis.Nisi vitae suscipit tellus mauris. Facilisi nullam vehicula
          ipsum.
        </div>
        <div className="home-section container">
          <HomeSectionHeader title={title} text={text} />
          <TrendingItem />
        </div>
        <Footer />
      </div>
      {cartNotification && (
        <div className="product-detail__cart-notification">
          <div className="product-detail__cart-notification__card">
            <div className="product-detail__cart-notification__card__header">
              <span>Product successfully added to your shopping cart</span>
              <button
                onClick={toggleCartNotification}
                className="product-detail__cart-notification__card__header__btn"
              >
                <img src={closeIcon} alt="" />
              </button>
            </div>
            <div className="product-detail__cart-notification__card__body">
              <div>
                <div className="product-detail__cart-notification__card__body__img-container">
                  <img src={cartImg} alt="" />
                </div>
              </div>
              <div className="product-detail__cart-notification__card__body__details">
                <div className="product-detail__cart-notification__card__body__info">
                  <span className="product-detail__cart-notification__card__body__title">
                    Armen Living Summer Chair
                  </span>
                  <span className="product-detail__cart-notification__card__body__item">
                    Item: MB494
                  </span>
                  <span className="product-detail__cart-notification__card__body__size">
                    Size: 40X60 cm
                  </span>
                  <div className="product-detail__cart-notification__card__body__price">
                    Price:{" "}
                    <span className="product-detail__cart-notification__card__body__price__old">
                      ₹4,499
                    </span>
                    {"  "}
                    ₹3,825
                    <div>
                      <select
                        name=""
                        id=""
                        className="product-detail__cart-notification__card__body__price__qty"
                      >
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                      </select>
                    </div>
                  </div>
                </div>
                <p className="product-detail__cart-notification__card__body__shipping">
                  Threshold Delivery - additional cost per unit: ₹400.00
                  In-stock Usually ships in 1-7 business days.
                </p>
                <p className="product-detail__cart-notification__card__body__shipping">
                  *Price does not include shipping and processing, gift wrap,
                  discounts or taxes
                </p>
                <div className="product-detail__cart-notification__card__body__hr-line"></div>
                <div>
                  <button className="product-detail__cart-notification__card__body__checkout-btn">
                    <a href="/checkout">Checkout</a>
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
      )}
    </>
  );
};

export default ProductDetail;
