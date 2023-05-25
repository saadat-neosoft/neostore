import "../../styles/components/productGallery.scss";
import starFilled from "../../assets/star-filled.svg";
import starUnfilled from "../../assets/star-unfilled.svg";
import searchIcon from "../../assets/search.svg";

const FilterSection = () => {
    return (
        <form
            action="/search"
            method="get"
            className="product-gallery__filter-section"
        >
            <div className="product-gallery__filter-section__filter">
                <h3 className="product-gallery__filter-section__filter__title">
                    Product Brand
                </h3>
                <label for="coaster-funiture" className="input-label">
                    <input
                        type="checkbox"
                        id="coaster-funiture"
                        name="coaster-funiture"
                    />
                    Coaster Furniture
                </label>
                <label for="fusion-dot" className="input-label">
                    <input type="checkbox" id="fusion-dot" name="fusion-dot" />
                    Fusion Dot High Fashion
                </label>
                <label for="unique-furniture" className="input-label">
                    <input
                        type="checkbox"
                        id="unique-furniture"
                        name="unique-furniture"
                    />
                    Unique Furniture Restore
                </label>
                <label for="dream-furniture" className="input-label">
                    <input
                        type="checkbox"
                        id="dream-furniture"
                        name="dream-furniture"
                    />
                    Dream Furniture Flipping
                </label>
                <label for="young-repurposed" className="input-label">
                    <input
                        type="checkbox"
                        id="young-repurposed"
                        name="young-repurposed"
                    />
                    Young Repurposed
                </label>
                <label for="green-diy" className="input-label">
                    <input type="checkbox" id="green-diy" name="green-diy" />
                    Green DIY furniture
                </label>
            </div>
            <div className="product-gallery__filter-section__filter">
                <h3 className="product-gallery__filter-section__filter__title">
                    Discount Offer
                </h3>
                <label for="cashback-20" className="input-label">
                    <input
                        type="checkbox"
                        id="cashback-20"
                        name="cashback-20"
                    />
                    20% Cashback Offer
                </label>
                <label for="cashback-5" className="input-label">
                    <input type="checkbox" id="cashback-5" name="cashback-5" />
                    5% Cashback Offer
                </label>
                <label for="discount-25" className="input-label">
                    <input
                        type="checkbox"
                        id="discount-25"
                        name="discount-25"
                    />
                    25% Discount Offer
                </label>
            </div>
            <div className="product-gallery__filter-section__filter">
                <h3 className="product-gallery__filter-section__filter__title">
                    Rating Item
                </h3>
                <label for="rating-4" className="input-label">
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
                <label for="rating-4" className="input-label">
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
                <label for="rating-4" className="input-label">
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
                <label for="rating-4" className="input-label">
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
                <label for="range-1" className="input-label">
                    <input type="checkbox" id="range-1" name="range-1" />
                    ₹0.00 - ₹1500.00
                </label>
                <label for="range-2" className="input-label">
                    <input type="checkbox" id="range-2" name="range-2" />
                    ₹1500.00 - ₹3500.00
                </label>
                <label for="range-3" className="input-label">
                    <input type="checkbox" id="range-3" name="range-3" />
                    ₹3500.00 - ₹5000.00
                </label>
                <label for="range-4" className="input-label">
                    <input type="checkbox" id="range-4" name="range-4" />
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
                    <label for="blue-box" className="input-label">
                        <input
                            className="input-label__colorbox-blue"
                            type="checkbox"
                            id="blue-box"
                            name="blue-box"
                        />
                        Blue
                    </label>
                    <label for="orange-box" className="input-label">
                        <input
                            className="input-label__colorbox-orange"
                            type="checkbox"
                            id="orange-box"
                            name="orange-box"
                        />
                        Orange
                    </label>
                    <label for="brown-box" className="input-label">
                        <input
                            className="input-label__colorbox-brown"
                            type="checkbox"
                            id="brown-box"
                            name="brown-box"
                        />
                        Brown
                    </label>
                    <label for="green-box" className="input-label">
                        <input
                            className="input-label__colorbox-green"
                            type="checkbox"
                            id="green-box"
                            name="green-box"
                        />
                        Brown
                    </label>
                    <label for="cream-box" className="input-label">
                        <input
                            className="input-label__colorbox-cream"
                            type="checkbox"
                            id="cream-box"
                            name="cream-box"
                        />
                        Cream
                    </label>
                </span>
            </div>
        </form>
    );
};

export default FilterSection;
