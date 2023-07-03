import FilterSection from "../components/product/FilterSection";
import "../styles/components/productGallery.scss";
import clarity from "../assets/clarity-grid.svg";
import list from "../assets/list.svg";

import leftArrow from "../assets/keyboardArrowLeft.svg";
import rightArrow from "../assets/keyboardArrowRight.svg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import productData from "../data/product.json";

const ProductGallery = () => {
  const [isFilterVisible, setFilterVisible] = useState(true);

  const [filteredProducts, setFilteredProducts] = useState(productData);

  const nameRef = useRef(null);

  const [filterOptions, setFilterOptions] = useState({
    selectedPriceRange: [],
    selectedBrand: "",
    selectedColor: [],
    selectedRating: 0,
  });

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

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;

    // setFilterOptions((prevOptions) => ({
    //   ...prevOptions,
    //   [name]: value,
    // }));

    // setFilterOptions((prevOptions) => ({
    //   ...prevOptions,
    //   selectedPriceRange: checked
    //     ? [...prevOptions.selectedPriceRange, value] // Add the selected range
    //     : prevOptions.selectedPriceRange.filter((range) => range !== value), // Remove the deselected range
    //   selectedColor: checked
    //     ? [...prevOptions.selectedColor, value] // Add the selected range
    //     : prevOptions.selectedColor.filter((color) => color !== value), // Remove the deselected range
    // }));

    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      selectedPriceRange:
        name === "selectedPriceRange" // Check if the checkbox belongs to the price range
          ? checked
            ? [...prevOptions.selectedPriceRange, value] // Add the selected range
            : prevOptions.selectedPriceRange.filter((range) => range !== value) // Remove the deselected range
          : prevOptions.selectedPriceRange, // Maintain the current selected price range for non-price checkboxes
      selectedColor:
        name === "selectedColor" // Check if the checkbox belongs to the color
          ? checked
            ? [...prevOptions.selectedColor, value] // Add the selected color
            : prevOptions.selectedColor.filter((color) => color !== value) // Remove the deselected color
          : prevOptions.selectedColor, // Maintain the current selected color for non-color checkboxes
    }));
  };

  useEffect(() => {
    // console.log(filterOptions);
    if (filterOptions[nameRef.current] !== "") {
      handleFilter();
    }
  }, [filterOptions]);

  const handleFilter = () => {
    const { selectedPriceRange, selectedBrand, selectedColor, selectedRating } =
      filterOptions;

    let filteredArray = productData;

    filteredArray = handlePriceFilter(filteredArray, selectedPriceRange);

    filteredArray = handleBrandFilter(filteredArray, selectedBrand);
    filteredArray = handleColorFilter(filteredArray, selectedColor);
    filteredArray = handleRatingFilter(filteredArray, selectedRating);

    setFilteredProducts(filteredArray);
  };

  const handlePriceFilter = (arrayToFilter, selectedPriceRange) => {
    // if (selectedPriceRange === "") {
    //   return arrayToFilter; // No price range filter selected, return the array as is
    // }

    // const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
    // console.log([minPrice, maxPrice]);
    // return arrayToFilter.filter(
    //   (item) => item.newPrice >= minPrice && item.newPrice <= maxPrice
    // );

    if (selectedPriceRange.length === 0) {
      return arrayToFilter; // No price range filter selected, return the array as is
    }

    return arrayToFilter.filter((item) => {
      const priceInRange = selectedPriceRange.some((range) => {
        const [minPrice, maxPrice] = range.split("-").map(Number);
        return item.newPrice >= minPrice && item.newPrice <= maxPrice;
      });
      return priceInRange;
    });
  };

  const handleBrandFilter = (arrayToFilter, selectedBrand) => {
    if (selectedBrand === "") {
      return arrayToFilter; // No brand filter selected, return the array as is
    }

    return arrayToFilter.filter((item) => item.brand === selectedBrand);
  };

  const handleColorFilter = (arrayToFilter, selectedColor) => {
    if (selectedColor.length === 0) {
      return arrayToFilter; // No price range filter selected, return the array as is
    }

    return arrayToFilter.filter((item) => {
      return selectedColor.some((color) => {
        // console.log(range);
        return item.color == color;
      });
    });
  };

  const handleRatingFilter = (arrayToFilter, selectedRating) => {
    if (selectedRating === 0) {
      return arrayToFilter; // No rating filter selected, return the array as is
    }

    return arrayToFilter.filter((item) => item.rating >= selectedRating);
  };

  return (
    <div className="product-gallery container">
      <FilterSection
        onClick={toggleFilter}
        isFilterVisible={isFilterVisible}
        filterOptions={filterOptions}
        handleCheckboxChange={handleCheckboxChange}
        nameRef={nameRef}
      />
      <div className="product-gallery__container">
        <div className="product-gallery__sort-section">
          <span className="product-gallery__sort-section__sort">Sort By:</span>
          <select className="product-gallery__sort-section__dropdown">
            <option value="Best Match">Best Match</option>
            <option value="Best Match">Popular</option>
            <option value="Best Match">High to Low</option>
            <option value="Best Match">Low to High</option>
          </select>
          <span className="product-gallery__sort-section__view">View</span>
          <img src={clarity} alt="" />
          <img src={list} alt="" />
          <button onClick={toggleFilter} className="filter-btn">
            Filter
          </button>
        </div>
        <div className="product-gallery__showcase">
          {filteredProducts.map((item) => (
            <Link
              key={item.id}
              to="/product-detail"
              className="product-gallery__showcase__card"
            >
              <div className="product-gallery__showcase__card__img-container">
                <img src={`/assets/${item.img}`} alt="" />
              </div>
              <div className="product-gallery__showcase__card__title">
                {item.title}
              </div>
              <div className="product-gallery__showcase__card__price">
                <span>₹{item.newPrice}.00</span>
                <span className="product-gallery__showcase__card__price__striked">
                  ₹{item.oldPrice}.00
                </span>
              </div>
            </Link>
          ))}
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
