import "../../styles/components/productGallery.scss";
import starFilled from "../../assets/star-filled.svg";
import starUnfilled from "../../assets/star-unfilled.svg";
import searchIcon from "../../assets/search.svg";

const FilterSection = ({
  isFilterVisible,
  onClick,
  filterOptions,
  handleCheckboxChange,
  nameRef,
}) => {
  return (
    <div>
      <form
        action="/search"
        method="get"
        className={`product-gallery__filter-section`}
        style={{
          // "@media (max-width: 700px)": {
          //     transform: `translateX(${isFilterVisible ? "0" : "-150%"})`,
          // },

          transform: `translateX(${isFilterVisible ? "0" : "-150%"})`,
          // display: isFilterVisible ? "block" : "none",
        }}
      >
        <div className="product-gallery__filter-section__filter">
          <h3 className="product-gallery__filter-section__filter__title">
            Product Brand
          </h3>
          <label htmlFor="coaster-funiture" className="input-label">
            <input
              type="checkbox"
              id="coaster-funiture"
              name="coaster-funiture"
            />
            Coaster Furniture
          </label>
          <label htmlFor="fusion-dot" className="input-label">
            <input type="checkbox" id="fusion-dot" name="fusion-dot" />
            Fusion Dot High Fashion
          </label>
          <label htmlFor="unique-furniture" className="input-label">
            <input
              type="checkbox"
              id="unique-furniture"
              name="unique-furniture"
            />
            Unique Furniture Restore
          </label>
          <label htmlFor="dream-furniture" className="input-label">
            <input
              type="checkbox"
              id="dream-furniture"
              name="dream-furniture"
            />
            Dream Furniture Flipping
          </label>
          <label htmlFor="young-repurposed" className="input-label">
            <input
              type="checkbox"
              id="young-repurposed"
              name="young-repurposed"
            />
            Young Repurposed
          </label>
          <label htmlFor="green-diy" className="input-label">
            <input type="checkbox" id="green-diy" name="green-diy" />
            Green DIY furniture
          </label>
        </div>
        <div className="product-gallery__filter-section__filter">
          <h3 className="product-gallery__filter-section__filter__title">
            Discount Offer
          </h3>
          <label htmlFor="cashback-20" className="input-label">
            <input type="checkbox" id="cashback-20" name="cashback-20" />
            20% Cashback Offer
          </label>
          <label htmlFor="cashback-5" className="input-label">
            <input type="checkbox" id="cashback-5" name="cashback-5" />
            5% Cashback Offer
          </label>
          <label htmlFor="discount-25" className="input-label">
            <input type="checkbox" id="discount-25" name="discount-25" />
            25% Discount Offer
          </label>
        </div>
        <div className="product-gallery__filter-section__filter">
          <h3 className="product-gallery__filter-section__filter__title">
            Rating Item
          </h3>
          <label htmlFor="rating-4" className="input-label">
            <input type="checkbox" id="rating-4" name="rating-4" />
            <span>
              <img src={starFilled} alt="" />
              <img src={starFilled} alt="" />
              <img src={starFilled} alt="" />
              <img src={starFilled} alt="" />
              <img src={starUnfilled} alt="" />
            </span>
            <span className="input-label__numOfReviews">(2341)</span>
          </label>
          <label htmlFor="rating-4" className="input-label">
            <input type="checkbox" id="rating-4" name="rating-4" />
            <span>
              <img src={starFilled} alt="" />
              <img src={starFilled} alt="" />
              <img src={starFilled} alt="" />
              <img src={starUnfilled} alt="" />
              <img src={starUnfilled} alt="" />
            </span>
            <span className="input-label__numOfReviews">(1726)</span>
          </label>
          <label htmlFor="rating-4" className="input-label">
            <input type="checkbox" id="rating-4" name="rating-4" />
            <span>
              <img src={starFilled} alt="" />
              <img src={starFilled} alt="" />
              <img src={starUnfilled} alt="" />
              <img src={starUnfilled} alt="" />
              <img src={starUnfilled} alt="" />
            </span>
            <span className="input-label__numOfReviews">(258)</span>
          </label>
          <label htmlFor="rating-4" className="input-label">
            <input type="checkbox" id="rating-4" name="rating-4" />
            <span>
              <img src={starFilled} alt="" />
              <img src={starUnfilled} alt="" />
              <img src={starUnfilled} alt="" />
              <img src={starUnfilled} alt="" />
              <img src={starUnfilled} alt="" />
            </span>
            <span className="input-label__numOfReviews">(25)</span>
          </label>
        </div>
        <div className="product-gallery__filter-section__filter">
          <h3 className="product-gallery__filter-section__filter__title">
            Price Filter
          </h3>
          <label htmlFor="range-1" className="input-label">
            <input
              type="checkbox"
              id="range-1"
              name="selectedPriceRange"
              value="0-1500"
              // checked={filterOptions.selectedPriceRange === "0-1500"}
              checked={filterOptions.selectedPriceRange.includes("0-1500")}
              onChange={(event) => {
                const { name } = event.target;
                nameRef.current = name;
                handleCheckboxChange(event);
              }}
            />
            ₹0.00 - ₹1500.00
          </label>
          <label htmlFor="range-2" className="input-label">
            <input
              type="checkbox"
              id="range-2"
              name="selectedPriceRange"
              value="1500-3500"
              // checked={filterOptions.selectedPriceRange === "1500-3500"}
              checked={filterOptions.selectedPriceRange.includes("1500-3500")}
              onChange={(event) => {
                const { name } = event.target;
                nameRef.current = name;
                handleCheckboxChange(event);
              }}
            />
            ₹1500.00 - ₹3500.00
          </label>
          <label htmlFor="range-3" className="input-label">
            <input
              type="checkbox"
              id="range-3"
              name="selectedPriceRange"
              value="3500-5000"
              // checked={filterOptions.selectedPriceRange === "3500-5000"}
              checked={filterOptions.selectedPriceRange.includes("3500-5000")}
              onChange={(event) => {
                const { name } = event.target;
                nameRef.current = name;
                handleCheckboxChange(event);
              }}
            />
            ₹3500.00 - ₹5000.00
          </label>
          <label htmlFor="range-4" className="input-label">
            <input
              type="checkbox"
              id="range-4"
              name="selectedPriceRange"
              value="5000-7500"
              // checked={filterOptions.selectedPriceRange === "5000-7500"}
              checked={filterOptions.selectedPriceRange.includes("5000-7500")}
              onChange={(event) => {
                const { name } = event.target;
                nameRef.current = name;
                handleCheckboxChange(event);
              }}
            />
            ₹5000.00 +
          </label>
          <span className="input-label__search-container">
            <input type="text" />
            <img src={searchIcon} alt="" />
          </span>
        </div>
        <div className="product-gallery__filter-section__filter">
          <h3 className="product-gallery__filter-section__filter__title">
            Filter By Color
          </h3>
          <span className="product-gallery__filter-section__colors">
            <label htmlFor="blue-box" className="input-label">
              <input
                className="input-label__colorbox-blue"
                type="checkbox"
                id="blue-box"
                name="selectedColor"
                value="blue"
                checked={filterOptions.selectedColor.includes("blue")}
                onChange={(event) => {
                  const { name } = event.target;
                  nameRef.current = name;
                  handleCheckboxChange(event);
                }}
              />
              Blue
            </label>
            <label htmlFor="orange-box" className="input-label">
              <input
                className="input-label__colorbox-orange"
                type="checkbox"
                id="orange-box"
                name="selectedColor"
                value="orange"
                checked={filterOptions.selectedColor.includes("orange")}
                onChange={(event) => {
                  const { name } = event.target;
                  nameRef.current = name;
                  handleCheckboxChange(event);
                }}
              />
              Orange
            </label>
            <label htmlFor="brown-box" className="input-label">
              <input
                className="input-label__colorbox-brown"
                type="checkbox"
                id="brown-box"
                name="selectedColor"
                value="brown"
                checked={filterOptions.selectedColor.includes("brown")}
                onChange={(event) => {
                  const { name } = event.target;
                  nameRef.current = name;
                  handleCheckboxChange(event);
                }}
              />
              Brown
            </label>
            <label htmlFor="green-box" className="input-label">
              <input
                className="input-label__colorbox-green"
                type="checkbox"
                id="green-box"
                name="selectedColor"
                value="green"
                checked={filterOptions.selectedColor.includes("green")}
                onChange={(event) => {
                  const { name } = event.target;
                  nameRef.current = name;
                  handleCheckboxChange(event);
                }}
              />
              Green
            </label>
            <label htmlFor="cream-box" className="input-label">
              <input
                className="input-label__colorbox-cream"
                type="checkbox"
                id="cream-box"
                name="selectedColor"
                value="cream"
                checked={filterOptions.selectedColor.includes("cream")}
                onChange={(event) => {
                  const { name } = event.target;
                  nameRef.current = name;
                  handleCheckboxChange(event);
                }}
              />
              Cream
            </label>
          </span>
        </div>
      </form>
      <div
        className="backdrop"
        style={{
          display: `${
            window.innerWidth < 700 && isFilterVisible ? "flex" : "none"
          }`,
        }}
        onClick={onClick}
      ></div>
    </div>
  );
};

export default FilterSection;
