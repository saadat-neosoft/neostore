import FurnitureList from "../components/product/FurnitureList";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ProductGallery from "../layout/ProductGallery";

const Product = () => {
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
