import FilterSection from "../components/product/FilterSection";
import "../styles/components/productGallery.scss";
import clarity from "../assets/clarity-grid.svg";
import list from "../assets/list.svg";
import showcase1 from "../assets/Rectangle 35.png";
import showcase2 from "../assets/Rectangle 35 (1).png";
import showcase3 from "../assets/Rectangle 35 (2).png";
import showcase4 from "../assets/Rectangle 35 (3).png";
import showcase5 from "../assets/Rectangle 35 (4).png";
import showcase6 from "../assets/Rectangle 35 (5).png";
import showcase7 from "../assets/Rectangle 35 (6).png";
import showcase8 from "../assets/Rectangle 35 (7).png";
import showcase9 from "../assets/Rectangle 35 (8).png";

import leftArrow from "../assets/keyboardArrowLeft.svg";
import rightArrow from "../assets/keyboardArrowRight.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductGallery = () => {
    const [isFilterVisible, setFilterVisible] = useState(true);

    const toggleFilter = () => {
        setFilterVisible(!isFilterVisible);
        console.log(isFilterVisible);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 700) {
                setFilterVisible(true);
            } else if (window.innerWidth < 700) {
                setFilterVisible(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="product-gallery container">
            <FilterSection
                onClick={toggleFilter}
                isFilterVisible={isFilterVisible}
            />
            <div className="product-gallery__container">
                <div className="product-gallery__sort-section">
                    <span className="product-gallery__sort-section__sort">
                        Sort By:
                    </span>
                    <select className="product-gallery__sort-section__dropdown">
                        <option value="Best Match">Best Match</option>
                        <option value="Best Match">Popular</option>
                        <option value="Best Match">High to Low</option>
                        <option value="Best Match">Low to High</option>
                    </select>
                    <span className="product-gallery__sort-section__view">
                        View
                    </span>
                    <img src={clarity} alt="" />
                    <img src={list} alt="" />
                    <button onClick={toggleFilter} className="filter-btn">
                        Filter
                    </button>
                </div>
                <div className="product-gallery__showcase">
                    <Link
                        to="/product-detail"
                        className="product-gallery__showcase__card"
                    >
                        <div className="product-gallery__showcase__card__img-container">
                            <img src={showcase1} alt="" />
                        </div>
                        <div className="product-gallery__showcase__card__title">
                            Ultricies condimentum imperdiet
                        </div>
                        <div className="product-gallery__showcase__card__price">
                            <span>₹26.00</span>
                            <span className="product-gallery__showcase__card__price__striked">
                                ₹42.00
                            </span>
                        </div>
                    </Link>
                    <Link
                        to="/product-detail"
                        className="product-gallery__showcase__card"
                    >
                        <div className="product-gallery__showcase__card__img-container">
                            <img src={showcase2} alt="" />
                        </div>
                        <div className="product-gallery__showcase__card__title">
                            Vitae suspendisse sed
                        </div>
                        <div className="product-gallery__showcase__card__price">
                            <span>₹26.00</span>
                            <span className="product-gallery__showcase__card__price__striked">
                                ₹42.00
                            </span>
                        </div>
                    </Link>
                    <Link
                        to="/product-detail"
                        className="product-gallery__showcase__card"
                    >
                        <div className="product-gallery__showcase__card__img-container">
                            <img src={showcase3} alt="" />
                        </div>
                        <div className="product-gallery__showcase__card__title">
                            Sed at fermentum
                        </div>
                        <div className="product-gallery__showcase__card__price">
                            <span>₹26.00</span>
                            <span className="product-gallery__showcase__card__price__striked">
                                ₹42.00
                            </span>
                        </div>
                    </Link>
                    <div className="product-gallery__showcase__card">
                        <div className="product-gallery__showcase__card__img-container">
                            <img src={showcase4} alt="" />
                        </div>
                        <div className="product-gallery__showcase__card__title">
                            Ultricies condimentum imperdiet
                        </div>
                        <div className="product-gallery__showcase__card__price">
                            <span>₹26.00</span>
                            <span className="product-gallery__showcase__card__price__striked">
                                ₹42.00
                            </span>
                        </div>
                    </div>
                    <div className="product-gallery__showcase__card">
                        <div className="product-gallery__showcase__card__img-container">
                            <img src={showcase5} alt="" />
                        </div>
                        <div className="product-gallery__showcase__card__title">
                            Vitae suspendisse sed
                        </div>
                        <div className="product-gallery__showcase__card__price">
                            <span>₹26.00</span>
                            <span className="product-gallery__showcase__card__price__striked">
                                ₹42.00
                            </span>
                        </div>
                    </div>
                    <div className="product-gallery__showcase__card">
                        <div className="product-gallery__showcase__card__img-container">
                            <img src={showcase6} alt="" />
                        </div>
                        <div className="product-gallery__showcase__card__title">
                            Sed at fermentum
                        </div>
                        <div className="product-gallery__showcase__card__price">
                            <span>₹26.00</span>
                            <span className="product-gallery__showcase__card__price__striked">
                                ₹42.00
                            </span>
                        </div>
                    </div>
                    <div className="product-gallery__showcase__card">
                        <div className="product-gallery__showcase__card__img-container">
                            <img src={showcase7} alt="" />
                        </div>
                        <div className="product-gallery__showcase__card__title">
                            Ultricies condimentum imperdiet
                        </div>
                        <div className="product-gallery__showcase__card__price">
                            <span>₹26.00</span>
                            <span className="product-gallery__showcase__card__price__striked">
                                ₹42.00
                            </span>
                        </div>
                    </div>
                    <div className="product-gallery__showcase__card">
                        <div className="product-gallery__showcase__card__img-container">
                            <img src={showcase8} alt="" />
                        </div>
                        <div className="product-gallery__showcase__card__title">
                            Vitae suspendisse sed
                        </div>
                        <div className="product-gallery__showcase__card__price">
                            <span>₹26.00</span>
                            <span className="product-gallery__showcase__card__price__striked">
                                ₹42.00
                            </span>
                        </div>
                    </div>
                    <div className="product-gallery__showcase__card">
                        <div className="product-gallery__showcase__card__img-container">
                            <img src={showcase9} alt="" />
                        </div>
                        <div className="product-gallery__showcase__card__title">
                            Sed at fermentum
                        </div>
                        <div className="product-gallery__showcase__card__price">
                            <span>₹26.00</span>
                            <span className="product-gallery__showcase__card__price__striked">
                                ₹42.00
                            </span>
                        </div>
                    </div>
                </div>
                <div className="product-gallery__pagination">
                    <span className="product-gallery__pagination__btn">
                        <img src={leftArrow} alt="" />
                    </span>
                    <span className="product-gallery__pagination__page">1</span>
                    <span className="product-gallery__pagination__page">2</span>
                    <span className="product-gallery__pagination__page">3</span>
                    <span className="product-gallery__pagination__page">4</span>
                    <span className="product-gallery__pagination__page">5</span>
                    <span className="product-gallery__pagination__page">6</span>
                    <span className="product-gallery__pagination__btn">
                        <img src={rightArrow} alt="" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
