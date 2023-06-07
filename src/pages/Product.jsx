import { useEffect } from "react";
import FurnitureList from "../components/product/FurnitureList";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ProductGallery from "../layout/ProductGallery";

const Product = () => {
    useEffect(() => {
        document.title = "Product | Neostore";
        const favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = "https://be.1-thing.in/favicon.png";
        document.head.appendChild(favicon);
    }, []);
    return (
        <div>
            <Header />
            <FurnitureList />
            <ProductGallery />
            <Footer />
        </div>
    );
};

export default Product;
