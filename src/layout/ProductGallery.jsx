import FilterSection from "../components/product/FilterSection";
import "../styles/components/productGallery.scss";
import clarity from "../assets/clarity-grid.svg";
import list from "../assets/list.svg";
const ProductGallery = () => {
    return (
        <div className="product-gallery">
            <FilterSection />
            <div className="product-gallery__sort-section">
                <span className="product-gallery__sort-section__sort">
                    Sort By:
                </span>
                <select className="product-gallery__sort-section__dropdown">
                    <option value="Best Match">Best Match</option>
                </select>
                <span className="product-gallery__sort-section__view">
                    View
                </span>
                <img src={clarity} alt="" />
                <img src={list} alt="" />
            </div>
        </div>
    );
};

export default ProductGallery;
