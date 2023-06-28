import Header from "../layout/Header";
import FurnitureList from "../../src/components/product/FurnitureList";
import Footer from "../../src/layout/Footer";
import searchIcon from "../assets/search.svg";
import filterIcon from "../assets/filter.svg";
import "../styles/components/orderSummary.scss";
import item1 from "../assets/summary1.png";

const OrderSummary = () => {
  return (
    <>
      <Header />
      <FurnitureList />
      <div className="container">
        <div className="summary">
          <div className="summary__filter">
            <div className="summary__filter__input">
              <img src={searchIcon} alt="" />
              <input type="text" />
              <span className="summary__filter__input__title">
                <img src={filterIcon} alt="" />
                Filter
              </span>
            </div>
          </div>
          <div className="summary__item">
            <div className="summary__item__product">
              <img src={item1} alt="" />
            </div>
            <div className="summary__item__order"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSummary;
