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
    selectedBrand: [],
    selectedColor: [],
    selectedDiscount: [],
    selectedRating: [],
  });

  const [sortOption, setSortOption] = useState("");

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
        name === "selectedPriceRange"
          ? checked
            ? [...prevOptions.selectedPriceRange, value]
            : prevOptions.selectedPriceRange.filter((range) => range !== value)
          : prevOptions.selectedPriceRange,
      selectedColor:
        name === "selectedColor"
          ? checked
            ? [...prevOptions.selectedColor, value]
            : prevOptions.selectedColor.filter((color) => color !== value)
          : prevOptions.selectedColor,
      selectedBrand:
        name === "selectedBrand"
          ? checked
            ? [...prevOptions.selectedBrand, value]
            : prevOptions.selectedBrand.filter((brand) => brand !== value)
          : prevOptions.selectedBrand,
      selectedDiscount:
        name === "selectedDiscount"
          ? checked
            ? [...prevOptions.selectedDiscount, value]
            : prevOptions.selectedDiscount.filter(
                (discount) => discount !== value
              )
          : prevOptions.selectedDiscount,
      selectedRating:
        name === "selectedRating"
          ? checked
            ? [...prevOptions.selectedRating, value]
            : prevOptions.selectedRating.filter(
                (discount) => discount !== value
              )
          : prevOptions.selectedRating,
    }));
  };

  useEffect(
    () => {
      // console.log(filterOptions);
      if (filterOptions[nameRef.current] !== "") {
        handleFilter();
      }
    },
    // eslint-disable-next-line
    [filterOptions]
  );
  useEffect(
    () => {
      handleFilter();
    },

    // eslint-disable-next-line
    [sortOption]
  );

  const handleFilter = () => {
    const {
      selectedPriceRange,
      selectedBrand,
      selectedColor,
      selectedRating,
      selectedDiscount,
    } = filterOptions;

    let filteredArray = productData;

    filteredArray = handlePriceFilter(filteredArray, selectedPriceRange);

    filteredArray = handleBrandFilter(filteredArray, selectedBrand);
    filteredArray = handleColorFilter(filteredArray, selectedColor);
    filteredArray = handleDiscountFilter(filteredArray, selectedDiscount);
    filteredArray = handleRatingFilter(filteredArray, selectedRating);
    filteredArray = sortProducts(filteredArray, sortOption);
    setFilteredProducts(filteredArray);
    // console.log(filteredArray);
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
      return arrayToFilter;
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
    if (selectedBrand.length === 0) {
      return arrayToFilter;
    }

    return arrayToFilter.filter((item) => {
      return selectedBrand.some((brand) => {
        // console.log(range);
        return item.brand === brand;
      });
    });
  };

  const handleColorFilter = (arrayToFilter, selectedColor) => {
    if (selectedColor.length === 0) {
      return arrayToFilter;
    }

    return arrayToFilter.filter((item) => {
      return selectedColor.some((color) => {
        // console.log(range);
        return item.color === color;
      });
    });
  };
  const handleDiscountFilter = (arrayToFilter, selectedDiscount) => {
    if (selectedDiscount.length === 0) {
      return arrayToFilter;
    }

    return arrayToFilter.filter((item) => {
      return selectedDiscount.some((discount) => {
        // console.log(range);
        return item.discount === discount;
      });
    });
  };

  const handleRatingFilter = (arrayToFilter, selectedRating) => {
    if (selectedRating.length === 0) {
      return arrayToFilter;
    }

    return arrayToFilter.filter((item) => {
      return selectedRating.some((rating) => {
        return item.rating === rating;
      });
    });
  };

  const sortProducts = (products, sortOption) => {
    const sortedArray = [...products];

    if (sortOption === "lowToHigh") {
      sortedArray.sort((a, b) => a.newPrice - b.newPrice);
    } else if (sortOption === "highToLow") {
      sortedArray.sort((a, b) => b.newPrice - a.newPrice);
    } else if (sortOption === "popular") {
      sortedArray.sort((a, b) => a.rating - b.rating);
    }

    return sortedArray;
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
          <select
            className="product-gallery__sort-section__dropdown"
            onChange={(e) => {
              setSortOption(e.target.value);
            }}
          >
            <option value="Best Match">Best Match</option>
            <option value="popular">Popular</option>
            <option value="highToLow">High to Low</option>
            <option value="lowToHigh">Low to High</option>
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
