import { useEffect } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import FurnitureList from "../components/product/FurnitureList";
import HomeSectionHeader from "../components/home/HomeSectionHeader";
import TrendingItem from "../components/home/TrendingItem";
import ProductDetailLeft from "../components/product/ProductDetailLeft";
import ProductDetailRight from "../components/product/ProductDetailRight";

import "../styles/components/productDetail.scss";

const ProductDetail = () => {
    useEffect(() => {
        document.title = "Product Detail | Neostore";
        const favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = "https://be.1-thing.in/favicon.png";
        document.head.appendChild(favicon);
    }, []);

    const title = "YOU MIGHT ALSO LIKE";
    const text =
        "From glam vibes to laid-back comfort, these sofas all have one thing in common—and that’s amazing value.";

    return (
        <div>
            <Header />
            <FurnitureList />
            <div className="container">
                <div className="product-detail">
                    <ProductDetailLeft />

                    <ProductDetailRight />
                </div>
            </div>
            <div className="product-detail__more-info container">
                <h3 className="product-detail__more-info__description">
                    DESCRIPTION
                </h3>
                <h3 className="product-detail__more-info__additional">
                    ADDITONAL INFORMATION
                </h3>
                <h3 className="product-detail__more-info__reviews">
                    REVIEWS (5)
                </h3>
            </div>
            <div className="container">
                <div className="product-detail__more-info__hr-line"></div>
            </div>
            <div className="product-detail__info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Turpis egestas sed tempus urna et pharetra pharetra massa.
                Tincidunt augue interdum velit euismod in pellentesque massa
                placerat. Pharetra diam sit amet nisl suscipit adipiscing Ut sem
                viverra aliquet eget sit amet tellus cras adipiscing. Nullam
                eget felis eget nunc lobortis mattis.Nisi vitae suscipit tellus
                mauris. Facilisi nullam vehicula ipsum.
            </div>
            <div className="home-section container">
                <HomeSectionHeader title={title} text={text} />
                <TrendingItem />
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
