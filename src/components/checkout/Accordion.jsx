import { useState } from "react";
import "../../styles/components/accordion.scss";

import location from "../../assets/icon_location.svg";

import checkoutImg from "../../assets/checkout-product.png";

import chevDown from "../../assets/chevronDown.svg";

const Accordion = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="accordion">
      <div className="accordion__item">
        <div
          className={`accordion__header ${
            activeTab === 0 ? "accordion__active" : ""
          }`}
          onClick={() => handleTabClick(0)}
        >
          1. Shipping address
        </div>

        {activeTab === 0 && (
          <div className="accordion__content">
            <form className="accordion__content__form">
              <div className="accordion__content__form__input-container">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="accordion__content__form__input-container__input"
                />
                <input
                  type="text"
                  placeholder="Enter Phone no"
                  className="accordion__content__form__input-container__input"
                />
              </div>
              <div className="accordion__content__form__input-container">
                <input
                  type="text"
                  placeholder="Enter Address Line 1"
                  className="accordion__content__form__input-container__input"
                />
              </div>
              <div className="accordion__content__form__input-container">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="accordion__content__form__input-container__input"
                />
                <input
                  type="text"
                  placeholder="Enter Phone no"
                  className="accordion__content__form__input-container__input"
                />
              </div>
              <div className="accordion__content__form__input-container">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="accordion__content__form__input-container__input"
                />
                <input
                  type="text"
                  placeholder="Enter Phone no"
                  className="accordion__content__form__input-container__input"
                />
              </div>
              <a href="/map" className="accordion__content__form__locate">
                <img src={location} alt="" />
                Locate on map
              </a>
            </form>
          </div>
        )}
      </div>

      <div className="accordion__item">
        <div
          className={`accordion__header ${
            activeTab === 1 ? "accordion__active" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          2. Shipping Method
        </div>
        {activeTab === 1 && (
          <div className="accordion__content">
            <div className="accordion__content__method">
              <div className="accordion__content__method__product">
                <img
                  className="accordion__content__method__product__img"
                  src={checkoutImg}
                  alt=""
                />
                <div className="accordion__content__method__product__details">
                  <div className="accordion__content__method__product__details__title">
                    Minimal Stand
                  </div>
                  <div className="accordion__content__method__product__details__price">
                    <span className="accordion__content__method__product__details__price__old">
                      ₹4,499
                    </span>{" "}
                    ₹3,825
                  </div>
                  <div className="accordion__content__method__product__details__save">
                    you save: ₹674 (20%)
                  </div>
                  <select
                    name="qty"
                    id=""
                    className="accordion__content__method__product__details__select"
                  >
                    <option value="1">Qty: 1</option>
                  </select>
                </div>
              </div>
              <div className="accordion__content__method__option">
                <div className="accordion__content__method__option__title">
                  Select a Delivery Option
                </div>
                <select
                  name="delivery"
                  id=""
                  className="accordion__content__method__option__select"
                >
                  <option value="home">Home Delivery</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="accordion__item">
        <div
          className={`accordion__header ${
            activeTab === 2 ? "accordion__active" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          3. Billing address
        </div>
        {activeTab === 2 && (
          <div className="accordion__content">
            <div className="accordion__content__billing">
              <p className="accordion__content__billing__address">
                111, Rustomjee Tower, Near Inorbit mall ,Malad - west. Mumbai -
                400064.
              </p>
              <div className="accordion__content__billing__address__same">
                <input
                  type="checkbox"
                  className="accordion__content__billing__address__same__checkbox"
                />
                <span className="accordion__content__billing__address__same__title">
                  Same as Shipping Address
                </span>
              </div>
            </div>
            <form className="accordion__content__form">
              <div className="accordion__content__form__input-container">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="accordion__content__form__input-container__input"
                />
                <input
                  type="text"
                  placeholder="Enter Phone no"
                  className="accordion__content__form__input-container__input"
                />
              </div>
              <div className="accordion__content__form__input-container">
                <input
                  type="text"
                  placeholder="Enter Address Line 1"
                  className="accordion__content__form__input-container__input"
                />
              </div>
              <div className="accordion__content__form__input-container">
                <input
                  type="text"
                  placeholder="Enter Landmark"
                  className="accordion__content__form__input-container__input"
                />
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  className="accordion__content__form__input-container__input"
                />
              </div>
              <div className="accordion__content__form__input-container">
                <input
                  type="text"
                  placeholder="Enter City"
                  className="accordion__content__form__input-container__input"
                />
                <input
                  type="text"
                  placeholder="Enter State"
                  className="accordion__content__form__input-container__input"
                />
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="accordion__item">
        <div
          className={`accordion__header ${
            activeTab === 3 ? "accordion__active" : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          4. Payment
        </div>
        {activeTab === 3 && (
          <div className="accordion__content">
            <div className="accordion__content__saved-payment">
              <span className="accordion__content__saved-payment__title">
                Saved payment option
              </span>
              <div className="accordion__content__saved-payment__container">
                <div className="accordion__content__saved-payment__container__input">
                  <input type="radio" />
                  <div className="accordion__content__saved-payment__container__input__card">
                    SC Debit card <span>* * * * 2 1 1 1</span>
                  </div>
                </div>
                <div className="accordion__content__saved-payment__container__details">
                  <span className="accordion__content__saved-payment__container__details__card">
                    Visa
                  </span>
                  <span className="accordion__content__saved-payment__container__details__name">
                    Name of Customer
                  </span>
                </div>
              </div>
            </div>
            <div className="accordion__content__other-payment">
              <div className="accordion__content__other-payment__title">
                Other payment option
              </div>
              <div className="accordion__content__other-payment__options">
                Credit / Debit card
                <img src={chevDown} alt="" />
              </div>
              <div className="accordion__content__other-payment__options">
                Phonepe/Googlepay/BHIM UPI
                <img src={chevDown} alt="" />
              </div>
              <div className="accordion__content__other-payment__options">
                Netbanking
                <img src={chevDown} alt="" />
              </div>
              <div className="accordion__content__other-payment__options">
                Cash on Delivery
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
